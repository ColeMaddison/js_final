'use strict';

const express = require('express');
const path = require('path'); // to specify the static folder
const bodyParser = require('body-parser');
const Product = require('./models/Product');

// import the database module
const db = require('./utils/dataBaseUtils');

// connect to db
db.setUpConnection();

const app = express();

// template engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../client')));

// on every req - transform data to json - then to route
app.use(bodyParser.json()); 

// not sure what it does! but it made the app work
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/single/:id', (req,res) => {
    console.log(typeof req.params.id);
    db.listProducts().then(data => {
        res.render('single', {data: data[Number(req.params.id)]})
    });
});

// list all products
app.get('/products', (req, res) => {
    db.listProducts().then(data => res.send(data));
});

app.get('/add-product', (req, res) => {
    res.sendFile('add-product.html', {"root": '../client'});
});

// add product in database
app.post('/add-product', (req, res) => {
    db.createProduct(req.body).then(data => res.send(data));
});

const server = app.listen(8008, () => {
    console.log('Server is up and running on port 8008');
});