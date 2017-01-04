var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../containers/MainContainer.js');
var HomeContainer = require('../containers/HomeContainer.js');
var ForecastContainer = require('../containers/ForecastContainer.js');
var DetailContainer = require('../containers/DetailContainer.js');
var NotFound = require('../components/NotFound.js');

var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer} />
			<Route path='forecast/:location' component={ForecastContainer} />
			<Route path='detail' component={DetailContainer} />
			<Route path='*' component={NotFound} />
		</Route>
	</Router>
);

module.exports = routes;