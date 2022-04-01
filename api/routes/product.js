module.exports = app => {
	const router = require('express').Router({
		mergeParams: true, //合并来自父路由的params，可以从子路由访问到父路由的params
	});
	const Product = require('../Models/Product');

	const authMiddleware = require('../middleware/auth');
	const permissionMiddleware = require('../middleware/permission');

	//创建资源
	router.post('/', async (req, res) => {
		try {
			const product = await Product.create(req.body);
			res.status(200).json(product);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//修改资源
	router.put('/:id', async (req, res) => {
		try {
			const product = await Product.findByIdAndUpdate(req.params.id, req.body);
			res.status(200).json(product);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//DELETE
	router.delete('/:id', async (req, res) => {
		try {
			await Product.findByIdAndDelete(req.params.id, req.body);
			res.status(200).json({ msg: 'ok' });
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//获取一条
	router.get('/:id', async (req, res) => {
		try {
			const product = await Product.findById(req.params.id)
				.populate('categories')
				.populate('userId');

			res.status(200).json(product);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//获取所有资源
	router.get('/', async (req, res) => {
		const query = req.query.limit;
		try {
			const product = query
				? await Product.find()
						.sort({ createdAt: -1 })
						.limit(5)
						.populate('categories')
						.populate('userId')
				: await Product.find().populate('categories').populate('userId');
			res.status(200).json(product);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.use('/admin/api/products', authMiddleware(), router);

	// 错误处理
	app.use(async (err, req, res, next) => {
		console.log(err);
		res.status(err.statusCode || 500).send({ msg: err.message });
	});
};
