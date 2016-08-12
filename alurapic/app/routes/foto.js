///var api = require('../api/foto');

module.exports = function(app){
	//app.get('/v1/fotos', api.lista);
	var fotoApi = app.api.foto;
	//app.get('/v1/fotos', fotoApi.lista);
	app.route('/v1/fotos')
		.get(fotoApi.lista)
		.post(fotoApi.adiciona);


	app.route('/v1/fotos/:idFoto')
		.get(fotoApi.buscaPorId)
		.delete(fotoApi.removePorId)
		.put(fotoApi.atualiza);
	//app.get('/v1/fotos/:idFoto', fotoApi.buscaPorId);
	//app.delete('/v1/fotos/:idFoto', fotoApi.removePorId);




	/*app.get('/v1/fotos/:id/tipo/:idTipo', function(req, res) {
		console.log(req.params.id+" - "+req.params.idTipo);
		res.end(req.params.id+" - "+req.params.idTipo);
   		// será que funciona?
	});*/
};