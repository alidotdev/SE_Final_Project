// Define Schema for the product here

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please add a title'],
    },
    description:{
        type: String,
        required: [true, 'Please add a description'],
    },
    price:{
        type: Number,
        required: [true, 'Please add a price'],
    },
    image:{
        type: String,
        required: [true, 'Please add an image'],
    },
    product_code:{
        type: String,
        required: [true, 'Please add a product_code'],
    },
    category:{
        type: String,
        required: [true, 'Please add a category'],
    },
    sub_category:{
        type: String,
        required: [true, 'Please add a sub sub_category'],
    },
    collect:{
        type: String,
        required: [true, 'Please add a '],
    },
    }
);

module.exports = mongoose.model('Product', productSchema);