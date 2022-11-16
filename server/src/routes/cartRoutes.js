const express = require('express')
const router = express.Router()

const {getCart, setCart} = require('../controllers/cartController')

// Import Cart Controllers here and then route them as get, post, put or delete

router.get('/:user', getCart)

router.post('/', setCart)

// router.put('/:id', updateProduct)

// router.delete('/:id', deleteProduct)

module.exports = router 