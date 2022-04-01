import './sidebar.scss';

import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className='sidebar'>
			<div className='top'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<span className='logo'>Flea Admin</span>
				</Link>
			</div>
			<hr />
			<div className='center'>
				<ul>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<li>
							<CottageOutlinedIcon className='icon' />
							<span>首页</span>
						</li>
					</Link>
					<p className='title'>产品管理</p>
					<Link to='/product' style={{ textDecoration: 'none' }}>
						<li>
							<DriveFileRenameOutlineOutlinedIcon className='icon' />
							<span>产品列表</span>
						</li>
					</Link>
					<Link to='/product/create' style={{ textDecoration: 'none' }}>
						<li>
							<ListAltOutlinedIcon className='icon' />
							<span>新建产品</span>
						</li>
					</Link>
					<p className='title'>用户管理</p>
					<Link to='/user' style={{ textDecoration: 'none' }}>
						<li>
							<DriveFileRenameOutlineOutlinedIcon className='icon' />
							<span>用户列表</span>
						</li>
					</Link>
					<Link to='/user/create' style={{ textDecoration: 'none' }}>
						<li>
							<ListAltOutlinedIcon className='icon' />
							<span>新建用户</span>
						</li>
					</Link>
					<p className='title'>分类管理</p>
					<Link to='/category' style={{ textDecoration: 'none' }}>
						<li>
							<DriveFileRenameOutlineOutlinedIcon className='icon' />
							<span>分类列表</span>
						</li>
					</Link>
					<Link to='/category/create' style={{ textDecoration: 'none' }}>
						<li>
							<ListAltOutlinedIcon className='icon' />
							<span>新建分类</span>
						</li>
					</Link>
					<p></p>
					<li>
						<LogoutIcon className='icon' />
						<span>退出</span>
					</li>
				</ul>
			</div>
			<div className='bottom'>
				<div
					className='colorOption'
					onClick={() => dispatch({ type: 'LIGHT' })}
				></div>
				<div
					className='colorOption'
					onClick={() => dispatch({ type: 'DARK' })}
				></div>
			</div>
		</div>
	);
};

export default Sidebar;
