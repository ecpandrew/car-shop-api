module.exports = {
    // operation's method.
    delete: {
        tags: ["User"], // operation's tag
        description: "Deleting a User", // short desc
        operationId: "deleteUser", // unique operation id
        parameters: [
            // expected parameters
           {
                name: "email", // name of the param
                in: "path", // location of the param
                required: true, // Mandatory param
                description: "Email of a user", // param desc.
                example: "usuario@gmail.com",
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "User deleted successfully", // response desc
            },
            // response code
            404: {
                description: "User not found", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};