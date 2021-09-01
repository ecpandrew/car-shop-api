const categoriaController = require("../controllers/categoria.controller.js");

module.exports = app => {

    // Create a new Customer
    app.post("/categorias", categoriaController.create);

    app.get("/categorias", categoriaController.findAll);

    app.delete("/categorias/:id", categoriaController.deleteCategory);


};