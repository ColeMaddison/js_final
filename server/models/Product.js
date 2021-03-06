'use strict';

// the model for the product
// importing mongoose package
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: { type: Number },
    title: { type: String },
    description : { type: String },
    category: { type: String },
    price: { type: Number },
    colors: [{ type: String }],
    sizes: [{ type: String }],
    tags: [{ type: String }],
    fullDescription: { type: String },
    additionalInfo: { type: String },
    link: { type: String },
    reviews: [{
        name: { type: String },
        text: { type: String },
        date: { type: Date },
        mark: { type: Number, min: 1, max: 2 }
    }]
});

mongoose.model('Product', ProductSchema);
