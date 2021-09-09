const Anuncio = require("../models/anuncios.model.js");


// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a usuario
    const anuncio = new Anuncio({
        descricao : req.body.descricao,
        valor : req.body.valor,
        categorias_idcategorias : req.body.idCategoria,
        nome : req.body.nome,
        userEmail : req.body.userEmail

    });

    Anuncio.create(anuncio, (err, data) => {
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




exports.createItem = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a usuario
    const anuncio = new Anuncio({
        descricao : req.body.descricao,
        valor : req.body.valor,
        categorias_idcategorias : req.body.idCategoria,
        nome : req.body.nome,
        userEmail : req.body.userEmail

    });
    Anuncio.create(anuncio, (err, insertId) => {
        if (err){
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu durante acriação."
            });
        } else{
            const item = {
                disponibilidade: req.body.disponibilidade,
                disponibilidadeentrega: req.body.disponibilidadeEntrega,
                anuncios_idanuncio: insertId

            }
            Anuncio.createItem(item,(err, data2) =>{
                if (err){
                    res.status(500).send({
                        message:
                            err.message || "Algum erro ocorreu durante a criação."
                    });
                }else{
                    res.send({
                        descricao : req.body.descricao,
                        valor : req.body.valor,
                        categorias_idcategorias : req.body.idCategoria,
                        nome : req.body.nome,
                        disponibilidade: req.body.disponibilidade,
                        disponibilidadeentrega: req.body.disponibilidadeEntrega,
                        userEmail : req.body.userEmail

                    });
                }
            })
        }
    });
};


exports.createServico = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a usuario
    const anuncio = new Anuncio({
        descricao : req.body.descricao,
        valor : req.body.valor,
        categorias_idcategorias : req.body.idCategoria,
        nome : req.body.nome,
        userEmail : req.body.userEmail

    });
    Anuncio.create(anuncio, (err, insertId) => {
        if (err){
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu durante acriação."
            });
        } else{
            const servico = {
                disponibilidaderealizacao: req.body.disponibilidadeRealizacao,
                anuncios_idanuncio: insertId

            }
            Anuncio.createServico(servico,(err, data2) =>{
                if (err){
                    res.status(500).send({
                        message:
                            err.message || "Algum erro ocorreu durante a criação."
                    });
                }else{
                    res.send({
                        descricao : req.body.descricao,
                        valor : req.body.valor,
                        categorias_idcategorias : req.body.idCategoria,
                        nome : req.body.nome,
                        disponibilidaderealizacao: req.body.disponibilidadeRealizacao,
                        userEmail : req.body.userEmail

                    });
                }
            })
        }
    });
};




exports.findAll  = (req, res) => {
    Anuncio.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.findAllItems  = (req, res) => {
    Anuncio.getAllItems((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.findAllServicos  = (req, res) => {
    Anuncio.getAllServices((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.findByCategory  = (req, res) => {
    const idCategory = req.params.idCategoria

    Anuncio.getAnuncioByIdCategoria( idCategory,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.findItemByCategory  = (req, res) => {
    const idCategory = req.params.idCategoria

    Anuncio.getItemByIdCategoria( idCategory,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};
exports.findServicoByCategory  = (req, res) => {
    const idCategory = req.params.idCategoria

    Anuncio.getServicoByIdCategoria( idCategory,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};


