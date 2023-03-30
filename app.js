const express = require('express');
const cors = require('cors');

const app = express();
const globalErrHandler = require('./src/middlewares/error-handler.middleware');

// load environment vars
require('dotenv').config({path: './src/configs/.env'});

app.use(express.json());
app.use(cors({
    origin: process.env.FE_DOMAIN
}));

const core = require('./src/routes/core.route');
const users = require('./src/routes/users.route');


// routes
app.use('/api', core);
app.use('/api', users);

// middlewares error handler
app.use(globalErrHandler);

app.listen(process.env.APP_PORT, () => {
    console.log(`Application is running at http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
})
