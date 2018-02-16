'use strict';

// handling the requests to the database

// coonect mongoose and product model
const mongoose = require('mongoose');
require('../models/Product');

// set pointer to product model in var
const Product = mongoose.model('Product');

// connect to db
function setUpConnection(){
    mongoose.connect(`mongodb://localhost/hillel_final`);
}

// get all products
function listProducts() { 
    return Product.find();
}

// create and add products to db, creating instance of class Procuct
function createProduct(data) { 
    const product = new Product({
        title: data.title,
        description: data.description,
        category: data.category,
        price: data.price,
        color: data.price,
        size: data.size,
        tags: data.tags,
        fullDescription: data.fullDescription,
        addditionalInfo: data.addditionalInfo
    });
    return product.save(); 
}

// add review
function addReview(data) { 
    ///////////////////////////////////////////////////
}

// remove product
function deleteProduct(id){
    return Product.findById(id).remove();
} 

module.exports.setUpConnection = setUpConnection;
module.exports.listProducts = listProducts;
module.exports.createProduct = createProduct;
module.exports.addReview = addReview;
module.exports.deleteProduct = deleteProduct;