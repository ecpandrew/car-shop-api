module.exports = {
    // method of operation
    get: {
        tags: ["User"], // operation's tag.
        description: "Get a list of all users", // operation's desc.
        operationId: "getUsers", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Users were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/UserNoPass",// User model

                            },
                        },
                    },
                },
            },
        },
    },
};
// schema: {
//     type: "array",
//         items: {
//
//
//
//     },
//     $ref: "#/components/schemas/User", // User model
// },