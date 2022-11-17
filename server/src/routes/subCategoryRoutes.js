// import express from 'express';
const express = require('express');


// import { getSubCat } from '../UserControllers/subCategories.js';

const { getSubCat } = require('../controllers/subCategorieController.js');
const router = express.Router();
router.get('/',getSubCat)
// export default router;
module.exports = router;