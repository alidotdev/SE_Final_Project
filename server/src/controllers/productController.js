const asyncHandler = require('express-async-handler')

const productModel = require('../models/productModel')

// @desc Get Product
// @route GET /api/products
// @access Private

const getProduct = asyncHandler (async (req, res) => { 
    const products = await productModel.find()

    res.status(200).json(products)
})

// @desc Set Products
// @route POST /api/producst
// @access Private

const setProduct =asyncHandler( async (req, res) => { 
    if (!req.body.title && !req.body.description && !req.body.price && !req.body.image && !req.body.product_code && !req.body.category && !req.body.sub_category && !req.body.collection) {
        res.status(400)
        throw new Error('Please add complete fields')
    }
    const product = await productModel.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        product_code: req.body.product_code,
        category: req.body.category,
        sub_category: req.body.sub_category,
        collect: req.body.collect
    })
    res.status(200).json(product)
})

// @desc Update products
// @route PUT /api/product/:id
// @access Private

const updateProduct = asyncHandler( async (req, res) => { 
    const product = await productModel.findById(req.params.id);

    if(!product){
        res.status(404);
        throw new Error('Product not found')
    }

    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedProduct)
})

// @desc Delete Product
// @route DELETE /api/product/:id
// @access Private

const deleteProduct = asyncHandler( async (req, res) => { 
    const product = await productModel.findById(req.params.id);

    if(!product){
        res.status(404);
        throw new Error('Product not found')
    }

    await product.remove(); 

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getProduct, 
    setProduct,
    updateProduct,
    deleteProduct
}