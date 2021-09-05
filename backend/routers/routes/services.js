const express = require("express");

const {
    getServiceById,
    getAllServicesById,
    addNewService,
    getServicesByType,
    search,
} = require("./../controllers/services");

const servicesRouter = express.Router();

servicesRouter.get("/services/:id", getServiceById);
servicesRouter.get("/user/:id", getAllServicesById);
servicesRouter.post("/addService", addNewService);
servicesRouter.get("/:type", getServicesByType);
servicesRouter.get("/service/:title", search);

module.exports = servicesRouter;
