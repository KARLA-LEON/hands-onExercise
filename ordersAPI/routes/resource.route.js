module.exports = app => {
    const resources = require("../controller/resource.controller.js");

    var router = require("express").Router();

    router.get("/", resources.getAll);

    router.post("/", resources.create);

    router.get("/:id", resources.getById); 

    router.get("/:name", resources.getByName);
    
    router.put("/:id", resources.updateById);

    router.delete("/", resources.deleteAll);

    router.delete("/:id", resources.deleteById);

    app.use("/api/resources", router);
};