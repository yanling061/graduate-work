const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		name: { type: String },
		parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
	},
	{ timestamps: true }
);

schema.virtual('children', {
	localField: '_id', //本地要进行关联的字段
	ref: 'Category', //要关联的模型
	foreignField: 'parent', // 外键，即要关联模型的字段
	justOne: false, //该虚拟字段的数据是否只有一个
});

schema.set('toJSON', { virtuals: true });
schema.virtual('id').get(function () {
	return this._id;
});

module.exports = mongoose.model('Category', schema);
