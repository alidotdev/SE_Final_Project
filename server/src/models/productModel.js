// import mongoose from "mongoose";
const mongoose = require('mongoose');

const { Schema } = mongoose;
const postProducts = new Schema({
  Title: String,
  Price: Number,
  Description: String,
  Code: String,
  selectedFile: String,
  Category: String,
  SubCategory: String,
  Collection: String,
});


module.exports =  mongoose.model("postProduct", postProducts);

// export default postProduct;


// Define Schema for the product here

// const mongoose = require('mongoose');

// const productSchema = mongoose.Schema({
//     title:{
//         type: String,
//         required: [true, 'Please add a title'],
//     },
//     description:{
//         type: String,
//         required: [true, 'Please add a description'],
//     },
//     price:{
//         type: Number,
//         required: [true, 'Please add a price'],
//     },
//     image:{
//         type: String,
//         required: [true, 'Please add an image'],
//     },
//     product_code:{
//         type: String,
//         required: [true, 'Please add a product_code'],
//     },
//     category:{
//         type: String,
//         required: [true, 'Please add a category'],
//     },
//     sub_category:{
//         type: String,
//         required: [true, 'Please add a sub sub_category'],
//     },
//     collect:{
//         type: String,
//         required: [true, 'Please add a '],
//     },
//     }
// );


