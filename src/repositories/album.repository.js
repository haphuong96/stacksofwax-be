const db = require('../utils/db-execution.util');
const { Mapper } = require('../repositories/mapper.repository');
const { DataMap } = require('../repositories/data-map.repository');

class AlbumMapper extends Mapper {
    constructor() {
        super()
        this.loadDataMap();
    }

    loadDataMap() {
        this.dataMap = new DataMap(
            AlbumMapper.prototype, 
            "album", 
            ["id", "album_title", "release_year", "img_path", "country_id", "created_datetime"], 
            "id"
            );
    }
}

const Album = new AlbumMapper();
module.exports = { Album, AlbumMapper };