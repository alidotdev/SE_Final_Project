// import mongoose from 'mongoose';

const mongoose = require('mongoose');
const {Schema} = mongoose;
const postSchema = new Schema({
    Email: String,
    Password: String,
}); 
module.exports =  mongoose.model('PostUser',postSchema);
// export default PostUser;