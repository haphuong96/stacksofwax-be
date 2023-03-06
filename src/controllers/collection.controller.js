const CollectionModel = require('../models/collection.model');


function getAll(req, res) {
    CollectionModel.read()
        .then((collections) => { res.status(200).send(collections) });
}

function post(req, res) {
    let collection = new CollectionModel(name = "New Collection");

    collection.create()
        .then(() => { res.status(201).send({ message: "Create collection successfully!" }) })
};


module.exports = { 
    getAll: getAll,
    post: post 
};