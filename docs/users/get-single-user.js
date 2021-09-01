module.exports = {
    // method of operation
    get: {
        tags: ["User"], // operation's tag.
        description: "Get a single users by email", // operation's desc.
        operationId: "getSingleUser", // unique operation id.
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
                            $ref: "#/components/schemas/UserNoPass",// User model

                        },
                    },
                },
            },
        },
    },
};