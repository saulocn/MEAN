var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();


//Configurações do express
app.use(express.static('./public'));//a partir da raíz do projeto
// Ativando o middleware body parser
app.use(bodyParser.json());

//app.get('/v1/fotos', function(req, res){
//	console.log("Tentando obter as fotos?");


//    var fotos = [
//        {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
//        {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
//    ];
//    res.json(fotos);
	//res.end("Fotos!");
//});

//app.get('/v1/grupos', function(req, res){
//	console.log("Tentando obter os Grupos?");
//    var grupos = [
//            { _id: 1, nome: 'esporte' }, 
//            { _id: 2, nome: 'lugares' }, 
//            { _id: 3, nome: 'animais' }
//        ];
//    res.json(grupos);
//});

// Requerendo o arquivo em /alurapic/app/routes/foto.js
// O parâmetro recebido na função de exportação daquele módulo é o que é passado abaixo (app)
//require('../app/routes/foto')(app);


// Utilizando o consign para carregar automaticamente as rotas e passando o app através do método into();
/*consign({cwd:'app'}) //current work directory - diretório base
	.include('app/api') 
	.then('app/routes')
	.into(app);*/



consign({cwd:'app'}) //current work directory - diretório padrão do consign
	.include('models')
	.then('api') 
	.then('routes')
	.into(app);

//exportando, tornando público minha variável app (instância do express)
module.exports = app;