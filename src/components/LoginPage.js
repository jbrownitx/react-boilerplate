import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export { LoginPage, ConnectedLoginPage  as default };

const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">Boilerplate</h1>
			<p>Welcome message goes here.</p>
			<button className="box-layout__button" onClick={startLogin}>Log In with Google</button>
		</div>
	</div>
);

const mapDispatchToProps = dispatch => ({
	startLogin: () => dispatch(startLogin())
});

const ConnectedLoginPage = connect(undefined, mapDispatchToProps)(LoginPage);