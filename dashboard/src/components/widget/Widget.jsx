import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyYenOutlinedIcon from '@mui/icons-material/CurrencyYenOutlined';

const Widget = ({ type }) => {
	let data;

	const amount = 100;
	// const diff = 20;

	switch (type) {
		case 'sales':
			data = {
				title: '月销售',
				isMoney: true,
				link: '查看更多',
				icon: (
					<CurrencyYenOutlinedIcon
						className='icon'
						style={{ color: '#ffc32b', backgroundColor: '#eee0a896' }}
					/>
				),
			};
			break;
		case 'user':
			data = {
				title: '用户',
				isMoney: false,
				link: '查看更多',
				icon: (
					<PersonOutlinedIcon
						className='icon'
						style={{ color: '#ff0000d3', backgroundColor: '#ff00002b' }}
					/>
				),
			};
			break;
		case 'order':
			data = {
				title: '订单',
				isMoney: false,
				link: '查看更多',
				icon: (
					<FileCopyOutlinedIcon
						className='icon'
						style={{ color: 'green', backgroundColor: '#c2d7664c' }}
					/>
				),
			};
			break;
		case 'deal':
			data = {
				title: '成交量',
				isMoney: false,
				link: '查看更多',
				icon: (
					<ShoppingCartOutlinedIcon
						className='icon'
						style={{ color: '#7b5ee4', backgroundColor: '#7b5ee488' }}
					/>
				),
			};
			break;
		default:
			break;
	}

	return (
		<div className='widget'>
			<div className='left'>
				<div className='title'>{data.title} </div>
				<div className='counter'>
					{data.isMoney && '￥'} {amount}
				</div>
				<div className='link'>{data.link} </div>
			</div>
			<div className='right'>
				<div className='percentage positive'>
					<KeyboardArrowUpOutlinedIcon />
					20%
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
