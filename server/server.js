'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const server = app.listen(8008, () => {
    console.log('Server is up and running on port 8008');
});