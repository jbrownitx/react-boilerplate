import React from 'react';
import { Link } from 'react-router-dom';

export { NotFoundPage as default };

const NotFoundPage = () => (
	<div>
		<p>It's a 404 page!</p>
		<p>
			<Link to="/">Go home</Link>
		</p>
	</div>
);