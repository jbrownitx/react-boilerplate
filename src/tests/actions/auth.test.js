import { login, logout } from '../../actions/auth';
import { loginAction, logoutAction } from '../fixtures/actions';

it('should set up login action with provided uid', () => {
	expect(login(loginAction.uid)).toEqual(loginAction);
});

it('should set up logout action', () => {
	expect(logout()).toEqual(logoutAction);
});