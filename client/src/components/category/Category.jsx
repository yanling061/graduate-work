import React from 'react';
import './category.scss';
import { categories } from '../../data';
import CategoryItem from './CategoryItem';

const Category = () => {
	return (
		<div className='category'>
			{categories.map(item => (
				<CategoryItem item={item} key={item.id} />
			))}
		</div>
	);
};

export default Category;
