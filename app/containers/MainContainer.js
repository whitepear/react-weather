var React = require('react');
var Header = require('../components/Header.js');

var MainContainer = React.createClass({
	render: function () {
		var mainStyles = {
			height: '100%',		
		};
		
		return (
			<div style={mainStyles}>
				<Header />
				{this.props.children}
			</div>
		)
	}
});

module.exports = MainContainer;