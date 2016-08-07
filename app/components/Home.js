var React = require('react');
var PropTypes = React.PropTypes;

function Home (props) {
	var inputContainer = {
		backgroundImage: 'url(../app/styles/images/symphony.png)',
		height: '92%',
		'textAlign': 'center'
	};

	var inputHeader = {
		margin: '0 auto',		
		paddingTop: 300,
		color: '#fff',
		fontSize: 55,
		marginBottom: 30,		
		fontFamily: "'Lato', sans-serif"
	};

	var inputControls = {
		width: '80%',
		maxWidth: 350,
		margin: '0 auto'
	};

	var submitButton = {
		marginTop: 20,
		backgroundColor: '#079F75',
		color: '#fff',
		padding: 10
	};

	return (
		<div style={inputContainer}>
			<h1 style={inputHeader}>Enter a Location and Country</h1>
			<div style={inputControls}>
				<input type="text" placeholder="Dublin, Ireland" className="form-control" onChange={props.onUpdate} />
				<button className="btn" type="button" style={submitButton} onClick={props.onSubmit} >Get Weather</button>				
			</div>
		</div>
	)	
}

Home.propTypes = {
	onUpdate: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

module.exports = Home;