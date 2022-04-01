import React from 'react';
import Announcement from '../../components/announcement/Announcement';
import Category from '../../components/category/Category';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Products from '../../components/product/Products';
import Slider from '../../components/slider/Slider';
import './home.scss';

const Home = () => {
	return (
		<div className='home'>
			<Announcement />
			<Navbar />
			<Slider />
			<Category />
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
