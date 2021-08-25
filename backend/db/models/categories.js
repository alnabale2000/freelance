const mongoose = require("mongoose");

const categories = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: Buffer, contentType: String },
});

module.exports = mongoose.model("Categories", categories);
