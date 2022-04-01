import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import CategoryList from './pages/category/List';
import CategoryCreate from './pages/category/Create';
import UserList from './pages/user/List';
import UserCreate from './pages/user/Create';
import ProductList from './pages/product/List';
import ProductCreate from './pages/product/Create';

import Home from './pages/home/Home';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

function App() {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? 'app dark' : 'app'} style={{ display: 'flex' }}>
			<Router>
				<Sidebar />
				<div className='app' style={{ flex: 6 }}>
					<Navbar />
					<Routes>
						<Route path='/'>
							<Route index element={<Home />} />
							<Route path='login' element={<Login />} />
							<Route path='product'>
								<Route index element={<ProductList />} />
								<Route path='create' element={<ProductCreate />} />
								<Route path='edit'>
									<Route path=':id' element={<ProductCreate />} />
								</Route>
							</Route>
							<Route path='user'>
								<Route index element={<UserList />} />
								<Route path='create' element={<UserCreate />} />
								<Route path='edit'>
									<Route path=':id' element={<UserCreate />} />
								</Route>
							</Route>
							<Route path='category'>
								<Route index element={<CategoryList />} />
								<Route path='create' element={<CategoryCreate />} />
								<Route path='edit'>
									<Route path=':id' element={<CategoryCreate />} />
								</Route>
							</Route>
						</Route>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
