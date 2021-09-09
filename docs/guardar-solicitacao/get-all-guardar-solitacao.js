module.exports = {
    // method of operation
    get: {
        tags: ["Guardar Solicitacao"], // operation's tag.
        description: "Get a list of all GuardarSolicitacao", // operation's desc.
        operationId: "getGuardarSolicitacao", // unique operation id.
        parameters: [], // expected params.
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