module.exports = {
    // method of operation
    get: {
        tags: ["Anuncios"], // operation's tag.
        description: "Get a list of all itens", // operation's desc.
        operationId: "getItens", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Itens were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ItemWithId",// User model

                            },
                        },
                    },
                },
            },
        },
    },
};