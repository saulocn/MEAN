module.exports = function(app){

	var authApi = app.api.auth;

	app.post('/autenticar', authApi.autentica);

	// Como foi carregado primeiramente pelo Express, irá proteger todas as requisições com exceção de autenticar
	// Como usa use e não get, todas as requisições são tratadas

	app.use('/*', authApi.verificaToken);
};