module.exports = {
    // method of operation
    get: {
        tags: ["Category"], // operation's tag.
        description: "Get a list of all categories", // operation's desc.
        operationId: "getAllCategories", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Categories were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/Category",// User model

                            },
                        },
                    },
                },
            },
        },
    },
};