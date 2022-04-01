import './productList.scss';
import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Products from '../../components/product/Products';
import Footer from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
	const location = useLocation();
	const cate = location.pathname.split('/')[2];
	const [filterCondition, setfilterCondition] = useState('');
	const [sort, setsort] = useState({});

	return (
		<div className='productList'>
			<Navbar />
			<Announcement />
			<h1 className='title'>{cate}</h1>
			<div className='filterContainer'>
				<div className='filter'>
					<span className='filterText'>条件筛选:</span>
					<select
						defaultValue={''}
						name='degree'
						onChange={e => setfilterCondition(e.target.value)}
					>
						<option value=''>新旧程度</option>
						<option>全新</option>
						<option>九成新</option>
						<option>八成新</option>
						<option>七成新</option>
					</select>
				</div>
				<div className='filter'>
					<span className='filterText'>排序:</span>
					<select name='price' onChange={e => setsort(e.target.value)}>
						<option value='newest'>最近发布</option>
						<option value='asc'>价格（从低到高）</option>
						<option value='desc'>价格（从高到低）</option>
					</select>
				</div>
			</div>
			<Products cate={cate} filterCondition={filterCondition} sort={sort} />
			<Footer />
		</div>
	);
};

export default ProductList;
