const express = require("express");

const { createNewAccount, getUserDataById } = require("./../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/users", createNewAccount);
usersRouter.get("/users/:id", getUserDataById);

module.exports = usersRouter;
