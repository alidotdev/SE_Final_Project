// import Collection from "../models/Collection.js";

const Collection = require("../models/CollectionModel.js");

const getCollection = async (req, res) => {
  try {
    const getCol = await Collection.find();
    res.status(200).json(getCol);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getCollection };