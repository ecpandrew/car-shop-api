module.exports = {
    // method of operation
    get: {
        tags: ["Guardar Solicitacao"], // operation's tag.
        description: "Get a list of all GuardarSolicitacao By User Email", // operation's desc.
        operationId: "getGuardarSolicitacaoByEmail", // unique operation id.
        parameters: [
            {
            name: "email", // name of the param
            in: "path", // location of the param
            required: true, // Mandatory param
            description: "Email of a user", // param desc.
            example: "usuario@gmail.com",
        }
        ,]
        , // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "GuardarSolicitacao were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/GuardarSolicitacaoWithId",// User model

                            },
                        },
                    },
                },
            },
        },
    },
};