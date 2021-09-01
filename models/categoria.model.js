const sql = require("../db.js");

const CategoriaModel = function(category) {
    this.nome = category.nome;
    this.descricao = category.descricao;
};

CategoriaModel.create = (novaCategoria, result) => {
    sql.query("INSERT INTO CATEGORIAS SET ?", novaCategoria, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created category: ", novaCategoria );
        result(null, novaCategoria);
    });
};

CategoriaModel.delete = (id, result) => {
    sql.query("DELETE FROM CATEGORIAS WHERE idCATEGORIAS = "+sql.escape(id), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Deleted rows category: ", res.affectedRows );
        result(null, "deleted");
    });
};

CategoriaModel.getAll = result => {
    sql.query("SELECT idCATEGORIAS as id,nome,descricao FROM CATEGORIAS", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("categorias: ", res);
        result(null, res);
    });
};

module.exports = CategoriaModel;