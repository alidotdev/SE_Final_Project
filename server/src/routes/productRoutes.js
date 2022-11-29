const express = require('express')
const router = express.Router()

// const {getProduct, setProduct, updateProduct, deleteProduct} = require('../controllers/productController')

// // Import Product Controllers here and then route them as get, post, put or delete

// router.get('/', getProduct)

// router.post('/', setProduct)

// router.put('/:id', updateProduct)

// router.delete('/:id', deleteProduct)

// module.exports = router

// import express from 'express';
// import { createPosts,getPosts,deleteProducts,updatePost } from '../UserControllers/Products.js';

const { createPosts,getPosts,deleteProducts,updatePost } = require('../controllers/productController');
router.get('/',getPosts);
router.post('/',createPosts);
router.delete('/:id',deleteProducts);
router.patch('/:id', updatePost);
// export default router;
module.exports = router;