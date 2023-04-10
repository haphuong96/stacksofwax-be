const db = require('../utils/db-execution.util');


async function findAllAlbum(queryStr) {
    /**
     * Table to execute search/filter on
     */
    const table = `album`;
    /**
     * List of params to pass to query execution
     */
    const queryParam = [];

    /**
     * This is the filtering query to be built according to applied filter.
     */
    let queryFilter = `SELECT ${table}.id as album_id FROM ${table}`;
    let queryFilterCount = `SELECT COUNT(${table}.id) as total FROM ${table}`;
    let joins = ``;
    let whereClausesList = [];

    const genreIds = queryStr.genreId;
    const decade = queryStr.decade;
    const limit = queryStr.limit;
    const offset = queryStr.offset;

    // build query, according to filter params
    // build table joins
    // For genre filtering, users can filter albums that fall under 1, 2 or more genres. It indicates AND relationship and each genre filter could be expressed with an INNTER JOIN.
    // For example, 'OK Computer' album falls both in 'Rock' and 'Alternative Rock' genre. 
    // When user selects 'Rock' and 'Alternative Rock', it should only show albums that falls both in these 2 genres, like 'OK Computer'.
    if (genreIds) {
        if (Array.isArray(genreId)) {
            genreIds.forEach((genreId, index) => {
                joins += ` JOIN album_genre ag${index + 1} ON ag${index + 1}.album_id = ${table}.id `;
                whereClausesList.push(`ag${index + 1}.genre_id = ?`);
                queryParam.push(genreId);
            })
        } else {
            joins += ` JOIN album_genre ag ON ag.album_id = ${table}.id WHERE ag.genre_id = ?`
            queryParam.push(genreId);
        }
    }

    if (decade) {
        let year = parseInt(decade);
        console.log(year);
        whereClausesList.push(`${table}.release_year BETWEEN ? AND ?`);
        queryParam.push(year, year+9)
    }

    // build Where statement and add to Joins.
    // Represent AND relationship between expressions.
    let whereStatement = ``;
    if (whereClausesList.length > 0) {
        whereStatement += ` WHERE ` + whereClausesList.join(" AND ");
    }

    //final queries
    queryFilter += joins + whereStatement;
    queryFilterCount += joins + whereStatement;

    // Prepare query params to be executed. Include limit, offset and query filter count param.
    let queryFilterParams = queryParam;
    queryParam.push(limit, offset); // limit offset
    queryParam.concat(queryFilterParams); // query filter count, since query filter count is the same as query filter params.
    
    // Query to be executed. Apply LIMIT and OFFSET for pagination.
    const query = `SELECT 
        album.id as album_id, 
        album.album_title, 
        album.release_year, 
        artist.id as artist_id, 
        artist.artist_name 
        FROM
        (${queryFilter}
        LIMIT ${limit}
        OFFSET ${offset}) as pagination
        JOIN album on pagination.album_id = album.id
        JOIN album_artist on pagination.album_id = album_artist.album_id
        JOIN artist on artist.id = album_artist.artist_id;
        
        ${queryFilterCount};
        
        SELECT TRUNCATE(release_year, -1) as decade FROM album GROUP BY decade DESC;`;

    const data = await db.execute(query, queryParam);

    return {
        albums: data[0],
        album_count: data[1][0].album_count,
        decades: data[2]
    };

}

async function findAlbumById(albumId) {
    try {
        const query = "SELECT * FROM album JOIN artist on album.artist_id = artist.id WHERE album.id = ?";
        const data = await db.execute(query, [albumId]);

        return data;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    findAllAlbum,
    findAlbumById
}