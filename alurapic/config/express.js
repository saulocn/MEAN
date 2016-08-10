var express = require('express');
var app = express();


//Configurações do express
app.use(express.static('./public'));//a partir da raíz do projeto

//exportando, tornando público minha variável app (instância do express)
module.exports = app;