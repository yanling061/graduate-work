module.exports = app => {
	const router = require('express').Router();
	const Cart = require('../Models/Cart');

	const {
		verifyToken,
		verifyTokenAndAuthorization,
		verifyTokenAndAdmin,
	} = require('../middleware/auth');

	//创建资源
	router.post('/', async (req, res) => {
		try {
			const cart = await Cart.create(req.body);
			res.status(200).json(cart);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//UPDATE
	router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
		try {
			const cart = await Cart.findByIdAndUpdate(req.params.id, req.body);
			res.status(200).json(cart);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//DELETE
	router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
		try {
			await Cart.findByIdAndDelete(req.params.id, req.body);
			res.status(200).json({ msg: 'ok' });
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//获取一条资源
	router.get('/get/:userId', verifyTokenAndAuthorization, async (req, res) => {
		try {
			const cart = await Cart.find({ userId: req.params.id });
			res.status(200).json(cart);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//获取所有资源
	router.get('/', verifyTokenAndAuthorization, async (req, res) => {
		const qnew = req.query.new;
		const qcategory = req.query.category;
		try {
			let cart;
			if (qnew) {
				cart = await Cart.find().sort({ createdAt: -1 }).limit(5);
			} else if (qcategory) {
				cart = await Cart.find({ categories: { $in: [qcategory] } });
			} else {
				cart = await Cart.find();
			}

			res.status(200).json(cart);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//获取统计信息
	router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
		const date = new Date();
		const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

		try {
			const data = await Cart.aggregate([
				{ $match: { createdAt: { $gte: lastYear } } },
				{
					$project: {
						month: { $month: '$createdAt' },
					},
				},
				{
					$group: {
						_id: '$month',
						total: { $sum: 1 },
					},
				},
			]);
			res.status(200).json(data);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.use('/api/carts', verifyToken, router);
};
