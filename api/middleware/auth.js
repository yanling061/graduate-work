//验证token
module.exports = option => {
	const jwt = require('jsonwebtoken');
	const assert = require('http-assert');
	const User = require('../Models/User');

	return async (req, res, next) => {
		try {
			const token = String(req.headers.token).split(' ')[1];
			assert(token, 401, 'token不存在，请先登录');

			const user = jwt.verify(token, process.env.JWT_SEC);
			assert(user, 403, '无效token，请重新登录');

			req.user = await User.findById(user.id);
			assert(req.user, 401, '请登录');

			await next();
		} catch (error) {
			res.status(500).json(error);
		}
	};
};

// const verifyTokenAndAuthorization = async (req, res, next) => {
// 	verifyToken(req, res, async () => {
// 		const isAuth = req.user.id === req.params.id || req.user.isAdmin;
// 		assert(isAuth, 403, '无操作权限');

// 		await next();
// 	});
// };

// const verifyTokenAndAdmin = async (req, res, next) => {
// 	verifyToken(req, res, async () => {
// 		const isAdmin = req.user.isAdmin;
// 		assert(isAdmin, 403, '无操作权限');

// 		await next();
// 	});
// };

// module.exports = {
// 	verifyToken,
// 	verifyTokenAndAuthorization,
// 	verifyTokenAndAdmin,
// };
