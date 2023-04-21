const db = require('../utils/db-execution.util');

class Mapper {
    /**
     * @type DataMap
     */
    dataMap;

    async findOne(key) {
        const sql = `SELECT 
                    ${this.dataMap.getStringColumnList()} 
                FROM 
                    ${this.dataMap.getTableName()} 
                WHERE 
                    ${this.dataMap.getPrimarykey()} = ?`;
        const data = await db.execute(sql, [key]);
        return data[0];
    }
}

module.exports = { Mapper }