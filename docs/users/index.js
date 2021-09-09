
const createConsumerUser = require('./create-consumer-user');
const createProducerUser = require('./create-producer-user');
const getAllUser = require('./get-all-user');
const getConsumerByEmail = require('./get-consumer-email');
const getProducerByEmail = require('./get-producer-email');
const deleteUser = require('./delete-user');
const getUserByEmail = require('./get-single-user');



const createCategory = require("../category/create-category");
const getAllCategory = require('../category/get-all-category');
const deleteCategory = require('../category/delete-category');


const createSolicitation = require("../solicitation/create-solicitation");
const getAllSolicitation = require('../solicitation/get-all-soliciation');
const getSolicitationByEmail = require('../solicitation/get-solicitation-email');

const createItem = require("../anuncio/create-item");
const createService = require("../anuncio/create-service");
const getAllAnuncios = require("../anuncio/get-all-anuncios");
const getAllItens = require("../anuncio/get-all-itens");

const getAllServices = require("../anuncio/get-all-service");
const getAnuncioByCategoryId = require("../anuncio/get-anuncio-by-category");
const getItemByCategoryId = require("../anuncio/get-item-by-category");
const getServiceByCategoryId = require("../anuncio/get-service-by-category");


const getAllGuardarSolictacao = require("../guardar-solicitacao/get-all-guardar-solitacao");
const getAllGuardarSolictacaoByEmail = require("../guardar-solicitacao/get-all-guardar-solitacao-by-email");
const createGuardarSolcitacao = require("../guardar-solicitacao/guardar-solicitacao");


module.exports = {
    paths:{
        '/usuarios/consumidor':{
            ...createConsumerUser
        },
        '/usuarios/produtor':{
            ...createProducerUser
        },
        '/usuarios/all':{
            ...getAllUser
        },
        '/usuarios/{email}':{
            ...getUserByEmail,
            ...deleteUser
        },
        '/usuarios/consumidor/{email}':{
            ...getConsumerByEmail
        },
        '/usuarios/produtor/{email}':{
            ...getProducerByEmail,
        },


        '/categorias':{
            ...createCategory,
            ...getAllCategory,
        },
        '/categorias/{id}':{
            ...deleteCategory,
        },

        '/solicitacao':{
            ...getAllSolicitation,
            ...createSolicitation,
        },
        '/solicitacao/{email}':{
            ...getSolicitationByEmail,
        },



        '/anuncios/item':{
            ...createItem,
            ...getAllItens,
        },
        '/anuncios/servico':{
            ...createService,
            ...getAllServices
        },
        '/anuncios':{
            ...getAllAnuncios,
        },
        '/anuncios/{category}':{
            ...getAnuncioByCategoryId,
        },
        '/anuncios/item/{category}':{
            ...getItemByCategoryId,
        },
        '/anuncios/servico/{category}':{
            ...getServiceByCategoryId,
        },

        '/guardar-solicitacao':{
            ...createGuardarSolcitacao,
            ...getAllGuardarSolictacao
        },
        '/guardar-solicitacao/{email}':{
            ...getAllGuardarSolictacaoByEmail,
        },


    }
}