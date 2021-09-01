module.exports = {
    // operation's method
    post: {
        tags: ["User"], // operation's tag
        description: "Create Consumer User", // short desc
        operationId: "createConsumerUser", // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UserNoPass", //
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "User created successfully", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};