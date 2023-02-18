module.exports = app => {

    const orders = require('../controller/order.controller.js');
    const router = require("express").Router();

    //Create an order
    router.post("/", orders.createOrder);

    //Get an order given the Id
    router.get("/:id", orders.getOrderByID);

    //Get all orders
    router.get("/", orders.getOrders);

    //Update an Order by ID
    router.put("/:id", orders.updateOrder);

    //Delete an Order given the ID
    router.delete("/:id", orders.deleteOrder);

    app.use('/api/orders', router)
}