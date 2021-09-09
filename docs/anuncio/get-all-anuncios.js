module.exports = {
    // method of operation
    get: {
        tags: ["Anuncios"], // operation's tag.
        description: "Get a list of all announces", // operation's desc.
        operationId: "getAnounces", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Anounces were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/Anuncio",// User model

                            },
                        },
                    },
                },
            },
        },
    },
};