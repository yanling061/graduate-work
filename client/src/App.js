import Home from './pages/home/Home';
import ProductList from './pages/productList/ProductList';
import ProductDetail from './pages/productDetail/ProductDetail';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Cart from './pages/cart/Cart';
import './style.scss';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
	const user = useSelector(state => state.user.currentUser);
	return (
		<Router>
			<Routes>
				<Route path='/'>
					<Route path='/' element={<Home />} />
					<Route path='login' element={user ? <Navigate to='/' /> : <Login />} />
					<Route
						path='register'
						element={user ? <Navigate to='/' /> : <Register />}
					/>
					<Route path='products' element={<ProductList />}>
						<Route path=':category' element={<ProductList />} />
					</Route>
					<Route path='product'>
						<Route path=':id' element={<ProductDetail />} />
					</Route>
					<Route path='cart' element={<Cart />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
