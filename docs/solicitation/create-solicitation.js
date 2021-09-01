module.exports = {
    // operation's method
    post: {
        tags: ["Solicitation"], // operation's tag
        description: "Create category", // short desc
        operationId: "createCategory", // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/SolicitationOnlyEmail", //
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "category created successfully", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};