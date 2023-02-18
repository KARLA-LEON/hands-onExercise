module.exports = app => {

    const orders = require('../controller/order.controller.js');
    const router = require("express").Router();

    //Create an order
    router.post("/createAnOrder", orders.createOrder);

    //Get an order given the Id
    router.get("/getOrderByID", orders.getOrderByID);

    //Get all orders
    router.get("/getOrders", orders.getOrders);

    //Update an Order by ID
    router.put("/updateOrder", orders.updateOrder);

    //Delete an Order given the ID
    router.delete("/deleteOrder", orders.deleteOrder);

    app.use('/api/orders', router)
}