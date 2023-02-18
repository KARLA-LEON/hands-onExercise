const db = require("../model");
const Step = db.steps;

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "(Step) El contenido no debe estar vacío" });
        return;
    }

    const step = new Step({
        // orderID: req.body.orderID,
        description: req.body.description,
        status: req.body.status ? req.body.status : false
    });

    step.save(step)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "(Step) Error durante la creación" });
        });
};

exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    // Tutorial.find(condition)
    Step.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error durante la consulta de registros (Step)"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Step.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "(Step) No se encontró el registro con id: " + id});
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "(Step) Error al recuperar registro con id: " + id});
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "(Step) Los datos actualizados no deben estar vacíos" });
    }
    
    const id = req.params.id;

    Step.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `(Step) No se puede actualizar o no se encuentra el registro con id: ${id}`
                });
            }
            else
                res.send({ message: "(Step) Actualización exitosa" });
        })
        .catch(err => {
            res.status(500).send({
                message: "(Step) Error al tratar de actualizar el registro con id: " + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Step.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `(Step) No se pudo eliminar o encontrar el registro con id: ${id}`
                });
            }
            else {
                res.send({ message: "(Step) Registro eliminado exitosamente" });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "(Step) No se pudo eliminar el registro con id: " + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Step.deleteMany({})
        .then(data => {
            res.send({
                message: data.deletedCount > 1 ? `(Step) ${data.deletedCount} registros eliminados exitosamente`
                        : data.deletedCount > 0 ? `(Step) 1 registro eliminado exitosamente`
                        : `(Step) 0 registros eliminados exitosamente`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "(Step) Error al eliminar registros"
            });
        });
};

exports.findAllCompleted = (req, res) => {
    Step.find({ status: true })  //agregar el orderID a partir de la solicitud para buscar steps relacionados y no los que sean
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "(Step) Error al recuperar registros completados"
        });
    });
};