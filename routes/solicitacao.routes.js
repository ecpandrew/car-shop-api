const solicitacaoController = require("../controllers/solicitacao.controller.js");

module.exports = app => {

    // Create a new Customer
    app.post("/solicitacao", solicitacaoController.create);

    app.get("/solicitacao", solicitacaoController.findAll);

    app.get("/solicitacao/:email", solicitacaoController.findSolicitacaoByEmail);


};