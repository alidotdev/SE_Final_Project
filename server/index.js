const express = require('express');
require('dotenv').config();
const colors = require('colors');
const mongoose = require('mongoose');
const connectDB = require('./src/configs/db');
const port = process.env.PORT || 8000;

const {errorHandler} = require('./src/middlewares/middleware')
const app = express()

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/product', require('./src/routes/productRoutes'))
app.use('/api/cart', require('./src/routes/cartRoutes'))
// app.listen(port, () => console.log('listening on port ' + port));

app.use(errorHandler) // Error Handlor

app.listen(port , () => console.log('Server started on port ' + port))