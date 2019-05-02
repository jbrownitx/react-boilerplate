import authReducer from '../../reducers/auth';
import { loginAction, logoutAction, initAction } from '../fixtures/actions';

const uid = loginAction.uid;

it('should set default auth state', () => {
	const auth = authReducer(undefined, initAction);
	expect(auth).toEqual({});
});

it('should set user id on login', () => {
	const auth = authReducer(undefined, loginAction);
	expect(auth.uid).toEqual(uid);
});

it('should clear user id on logout', () => {
	const auth = authReducer({ uid }, logoutAction);
	expect(auth).toEqual({});
});