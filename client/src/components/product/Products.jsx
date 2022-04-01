import React, { useEffect, useState } from 'react';
import Product from './Product';
import './products.scss';
import http from '../../http';

const Products = ({ cate, filterCondition, sort }) => {
	const [products, setProducts] = useState([]);
	const [filterProducts, setFilterProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await http.get(cate ? `products?category=${cate}` : 'products');
				setProducts(res.data);
			} catch (error) {}
		};
		getProducts();
	}, [cate]);

	//筛选条件
	useEffect(() => {
		!filterCondition && setFilterProducts(products);
		filterCondition &&
			setFilterProducts(products.filter(item => item.degree === filterCondition));
	}, [products, filterCondition]);

	//排序
	useEffect(() => {
		if (sort === 'newest') {
			setFilterProducts(prev =>
				[...prev].sort((a, b) => b.createdAt - a.createdAt)
			);
		} else if (sort === 'asc') {
			setFilterProducts(prev => [...prev].sort((a, b) => a.price - b.price));
		} else if (sort === 'desc') {
			setFilterProducts(prev => [...prev].sort((a, b) => b.price - a.price));
		}
	}, [sort]);

	return (
		<div className='products'>
			{filterProducts.map(item => (
				<Product item={item} key={item._id} />
			))}
		</div>
	);
};

export default Products;
