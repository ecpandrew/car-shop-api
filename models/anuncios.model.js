const sql = require("../db.js");
const AnuncioModel = function(anuncio) {
    this.descricao = anuncio.descricao;
    this.valor = anuncio.valor;
    this.categorias_idcategorias = anuncio.categorias_idcategorias;
    this.nome = anuncio.nome;
    this.usuario_email = anuncio.userEmail;

};

AnuncioModel.create = (novoAnuncio, result) => {
    sql.query("INSERT INTO ANUNCIOS SET ?", novoAnuncio, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created novo Anuncio: ", novoAnuncio );
        result(null, res.insertId);
    });
};

AnuncioModel.createItem = (item, result) => {
    sql.query("INSERT INTO ITEM SET ?", item, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created anuncio tipo item: ",  item);
        result(null, item);
    });
};

AnuncioModel.createServico = (servico, result) => {
    sql.query("INSERT INTO SERVICO SET ?", servico, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created produtor usuario: ", servico );
        result(null, servico );
    });
};

AnuncioModel.getAll = result => {
    sql.query("SELECT idANUNCIO as idAnuncio," +
        " DESCRICAO AS descricao," +
        "VALOR as valor," +
        "CATEGORIAS_idCATEGORIAS AS idCategoria," +
        "USUARIO_EMAIL AS userEmail," +
        "NOME as nome FROM ANUNCIOS", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("categorias: ", res);
        result(null, res);
    });
};

AnuncioModel.getAllItems = result => {
    sql.query("SELECT idITEM as idItem," +
        "DISPONIBILIDADE AS disponibilidade," +
        "disponibilidadeENTREGA as disponibilidadeEntrega," +
        "ANUNCIOS_idANUNCIO AS idAnuncio FROM ITEM", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("categorias: ", res);
        result(null, res);
    });
};

AnuncioModel.getAllServices = result => {
    sql.query("SELECT idSERVICO AS idServico," +
        "disponibilidadeREALIZACAO as disponibilidadeRealizacao," +
        "ANUNCIOS_idANUNCIO AS idAnuncio FROM SERVICO", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("categorias: ", res);
        result(null, res);
    });
};

AnuncioModel.getAnuncioByIdCategoria = (idCategoria, result) => {
    sql.query("SELECT idANUNCIO as idAnuncio," +
        " DESCRICAO AS descricao," +
        "VALOR as valor," +
        "CATEGORIAS_idCATEGORIAS AS idCategoria," +
        "USUARIO_EMAIL AS userEmail," +
        "NOME as nome FROM ANUNCIOS " +
        "WHERE CATEGORIAS_idCATEGORIAS = "+sql.escape(idCategoria),
        (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        res.map((value,index)=>{
            Object.assign({}, res[index])
        })
        console.log("anuncios: ", res);
        result(null, res);
    });
};

AnuncioModel.getItemByIdCategoria = (idCategoria, result) => {
    sql.query("SELECT ITEM.idITEM as idItem," +
        "ITEM.DISPONIBILIDADE AS disponibilidade," +
        "ITEM.disponibilidadeENTREGA as disponibilidadeEntrega, " +
        "ITEM.ANUNCIOS_idANUNCIO AS idAnuncio, ANUNCIOS.USUARIO_EMAIL AS userEmail, ANUNCIOS.NOME AS nome, " +
        "ANUNCIOS.DESCRICAO AS descricao, ANUNCIOS.VALOR AS valor FROM ITEM " +
        "INNER JOIN ANUNCIOS ON ITEM.ANUNCIOS_idANUNCIO=ANUNCIOS.idANUNCIO "+
        "WHERE ANUNCIOS.CATEGORIAS_idCATEGORIAS = "+sql.escape(idCategoria),
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            res.map((value,index)=>{
                Object.assign({}, res[index])
            })
            console.log("itens: ", res);
            result(null, res);
        });
};

AnuncioModel.getServicoByIdCategoria = (idCategoria, result) => {
    sql.query("SELECT SERVICO.idSERVICO as idServico," +
        "SERVICO.DISPONIBILIDADEREALIZACAO AS disponibilidadeRealizacao," +
        "SERVICO.ANUNCIOS_idANUNCIO AS idAnuncio, ANUNCIOS.USUARIO_EMAIL AS userEmail, ANUNCIOS.NOME AS nome, ANUNCIOS.DESCRICAO AS descricao, ANUNCIOS.VALOR AS valor FROM SERVICO " +
        "INNER JOIN ANUNCIOS ON SERVICO.ANUNCIOS_idANUNCIO=ANUNCIOS.idANUNCIO "+
        "WHERE ANUNCIOS.CATEGORIAS_idCATEGORIAS = "+sql.escape(idCategoria),
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            res.map((value,index)=>{
                Object.assign({}, res[index])
            })
            console.log("SERVICOS: ", res);
            result(null, res);
        });
};

module.exports = AnuncioModel;