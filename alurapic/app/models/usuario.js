var mongoose = require('mongoose');

// A função Schema é uma função Construtora, por isso, começa com letra maiúscula
var schema = mongoose.Schema({
	login: {
		type: String, // Função construtora do tipo String
		required: true
	},
	senha: {
		type: String, // Função construtora do tipo String
		required: true
	}

});

mongoose.model('Usuario', schema);