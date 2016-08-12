var http = require('http');
var app = require('./config/express');
var url = 'localhost'
var nomeDoBanco = 'alurapic';
require('./config/database')(url, nomeDoBanco);



var port = 3000;
http.createServer(app

	//function(req, res){
	//console.log("Executando");

	//var indice = req.url.indexOf('=');
	//var parametro = req.url.substr(indice+1);
	//res.end('Executando:'+req);
	//res.end('Executando:'+req.url);
	//res.end('Executando:'+parametro);

	/*if(req.url.startsWith('/index.html')){
		res.end('index.html');
	}

	if(req.url.startsWith('/estilos.css')){
		res.end('estilos.css');
	}*/

	//res.end();
//}


).listen(port, function(){
	console.log("Servidor escutando na porta "+ port)
});