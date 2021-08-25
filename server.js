const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo a API do Car Shop Services." });
});


require("./routes/usuario.routes.js")(app);

app.listen(3333, () => {
    console.log("A API está rodando na porta 3333.");
});