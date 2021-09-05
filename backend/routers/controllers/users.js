const usersModel = require("./../../db/models/users");

const createNewAccount = async (req, res) => {
    const { username, /*userImage*/ age, country, email, password, aboutUser } = req.body;

    const user = new usersModel({
        username,
        // userImage,
        age,
        country,
        email,
        password,
        aboutUser,
    });

    try {
        const result = await user.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(404).json("Failed to create Account");
    }
};

const getUserDataById = async (req, res) => {
    const _id = req.params.id;

    const result = await usersModel.find({ _id });
    res.status(200).json(result);
};

module.exports = {
    createNewAccount,
    getUserDataById,
};
