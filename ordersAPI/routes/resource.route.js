module.exports = app => {
    const resources = require("../controller/resource.controller.js");

    var router = require("express").Router();

    // Get all resources
    router.get("/", resources.getAll);

    // Create an resource
    router.post("/", resources.create);

    // Get resource by ID
    router.get("/:id", resources.getById); 

    // Get resource by name
    router.get("/:name", resources.getByName);
    
    // Update resource by name
    router.put("/:id", resources.updateById);

    // Delete all resources
    router.delete("/", resources.deleteAll);

    // Delete resource by ID
    router.delete("/:id", resources.deleteById);

    app.use("/api/resources", router);
};