const db = require('../utils/db-execution.util');
const { Mapper } = require('../repositories/mapper.repository');
const { DataMap } = require('../repositories/data-map.repository');
const { Album, AlbumMapper } = require('./album.repository');

class ArtistMapper extends Mapper{
    
    constructor() {
        super()
        this.loadDataMap();
    }

    loadDataMap() {
        this.dataMap = new DataMap(ArtistMapper.prototype, "artist", ["id", "artist_name", "artist_description", "img_path"], "id");
    }
    
}

class ArtistAlbumMapper extends Mapper {

    constructor() {
        super();
        this.loadDataMap();
    }
    loadDataMap() {
        this.dataMap = new DataMap(ArtistAlbumMapper.prototype, 
            "album_artist", 
            ["id", "album_id", "artist_id"], 
            "id", 
            new Map([
                [
                    Artist, 
                    {
                        mainTableField: "artist_id",
                        foreignTableField: "id"
                    },
                ],
                [
                    Album,
                    {
                        mainTableField: "album_id",
                        foreignTableField: "id"
                    }
                ]
            ])
        );
    }

    async findAlbumsByArtistId(artistId) {
        const joinMapper = Album;

        const sql = `SELECT 
                        ${this.dataMap.getTableName()}.album_id,
                        ${joinMapper.dataMap.getTableName()}.album_title,
                        ${joinMapper.dataMap.getTableName()}.img_path
                    FROM 
                        ${this.dataMap.getTableName()} 
                    JOIN ${this.dataMap.getStringJoin(joinMapper)} 
                    WHERE 
                        ${this.dataMap.getTableName()}.artist_id = ?
                    `
        const data = await db.execute(sql, [artistId]);

        return data;
    }
}

const Artist = new ArtistMapper();
const ArtistAlbum = new ArtistAlbumMapper();

module.exports = { Artist, ArtistAlbum }