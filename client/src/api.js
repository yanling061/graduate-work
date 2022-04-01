import http from './http.js';
import { loginFailure, loginStart, loginSuccess } from './redux/userRedux.js';

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await http.post('login', user);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
	}
};
