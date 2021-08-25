const categoriesModel = require("./../../db/models/categories");

const getAllCategories = async (req, res) => {
    try {
        const result = await categoriesModel.find({});
        res.json(result);
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    getAllCategories,
};
