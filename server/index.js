const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const colors = require('colors');
const mongoose = require('mongoose');
const connectDB = require('./src/configs/db');
const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const port = process.env.PORT || 8000;
const {errorHandler} = require('./src/middlewares/middleware')
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/cart', require('./src/routes/cartRoutes'))
app.use('/collection', require('./src/routes/collectionRoutes'))
app.use('/post', require('./src/routes/postRoutes'))
app.use('/product', require('./src/routes/productRoutes'))
app.use('/subcat', require('./src/routes/subCategoryRoutes'))
// app.listen(port, () => console.log('listening on port ' + port));

app.use(errorHandler) // Error Handlor

app.listen(port , () => console.log('Server started on port ' + port))