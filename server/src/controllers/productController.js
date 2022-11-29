// import postProduct from "../models/Products.js";
// import mongoose from "mongoose";
const mongoose = require('mongoose')
const postProduct = require("../models/productModel.js");
const asyncHandler = require('express-async-handler')

//Get Products by Collection
const getProductByCollection = asyncHandler(async (req, res) => { 
  const products = await postProduct.find({Collection: req.params.coll ,Category: req.params.Cat,SubCategory: req.params.SubCat})
  if(!products){
      res.status(404);
      throw new Error('Products not found')
  }
  res.status(200).json(products)
})



// Get Products by ID
const getProductsByID = async (req, res) => {

  // console.log(req.params
  var ids = req.params.ids.split(',');

  if (ids.length > 0 )
  {
    const products = []
    for (const id of ids)
    {
      try {
        // console.log(id);
        const product = await postProduct.findById(id);
        products.push(product)
      } catch (err) {
        res.status(404).json({message: err.message});
        // return ;
      }
    }
    res.status(200).json(products);
  }
  else
  {
    console.log('Pass id to get product');
    res.status(404).json({message: "Pass array ids to get product"});
    // return;
  }
  
};


//Get Products
const getPosts = async (req, res) => {
  
  try {
    const post = await postProduct.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


//Create Products
const createPosts = async (req, res) => {
  const {
    Title,
    Price,
    Description,
    Code,
    selectedFile,
    Category,
    SubCategory,
    Collection,
  } = req.body;
  const newProducts = new postProduct({
    Title,
    Price,
    Description,
    Code,
    selectedFile,
    Category,
    SubCategory,
    Collection,
  });
  try {
    await newProducts.save();
    res.status(201).json(newProducts);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
//Delete Products
const deleteProducts = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await postProduct.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully." });
};

//Update Products
const updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    Title,
    Price,
    Description,
    Code,
    selectedFile,
    Category,
    SubCategory,
    Collection,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    Title,
    Price,
    Description,
    Code,
    selectedFile,
    Category,
    SubCategory,
    Collection,
  };

  await postProduct.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};



// module.exports = { getPosts, createPosts, deleteProducts, updatePost , getProductByCollection};

module.exports = { getPosts, createPosts, deleteProducts, updatePost , getProductsByID};




// My api's for product 
// const asyncHandler = require('express-async-handler')

// const productModel = require('../models/productModel')

// // @desc Get Cart of specific User / Email
// // @route GET /api/cart:email
// // @access Private

// const getProduct = asyncHandler (async (req, res) => { 
//     const products = await productModel.find()

//     res.status(200).json(products)
// })

// // @desc Set Products
// // @route POST /api/producst
// // @access Private

// const setProduct =asyncHandler( async (req, res) => { 
//     if (!req.body.title && !req.body.description && !req.body.price && !req.body.image && !req.body.product_code && !req.body.category && !req.body.sub_category && !req.body.collection) {
//         res.status(400)
//         throw new Error('Please add complete fields')
//     }
//     const product = await productModel.create({
//         title: req.body.title,
//         description: req.body.description,
//         price: req.body.price,
//         image: req.body.image,
//         product_code: req.body.product_code,
//         category: req.body.category,
//         sub_category: req.body.sub_category,
//         collect: req.body.collect
//     })
//     res.status(200).json(product)
// })

// // @desc Update products
// // @route PUT /api/product/:id
// // @access Private

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

// // @desc Delete Product
// // @route DELETE /api/product/:id
// // @access Private

// const deleteProduct = asyncHandler( async (req, res) => { 
//     const product = await productModel.findById(req.params.id);

//     if(!product){
//         res.status(404);
//         throw new Error('Product not found')
//     }

//     await product.remove(); 

//     res.status(200).json({id: req.params.id})
// })

// module.exports = {
//     getProduct, 
//     setProduct,
//     updateProduct,
//     deleteProduct
// }
