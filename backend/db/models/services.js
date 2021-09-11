const mongoose = require("mongoose");

const services = new mongoose.Schema({
    title: { type: String, required: true, required: true },
    deadLine: { type: String },
    price: { type: Number, required: true },
    details: { type: String },
    // userImage: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    catType: { type: String, required: true },
    image: String, //{ type: Buffer, contentType: String },
    // endBy: { type: String },
    time: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Services", services);
