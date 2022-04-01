const mongoose = require('mongoose');

const shcema = new mongoose.Schema({
	name: { type: String },
	path: { type: String },
	rights: [
		{
			type: String,
			validate: {
				validator: function (val) {
					return ['GET', 'POST', 'PUT', 'DELETE', 'SEARCH'].indexOf(val) !== -1;
				},
				message: 'web right is wrong',
			},
		},
	],
	description: { type: String },
});

module.exports = mongoose.model('AdminPage', schema);
