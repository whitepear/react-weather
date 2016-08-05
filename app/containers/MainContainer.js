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
		console.log(this.state);
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