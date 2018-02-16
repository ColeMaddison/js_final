'use strict';

// handling the requests to the database

// coonect mongoose and product model
const mongoose = require('mongoose');
require('../models/Product');

// set pointer to product model in var
const Product = mongoose.model('Product');

// connect to db
export function setUpConnection(){
    mongoose.connect(`mongodb://localhost/hillel_final`);
}

// get all products
export function listProducts() { 
    return Product.find();
}

// create and add products to db, creating instance of class Procuct
export function createProduct(data) { 
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
export function addReview(data) { 
    ///////////////////////////////////////////////////
}

// remove product
export function deleteProduct(id){
    return Product.findById(id).remove();
} 