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

exports.createConsumidor = (req, res) => {
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
    const consumidor = {
        usuario_email: usuario.email,
        cpf: req.body.cpf
    }

    Usuario.create(usuario, (err, data) => {
        if (err){
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu durante a criação."
            });
        } else{
            console.log(data);
            Usuario.createConsumidor(consumidor,(err, data2) =>{
                if (err){
                    res.status(500).send({
                        message:
                            err.message || "Algum erro ocorreu durante a criação."
                    });
                    //todo(): Usuario.delete(usuario)
                }else{
                    res.send(data);
                }
            })
        }
    });
};


exports.createProdutor = (req, res) => {
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
    const produtor = {
        usuario_email: usuario.email,
        cnpj: req.body.cnpj,
        local: req.body.local,
        fantasiaNome: req.body.fantasiaNome,
    }

    Usuario.create(usuario, (err, data) => {
        if (err){
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu durante a criação."
            });
        } else{
            console.log(data);
            Usuario.createProdutor(produtor,(err, data2) =>{
                if (err){
                    res.status(500).send({
                        message:
                            err.message || "Algum erro ocorreu durante a criação."
                    });
                    //todo(): Usuario.delete(usuario)
                }else{
                    res.send(data);
                }
            })
        }
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

exports.deleteUser  = (req, res) => {
    const email = req.params.email
    Usuario.delete(email, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.findConsumerByEmail  = (req, res) => {
    const email = req.params.email
    Usuario.getConsumerByEmail(email,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};
exports.findProducerByEmail  = (req, res) => {
    const email = req.params.email
    Usuario.getProducerByEmail(email,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};
exports.findUserByEmail  = (req, res) => {
    const email = req.params.email
    Usuario.getUserByEmail(email,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};