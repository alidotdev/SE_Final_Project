// Define Schema for the cart here

const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user:{
        type: String,
        required: [true, 'Please pass email address of the user'],
    },
    products:
    [
        {
            productID: 
            {   
                type: String,
            },
            quantity:
            {
                type: Number,
            }
        }
    ]
    
    }, {collection: 'carts'}
);

module.exports = mongoose.model('Cart', cartSchema);