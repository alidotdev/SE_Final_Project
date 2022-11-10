const express = require('express')
const router = express.Router()

const {getProduct, setProduct, updateProduct, deleteProduct} = require('../controllers/productController')

// Import Product Controllers here and then route them as get, post, put or delete

router.get('/', getProduct)

router.post('/', setProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router 