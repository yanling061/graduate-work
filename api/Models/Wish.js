const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		userId: {
			type: String,
		},
		products: [
			{
				productId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' },
				quantity: {
					type: Number,
					default: 0,
				},
				userId: { type: String },
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Wish', schema);
