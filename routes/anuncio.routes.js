const anuncioController = require("../controllers/anuncios.controller.js");

module.exports = app => {

    // Create a new Customer
    app.post("/anuncios/item", anuncioController.createItem);
    app.get("/anuncios/item", anuncioController.findAllItems);
    //
    //
    app.post("/anuncios/servico", anuncioController.createServico);
    app.get("/anuncios/servico", anuncioController.findAllServicos);
    //
    app.get("/anuncios", anuncioController.findAll);
    //
    app.get("/anuncios/:idCategoria", anuncioController.findByCategory);
    app.get("/anuncios/item/:idCategoria", anuncioController.findItemByCategory);
    app.get("/anuncios/servico/:idCategoria", anuncioController.findServicoByCategory);



};