
class DataMap {
    #primaryKey;
    #domainClass;
    #tableName;
    #columns;
    /**
     * @type Map<Mapper, {mainTableField: string, foreignTableField: string}>
     *
     */
    #foreignKeys;

    /**
     * 
     * @param {*} domainClass 
     * @param {*} tableName 
     * @param {*} columns 
     * @param {*} primaryKey 
     * @param {Map<Mapper, {mainTableField: string, foreignTableField: string}>} foreignKeys 
     */
    constructor(domainClass, tableName, columns, primaryKey, foreignKeys) {
        this.#domainClass = domainClass;
        this.#tableName = tableName;
        this.#columns = columns;
        this.#primaryKey = primaryKey;
        this.#foreignKeys = foreignKeys;
        console.log(this.#foreignKeys);
    }

    getStringColumnList() {
        return this.#columns.map(column => `${this.#tableName}.${column}`).join(", ");
    }

    getTableName() {
        return this.#tableName;
    }

    getPrimarykey() {
        return this.#primaryKey;
    }

    getDomainClass() {
        return this.#domainClass;
    }

    getTableName() {
        return this.#tableName;
    }

    /**
     * 
     * @param {Mapper} mapper 
     * @returns 
     */
    getStringJoin(foreignMapper) {
        console.log(this.#foreignKeys.get(foreignMapper))
        return ` ${foreignMapper.dataMap.getTableName()} ON ${this.#tableName}.${this.#foreignKeys.get(foreignMapper).mainTableField} = ${foreignMapper.dataMap.getTableName()}.${this.#foreignKeys.get(foreignMapper).foreignTableField} `;
    }
}

module.exports = { DataMap }