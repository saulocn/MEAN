///var api = require('../api/foto');

module.exports = function(app){
	//app.get('/v1/fotos', api.lista);
	var fotoApi = app.api.foto;
	app.get('/v1/fotos', fotoApi.lista);
};