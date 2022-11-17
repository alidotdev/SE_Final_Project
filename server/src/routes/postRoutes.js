// import express from 'express';
// import {getPosts, createUsers, getPostByEmail} from '../UserControllers/posts.js';

const express = require('express');
const {getPosts, createUsers, getPostByEmail} = require('../controllers/postController.js');

const router = express.Router();
router.get('/',getPosts);
router.post('/',createUsers);
router.get('/:Email',getPostByEmail)
// export default router;

module.exports = router;
