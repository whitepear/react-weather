var React = require('react');
var Detail = require('../components/Detail.js');

var DetailContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	componentWillMount: function() {		
		if (this.props.location.state === null) {
			this.context.router.push('/');
		}
	},
	render: function () {
		if (this.props.location.state) {
			return (
				<Detail id={this.props.location.state.id} forecast={this.props.location.state.forecast} />
			);
		}	else {
			// this exists in case of users visiting /detail directly in the address bar, as
			// componentWillMount won't redirect before some initial render
			return (
				<div></div>
			)
		}			
	}
});

module.exports = DetailContainer;