module.exports = app => {
    const clients = require("../controller/client.controller");

    var router = require("express").Router();

    router.post("/", clients.create);
    router.get("/", clients.findAll);
    router.get("/:id", clients.findOne);
    router.put("/:id", clients.update);
    router.delete("/:id", clients.delete);
    router.delete("/", clients.deleteAll);

    app.use("/clients", router);
}