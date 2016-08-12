module.exports = function(url, nomeDoBanco){

	var mongoose = require('mongoose');

	//'mongodb://$url/$nomeDoBanco'



	// Cria a conexão
	mongoose.connect('mongodb://'+url+'/'+nomeDoBanco);


	mongoose.connection.on('connected', function(){
		console.log("Conectado ao banco de dados MongoDB!");
	});

	mongoose.connection.on('error', function(error){
		console.log("Erro na conexão! "+ error);
	});


	mongoose.connection.on('disconnected', function(){
		console.log("Desconectado do Servidor de Banco de Dados MongoDB!");
	});


	// Ao parar a aplicação
	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log("Conexão fechada pelo término da aplicação!")
			process.exit(0);
		});
	});
};