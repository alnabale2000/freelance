const mongoose = require("mongoose");

const categories = new mongoose.Schema({
    title: { type: String, required: true },
    image: String,
});

module.exports = mongoose.model("Categories", categories);
