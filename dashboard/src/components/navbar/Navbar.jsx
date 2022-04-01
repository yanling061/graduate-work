import React, { useContext } from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='search'>
					<input type='text' placeholder='search...' />
					<SearchOutlinedIcon />
				</div>
				<div className='items'>
					<div className='item'>
						<LanguageOutlinedIcon className='icon' />
						中文
					</div>
					<div className='item'>
						<DarkModeOutlinedIcon
							className='icon'
							onClick={() => dispatch({ type: 'TOGGLE' })}
						/>
					</div>

					<div className='item'>
						<NotificationsNoneOutlinedIcon className='icon' />
						<div className='counter'>1</div>
					</div>

					<div className='item'>
						<img
							src='https://images.pexels.com/photos/11295462/pexels-photo-11295462.jpeg?cs=srgb&dl=pexels-daka-11295462.jpg&fm=jpg'
							alt='avatar'
							className='avatar'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
