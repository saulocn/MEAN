var express = require('express');
var app = express();


//Configurações do express
app.use(express.static('./public'));//a partir da raíz do projeto

app.get('/v1/fotos', function(req, res){
	console.log("Tentando obter as fotos?");


    var fotos = [
        {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
        {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
    ];
    res.json(fotos);
	//res.end("Fotos!");
});

//exportando, tornando público minha variável app (instância do express)
module.exports = app;