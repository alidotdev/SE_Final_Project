// import express from 'express';
const express = require('express');

// import { getCollection} from '../UserControllers/Collections.js';

const { getCollection } = require('../controllers/collectionController.js');
const router = express.Router();


router.get('/',getCollection);


// export default router;
module.exports = router;