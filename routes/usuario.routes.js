module.exports = app => {
    const usuarios = require("../controllers/usuario.controller.js");

    // Create a new Customer
    app.post("/usuarios", usuarios.create);

    // Retrieve all Customers
    app.get("/usuarios/all", usuarios.findAll);




};