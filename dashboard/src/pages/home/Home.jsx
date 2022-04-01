import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Widget from '../../components/widget/Widget';
import './home.scss';

const Home = () => {
	return (
		<div className='home'>
			<div className='homeContainer'>
				<div className='widgets'>
					<Widget type='sales' />
					<Widget type='deal' />
					<Widget type='order' />
					<Widget type='user' />
				</div>
				<div className='charts'>
					<Featured />
					<Chart />
				</div>
			</div>
		</div>
	);
};

export default Home;
