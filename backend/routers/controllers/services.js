const servicesModel = require("./../../db/models/services");

// });

const getServiceById = async (req, res) => {
    const _id = req.params.id;

    if (!_id) return res.status(404).json("not found");
    try {
        const result = await servicesModel
            .findOne({ _id })
            .populate("username", "username")
            // .populate("userImage", "userImage -_id")
            .exec();
        res.status(200).json(result);
    } catch (error) {
        throw new Error(error);
    }
};

const getAllServicesById = async (req, res) => {
    const _id = req.params.id;

    if (!_id) return res.status(404).json("not found");
    try {
        const result = await servicesModel.find({ username: _id });

        res.status(200).json(result);
    } catch (error) {
        throw new Error(error);
    }
};

const addNewService = async (req, res) => {
    const { title, deadLine, price, details, /* userImage*/ username, catType, image } = req.body;
    const newService = new servicesModel({
        title,
        deadLine,
        price,
        details,
        // userImage,
        username,
        catType,
        image,
    });

    try {
        const result = await newService.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(404).json(error);
    }
};

const getServicesByType = async (req, res) => {
    const type = req.params.type;
    try {
        const result = await servicesModel.find({ catType: type });
        res.json(result);
    } catch (error) {
        res.status(404).json(error);
    }
};

const search = async (req, res) => {
    const title = req.params.title;
    console.log("test");

    try {
        const result = await servicesModel.find({ title });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = {
    getServiceById,
    getAllServicesById,
    addNewService,
    getServicesByType,
    search,
};
