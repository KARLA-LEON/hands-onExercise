module.exports = app => {
    const steps = require("../controller/step.controller.js");
    var router = require("express").Router();
  
    // Crear step
    router.post("/", steps.create);
  
    // Recuperar todos los steps
    router.get("/", steps.findAll);
  
    // Recuperar todos los steps completados
    router.get("/completed", steps.findAllCompleted);
  
    // Recuperar step por ID
    router.get("/:id", steps.findOne);
  
    // Actualizar step por ID
    router.put("/:id", steps.update);
  
    // Eliminar step por ID
    router.delete("/:id", steps.delete);
  
    // Eliminar todos los steps
    router.delete("/", steps.deleteAll);
  
    app.use('/api/steps', router);
};