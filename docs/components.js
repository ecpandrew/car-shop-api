module.exports = {
    components: {
        schemas: {

            // User model
            User: {
                type: "object", // data type
                properties: {
                    email: {
                        type: "string", // data-type
                        description: "Email do usuário", // desc
                        example: "usuario@gmail.com", // example of an id
                    },
                    senha: {
                        type: "string", // data-type
                        description: "Senha do usuário", // desc
                        example: "password", // example of a title
                    },
                    nome: {
                        type: "string", // data type
                        description: "Nome completo do usuário", // desc
                        example: "John Doe", // example of a completed value
                    },
                    telefone: {
                        type: "string", // data type
                        description: "Telefone de contato do usuário", // desc
                        example: "(98)984917794", // example of a completed value
                    },
                },
            },
            ConsumerUser: {
                type: "object", // data type
                properties: {
                    email: {
                        type: "string", // data-type
                        description: "Email do usuário", // desc
                        example: "usuario@gmail.com", // example of an id
                    },
                    senha: {
                        type: "string", // data-type
                        description: "Senha do usuário", // desc
                        example: "password", // example of a title
                    },
                    nome: {
                        type: "string", // data type
                        description: "Nome completo do usuário", // desc
                        example: "John Doe", // example of a completed value
                    },
                    telefone: {
                        type: "string", // data type
                        description: "Telefone de contato do usuário", // desc
                        example: "(98)984917794", // example of a completed value
                    },
                    cpf: {
                        type: "string", // data type
                        description: "cpf", // desc
                        example: "02091775683", // example of a completed value
                    },
                },
            },
            ProducerUser: {
                type: "object", // data type
                properties: {
                    email: {
                        type: "string", // data-type
                        description: "Email do usuário", // desc
                        example: "usuario@gmail.com", // example of an id
                    },
                    senha: {
                        type: "string", // data-type
                        description: "Senha do usuário", // desc
                        example: "password", // example of a title
                    },
                    nome: {
                        type: "string", // data type
                        description: "Nome completo do usuário", // desc
                        example: "John Doe", // example of a completed value
                    },
                    telefone: {
                        type: "string", // data type
                        description: "Telefone de contato do usuário", // desc
                        example: "(98)984917794", // example of a completed value
                    },
                    cnpj: {
                        type: "string", // data type
                        description: "cnpj", // desc
                        example: "02091775683", // example of a completed value
                    },
                    fantasiaNome: {
                        type: "string", // data type
                        description: "Nome Fantasia", // desc
                        example: "Serviços Diversos LTDA", // example of a completed value
                    },
                    local: {
                        type: "string", // data type
                        description: "Lozalização", // desc
                        example: "Avenida Litoranea, Numero 44", // example of a completed value
                    },
                },
            },
            Consumer: {
                type: "object", // data type
                properties: {
                    usuario_email: {
                        type: "string", // data-type
                        description: "Email do usuário", // desc
                        example: "usuario@gmail.com", // example of an id
                    },
                    cpf: {
                        type: "string", // data type
                        description: "cpf", // desc
                        example: "02091775683", // example of a completed value
                    },
                },
            },
            Producer: {
                type: "object", // data type
                properties: {
                    usuario_email: {
                        type: "string", // data-type
                        description: "Email do usuário", // desc
                        example: "usuario@gmail.com", // example of an id
                    },
                    cnpj: {
                        type: "string", // data type
                        description: "cpf", // desc
                        example: "02091775683", // example of a completed value
                    },
                    fantasiaNome: {
                        type: "string", // data type
                        description: "Nome Fantasia", // desc
                        example: "Serviços Diversos LTDA", // example of a completed value
                    },
                    local: {
                        type: "string", // data type
                        description: "Lozalização", // desc
                        example: "Avenida Litoranea, Numero 44", // example of a completed value
                    },
                },
            },
            UserNoPass: {
                type: "object", // data type
                properties: {
                    email: {
                        type: "string", // data-type
                        description: "Email do usuário", // desc
                        example: "usuario@gmail.com", // example of an id
                    },
                    nome: {
                        type: "string", // data type
                        description: "Nome completo do usuário", // desc
                        example: "John Doe", // example of a completed value
                    },
                    telefone: {
                        type: "string", // data type
                        description: "Telefone de contato do usuário", // desc
                        example: "(98)984917794", // example of a completed value
                    },
                },
            },
            Category: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "integer", // data type
                        description: "ID da Categoria", // desc
                        example: "1", // example of a completed value
                    },
                    nome: {
                        type: "string", // data type
                        description: "Nome da Categoria", // desc
                        example: "Peças de Carro", // example of a completed value
                    },
                    descricao: {
                        type: "string", // data type
                        description: "Descrição categoria", // desc
                        example: "Categorias para varios tipos de péças", // example of a completed value
                    },
                },
            },
            Solicitation: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "integer", // data type
                        description: "ID da Solicitacao", // desc
                        example: "1", // example of a completed value
                    },
                    date: {
                        type: "string", // data type
                        description: "data de criacao", // desc
                        example: "2021-09-01T03:00:00.000Z", // example of a completed value
                    },
                    email: {
                        type: "string", // data type
                        description: "Email do usuario criador da solicitacao", // desc
                        example: "email@gmail.com", // example of a completed value
                    }
                },
            },
            SolicitationOnlyEmail: {
                type: "object", // data type
                properties: {

                    email: {
                        type: "string", // data type
                        description: "Email do usuario criador da solicitacao", // desc
                        example: "email@gmail.com", // example of a completed value
                    }
                },
            },
            // error model
            Error: {
                type: "object", //data type
                properties: {
                    message: {
                        type: "string", // data type
                        description: "Error message", // desc
                        example: "Not found", // example of an error message
                    },
                    internal_code: {
                        type: "string", // data type
                        description: "Error internal code", // desc
                        example: "Invalid parameters", // example of an error internal code
                    },
                },
            },
        },
    },
};