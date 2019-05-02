import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let header, startLogout;

beforeEach(() => {
	startLogout = jest.fn();
	header = shallow(<Header startLogout={startLogout} />);
});

it('should render Header correctly', () => {
	expect(header).toMatchSnapshot();
});

it('should call startLogout when Log Out button clicked', () => {
	header.find('button').simulate('click');
	expect(startLogout).toBeCalled();
});