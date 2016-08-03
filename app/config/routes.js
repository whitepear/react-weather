var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Header = require('../components/header.js');
var Home = require('../components/home.js');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Header}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
);

module.exports = routes;