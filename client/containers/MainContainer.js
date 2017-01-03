var React = require('react');
var Header = require('../components/Header.js');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../styles/styles.scss');

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
				<ReactCSSTransitionGroup
					transitionName="appear"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
				</ReactCSSTransitionGroup>				
			</div>
		)
	}
});

module.exports = MainContainer;