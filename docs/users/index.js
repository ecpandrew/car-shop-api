
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
        }
    }
}