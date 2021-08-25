const mongoose = require("mongoose");

const services = new mongoose.Schema({
    title: { type: String, required: true },
    deadLine: { type: String },
    price: { type: Number, required: true },
    details: { type: String },
    // comments:{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' },
    userImage: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    catType: { type: String, required: true },
    image: String, //{ type: Buffer, contentType: String },
    time: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Services", services);
