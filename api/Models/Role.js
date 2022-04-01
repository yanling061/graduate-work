const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: { type: String },
	description: { type: String },
	adminPages: [
		{
			web: { type: mongoose.SchemaTypes.ObjectId, ref: 'AdminPage' },
			rights: [{ type: String }],
		},
	],
	apiRights: [
		{
			url: { type: mongoose.SchemaTypes.ObjectId, ref: 'ApiRight' },
			rights: [{ type: String }],
		},
	],
	isDeleted: { type: Boolean },
});

module.exports = mongoose.model('Role', schema);
