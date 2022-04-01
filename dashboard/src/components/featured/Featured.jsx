import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
	return (
		<div className='featured'>
			<div className='top'>
				<h1 className='title'>总收入</h1>
				<MoreVertOutlinedIcon fontSize='small' />
			</div>
			<div className='bottom'>
				<div className='featuredChart'>
					<CircularProgressbar value={70} text={'70%'} />
				</div>
				<p className='title'>今日总收入</p>
				<p className='amount'>￥1000</p>
				<p className='description'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iure.
				</p>
				<div className='summary'>
					<div className='item'>
						<div className='itemTitle'>目标</div>
						<div className='itemResult'>
							<KeyboardArrowDownIcon fontSize='small' />
							<div className='resultAmount'>12.4K</div>
						</div>
					</div>
					<div className='item'>
						<div className='itemTitle'>上个星期</div>
						<div className='itemResult'>
							<KeyboardArrowDownIcon fontSize='small' />
							<div className='resultAmount'>12.4K</div>
						</div>
					</div>
					<div className='item'>
						<div className='itemTitle'>上个月</div>
						<div className='itemResult positive'>
							<KeyboardArrowDownIcon fontSize='small' />
							<div className='resultAmount'>12.4K</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
