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
                required: [true , 'Please add product ID'],

            },
            quantity:
            {
                type: Number,
                required: [true , 'Please add quantity of product'],
            }
            // required: [true, 'Please add products to add in cart'],
        },
        
    ], 
        
    
    }, {collection: 'carts'}
);

module.exports = mongoose.model('Cart', cartSchema);