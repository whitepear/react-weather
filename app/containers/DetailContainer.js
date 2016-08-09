var React = require('react');
var Detail = require('../components/Detail.js');

var DetailContainer = React.createClass({
	render: function () {		
		return (
			<Detail id={this.props.location.state.id} forecast={this.props.location.state.forecast} />
		);
	}
});

module.exports = DetailContainer;