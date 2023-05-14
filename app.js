const express = require('express');
const cors = require('cors');

const app = express();
const globalErrHandler = require('./src/middlewares/error-handler.middleware');

// load environment vars
require('dotenv').config({path: '.env'});

app.use(express.json());
app.use(cors({
    origin: process.env.FE_DOMAIN
}));

const albums = require('./src/routes/album.route');
const collections = require('./src/routes/collection.route');
const artists = require('./src/routes/artist.route');
const users = require('./src/routes/user.route');


// routes
app.use('/api', albums);
app.use('/api', collections);
app.use('/api', artists);
app.use('/api', users);

// middlewares error handler
app.use(globalErrHandler);

app.listen(process.env.APP_PORT, () => {
    console.log(`Application is running at http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
})
