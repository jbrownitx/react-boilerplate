import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export { Header, ConnectedHeader as default };

const Header = ({ startLogout, isPublic }) => (
	<header className="header">
		<div className="content-container">
			<Link className="header__title" to="/dashboard">
				<h1>Boilerplate</h1>
			</Link>&nbsp;|&nbsp;
			<button className="header__button" onClick={startLogout}>Log Out</button>
		</div>
	</header>
);

const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout())
});

const ConnectedHeader = connect(undefined, mapDispatchToProps)(Header);