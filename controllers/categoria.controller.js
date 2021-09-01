const Categoria = require("../models/categoria.model.js");


// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a usuario
    const categoria = new Categoria({
        nome: req.body.nome,
        descricao: req.body.descricao

    });

    Categoria.create(categoria, (err, data) => {
        if (err){
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu durante acriação."
            });
        } else{
            console.log(data);
            res.send(data);
        }
    });
};

exports.deleteCategory  = (req, res) => {
    const id = req.params.id
    Categoria.delete(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAll  = (req, res) => {
    Categoria.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

