const createHttpError = require("http-errors");
const db = require("../utils/db-execution.util");
const createError = require("http-errors");
const { transformData } = require("../serializers/common.serializer");
const connection = require('../databases/db-connection');

async function findAllCollection(limit, offset, sort, searchKeyword) {
  let selectQuery = ` SELECT 
                        ac.id AS collection_id,
                        ac.collection_name,
                        ac.collection_desc,
                        ac.last_updated_datetime,
                        ac.created_datetime,
                        u.id AS created_by,
                        u.username,
                        u.img_path as user_avatar,
                        CASE
                        	WHEN ac.img_path IS NULL THEN first_album_cover.album_cover
                          ELSE ac.img_path
                        END AS img_path`;
  let countSelectQuery = ` SELECT COUNT(ac.id) AS total `;

  let fromQuery = ` FROM album_collection ac `;
  let joinsQuery = ` JOIN user u ON ac.created_by = u.id 
                      LEFT JOIN (
                        SELECT 
                            a.img_path as album_cover, 
                            aac.album_collection_id, 
                            MIN(aac.created_datetime) 
                        FROM album_album_collection aac
                        JOIN album a ON aac.album_id = a.id
                        GROUP BY aac.album_collection_id
                    ) AS first_album_cover ON first_album_cover.album_collection_id = ac.id `;
  const whereList = [];
  const orderByList = [];
  const groupByList = [];
  const paginationQuery = ` LIMIT ? OFFSET ? `;

  // params
  const selectParams = [];
  const whereParams = [];
  const paginationParams = [limit, offset];
  // const selectQueryList = [
  //   `ac.id AS collection_id`,
  //   `ac.collection_name`,
  //   `ac.collection_desc`,
  //   `ac.img_path`,
  //   `ac.last_updated_datetime`,
  //   `ac.created_datetime`,
  //   `u.id AS created_by`,
  //   `u.username`,
  // ];

  if (sort) {
    let sortParse;
    let order;
    if (sort.startsWith("-")) {
      sortParse = sort.substring(1);
      order = `DESC`;
    } else {
      sortParse = sort;
      order = `ASC`;
    }

    switch (sortParse) {
      case "likes":
        selectQuery += `, 
                          COUNT(cl.user_id) as likes_count `;
        joinsQuery += ` LEFT JOIN collection_like cl ON ac.id = cl.collection_id `;
        orderByList.push(`likes_count ${order}`);
        groupByList.push(`ac.id`);
        break;
      case "created_datetime":
        orderByList.push(`ac.created_datetime ${order} `);
        break;
    }
  }

  if (searchKeyword) {
    whereList.push(`ac.collection_name LIKE ?`);
    whereParams.push(`%${searchKeyword}%`);
    selectQuery += `, CASE
                        WHEN ac.collection_name = ? THEN 1
                          WHEN ac.collection_name LIKE ? THEN 2
                          ELSE 3
                        END AS collection_search_order`;
    selectParams.push(searchKeyword, `${searchKeyword}%`);
    orderByList.push(` collection_search_order`);
  }

  const orderByQuery = orderByList.length
    ? ` ORDER BY ${orderByList.join(", ")}`
    : "";
  const groupByQuery = groupByList.length
    ? ` GROUP BY ${groupByList.join(", ")}`
    : "";
  const whereQuery = whereList.length ? ` WHERE ${whereList.join(", ")}` : "";

  const collectionQuery =
    selectQuery +
    fromQuery +
    joinsQuery +
    whereQuery +
    groupByQuery +
    orderByQuery +
    paginationQuery;
  const countQuery = countSelectQuery + fromQuery + joinsQuery + whereQuery;

  const data = await db.execute(`${collectionQuery};${countQuery}`, [
    ...selectParams,
    ...whereParams,
    ...paginationParams,
    ...whereParams
  ]);

  const { total } = data[1][0];

  return {
    total,
    collections: data[0]
  };
}

/**
 *
 * @param {*} collectionId
 * @returns
 */
async function findCollectionById(collectionId) {
  const queryParams = [];
  let executionQuery;

  const collectionQuery = `SELECT 
                        ac.id as collection_id,
                        ac.collection_name,
                        ac.collection_desc,
                        ac.img_path,
                        ac.last_updated_datetime,
                        ac.created_datetime,
                        u.id AS user_id,
                        u.username
                    FROM 
                        album_collection ac
                    JOIN user u ON ac.created_by = u.id
                    WHERE 
                        ac.id = ?;
                    `;
  queryParams.push(collectionId);

  const albumQuery = `SELECT 
                            ab.id as album_id,
                            ab.album_title,
                            at.id as artist_id,
                            at.artist_name
                        FROM
                            album_album_collection aac
                        JOIN album ab ON ab.id = aac.album_id
                        JOIN album_artist aat ON aat.album_id = ab.id
                        JOIN artist at ON aat.artist_id = at.id
                        WHERE
                            aac.album_collection_id = ?; 
                        `;
  queryParams.push(collectionId);

  executionQuery = collectionQuery + albumQuery;
  const data = await db.execute(executionQuery, queryParams);

  const { user_id, username, ...collection } = data[0][0];
  const collectionAlbums = data[1];

  return {
    ...collection,
    created_by: {
      user_id,
      username
    },
    albums: collectionAlbums
  };
}

async function findCollectionDetailsById(collectionId) {
  const collectionQuery = `SELECT 
                    ac.id as collection_id,
                    ac.collection_name,
                    ac.collection_desc,
                    ac.img_path,
                    ac.last_updated_datetime,
                    ac.created_datetime,
                    u.id AS user_id,
                    u.username,
                    CASE
                      WHEN ac.img_path IS NULL THEN first_album_cover.album_cover
                      ELSE ac.img_path
                    END AS img_path
                FROM 
                    album_collection ac
                JOIN user u ON ac.created_by = u.id
                LEFT JOIN (
                  SELECT 
                      a.img_path as album_cover, 
                      aac.album_collection_id, 
                      MIN(aac.created_datetime) 
                  FROM album_album_collection aac
                  JOIN album a ON aac.album_id = a.id
                  GROUP BY aac.album_collection_id
              ) AS first_album_cover ON first_album_cover.album_collection_id = ac.id
                WHERE 
                    ac.id = ?;`;

  const data = await db.execute(collectionQuery, [collectionId]);

  return data[0];
}

async function findCollectionAlbumDetailsById(
  collectionId,
  searchKeyword,
  limit,
  offset
) {
  let searchKeywordWhereStatement = "",
    searchKeywordSelectStatement = "",
    searchKeywordOrderByStatement = "";

  const searchKeywordWhereParams = [];
  const searchKeywordSelectParams = [];

  if (searchKeyword) {
    searchKeywordWhereStatement = ` AND ab.album_title LIKE ?`;
    searchKeywordWhereParams.push(`%${searchKeyword}%`);

    searchKeywordSelectStatement = ` , CASE
                                        WHEN ab.album_title = ? THEN 1
                                        WHEN ab.album_title LIKE ? THEN 2
                                        ELSE 3
                                      END AS album_search_order`;
    searchKeywordSelectParams.push(searchKeyword, `${searchKeyword}%`);

    searchKeywordOrderByStatement = ` album_search_order, `;
  }

  const albumQuery = `SELECT 
                              ab.id as album_id,
                              ab.album_title,
                              ab.img_path,
                              ab.release_year
                              ${searchKeywordSelectStatement}
                          FROM
                              album_album_collection aac
                          JOIN album ab ON ab.id = aac.album_id
                          WHERE
                              aac.album_collection_id = ?
                              ${searchKeywordWhereStatement}
                          ORDER BY ${searchKeywordOrderByStatement} aac.created_datetime DESC
                            LIMIT ?
                            OFFSET ?`;
  const countAlbumQuery = `SELECT 
                              COUNT(aac.id) as total 
                            FROM 
                              album_album_collection aac 
                            JOIN album ab ON ab.id = aac.album_id 
                            WHERE 
                              aac.album_collection_id = ? 
                              ${searchKeywordWhereStatement}`;

  const albumData = await db.execute(`${albumQuery};${countAlbumQuery}`, [
    ...searchKeywordSelectParams,
    collectionId,
    ...searchKeywordWhereParams,
    limit,
    offset,
    collectionId,
    ...searchKeywordWhereParams
  ]);

  const { total } = albumData[1][0];
  const albums = albumData[0];
  if (albums.length) {
    const albumIds = albums.map((album) => album.album_id).join(", ");
    const artistQuery = `SELECT
                          aat.album_id,
                          aat.artist_id,
                          at.artist_name
                        FROM
                          album_artist aat 
                        JOIN artist at ON aat.artist_id = at.id
                        WHERE 
                          aat.album_id in (${albumIds})`;
    const artistData = await db.execute(artistQuery);

    transformData(albums, "album_id", [
      { propertyName: "artists", data: artistData }
    ]);
  }

  return {
    total,
    albums
  };
}

async function findCollectionCommentsById(collectionId, limit, offset) {
  const query = `SELECT 
                        coco.comment_id,
                        com.comment,
                        com.created_datetime,
                        u.id as user_id,
                        u.username,
                        u.img_path as user_avatar
                    FROM 
                        comment_collection coco 
                    JOIN comment com ON coco.comment_id = com.id
                    JOIN user u ON u.id = com.user_id
                    WHERE
                        coco.collection_id = ?
                    ORDER BY com.created_datetime DESC
                    LIMIT ?
                    OFFSET ?
                    `;
  const countQuery = ` SELECT COUNT(coco.id) as total FROM comment_collection coco WHERE coco.collection_id = ?`;

  const data = await db.execute(`${query};${countQuery}`, [
    collectionId,
    limit,
    offset,
    collectionId
  ]);

  const { total } = data[1][0];

  return {
    total,
    comments: data[0]
  };
}

async function findCollectionByUserId(searchKeyword, limit, offset, userId) {
  let searchKeywordWhereStm = "",
    searchKeywordSelectStm = "",
    searchKeywordOrderByStm = "";
  const searchKeywordSelectParams = [],
    searchKeywordWhereParams = [];

  if (searchKeyword) {
    searchKeywordSelectStm = `, CASE
                                  WHEN ac.collection_name = ? THEN 1
                                    WHEN ac.collection_name LIKE ? THEN 2
                                    ELSE 3
                                  END AS collection_search_order`;
    searchKeywordSelectParams.push(searchKeyword, `${searchKeyword}%`);

    searchKeywordWhereStm = ` AND ac.collection_name LIKE ? `;
    searchKeywordWhereParams.push(`%${searchKeyword}%`);

    searchKeywordOrderByStm = ` ORDER BY collection_search_order `;
  }
  const collectionQuery = ` SELECT 
                                ac.id AS collection_id,
                                ac.collection_name,
                                ac.collection_desc,
                                ac.created_by,
                                ac.last_updated_datetime,
                                ac.created_datetime,
                                u.id AS created_by,
                                u.username,
                                CASE
                                  WHEN ac.img_path IS NULL THEN first_album_cover.album_cover
                                  ELSE ac.img_path
                                END AS img_path
                                ${searchKeywordSelectStm}
                            FROM 
                                album_collection ac
                            JOIN user u ON ac.created_by = u.id
                            LEFT JOIN (
                              SELECT 
                                  a.img_path as album_cover, 
                                  aac.album_collection_id, 
                                  MIN(aac.created_datetime) 
                              FROM album_album_collection aac
                              JOIN album a ON aac.album_id = a.id
                              GROUP BY aac.album_collection_id
                          ) AS first_album_cover ON first_album_cover.album_collection_id = ac.id
                            WHERE 
                                ac.created_by = ?
                                ${searchKeywordWhereStm}
                            ${searchKeywordOrderByStm}
                            LIMIT ?
                            OFFSET ?;
                        `;

  const countCollectionQuery = `SELECT 
                                    COUNT(id) as total 
                                FROM 
                                    album_collection ac
                                WHERE 
                                    ac.created_by = ?
                                    ${searchKeywordWhereStm};`;

  const data = await db.execute(collectionQuery + countCollectionQuery, [
    ...searchKeywordSelectParams,
    userId,
    ...searchKeywordWhereParams,
    limit,
    offset,
    userId,
    ...searchKeywordWhereParams
  ]);
  return {
    total: data[1][0].total,
    collections: data[0]
  };
}
/**
 *
 * @param {number} userId
 * @returns
 */
async function createCollection(userId) {
  const countCollectionQuery = `SELECT COUNT(id) AS total FROM album_collection WHERE created_by = ?;`;
  const collectionCount = await db.execute(countCollectionQuery, [userId]);

  const query = ` INSERT INTO album_collection (collection_name, created_by) VALUES ('My Collection #${
    collectionCount[0].total + 1
  }', ${userId});
                    SELECT 
                        id AS collection_id,
                        collection_name,
                        collection_desc,
                        img_path,
                        created_by,
                        last_updated_datetime,
                        created_datetime 
                    FROM 
                        album_collection 
                    WHERE 
                        id = LAST_INSERT_ID();`;

  const data = await db.execute(query);

  return data[1][0];
}

/**
 *
 * @param {BigInt} collectionId
 * @param {{collection_name: String}} newCollectionData
 * @returns
 */
async function updateCollection(collectionId, userId, newCollectionData) {
  // check if collection exists
  // if no collection found, throw exception
  const findCollection = await findCollectionById(collectionId);
  if (findCollection.length == 0) {
    throw createError.BadRequest("Collection not found!");
  }

  // if user is not the creator of this collection, cannot update
  if (findCollection.created_by.user_id !== userId) {
    throw createError.BadRequest(
      "User has no right to update this collection!"
    );
  }

  // unbox collection data
  const { collection_name, collection_desc, img_path } = newCollectionData;

  const query = `UPDATE 
                        album_collection 
                    SET 
                        collection_name = ?, 
                        collection_desc = ?
                    WHERE 
                        id = ?;

                    SELECT 
                        ac.id AS collection_id,
                        ac.collection_name,
                        ac.collection_desc,
                        ac.img_path,
                        ac.created_by,
                        ac.last_updated_datetime,
                        ac.created_datetime,
                        u.id AS user_id,
                        u.username 
                    FROM album_collection ac
                    JOIN user u ON ac.created_by = u.id 
                    WHERE 
                        ac.id = ?`;

  const data = await db.execute(query, [
    collection_name,
    collection_desc,
    collectionId,
    collectionId
  ]);

  const { user_id, username, ...collection } = data[1][0];
  return {
    ...collection,
    created_by: {
      user_id,
      username
    }
  };
}

async function addAlbumToCollection(collectionId, albumId) {
  // check if album exists in collection
  const checkQuery = `SELECT * FROM album_album_collection WHERE album_collection_id = ? AND album_id = ?;`;
  const check = await db.execute(checkQuery, [collectionId, albumId]);

  if (check.length) {
    throw createError.BadRequest(
      "Album has already been added to this collection. Please try again with another album"
    );
  }

  const query = `INSERT INTO album_album_collection (album_collection_id, album_id) VALUES (?, ?);`;
  const data = await db.execute(query, [collectionId, albumId]);

  return data;
}

async function deleteAlbumFromCollection(collectionId, albumId) {
  // check if album exists in collection
  const checkQuery = `SELECT * FROM album_album_collection WHERE album_collection_id = ? AND album_id = ?;`;
  const check = await db.execute(checkQuery, [collectionId, albumId]);

  if (!check.length) {
    throw createError.BadRequest("Album not found in collection");
  }

  const query = `DELETE FROM album_album_collection WHERE album_collection_id = ? AND album_id = ?`;
  const data = await db.execute(query, [collectionId, albumId]);

  return data;
}

async function addLikeToCollection(collectionId, userId) {
  const isLiked = await findUserLikedCollection(collectionId, userId);
  if (isLiked) {
    throw new createError.BadRequest(
      `User already liked the collection. Cannot post like.`
    );
  }

  const query = `INSERT INTO collection_like (collection_id, user_id) VALUES (?, ?);`;
  const data = await db.execute(query, [collectionId, userId]);
  return data;
}

async function deleteLikeToCollection(collectionId, userId) {
  const isLiked = await findUserLikedCollection(collectionId, userId);

  if (!isLiked) {
    throw new createError.BadRequest(
      `User hasn't liked the collection. Cannot delete like.`
    );
  }

  const query = `DELETE FROM collection_like WHERE collection_id = ? AND user_id = ?`;
  const data = await db.execute(query, [collectionId, userId]);
  return data;
}

async function findUserLikedCollection(collectionId, userId) {
  const query = `SELECT * FROM collection_like WHERE collection_id = ? AND user_id = ?;`;
  const data = await db.execute(query, [collectionId, userId]);

  const isLiked = data.length > 0 ? true : false;
  return isLiked;
}

async function createCommentCollection(collectionId, userId, comment) {
  const insCmtQuery = `INSERT INTO comment (user_id, comment) VALUES (?, ?);
                            SELECT 
                                id as comment_id, 
                                user_id, 
                                comment 
                            FROM 
                                comment 
                            WHERE 
                                id = LAST_INSERT_ID();`;

  const cmt = await db.execute(insCmtQuery, [userId, comment]);

  const { comment_id } = cmt[1][0];

  const insCmtCollectionQuery = `INSERT INTO comment_collection (comment_id, collection_id) VALUES (?, ?);`;

  await db.execute(insCmtCollectionQuery, [comment_id, collectionId]);
}

async function findFavoriteCollectionsByUserId(limit, offset, userId) {
  const query = `SELECT
                  cl.collection_id,
                  ac.collection_name,
                  ac.collection_desc,
                  ac.created_by,
                  u2.username as created_by_username,
                  u.username as liked_by,
                  ac.last_updated_datetime,
                  CASE
                    WHEN ac.img_path IS NULL THEN first_album_cover.album_cover
                    ELSE ac.img_path
                  END AS img_path
                FROM
                  collection_like cl
                JOIN album_collection ac ON cl.collection_id = ac.id
                JOIN user u ON cl.user_id = u.id
                JOIN user u2 ON ac.created_by = u2.id
                LEFT JOIN (
                  SELECT 
                      a.img_path as album_cover, 
                      aac.album_collection_id, 
                      MIN(aac.created_datetime) 
                  FROM album_album_collection aac
                  JOIN album a ON aac.album_id = a.id
                  GROUP BY aac.album_collection_id
              ) AS first_album_cover ON first_album_cover.album_collection_id = ac.id
                WHERE
                  cl.user_id = ?
                LIMIT ?
                OFFSET ?
                  `;
  const countQuery = `SELECT COUNT(id) as total FROM collection_like WHERE user_id = ?`;
  const data = await db.execute(`${query};${countQuery}`, [
    userId,
    limit,
    offset,
    userId
  ]);

  const { total } = data[1][0];

  return {
    total,
    collections: data[0]
  };
}

async function deleteCollection(collectionId) {
  // delete from collection
  const collectionQuery = `DELETE FROM album_collection WHERE id = ?`;
  await db.execute(collectionQuery, [collectionId]);
}

async function findTotalLikeCollection(collectionId) {
  const query = `SELECT COUNT(id) as total_like FROM collection_like WHERE collection_id = ?`;
  const data = await db.execute(query, [collectionId]);
  const { total_like } = data[0];
  return {
    total_like
  };
}

module.exports = {
  findAllCollection,
  createCollection,
  findCollectionById,
  updateCollection,
  findCollectionByUserId,
  addAlbumToCollection,
  deleteAlbumFromCollection,
  findCollectionDetailsById,
  findCollectionAlbumDetailsById,
  addLikeToCollection,
  deleteLikeToCollection,
  findUserLikedCollection,
  createCommentCollection,
  findCollectionCommentsById,
  findFavoriteCollectionsByUserId,
  deleteCollection,
  findTotalLikeCollection
};
