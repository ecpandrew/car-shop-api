const usuariosController = require("../controllers/usuario.controller.js");

module.exports = app => {

    // Create a new Customer
    app.post("/usuarios/consumidor", usuariosController.createConsumidor);
    app.post("/usuarios/produtor", usuariosController.createProdutor);
    app.delete("/usuarios/:email", usuariosController.deleteUser);
    app.get("/usuarios/all", usuariosController.findAll);
    app.get("/usuarios/consumidor/:email", usuariosController.findConsumerByEmail);
    app.get("/usuarios/produtor/:email", usuariosController.findProducerByEmail);
    app.get("/usuarios/:email", usuariosController.findUserByEmail);

    app.post("/login", usuariosController.userLogIn);
    app.get("/login", usuariosController.userGetLogIn);



};