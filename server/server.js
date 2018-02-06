'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world');
});

const server = app.listen(8008, () => {
    console.log('Server is up and running on port 8008');
});