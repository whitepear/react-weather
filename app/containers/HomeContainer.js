var React = require('react');
var Home = require('../components/Home.js');

var HomeContainer = React.createClass({
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
		return (
			<Home onSubmit={this.handleSubmit} onUpdate={this.handleUpdate} />
		)
	}
});

module.exports = HomeContainer;