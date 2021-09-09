const guardarSolicitacaoController = require("../controllers/guardar-solicitacao.controller.js");

module.exports = app => {

    // Create a new Customer
    app.post("/guardar-solicitacao/", guardarSolicitacaoController.create);

    app.get("/guardar-solicitacao/", guardarSolicitacaoController.findAll);

    app.get("/guardar-solicitacao/:email", guardarSolicitacaoController.findGuardarSolicitacaoByEmail);



};