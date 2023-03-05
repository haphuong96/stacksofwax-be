const connection = require('../services/db.service');

class AlbumModel {
    constructor(title, releaseYear, imgPath) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.imgPath = imgPath;
    }

    static read() {
        return new Promise((resolve, reject) => {
            let query = `SELECT * FROM album`;
            connection.query(query, (err, albums) => {
                if (err) return console.log(err.message);
                resolve(albums);
            });
        });

        // callback option
        // let query = `SELECT * FROM album`;
        // connection.query(query, (err, albums) => {
        //     if (err) return console.log(err.message);
        //     callback(albums);
        // });
    }

}


module.exports = AlbumModel;