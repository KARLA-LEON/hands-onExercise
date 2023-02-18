const db = require("../model");
const Order = db.orders;

exports.createOrder = (req, res) => {
   // Validate request
   if (!req.body.title) {
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
  })

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

    Order.findById(id, function (err, docs) {
      if (err) {
        res.status(500).send("Error retrieving data from database");
      } else {
        res.status(200).send(docs);
      }
    });

}

//Update an order given the ID
exports.updateOrder = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
          message: "No registres for the ID!"
        });
    }
    
    const id = req.params.id;

    Order.findByIdAndUpdate(id, req.body, function(err, res){
        if(err){
          res.status(500).send("Error retrieving data from database");
        }else{
          res.status(200).send(res);
        }
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

