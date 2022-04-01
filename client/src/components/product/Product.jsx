import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './product.scss';

const Product = ({ item }) => {
	return (
		<div className='product'>
			<div className='circle'></div>
			<img src={item.img} alt='img' />
			<div className='info'>
				<div className='icon'>
					<ShoppingCartOutlined />
				</div>
				<Link to={`/product/${item._id}`}>
					<div className='icon'>
						<SearchOutlined />
					</div>
				</Link>
				<div className='icon'>
					<FavoriteBorderOutlined />
				</div>
			</div>
		</div>
	);
};

export default Product;
