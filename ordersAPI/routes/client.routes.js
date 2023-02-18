module.exports = app => {
    const clients = require("../controller/client.controller.js");

    var router = require("express").Router();

    // Create new client
    router.post("/", clients.create);

    // Find all clients
    router.get("/", clients.findAll);

    //Find one client by ID
    router.get("/:id", clients.findOne);

    //Update one client by ID
    router.put("/:id", clients.update);

    //Delete all clients
    router.delete("/:id", clients.delete);

    //Delete client by ID
    router.delete("/", clients.deleteAll);

    app.use("/api/clients", router);
}