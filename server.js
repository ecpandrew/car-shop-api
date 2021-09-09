const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const swaggerUI = require("swagger-ui-express");

const docs = require("./docs");


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs));

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo a API do Car Shop Services." });
});


require("./routes/categories.routes.js")(app);

require("./routes/usuario.routes.js")(app);

require("./routes/solicitacao.routes.js")(app);
require("./routes/anuncio.routes.js")(app);
require("./routes/guardar-solicitacao.routes.js")(app);

app.listen(3333, () => {
    console.log("A API está rodando na porta 3333.");
});