module.exports = {
    // method of operation
    get: {
        tags: ["User"], // operation's tag.
        description: "Get a consumer user by email", // operation's desc.
        operationId: "getConsumerByEmail", // unique operation id.
        parameters: [
            {
                name: "email", // name of the param
                in: "path", // location of the param
                required: true, // Mandatory param
                description: "Email of a user", // param desc.
                example: "usuario@gmail.com",
            },

        ], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "User were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Consumer",// User model

                        },
                    },
                },
            },
        },
    },
};