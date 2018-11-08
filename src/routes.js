// список роутов

import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import App from './Containers/App/index';


class Router extends React.Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={App}/>
			</div>
		);
	}
}

export default Router;
