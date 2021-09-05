const mongoose = require("mongoose");

const orders = new mongoose.Schema({
    buyerId: String, // { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Services" },
    image: { type: String }, // String, //{ type: Buffer, contentType: String },
    title: { type: String },
    price: { type: Number },
});

module.exports = mongoose.model("Orders", orders);
