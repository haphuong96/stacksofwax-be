const db = require('../utils/db-execution.util');

async function findAllValidDecades() {
    const query = "SELECT DISTINCT release_year FROM album ORDER BY release_year DESC";
    const data = await db.execute(query);
    return data;
}

module.exports = {
    findAllValidDecades
}
