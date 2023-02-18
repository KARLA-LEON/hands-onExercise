module.exports = app => {
    const steps = require("../controller/step.controller.js");
    var router = require("express").Router();
  
    // Create step
    router.post("/", steps.create);
  
    // Recover all steps
    router.get("/", steps.findAll);
  
    // Recover all complete steps
    router.get("/completed", steps.findAllCompleted);
  
    // Recover step by ID
    router.get("/:id", steps.findOne);
  
    // Update step by ID
    router.put("/:id", steps.update);
  
    // Delete step by ID
    router.delete("/:id", steps.delete);
  
    // Delete all steps
    router.delete("/", steps.deleteAll);
  
    app.use('/api/steps', router);
};