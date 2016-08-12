var mongoose = require('mongoose');

// A função Schema é uma função Construtora, por isso, começa com letra maiúscula
var schema = mongoose.Schema({
	titulo: {
		type: String, // Função construtora do tipo String
		required: true
	},
	url: {
		type: String, // Função construtora do tipo String
		required: true
	},
	grupo: {
		type: Number, // Função construtora do tipo Number
		required: true
	}

});

mongoose.model('Foto', schema);