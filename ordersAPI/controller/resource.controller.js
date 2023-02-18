const db = require("../model");
const Resource = db.resource;

/* CREATE A RESOURCE METHOD */
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "The resource cannot be empty!"});
        return;
    };

    const resource = new Resource({
        name: req.body.name,
        description: req.body.description,
        url: req.body.url,
        updateDate: req.body.updateDate,
        size: req.body.size,
        format: req.body.format
    });

    resource.save(resource).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Hubo un problema al intentar realizar la consulta, intente de nuevo."
        });
    });
};

/* GET ALL RESOURCES */
exports.getAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } }: {};

    Resource.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Hubo un problema al intentar realizar la consulta, intente de nuevo."
            });
        });
};

/* GET RESOURCES BY ID */
exports.getById = (req, res) => {
    const id = req.params.id;

    Resource.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "No se encontró el elemento deseado " + id });
            else
                res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Hubo un problema al intentar realizar la consulta con este identificador, intente de nuevo."
            });
        });
};

exports.getByName = (req, res) => {
    Resource.find({ name: req.body.name })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hubo un problema al intentar realizar la consulta con este nombre, intente de nuevo."
            });
        });
};

/* UPDATE RESOURCE BY ID */
exports.updateById = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Los datos a actualizar no están disponibles o no han sido encontrados."
        });
    }

    const id = req.params.id;

    Resource.findByIdAndUpdate(id, req.body, { useFindAndModify : false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No se puede actualizar este recurso con este id=${id}. No se ha encontrado dicho recurso`
                });
            }
            else {
                res.send({ 
                    message: `Recurso actualizado con exito`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Hubo un problema al intentar realizar la consulta con este identificador ${id}, intente de nuevo.`
            });
        });
};

/* DELETE RESOURCE BY ID */
exports.deleteById = (req, res) => {
    const id = req.params.id;

    Resource.findByIdAndRemove(id, { useFindAndModify : false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No se puede eliminar el recurso con el id ${id}, porque no ha sido encontrado.`
                });
            } 
            else {
                res.send({
                    message: "El recurso se eliminó con éxito"
                });
            }
        })
        .catch( err => {
            res.status(500).send({
                message: `Hubo un problema al intentar realizar la eliminación deseada con este identificador ${id}, intente de nuevo.`
            });
        });
};

/* DELETE ALL RESOURCES */
exports.deleteAll = (req, res) => {
    Resource.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} elementos han sido eliminados con éxito.`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hubo un problema al intentar realizar la consulta, intente de nuevo."
            });
        });
};



