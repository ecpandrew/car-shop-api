module.exports = {
    // operation's method
    post: {
        tags: ["Anuncios"], // operation's tag
        description: "Create Item", // short desc
        operationId: "createItem", // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Item", //
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "Item created successfully", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};