const Usuario = require("../models/usuario.model.js");


// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a usuario
    const usuario = new Usuario({
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        telefone: req.body.telefone

    });

    Usuario.create(usuario, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu durante acriação."
            });
        else res.send(data);
    });
};



// Retrieve all Customers from the database.
exports.findAll  = (req, res) => {
    Usuario.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};