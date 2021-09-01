module.exports = {
    // method of operation
    get: {
        tags: ["Solicitation"], // operation's tag.
        description: "Get a list of all solicitation", // operation's desc.
        operationId: "getAllSolicitation", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Solicitations were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/Solicitation",// User model

                            },
                        },
                    },
                },
            },
        },
    },
};