// import mongoose from 'mongoose';
const mongoose = require('mongoose')


const {Schema} = mongoose;
const subCatSchema = new Schema({
    title: String,
    Category: String,
}, {collection: 'SubCategories'}); 

// export default SubCategories;
module.exports = mongoose.model('SubCategories',subCatSchema);;