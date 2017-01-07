var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
require('./styles/styles.scss');

ReactDOM.render(
	routes,
	document.getElementById('app')	
);