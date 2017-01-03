var React = require('react');
var PropTypes = React.PropTypes;

function Home(props) {
	return (
		<div className="input-container">
			<h1 className="input-header" id="homeHeader">Enter a Location and Country</h1>
			<div className="input-controls">
				<input type="text" placeholder="Dublin, Ireland" className="form-control" onChange={props.onUpdate} onKeyPress={props.onEnter} />
				<button className="btn submit-button" type="button" onClick={props.onSubmit} >Get Weather</button>				
			</div>
		</div>
	)	
}

Home.propTypes = {
	onUpdate: PropTypes.func.isRequired,
	onEnter: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

module.exports = Home;