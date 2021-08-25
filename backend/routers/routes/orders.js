const express = require("express");

const { createOrder, getOrdersById } = require("./../controllers/orders");

const ordersRouter = express.Router();

ordersRouter.post("/order/:id", createOrder);
ordersRouter.get("/orders/:id", getOrdersById);

module.exports = ordersRouter;
