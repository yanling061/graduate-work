const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		desc: {
			type: String,
		},
		userId: {
			type: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
		},
		categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
		img: { type: Array },
		price: { type: Number },
		degree: { type: String },
	},
	{ timestamps: true }
);

schema.virtual('children', {
	localField: 'categories', //本地要进行关联的字段
	ref: 'Category', //要关联的模型
	foreignField: '_id', // 外键，即要关联模型的字段
	justOne: false, //该虚拟字段的数据是否只有一个
});

schema.virtual('children', {
	localField: 'userId', //本地要进行关联的字段
	ref: 'User', //要关联的模型
	foreignField: '_id', // 外键，即要关联模型的字段
	justOne: false, //该虚拟字段的数据是否只有一个
});

schema.set('toJSON', { virtuals: true });
schema.virtual('id').get(function () {
	return this._id;
});

module.exports = mongoose.model('Product', schema);
