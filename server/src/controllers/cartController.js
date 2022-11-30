const asyncHandler = require('express-async-handler')

const cartModel = require('../models/cartModel')

// @desc Get Cart
// @route GET /api/cart:user
// @access Private


const getCart = asyncHandler (async (req, res) => { 
    // console.log(req.params.user)
    const cart = await cartModel.find({user: req.params.user})

    if(!cart){
        res.status(404);
        throw new Error('Cart not found')
    }
    res.status(200).json(cart)
    // res.send(req.params.user)
})

// @desc Set Cart
// @route POST /api/cart:cart
// @access Private

const setCart =asyncHandler( async (req, res) => { 
    console.log(req.body.user)
    console.log(req.body.productIDs)

    
    if (!req.body.user && !req.body.productIDs) {
        res.status(400)
        throw new Error('Please add all parameters')
    }
    const filter_dict = {user: req.body.user}
    
    // if (await cartModel.find({user: req.body.user}).limit(1).size() > 0) {
    if(cartModel.countDocuments(filter_dict)){                                                        // Update case
        console.log('Update case')
        cart = await cartModel.findOneAndUpdate({user : req.body.user}) 
        cart.productIDs = req.body.productIDs 
        res.status(200).json(cart)
    }
    else{         
        console.log('Create case')                                                                   // Insert case
    const cart = await cartModel.create({
        user: req.body.user,
        productIDs: req.body.prodectIDs,
        
    })
    res.status(200).json(cart)
}
    
})

// @desc Update products
// @route PUT /api/product/:id
// @access Private

// const updateProduct = asyncHandler( async (req, res) => { 
//     const product = await productModel.findById(req.params.id);

//     if(!product){
//         res.status(404);
//         throw new Error('Product not found')
//     }

//     const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//     });

//     res.status(200).json(updatedProduct)
// })

// @desc Delete Product
// @route DELETE /api/product/:id
// @access Private

// const deleteProduct = asyncHandler( async (req, res) => { 
//     const product = await productModel.findById(req.params.id);

//     if(!product){
//         res.status(404);
//         throw new Error('Product not found')
//     }

//     await product.remove(); 

//     res.status(200).json({id: req.params.id})
// })

module.exports = {
    getCart, 
    setCart,
    // updateProduct,
    // deleteProduct
}