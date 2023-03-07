const albumRead = require('../repositories/album.repository');

function albumGetAll(req) {
    // return new Promise((resolve, reject) => {
    // }).then(() => {
    //     return albumRead()
    //         .then
    // })


    let queryString;

    return albumRead(queryString)
        .then((albums) => {
            return albums;
        })
        .catch((err) => {
            throw err;
        })
}

module.exports = albumGetAll;