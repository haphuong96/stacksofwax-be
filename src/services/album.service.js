const db = require("../utils/db-execution.util");
const serializer = require("../serializers/common.serializer");
const { off } = require("../databases/db-connection");

/**
 * Find albums with filter/search function and pagination.
 * Steps include:
 * - Build filter/search query
 * - Execute filter/search query
 * - Build album result data set
 *
 * @param {number} limit
 * @param {number} offset
 * @param {{genreIds: string[], decade: number, searchKeyword: string, addToCollectionId: number}} filters
 * @returns total album records (no pagination) and albums dataset (with pagination)
 */
async function findAllAlbum(limit, offset, filters) {
  /**
   * SELECT clause for queryFilter
   */
  const selectQueryFilter = `SELECT 
                                    album.id as album_id, 
                                    album.album_title, 
                                    album.release_year,
                                    album.img_path  
                                FROM album`;
  /**
   * SELECT clause for queryFilterCount
   */
  const selectQueryFilterCount = `SELECT COUNT(album.id) as total FROM album`;

  /**
   * Pagination for queryFilter
   */
  const pagination = ` LIMIT ? OFFSET ?;`;

  // List of JOIN, WHERE, ORDER BY statements, used to build joins, whereStatement, and orderByStatement
  const joinsList = [];
  const whereClausesList = [];
  const orderByList = [];

  // List of WHERE, ORDER BY and pagination params to be passed to execution with the query.
  const whereParams = [];
  const orderByParams = [];
  const paginationParams = [limit, offset];

  // Filter Params
  const genreIds = filters.genreIds;
  const decade = filters.decade;
  const searchKeyword = filters.searchKeyword;
  const availableToAddToCollectionId = filters.availableToAddToCollectionId;

  // build joinsList and whereClausesList
  // For genre filtering, users can filter albums that fall under 1, 2 or more genres. It indicates AND relationship and each genre filter could be expressed with an INNTER JOIN.
  // For example, 'OK Computer' album falls both in 'Rock' and 'Alternative Rock' genre.
  // When user selects 'Rock' and 'Alternative Rock', it should only show albums that falls both in these 2 genres, like 'OK Computer'.

  // search title by keyword. Results are ordered by exact match first, then title starting with the search keyword, and otherwise all other results containing search keyword.
  if (searchKeyword) {
    whereClausesList.push(`album.album_title LIKE ?`);
    whereParams.push(`%${searchKeyword}%`);
    orderByList.push(
      `(CASE WHEN album_title = ? THEN 1 WHEN album_title LIKE ? THEN 2 ELSE 3 END)`
    );
    orderByParams.push(searchKeyword, `${searchKeyword}%`);
  }

  if (genreIds) {
    genreIds.forEach((genreId, index) => {
      joinsList.push(
        ` JOIN album_genre ag${index + 1} ON ag${
          index + 1
        }.album_id = album.id `
      );
      whereClausesList.push(`ag${index + 1}.genre_id = ?`);
      whereParams.push(genreId);
    });
  }

  if (decade) {
    whereClausesList.push(`album.release_year BETWEEN ? AND ?`);
    whereParams.push(decade, decade + 9);
  }

  // find available albums to be added to a collection, given collection id.
  if (availableToAddToCollectionId) {
    whereClausesList.push(`album.id NOT IN (
                          SELECT 
                            album_id
                          FROM 
                            album_album_collection 
                          WHERE
                            album_collection_id = ?)`);
    whereParams.push(availableToAddToCollectionId);
  }

  /**
   * Build Where statement.
   * Represent AND relationship between expressions.
   * WHERE clause for queryFilter and queryFilterCount
   * @type string
   */
  const whereStatement =
    whereClausesList.length > 0
      ? ` WHERE ` + whereClausesList.join(" AND ")
      : "";

  /**
   * Build Joins statement.
   * JOIN clauses for queryFilter and queryFilterCount
   * @type string
   */
  const joinsStatement = joinsList.length > 0 ? joinsList.join(" ") : "";

  /**
   * Build ORDER BY statement
   * ORDER BY clause for queryFilter
   */
  const orderByStatement =
    orderByList.length > 0 ? ` ORDER BY ` + orderByList.join(", ") : "";

  // Prepare final filter queries to be executed
  /**
   * queryFilter is used to filter results by the specified query string params.
   * @type string
   */
  const queryFilter =
    selectQueryFilter +
    joinsStatement +
    whereStatement +
    orderByStatement +
    pagination;

  /**
   * queryFilterCount is used to count the number of records by executing queryFilter, regardless of pagination.
   * @type string
   */
  const queryFilterCount =
    selectQueryFilterCount + joinsStatement + whereStatement;

  /**
   * queryParams used to escape queryFilter and queryFilterCount query params.
   */
  const queryParams = [
    ...whereParams,
    ...orderByParams,
    ...paginationParams,
    ...whereParams
  ];
  // whereParams.concat(orderByParams, paginationParams, whereParams);

  /**
   * Execute queryFilter and queryFilterCount, returns:
   * - data[0]: List of albums, filtered and paginated
   * - data[1]: Total number of albums, filtered
   */
  const filterAlbums = await db.execute(
    queryFilter + queryFilterCount,
    queryParams
  );
  
  if (filterAlbums[0].length > 0) {
    const filterAlbumIds = filterAlbums[0]
      .map((album) => album.album_id)
      .join(", ");
    /**
     * Queries to fetch artist data for albums retrieved in previous query (queryFilter)
     */
    const albumArtistQuery = `SELECT
                                    album_artist.album_id,
                                    artist.id as artist_id,
                                    artist.artist_name
                                FROM
                                    artist
                                JOIN album_artist ON artist.id = album_artist.artist_id
                                WHERE 
                                    album_artist.album_id IN (${filterAlbumIds})`;
    /**
     * Child artists data
     */
    const artistData = await db.execute(albumArtistQuery);

    serializer.transformData(filterAlbums[0], "album_id", [
      { propertyName: "artists", data: artistData }
    ]);
  }

  return {
    /**
     * @type number
     */
    total: filterAlbums[1][0].total,
    /**
     * @type Array.<{album_id: number, album_title: string, release_year: number, artists: Array.<{artist_id: number, artist_name: string}>}>
     */
    albums: filterAlbums[0]
  };
}

/**
 * @param {number} albumId
 * @returns
 */
async function findAlbumById(albumId) {
  /**
   * Queries for execution
   */
  let executionQueries;
  /**
   * List of params to be executed
   */
  const queryParams = [];

  const albumQuery = `SELECT 
                            id as album_id,
                            album_title,
                            release_year,
                            img_path
                        FROM 
                            album 
                        WHERE 
                            album.id = ?;`;
  queryParams.push(albumId);

  const artistQuery = `SELECT
                            artist.id as artist_id, 
                            artist.artist_name
                        FROM
                            artist
                        JOIN album_artist ON artist.id = album_artist.artist_id
                        WHERE
                            album_artist.album_id = ?;`;
  queryParams.push(albumId);

  const genreQuery = `SELECT
                            genre.id as genre_id,
                            genre.genre_name
                        FROM
                            genre
                        JOIN album_genre ON genre.id = album_genre.genre_id
                        WHERE
                            album_genre.album_id = ?;`;
  queryParams.push(albumId);

  const recordLabelQuery = `SELECT
                                record_company.id as record_company_id,
                                record_company.company_name
                            FROM
                                record_company
                            JOIN album_record_company ON record_company.id = album_record_company.record_company_id
                            WHERE
                                album_record_company.album_id = ?;`;
  queryParams.push(albumId);

  const trackQuery = `SELECT 
                            id as track_id,
                            track_title,
                            duration
                        FROM
                            track
                        WHERE
                            album_id = ?;`;
  queryParams.push(albumId);

  const commentQuery = `SELECT 
                            comment.id as comment_id,
                            comment.user_id,
                            comment.comment,
                            comment.created_datetime 
                        FROM 
                            comment 
                        JOIN comment_album ON comment.id = comment_album.comment_id
                        WHERE
                            comment_album.album_id = ?;`;
  queryParams.push(albumId);

  const averageRatingQuery = `SELECT AVG(rating) as average_rating FROM rating_album WHERE album_id = ?;`;
  queryParams.push(albumId);

  const totalRatingQuery = `SELECT COUNT(id) as total_ratings FROM rating_album WHERE album_id = ?;`;
  queryParams.push(albumId);

  // create final queries execution and params
  executionQueries =
    albumQuery +
    artistQuery +
    genreQuery +
    recordLabelQuery +
    trackQuery +
    commentQuery +
    averageRatingQuery +
    totalRatingQuery;

  const data = await db.execute(executionQueries, queryParams);

  const { album_id, album_title, release_year, img_path } = data[0][0];

  return {
    album_id,
    album_title,
    release_year,
    img_path,
    /**
     * @type Array.<{artist_id: number, artist_name: string}>
     */
    artists: data[1],
    /**
     * @type Array.<{genre_id: number, genre_name: string}>
     */
    genres: data[2],
    /**
     * @type Array.<{record_company_id: number, company_name: string}>
     */
    record_labels: data[3],
    /**
     * @type Array.<{track_id: number, track_title: string, duration: string}>
     */
    tracks: data[4],
    /**
     * @type Array.<{comment_id: number, user_id: number, comment: string, created_datetime: string}>
     */
    comments: data[5],
    /**
     * @type number
     */
    average_rating: data[6][0].average_rating,
    total_ratings: data[7][0].total_ratings
  };
}

async function findCollectionsByAlbumId(limit, offset, albumId) {
  const query = `SELECT 
                        ac.id as collection_id,
                        ac.collection_name,
                        ac.created_by,
                        ac.img_path,
                        u.username 
                    FROM 
                        album_album_collection aac 
                    JOIN album_collection ac ON aac.album_collection_id = ac.id 
                    JOIN user u ON u.id = ac.created_by
                    WHERE 
                        aac.album_id = ?
                    ORDER BY aac.created_datetime DESC
                    LIMIT ?
                    OFFSET ?`;

  const countQuery = `SELECT COUNT(aac.id) as total FROM album_album_collection aac WHERE aac.album_id = ?`;

  const data = await db.execute(`${query};${countQuery}`, [
    albumId,
    limit,
    offset,
    albumId
  ]);

  const { total } = data[1][0];

  return {
    total,
    collections: data[0]
  };
}

async function createCommentAlbum(albumId, userId, comment) {
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

  const insCmtAlbumQuery = `INSERT INTO comment_album (comment_id, album_id) VALUES (?, ?);`;

  await db.execute(insCmtAlbumQuery, [comment_id, albumId]);
}

async function findCommentByAlbumId(limit, offset, albumId) {
  const query = `SELECT 
                        ca.album_id,
                        com.comment,
                        com.created_datetime,
                        u.id as user_id,
                        u.username,
                        u.img_path as user_avatar 
                    FROM 
                        comment_album ca 
                    JOIN comment com ON ca.comment_id = com.id
                    JOIN user u ON u.id = com.user_id
                    WHERE
                        ca.album_id = ?
                    ORDER BY com.created_datetime DESC
                    LIMIT ?
                    OFFSET ?
                    `;

  const countQuery = `SELECT COUNT(ca.id) as total FROM comment_album ca WHERE ca.album_id = ?`;
  const data = await db.execute(`${query};${countQuery}`, [
    albumId,
    limit,
    offset,
    albumId
  ]);

  const { total } = data[1][0];

  return {
    total,
    comments: data[0]
  };
}

async function rateAlbum(userId, albumId, rating) {
  const existRating = await getRating(userId, albumId);
  if (!existRating) {
    await db.execute(
      `INSERT INTO rating_album (rating, album_id, user_id) VALUES (?, ?, ?)`,
      [rating, +albumId, userId]
    );
  } else {
    await db.execute(
      `UPDATE rating_album SET rating = ? WHERE album_id = ? AND user_id = ?`,
      [rating, albumId, userId]
    );
  }
}

async function getRating(userId, albumId) {
  try {
    const existRating = await db.execute(
      `SELECT * FROM rating_album WHERE user_id = ? AND album_id = ?`,
      [userId, albumId]
    );
    return existRating[0];
  } catch (error) {
    return undefined;
  }
}

async function unrate(userId, albumId) {
  const existRating = await getRating(userId, albumId);
  if (existRating) {
    await db.execute(
      "DELETE FROM rating_album WHERE user_id = ? AND album_id = ?",
      [userId, albumId]
    );
  }
}

module.exports = {
  findAllAlbum,
  findAlbumById,
  findCollectionsByAlbumId,
  createCommentAlbum,
  findCommentByAlbumId,
  rateAlbum,
  getRating,
  unrate
};
