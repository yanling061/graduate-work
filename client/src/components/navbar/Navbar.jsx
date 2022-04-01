import React from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const quantity = useSelector(state => state.cart.quantity);

	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='left'>
					<div className='language'>中文</div>
					<div className='searchContainer'>
						<input type='text' />
						<SearchIcon className='icon' />
					</div>
				</div>
				<Link to='/' className='center'>
					<div className='logo'>福利市场 Flea.</div>
					<div className='desc'></div>
				</Link>
				<div className='right'>
					<Link to='/login'>
						<div className='menuItem'>注册</div>
					</Link>
					<Link to='/register'>
						<div className='menuItem'>登录</div>
					</Link>
					<Link to='/cart'>
						<div className='menuItem'>
							<Badge badgeContent={quantity} color='secondary'>
								<ShoppingCartOutlinedIcon color='action' />
							</Badge>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
