import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

export { ProtectedRoute, ConnectedProtectedRoute as default };

const ProtectedRoute = ({ isPublic = false, isAuthenticated, component: Component, ...props }) => (
	<Route {...props} component={props => (
		isAuthenticated != isPublic ? (
			<div>
				{isAuthenticated && <Header />}
				<Component {...props} />
			</div>
		) : (
			<Redirect to={isAuthenticated ? 'dashboard' : '/'} />
		)
	)} />
);

const mapStateToProps = state => ({
	isAuthenticated: !!state.auth.uid
});

const ConnectedProtectedRoute = connect(mapStateToProps)(ProtectedRoute);