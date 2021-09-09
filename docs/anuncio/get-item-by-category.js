module.exports = {
    // method of operation
    get: {
        tags: ["Anuncios"], // operation's tag.
        description: "Get a item by category Id", // operation's desc.
        operationId: "getItemByCatId", // unique operation id.
        parameters: [
            {
                name: "category", // name of the param
                in: "path", // location of the param
                required: true, // Mandatory param
                description: "Id of Category", // param desc.
                example: 1,
            },

        ], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Itens were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ItemExtended",// User model

                        },
                    },
                },
            },
        },
    },
};