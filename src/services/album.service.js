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
    /**
     * Main execution query.
     * @return An array of data with the following results: 
     * - Album lists with paginated results. 
     */
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
                    JOIN album ON pagination.album_id = album.id
                    JOIN album_artist ON pagination.album_id = album_artist.album_id
                    JOIN artist ON artist.id = album_artist.artist_id;
                        
                    ${queryFilterCount};
                        
                    SELECT TRUNCATE(release_year, -1) as decade FROM album GROUP BY decade DESC;`;
    
    const data = await db.execute(query, queryParam);

    return {
        total: data[1][0].total,
        albums: data[0],
        decades: data[2]
    };

}

/**
 * 
 * @param {number} albumId 
 * @returns An album object, with the following album data:
 * - album title, release year, img
 * - artists
 * - genres
 * - record labels
 * - tracks
 * - comments
 * - average rating
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

    // create final queries execution and params
    executionQueries = albumQuery + artistQuery + genreQuery + recordLabelQuery + trackQuery + commentQuery + averageRatingQuery;

    const data = await db.execute(executionQueries, queryParams);

    const album = data[0][0];
    album.artists = data[1];
    album.genres = data[2];
    album.record_labels = data[3];
    album.tracks = data[4];
    album.comments = data[5];
    album.average_rating = data[6][0].average_rating;

    return album;
}

module.exports = {
    findAllAlbum,
    findAlbumById
}