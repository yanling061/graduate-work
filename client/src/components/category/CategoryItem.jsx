import React from 'react';
import { Link } from 'react-router-dom';
import './categoryItem.scss';
const CategoryItem = ({ item }) => {
	return (
		<div className='categoryItem'>
			<Link to={`/products/${item.category}`}>
				<img src={item.img} alt='img' />
				<div className='info'>
					<h1 className='title'>{item.title}</h1>
					<button>立即查看</button>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
