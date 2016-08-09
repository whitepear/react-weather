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
		document.getElementById('headerInput').value = '';
		var location = this.state.location; // cache state
		this.setState({
			location: ''
		}); // reset state		
		this.context.router.push('/forecast/' + location);
	},
	handleEnter: function (e) {
		if (e.charCode === 13) {
			this.handleSubmit(e);
		}
	},
	render: function () {
		var mainStyles = {
			height: '100%'		
		};
		
		return (
			<div style={mainStyles}>
				<Header onUpdate={this.handleUpdate} onSubmit={this.handleSubmit} onEnter={this.handleEnter} />
				{this.props.children}
			</div>
		)
	}
});

module.exports = MainContainer;