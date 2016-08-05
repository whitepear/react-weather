var React = require('react');

var Header = React.createClass({
	render: function () {
		var mainNav = {
			height: '8%',			
			minHeight: 67,
			background: 'linear-gradient(#FC833F, #F35E0A)'	
		};

		var navLogo = {
			margin: 0,
			display: 'inline-block',
			color: '#fff',
			fontFamily: "'Lato', sans-serif",
			marginLeft: 20,
			position: 'relative',
			top: 20						
		};

		var textInput = {
			position: 'relative',
			top: 20,
			float: 'right',
			marginRight: 10,
			height: 34,
			borderRadius: 3,
			border: 'none',
			padding: 5,
			paddingLeft: 10,
			width: 220
		};

		var headerButton = {
			backgroundColor: '#079F75',
			color: '#fff',
			position: 'relative',
			top: 20,
			float: 'right',
			marginRight: 15
		};

		return (
			<div style={mainNav}>
				<h2 style={navLogo}>OpenWeather</h2>				
				<button type="button" className="btn hidden-xs" style={headerButton}>Get Weather</button>
				<input type="text" className="hidden-xs" placeholder="St. George, Utah" style={textInput} />
			</div>
		)
	}
});

module.exports = Header;