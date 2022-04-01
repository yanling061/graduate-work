module.exports = app => {
	const router = require('express').Router();
	const Order = require('../Models/Order');

	const {
		verifyToken,
		verifyTokenAndAuthorization,
		verifyTokenAndAdmin,
	} = require('../middleware/auth');

	//创建资源
	router.post('/', async (req, res) => {
		try {
			const order = await Order.create(req.body);
			res.status(200).json(order);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//UPDATE
	router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
		try {
			const order = await Order.findByIdAndUpdate(req.params.id, req.body);
			res.status(200).json(order);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//DELETE
	router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
		try {
			await Order.findByIdAndDelete(req.params.id, req.body);
			res.status(200).json({ msg: 'ok' });
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//获取一条资源
	router.get('/get/:userId', verifyTokenAndAuthorization, async (req, res) => {
		try {
			const orders = await Order.find({ userId: req.params.userId });
			res.status(200).json(orders);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//获取所有资源
	router.get('/', verifyTokenAndAuthorization, async (req, res) => {
		const qnew = req.query.new;
		const qcategory = req.query.category;
		try {
			let order;
			if (qnew) {
				order = await Order.find().sort({ createdAt: -1 }).limit(5);
			} else if (qcategory) {
				order = await Order.find({ categories: { $in: [qcategory] } });
			} else {
				order = await Order.find();
			}

			res.status(200).json(order);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	//获取统计信息
	router.get('/income', verifyTokenAndAdmin, async (req, res) => {
		const date = new Date();
		const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
		const previousMonth = new Date(new Date().setMonth(lastMonth() - 1));

		try {
			const income = await Order.aggregate([
				{ $match: { createdAt: { $gte: previousMonth } } },
				{
					$project: {
						month: { $month: '$createdAt' },
						sales: '$amount',
					},
				},
				{
					$group: {
						_id: '$month',
						total: { $sum: '$sales' },
					},
				},
			]);
			res.status(200).json(income);
		} catch (error) {
			res.status(500).json(error);
		}
	});

	app.use('/api/orders', verifyToken, router);
};
