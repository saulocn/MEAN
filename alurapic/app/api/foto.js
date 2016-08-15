var mongoose = require('mongoose'); //traz a instância do mongoose que já está em memória, implementada em database.js e já com a conexão

var api = {};
var model = mongoose.model('Foto');

api.lista = function(req, res){
	/*model.find(function(error, fotos){
		if(error){
			res.status(500).json(error);
		} 
		res.json(fotos);
	});*/


	model
		.find({})
		.then(function(fotos){
			res.json(fotos);
		},
		function(error){
			res.status(500).json(error);
		});

}


api.buscaPorId = function(req, res){
	var id = req.params.idFoto;
	model
		.findById(id)
		.then(function(foto){
			console.log(foto);
			if(!foto) throw Error('Foto não encontrada');
			res.json(foto);
		},
		function(error){
			console.log(error);
			res.status(404).json(error);
		});
}


api.removePorId = function(req, res){
	var id = req.params.idFoto;
	model.remove({_id:id})
		.then(function(){
			res.sendStatus(204);
		},
		function(error){
			console.log(error);
			res.status(500).json(error);
		});
}


api.adiciona = function(req, res){

	var fotoRequest = req.body;
	// O Mongoose sempre usa o plural do meu model como padrão de Collection
	model.create(fotoRequest)
		.then(function(foto){
			res.json(foto);
		},
		function(error){
			console.log(error);
			res.status(500).json(error);
		});
}

api.atualiza = function(req, res){
	var id = req.params.idFoto;
	var fotoRequest = req.body;

	model
	.findByIdAndUpdate(id, fotoRequest)
		.then(function(foto){
			res.json(foto);
		},
		function(error){
			console.log(error);
			res.status(500).json(error);
		});
}


module.exports = api;