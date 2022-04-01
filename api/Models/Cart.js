const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		userId: {
			type: String,
		},
		products: [
			{
				productId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' },
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Cart', schema);
