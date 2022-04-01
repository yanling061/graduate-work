import './productDetail.scss';
import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import http from '../../http';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await http.get(`products/${id}`);
				setProduct(res.data);
			} catch (error) {}
		};
		getProduct();
	}, [id]);

	const handleClick = () => {
		//更新购物车
		setQuantity(1);
		if (quantity < 1) {
			dispatch(addProduct({ ...product, quantity, price: product.price }));
		} else {
			return;
		}
	};

	return (
		<div>
			<Navbar />
			<Announcement />
			<div className='productDetail'>
				<div className='imageContainer'>
					<img src={product.img} alt='img' />
					<img src={product.img} alt='img' />
					<img src={product.img} alt='img' />
				</div>
				<div className='infoContainer'>
					<h1 className='title'>{product.name}</h1>
					<p className='desc'>
						{product.desc ||
							`Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quidem
						cupiditate. Atque, cum ipsum nostrum ducimus eaque a nulla ad?`}
					</p>
					<span className='price'>￥ {product.price}</span>
					<div className='addContainer'>
						<div className='favorite'>
							<FavoriteBorderOutlined className='icon' /> 想要
						</div>
						<button onClick={handleClick}>添加购物车</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductDetail;
