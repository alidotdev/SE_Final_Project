
// Imports 
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const colors = require('colors');
const mongoose = require('mongoose');
const connectDB = require('./src/configs/db');
const app = express()
const port = process.env.PORT || 8000;
const {errorHandler} = require('./src/middlewares/middleware')
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const stripe = require("stripe")("sk_test_51MCNmyE4XPO5iY4DMFPgucqgKztYCOF6aizWjXyv4qvH3BdXPAa7CVrugJeySrklu0GCUzh7e2SD1b6SkCxepMMu00W1TnFULM");

app.use('/cart', require('./src/routes/cartRoutes'))
app.use('/collection', require('./src/routes/collectionRoutes'))
app.use('/post', require('./src/routes/postRoutes'))
app.use('/product', require('./src/routes/productRoutes'))
app.use('/subcat', require('./src/routes/subCategoryRoutes'))
app.use('/payment', require('./src/routes/paymentRoute'))

// app.listen(port, () => console.log('listening on port ' + port));

app.use(errorHandler) // Error Handlor
app.listen(port , () => console.log('Server started on port ' + port))