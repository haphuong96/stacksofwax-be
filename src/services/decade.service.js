const db = require('../utils/db-execution.util');

async function findAllValidDecades() {
    const query = "SELECT TRUNCATE(release_year, -1) as decade FROM album GROUP BY decade DESC;";
    const data = await db.execute(query);
    return data;
}

module.exports = {
    findAllValidDecades
}
