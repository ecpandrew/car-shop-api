const sql = require("../db.js");

const SolicitacaoModel = function(solicitation) {
    this.data = new Date();
    this.usuario_email = solicitation.usuario_email;
};

SolicitacaoModel.create = (novaSolicitacao, result) => {
    sql.query("INSERT INTO SOLICITACAO SET ?", novaSolicitacao, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created solicitation: ", novaSolicitacao );
        result(null, novaSolicitacao);
    });
};

SolicitacaoModel.getAll = result => {
    sql.query("SELECT idSOLICITACAO as id, DATA as date, USUARIO_EMAIL as email FROM SOLICITACAO", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("usuarios: ", res);
        result(null, res);
    });
};

SolicitacaoModel.getSolicitationByEmail = (email, result) => {
    sql.query("SELECT idSOLICITACAO as id, DATA as date, USUARIO_EMAIL as email FROM SOLICITACAO WHERE USUARIO_EMAIL = "+sql.escape(email), (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        res.map((value,index)=>{
            Object.assign({}, res[index])
        })
        console.log("solicitacoes: ", res);
        result(null, res);
    });
};

module.exports = SolicitacaoModel;