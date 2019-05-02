import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

it('should render the loading screen correctly', () => {
	expect(shallow(<LoadingPage />)).toMatchSnapshot();
})