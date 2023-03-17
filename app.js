const express = require('express');
const app = express();
const globalErrHandler = require('./src/middlewares/error-handler');

app.use(express.json());

// load environment vars
require('dotenv').config({path: './src/configs/.env'});

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
