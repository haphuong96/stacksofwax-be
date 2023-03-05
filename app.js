const express = require('express');
const app = express();

app.use(express.json());

// load environment vars
require('dotenv').config({path: './src/configs/.env'});

const core = require('./src/routes/core');
const users = require('./src/routes/users');

// routes
app.use('/', core);
app.use('/users', users);


app.listen(process.env.APP_PORT, () => {
    console.log(`Application is running at http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
})
