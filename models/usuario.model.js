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
        delete novoUsuario.senha
        console.log("created usuario: ", novoUsuario );
        result(null, novoUsuario);
    });
};
UsuarioModel.delete = (email, result) => {
    sql.query("DELETE FROM USUARIO WHERE EMAIL = "+sql.escape(email), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Deleted rows usuario: ", res.affectedRows );
        result(null, "deleted");
    });
};
UsuarioModel.createConsumidor = (consumidor, result) => {
    sql.query("INSERT INTO comsumerUSER SET ?", consumidor, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        delete consumidor.id
        console.log("created consumer usuario: ",  consumidor);
        result(null, consumidor);
    });
};
UsuarioModel.createProdutor = (produtor, result) => {
    sql.query("INSERT INTO produtorUser SET ?", produtor, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created produtor usuario: ", produtor );
        result(null, produtor );
    });
};

UsuarioModel.getAll = result => {
    sql.query("SELECT email,nome,telefone FROM USUARIO", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("usuarios: ", res);
        result(null, res);
    });
};

UsuarioModel.getConsumerByEmail = (email, result) => {
    sql.query("SELECT cpf,usuario_email FROM comsumerUSER WHERE USUARIO_EMAIL = "+sql.escape(email), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        const user = Object.assign({}, res[0]);
        console.log("usuarios: ", user);
        result(null, user);
    });
};

UsuarioModel.getProducerByEmail = (email, result) => {
    sql.query("SELECT cnpj, fantasiaNome, local, usuario_email FROM produtorUser WHERE USUARIO_EMAIL = "+sql.escape(email), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        const user = Object.assign({}, res[0]);
        console.log("usuarios: ", user);
        result(null, user);
    });
};
UsuarioModel.getUserByEmail = (email, result) => {
    sql.query("SELECT email,nome, telefone FROM USUARIO WHERE email = "+sql.escape(email), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        const user = Object.assign({}, res[0]);

        console.log("usuario: ", user);
        result(null, user);
    });
};

module.exports = UsuarioModel;