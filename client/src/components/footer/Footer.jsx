import { MailOutlined, Phone, Room } from '@mui/icons-material';
import {
	WechatOutlined,
	WeiboOutlined,
	GithubOutlined,
} from '@ant-design/icons';

import React from 'react';
import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='left'>
				<h1 className='logo'>Flea Market.</h1>
				<p className='desc'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quod
					quasi cumque asperiores iure delectus, placeat perspiciatis suscipit
					debitis minus aliquam quos! Enim error, ipsam in magnam possimus
					praesentium dignissimos!
				</p>
				<div className='socialContainer'>
					<div className='socialIcon'>
						<WechatOutlined style={{ fontSize: '20px' }} />
					</div>
					<div className='socialIcon'>
						<WeiboOutlined style={{ fontSize: '20px' }} />
					</div>
					<div className='socialIcon'>
						<GithubOutlined style={{ fontSize: '20px' }} />
					</div>
				</div>
			</div>
			<div className='center'>
				<h3 className='title'>更多链接</h3>
				<ul>
					<li>首页</li>
					<li>分类</li>
					<li>心愿单</li>
					<li>购物车</li>
					<li>我的账户</li>
					<li>条款</li>
				</ul>
			</div>
			<div className='right'>
				<div className='title'>联系方式</div>
				<div className='contactItem'>
					<Room className='icon' /> xxxxxxxxxxxxxx
				</div>
				<div className='contactItem'>
					<Phone className='icon' /> xxxxxxxxxxxxxx
				</div>
				<div className='contactItem'>
					<MailOutlined className='icon' /> xxxxxxxxxxxxxx
				</div>
			</div>
		</div>
	);
};

export default Footer;
