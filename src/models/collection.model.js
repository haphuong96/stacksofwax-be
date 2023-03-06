const connection = require('../services/db.service');

class CollectionModel {
    constructor(name, desc, imgPath) {
        this.name = name;
        this.desc = desc;
        this.imgPath = imgPath;
    }

    static read() {
        return new Promise((resolve, reject) => {
            let query = `SELECT * FROM album_collection `;
            connection.query(query, (err, albums) => {
                if (err) return console.log(err.message);
                resolve(albums);
            });
        });
    }

    create() {
        return new Promise((resolve, reject) => {
            let query = `INSERT INTO album_collection (collection_name, collection_desc, img_path) VALUES (?, ?, ?) `;
            connection.query(query,[this.name, this.desc, this.imgPath], (err, collections) => {
                if (err) return console.log(err.message);
                resolve(collections);
            });
        });
    }

}


module.exports = CollectionModel;