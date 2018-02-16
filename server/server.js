'use strict';

const express = require('express');
const path = require('path'); // to specify the static folder
const bodyParser = require('body-parser');

// import the database module
const db = require('./utils/dataBaseUtils');

// connect to db
db.setUpConnection();

const app = express();

app.use(express.static(path.join(__dirname, '../client')));

// on every req - transform data to json - then to route
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/product', (req, res) => {

});

const server = app.listen(8008, () => {
    console.log('Server is up and running on port 8008');
});