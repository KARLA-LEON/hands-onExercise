const db = require("../model");
const Order = db.orders;

exports.createOrder = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an Order
  const order =  new Order({
    description:  req.body.description,
    date:         req.body.date,
    status:       req.body.status,
    urgency:      req.body.urgency,
    authorID:     req.body.authorID
  });

  // Save Order in the database
  order
    .save(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });   
}

//Retrieve all Orders from the database 
exports.getOrders = async (req, res) => {
    try {
        const data = await Order.find();
        res.status(200).send(data);
      } catch (error) {
        res.status(500).send("Error retrieving data from database");
      }
}


//Find a single Order given the ID
exports.getOrderByID = (req, res) => {
    
    const id = req.params.id;

    Order.find({ id: req.body.id })
    .then(data => {
      if (!data)
          res.status(404).send({ message: "Order not found " + id });
      else
          res.send(data);
      })
    .catch(err => {
      res.status(500).send({
          message: err.message || "There was an error due the search given, try again."
      });
    });
}

//Update an order given the ID
exports.updateOrder = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
        message: "Los datos a actualizar no están disponibles o no han sido encontrados."
    });
}

const id = req.params.id;

Order.findByIdAndUpdate(id, req.body, { useFindAndModify : false})
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Can't update this order with the indicated id=${id}. Order was not found.`
            });
        }
        else {
            res.send({ 
                message: `Resource updated successfully.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `There was a problem when processing your order with this ${id}, try again.`
        });
    });

}

//Delete an Order given the ID
exports.deleteOrder = (req, res) => {

    const id = req.params.id;

    Order.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Order with id=${id}.!`
        });
      } else {
        res.send({
          message: "Order deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id
      });
    });
}

