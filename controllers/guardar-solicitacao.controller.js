const GuardarSolicitacao = require("../models/guardar-solicitacao.model");
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
    const guardarSolicitacao = new GuardarSolicitacao({
        quantidade : req.body.quantidade,
        solicitacao_idsolicitacao : req.body.idSolicitacao,
        anuncios_idanuncio : req.body.idAnuncio
    });

    GuardarSolicitacao.create(guardarSolicitacao, (err, data) => {
        if (err){
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu durante acriação."
            });
        } else{
            console.log(data);
            res.send({
                idGuardarSolicitacao : data.idGuardarSolicitacao,
                quantidade : data.quantidade,
                idSolicitacao : data.solicitacao_idsolicitacao,
                idAnuncio : data.anuncios_idanuncio,
            });
        }
    });
};

exports.findAll  = (req, res) => {
    GuardarSolicitacao.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.findGuardarSolicitacaoByEmail  = (req, res) => {
    const email = req.params.email
    GuardarSolicitacao.getGuardarSolicitationByEmail(email,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};
