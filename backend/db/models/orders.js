const mongoose = require("mongoose");

const orders = new mongoose.Schema({
    buyerId: { type: mongoose.Schema.Types.ObjectId },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Services" },
    image: { type: String }, // String, //{ type: Buffer, contentType: String },
    title: { type: String },
    price: { type: Number },
});

module.exports = mongoose.model("Orders", orders);
