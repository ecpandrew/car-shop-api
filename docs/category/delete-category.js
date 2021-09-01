module.exports = {
    // operation's method.
    delete: {
        tags: ["Category"], // operation's tag
        description: "Deleting a category", // short desc
        operationId: "deleteUser", // unique operation id
        parameters: [
            // expected parameters
           {
                name: "id", // name of the param
                in: "path", // location of the param
                required: true, // Mandatory param
                description: "ID of a category", // param desc.
                example: "1",
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "Category deleted successfully", // response desc
            },
            // response code
            404: {
                description: "Category not found", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};