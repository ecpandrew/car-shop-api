module.exports = {
    // method of operation
    get: {
        tags: ["Solicitation"], // operation's tag.
        description: "Get a Solicitation by email", // operation's desc.
        operationId: "getSolicitastionByEmail", // unique operation id.
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