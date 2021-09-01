const Solicitacao = require("../models/solicitacao.model");


// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a usuario
    const solicitacao = new Solicitacao({
        usuario_email: req.body.email
    });

    Solicitacao.create(solicitacao, (err, data) => {
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

exports.findAll  = (req, res) => {
    Solicitacao.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.findSolicitacaoByEmail  = (req, res) => {
    const email = req.params.email
    Solicitacao.getSolicitationByEmail(email,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};