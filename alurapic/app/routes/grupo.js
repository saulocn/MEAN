//var api = require('../api/grupo');

module.exports = function(app){
	//app.get('/v1/grupos', api.lista);
	var grupoApi = app.api.grupo;
	app.get('/v1/grupos', grupoApi.lista);
};