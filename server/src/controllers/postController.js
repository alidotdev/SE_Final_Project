// import PostUser from "../models/postUser.js";

const PostUser = require("../models/postUserModel.js");

const getPosts = async (req, res) => {
  try {
    const postUsers = await PostUser.find();
    res.status(200).json(postUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getPostByEmail = async (req, res) => {
  console.log(req.params.Email);
  const user = await PostUser.find({ Email: req.params.Email });
  
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json(user);
};
const createUsers = async (req, res) => {
  const { Email, Password } = req.body;
  const newUser = new PostUser({
    Email,
    Password,
  });
  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


module.exports = { getPosts, createUsers, getPostByEmail };
