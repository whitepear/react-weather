var React = require('react');

var Header = React.createClass({
	render: function () {
		var mainNav = {
			height: '10%',			
			backgroundColor: 'rgba(252, 90, 44, 0.89)'
		};

		return (
			<div style={mainNav}>
				<div>OpenWeather</div>
				<div>
					Input and buttons will go here.				
				</div>
			</div>
		)
	}
});

module.exports = Header;