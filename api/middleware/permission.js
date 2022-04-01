module.exports = options => {
	const Role = require('../Models/Role');
	const assert = require('http-assert');

	return async (req, res, next) => {
		const user = req.user; //获取发出请求的用户信息
		const role = await Role.findById(user.role)
			.populate({ path: 'apiRights.url' }) //Role.apiRights.url: Apiright._id
			.lean(); //使获取的数据转成可操作的js对象

		let originalUrl = req.query ? req.originalUrl.split('?')[0] : req.originalUrl; //请求的地址
		let originalRight = req.query.search ? 'SEARCH' : req.method; //是否为搜素

		//
		const result = role.apiRights.filter(r => {
			let mypath = '/admin/api' + (r.url ? r.url.path : '');
			if (req.params.id) {
				mypath = mypath.replace(':id', req.params.id);
			}
			return (
				mypath === originalUrl &&
				r.rights.indexOf(originalRight.toUpperCase()) !== -1
			);
		});

		assert(result.length, 422, '无权限进行此操作');
		next();
	};
};
