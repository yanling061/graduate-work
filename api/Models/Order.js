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
		amount: {
			type: Number,
		},
		address: {
			type: Object,
		},
		mark: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Order', schema);
