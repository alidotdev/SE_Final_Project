// import SubCategories from "../models/subCat.js";

const SubCategories = require("../models/subCatModel.js");

const getSubCat = async (req, res) => {
  try {
    const getSubCategories = await SubCategories.find();
    res.status(200).json(getSubCategories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {  getSubCat };