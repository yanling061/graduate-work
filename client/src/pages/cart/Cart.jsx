import './cart.scss';
import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RemoveProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const Cart = () => {
	const [cart, setCart] = useState(useSelector(state => state.cart));
	const [products, setProducts] = useState(cart.products);
	const dispatch = useDispatch();
	const handleRemove = pro => {
		console.log(pro);
	};

	return (
		<div>
			<Navbar />
			<Announcement />
			<div className='cart'>
				<h1 className='title'>你的购物车</h1>
				<div className='top'>
					<button className='shopping'>继续购物</button>
					<div className='topTexts'>
						<span className='topText'>购物车({cart.quantity})</span>
						<span className='topText'>你的心愿单(0)</span>
					</div>
					<button className='checkout'>立即结算</button>
				</div>
				<div className='bottom'>
					<div className='info'>
						{products.map(product => (
							<>
								<div className='productItem'>
									<div className='productDetail'>
										<Link to={`/product/${product._id}`}>
											<img src={product.img} alt='img' />
										</Link>
										<div className='details'>
											<span className='productName'>
												<b>物品 </b>
												{product.name}
											</span>
											<span className='productID'>
												<b>ID </b>
												{product._id}
											</span>
											<span className='productCategory'>
												<b>类别 </b>
												{product.categories}
											</span>
											<span className='productDegree'>
												<b>新旧程度 </b>
												{product.degree}
											</span>
										</div>
									</div>
									<div className='priceDetail'>
										<div className='productPrice'>￥ {product.price}</div>
									</div>
									<div className='deleteBtn' onClick={() => handleRemove(product)}>
										移除
									</div>
								</div>
								<hr />
							</>
						))}
					</div>
					<div className='summary'>
						<h1 className='summaryTitle'>订单结算</h1>
						<div className='summaryItem'>
							<span className='summaryItemText'>运费</span>
							<span className='summaryItemPrice'>$0</span>
						</div>
						<div className='summaryItem total'>
							<span className='summaryItemText '>总计</span>
							<span className='summaryItemPrice'>￥ {cart.total}</span>
						</div>
						<button>立即结算</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
