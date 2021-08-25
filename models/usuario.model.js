const sql = require("../db.js");

const UsuarioModel = function(customer) {
    this.email = customer.email;
    this.senha = customer.senha;
    this.nome = customer.nome;
    this.telefone = customer.telefone;
};

UsuarioModel.create = (novoUsuario, result) => {
    sql.query("INSERT INTO USUARIO SET ?", novoUsuario, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created usuario: ", { id: res.insertId, ...novoUsuario });
        result(null, { id: res.insertId, ...novoUsuario });
    });
};

UsuarioModel.getAll = result => {
    sql.query("SELECT EMAIL,NOME, TELEFONE FROM USUARIO", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("usuarios: ", res);
        result(null, res);
    });
};

module.exports = UsuarioModel;