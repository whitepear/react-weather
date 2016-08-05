var React = require('react');
var Header = require('../components/Header.js');

var MainContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			location: ''
		}
	},
	handleUpdate: function (e) {
		this.setState({
			location: e.target.value
		});
	},
	handleSubmit: function (e) {
		e.preventDefault();
		var location = this.state.location; // cache state
		this.setState({
			location: ''
		}); // reset state
		console.log(location); // DELETE ME IF READY
		this.context.router.push('/forecast/' + location);
	},
	render: function () {
		var mainStyles = {
			height: '100%'		
		};
		
		return (
			<div style={mainStyles}>
				<Header onUpdate={this.handleUpdate} onSubmit={this.handleSubmit} />
				{this.props.children}
			</div>
		)
	}
});

module.exports = MainContainer;