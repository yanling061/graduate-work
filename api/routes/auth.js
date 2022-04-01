module.exports = app => {
	const router = require('express').Router();
	const User = require('../Models/User');
	const assert = require('http-assert');
	const jwt = require('jsonwebtoken');

	//注册
	router.post('/register', async (req, res) => {
		try {
			const { username, email, password } = req.body;
			const user = await User.create({ username, email, password });
			res.status(200).json(user);
		} catch (error) {
			res.status(400).json(error);
		}
	});

	//登录
	router.post('/login', async (req, res) => {
		const { username, email, password } = req.body;
		try {
			const user = await User.findOne({ $or: [{ username }, { email }] });
			assert(user, 422, '用户不存在');

			const isValid = require('bcrypt').compareSync(password, user.password);
			assert(isValid, 422, '密码不正确，请重新输入');

			const { password: pwd, ...others } = user._doc;
			const token = jwt.sign(
				{ id: user.id, isAdmin: user.isAdmin },
				process.env.JWT_SEC,
				{ expiresIn: '3d' }
			);
			res.status(200).json({ ...others, token });
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.use('/admin/api', router);
};
