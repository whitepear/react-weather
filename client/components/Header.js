var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

function Header(props) {
	return (
		<div className="main-nav">
			<Link to="/">
				<h2 className="nav-logo">OpenWeather</h2>				
			</Link>
			<button type="button" className="btn header-button hidden-xs" onClick={props.onSubmit}>Get Weather</button>
			<input type="text" className="text-input hidden-xs" placeholder="Dublin, Ireland" onChange={props.onUpdate} onKeyPress={props.onEnter} id="headerInput" />
		</div>
	)
}

Header.propTypes = {
	onUpdate: PropTypes.func.isRequired,
	onEnter: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
}


module.exports = Header;