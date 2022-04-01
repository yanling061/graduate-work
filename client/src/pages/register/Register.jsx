import './register.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import http from '../../http';

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordAgain, setPasswordAgain] = useState('');
	let navigate = useNavigate();

	const handleRegister = async e => {
		e.preventDefault();
		if (password !== passwordAgain) return;
		const res = await http.post('register', { username, email, password });
		if (res.status === 200) {
			navigate('/login');
		}
	};

	return (
		<div className='container'>
			<div className='register'>
				<h1 className='title'>新建账号</h1>
				<form action=''>
					<input
						type='text'
						placeholder='用户名'
						onChange={e => setUsername(e.target.value)}
					/>
					<input
						type='text'
						placeholder='邮箱地址'
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='密码'
						onChange={e => setPassword(e.target.value)}
					/>
					<input
						type='password'
						placeholder='确认密码'
						onChange={e => setPasswordAgain(e.target.value)}
					/>
					<Link to='/login'>
						<div className='loginTip'>已有帐号，登录</div>
					</Link>
					<button onClick={handleRegister}>注 册</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
