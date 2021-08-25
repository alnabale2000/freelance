const express = require("express");
const { getAllCategories } = require("./../controllers/categories");

const categoriesRouter = express.Router();

//Routers

categoriesRouter.get("/", getAllCategories);

module.exports = categoriesRouter;
