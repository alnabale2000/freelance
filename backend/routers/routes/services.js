const express = require("express");

const {
    getServiceById,
    getAllServicesById,
    addNewService,
    getServicesByType,
} = require("./../controllers/services");

const servicesRouter = express.Router();

servicesRouter.get("/services/:id", getServiceById);
servicesRouter.get("/profile/:id", getAllServicesById);
servicesRouter.post("/services", addNewService);
servicesRouter.get("/:type", getServicesByType);

module.exports = servicesRouter;
