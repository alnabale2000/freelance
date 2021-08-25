const ordersModel = require("./../../db/models/orders");
const servicesModel = require("./../../db/models/services");

const createOrder = async (req, res) => {
    const _id = req.params.id;
    if (!_id) return res.status(404).json("not found");
    try {
        const result = await servicesModel
            .findOne({ _id })
            .populate("userImage", "userImage -_id")
            .exec();
        // res.status(200).json(result);

        const { title, price, username, image } = result;

        const newOrder = new ordersModel({
            sellerId: username,
            title,
            price,
            image,
        });

        const order = await newOrder.save();
        res.status(201).json(order);
    } catch (error) {
        throw new Error(error);
    }
};

const getOrdersById = async (req, res) => {
    const _id = req.params.id;
    try {
        const result = await ordersModel.find({ sellerId: _id });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = {
    createOrder,
    getOrdersById,
};
