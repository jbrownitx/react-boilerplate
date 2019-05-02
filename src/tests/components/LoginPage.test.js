import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startLogin, loginPage;

beforeEach(() => {
	startLogin = jest.fn();
	loginPage = shallow(<LoginPage startLogin={startLogin} />);
});

it('should render LoginPage correctly', () => {
	expect(loginPage).toMatchSnapshot();
});

it('should call startLogin when Log In button clicked', () => {
	loginPage.find('button').simulate('click');
	expect(startLogin).toBeCalled();
});