// Define Schema for the cart here

const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user:{
        type: String,
        required: [true, 'Please pass email address of the user'],
    },
    productIDs:{
        type: Object,
        required: [true, 'Please pass productIDs'],
        default: undefined
    }
    
    }, {collection: 'carts'}
);

module.exports = mongoose.model('Cart', cartSchema);