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
    db.listProducts().then(data => {
        let selectedData = data[Number(req.params.id)];
        // console.log(selectedData.colors.length, typeof selectedData.colors);
        
        let extendedData = {
            colors: selectedData.colors[0].split(','),
            sizes: selectedData.sizes[0].split(','),
            tags: selectedData.tags[0].split(','),
            reviews: selectedData.reviews,
            title: selectedData.title,
            description: selectedData.description,
            category: selectedData.category,
            fullDescription: selectedData.fullDescription,
            link: selectedData.link.trim().split(',')
        };
        console.log(extendedData);
        res.render('single', {data: extendedData})
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