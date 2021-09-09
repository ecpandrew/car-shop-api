module.exports = {
    // operation's method
    post: {
        tags: ["Guardar Solicitacao"], // operation's tag
        description: "Guardar Solicitacao", // short desc
        operationId: "createGuardarSolicitacao", // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/GuardarSolicitacao", //
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "GuardarSolicitacao created successfully", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};