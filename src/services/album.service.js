const db = require('../utils/db-execution.util');

/**
 * 
 * @param {number} limit 
 * @param {number} offset 
 * @param {{genreIds: string[], decade: number}} filters 
 * @returns
 */
async function findAllAlbum(limit, offset, filters) {
    /**
     * Main table to execute search/filter on
     */
    const mainTable = `album`;
    /**
     * List of params to pass to main execution query
     * @type string[]
     */
    const queryParam = [];

    /**
     * queryFilter is used in the main execution query to filter results by the specified query string params.
     * @type string
     */
    let queryFilter;
    /**
     * queryFilterCount is used in the main execution query to count the number of records by executing queryFilter, regardless of pagination.
     * @type string
     */
    let queryFilterCount;
    
    /**
     * SELECT clause for queryFilter
     */
    const selectQueryFilter = `SELECT ${mainTable}.id as album_id FROM ${mainTable}`;
    /**
     * SELECT clause for queryFilterCount
     */
    const selectQueryFilterCount = `SELECT COUNT(${mainTable}.id) as total FROM ${mainTable}`;
    /**
     * WHERE clause for queryFilter and queryFilterCount
     * @type string
     */
    let whereStatement;
    /**
     * JOIN clauses for queryFilter and queryFilterCount
     * @type string
     */
    let joins;

    // List of JOIN statements and WHERE statements, used to build joins and whereStatement
    const joinsList = [];
    const whereClausesList = [];

    // Filter Params
    const genreIds = filters.genreIds;
    const decade = filters.decade;

    // build joins list
    // For genre filtering, users can filter albums that fall under 1, 2 or more genres. It indicates AND relationship and each genre filter could be expressed with an INNTER JOIN.
    // For example, 'OK Computer' album falls both in 'Rock' and 'Alternative Rock' genre. 
    // When user selects 'Rock' and 'Alternative Rock', it should only show albums that falls both in these 2 genres, like 'OK Computer'.
    
    if (genreIds) {
        genreIds.forEach((genreId, index) => {
            joinsList.push(` JOIN album_genre ag${index + 1} ON ag${index + 1}.album_id = ${mainTable}.id `);
            whereClausesList.push(`ag${index + 1}.genre_id = ?`);
            queryParam.push(genreId);
        })

    }

    if (decade) {
        whereClausesList.push(`${mainTable}.release_year BETWEEN ? AND ?`);
        queryParam.push(decade, decade + 9)
    }

    // build Where statement.
    // Represent AND relationship between expressions.
    whereStatement = (whereClausesList.length > 0)? ` WHERE ` + whereClausesList.join(" AND ") : '';

    // build Joins statement.
    joins = (joinsList.length > 0)? joinsList.join(" ") : '';

    // Prepare final filter queries to be executed
    queryFilter = selectQueryFilter + joins + whereStatement;
    queryFilterCount = selectQueryFilterCount + joins + whereStatement;

    // Prepare query params to be executed. Include limit, offset and query filter count param.
    const pagIndex = queryParam.length;
    queryParam.forEach((value) => {
        queryParam.push(value);
    }) // replicate array to get query filter count
    queryParam.splice(pagIndex, 0, limit, offset); // add limit offset to query params
    
    // Query to be executed. Apply LIMIT and OFFSET for pagination.
    const query =   `SELECT 
                        album.id as album_id, 
                        album.album_title, 
                        album.release_year, 
                        artist.id as artist_id, 
                        artist.artist_name 
                    FROM
                        (${queryFilter}
                        LIMIT ?
                        OFFSET ?) as pagination
                    JOIN album on pagination.album_id = album.id
                    JOIN album_artist on pagination.album_id = album_artist.album_id
                    JOIN artist on artist.id = album_artist.artist_id;
                        
                    ${queryFilterCount};
                        
                    SELECT TRUNCATE(release_year, -1) as decade FROM album GROUP BY decade DESC;`;
    
    const data = await db.execute(query, queryParam);

    return {
        total: data[1][0].total,
        albums: data[0],
        decades: data[2]
    };

}

async function findAlbumById(albumId) {
    try {
        const query = ` SELECT 
                            album.id as album_id, 
                            album.album_title, 
                            album.release_year,
                            album.img_path, 
                            artist.id as artist_id, 
                            artist.artist_name
                        FROM 
                            album 
                        JOIN album_artist on album.id = album_artist.album_id 
                        JOIN artist on artist.id = album_artist.artist_id 
                        WHERE 
                            album.id = ?`;
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