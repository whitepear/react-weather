var React = require('react');
var PropTypes = React.PropTypes;

function Home (props) {
	var inputContainer = {
		backgroundImage: 'url(./app/images/symphony.png)',
		height: '92%',
		'textAlign': 'center'
	};

	var inputHeader = {
		margin: '0 auto',		
		paddingTop: '300',
		color: '#fff',
		fontSize: '45',
		marginBottom: '30',		
		fontFamily: "'Lato', sans-serif"
	};

	var inputControls = {
		width: '80%',
		maxWidth: '350',
		margin: '0 auto'
	};

	var submitButton = {
		marginTop: '20',
		backgroundColor: '#079F75',
		color: '#fff',
		padding: '10'
	};

	return (
		<div style={inputContainer}>
			<h1 style={inputHeader}>Enter a City and State</h1>
			<div style={inputControls}>
				<input type="text" placeholder="St. George, Utah" className="form-control" />
				<button className="btn" type="button" style={submitButton}>Get Weather</button>				
			</div>
		</div>
	)	
}

// Home.propTypes = {

// };

module.exports = Home;