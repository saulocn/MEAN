
var api = {};

var contador = 2;

var fotos = [
	{_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
	{_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
	];

api.lista = function(req, res){
	console.log("Tentando obter as fotos?");
	
	res.json(fotos);
}


api.buscaPorId = function(req, res){

	// express mapeia o parâmetro, obtendo com o mesmo nome do parâmetro da url
	var id = req.params.idFoto;

	var foto = fotos.find(function(foto){
		if(foto._id == id){
			return true;
		}
	});
	
	res.json(foto);
}


api.removePorId = function(req, res){

	// express mapeia o parâmetro, obtendo com o mesmo nome do parâmetro da url
	var id = req.params.idFoto;

	fotos = fotos.filter(function(foto){
		return foto._id != id; 
	});

	res.sendStatus(204);
	//mesma coisa que res.status(204).end();
}


api.adiciona = function(req, res){
	var foto = req.body;
	foto._id = ++contador;
	fotos.push(foto)

	res.json(foto);
}

module.exports = api;