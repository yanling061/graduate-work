const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			set(val) {
				return require('bcrypt').hashSync(val, 10);
			},
		},
		role: { type: mongoose.SchemaTypes.ObjectId, ref: 'Role' },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', schema);
