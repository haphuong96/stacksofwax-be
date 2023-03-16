const express = require('express');
const app = express();

app.use(express.json());

// load environment vars
require('dotenv').config({path: './src/configs/.env'});

const core = require('./src/routes/core.route');
const users = require('./src/routes/users.route');


// middlewares response format
// app.use((req, res, next) => {
//     let resSend = res.send;

//     res.send = (resBody) => {
//         // res.contentType("application/json");
//         res.setHeader('Content-Type', 'application/json');
//         let content = {data: resBody};
//         resSend.call(this, JSON.stringify(content));
//     };
    
    
//     next();
// })

// routes
app.use('/', core);
app.use('/users', users);



app.listen(process.env.APP_PORT, () => {
    console.log(`Application is running at http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
})
