const sql = require("../db.js");

const GuardarSolicitacaoModel = function(guardarSolicitation) {

    this.quantidade = guardarSolicitation.quantidade;
    this.solicitacao_idsolicitacao = guardarSolicitation.solicitacao_idsolicitacao;
    this.anuncios_idanuncio = guardarSolicitation.anuncios_idanuncio;

};

GuardarSolicitacaoModel.create = (novaGuardarSolicitation, result) => {
    sql.query("INSERT INTO GUARDARSOLICITAO SET ?", novaGuardarSolicitation, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created guardarSolicitation: ", novaGuardarSolicitation );
        result(null, novaGuardarSolicitation);
    });
};

GuardarSolicitacaoModel.getAll = result => {
    sql.query("SELECT idGUARDARSOLICITAO as idGuardarSolicitacao, " +
        "QUANTIDADE as quantidade, SOLICITACAO_idSOLICITACAO " +
        "as idSolicitacao, ANUNCIOS_idANUNCIO as idAnuncio FROM GUARDARSOLICITAO", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("solicitacoes guardadas: ", res);
        result(null, res);
    });
};

GuardarSolicitacaoModel.getGuardarSolicitationByEmail = (email, result) => {
    sql.query("SELECT idGUARDARSOLICITAO as idGuardarSolicitacao," +
        "QUANTIDADE as quantidade, SOLICITACAO_idSOLICITACAO" +
        " as idSolicitacao, ANUNCIOS_idANUNCIO as idAnuncio " +
        "FROM GUARDARSOLICITAO WHERE SOLICITACAO_idSOLICITACAO IN (SELECT idSOLICITACAO FROM SOLICITACAO WHERE USUARIO_EMAIL="+sql.escape(email)+")", (err, res) => {
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

module.exports = GuardarSolicitacaoModel;