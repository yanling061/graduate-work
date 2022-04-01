import '../register/register.scss';
import { useState } from 'react';
import { login } from '../../api';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [username, setUsername] = useState('');
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector(state => state.user);

	const handleSubmit = e => {
		e.preventDefault();
		login(dispatch, { username, password });
	};

	return (
		<div>
			<div className='container'>
				<div className='login'>
					<h1 className='title'>登录账号</h1>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='用户名'
							onChange={e => setUsername(e.target.value)}
						/>
						<input
							type='password'
							placeholder='密码'
							onChange={e => setPassword(e.target.value)}
						/>
						<div className='loginTip'>没有帐号，去注册</div>
						{error && (
							<span className='error' style={{ color: '#ff0000', fontSize: '12px' }}>
								啊哦，发生了错误
							</span>
						)}
						<button type='submit' disabled={isFetching}>
							登 录
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
