// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const {Schema} = mongoose;
const collectionSchema = new Schema({
    title: String,
    Type: String,
}, {collection: 'Collection'}); 
const Collection = mongoose.model('Collection',collectionSchema);
// export default Collection;

module.exports = Collection;