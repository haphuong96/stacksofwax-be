const express = require('express');
const app = express();
const port = 3000;


const core = require('./src/routes/core');
const users = require('./src/routes/users');

app.use(express.json());

// routes
app.use('/', core);
app.use('/users', users);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
