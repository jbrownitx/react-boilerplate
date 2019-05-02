import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import ProtectedRoute from './ProtectedRoute';

export { history, AppRouter as default };

const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<ProtectedRoute path="/" exact isPublic component={LoginPage} />
				<ProtectedRoute path="/dashboard" component={DashboardPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);