const db = require("../model");
const client = db.client;

exports.create = (req, res) => {
    if(!req.body.clientName){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    const client = new Client({
        clientName: req.body.name,
        rfc: req.body.rfc,
        email: req.body.email,
        phone: req.body.phone,
        blocked: false // All clients are not blocked by default
    });

    client.save(client).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the client"
        });
    });
}

exports.findAll = (req, res) => {
    Client.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving clients"
        });
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    Client.findById(id).then(data => {
        if(!data){
            res.status(404).send({ message: "Not found client with id: " + id });
        }else{
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Error retrieving client with id: " + id
        });
    });
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }

    const id = req.params.id;

    Client.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if(!data){
            res.status(404).send({
                message: `Cannot update client with id: ${id}. Maybe client was not found`
            });
        }else{
            res.send({ message: "Client was updated successfully" });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating client with id: " + id
        });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    Client.findByIdAndRemove(id).then(data => {
        if(!data){
            res.status(404).send({
                message: `Cannot delet client with id: ${id}. Maybe client was not found`
            });
        }else{
            res.send({
                message: "Client was deleted successfully"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete client with id: " + id
        });
    })
}

exports.deleteAll = (req, res) => {
    Client.deleteMany({}).then(data => {
        res.send({
            message: `${data.deletedCount} clients were deleted successfully`
        });
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all the clients"
        });
    });
}