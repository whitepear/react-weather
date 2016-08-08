var React = require('react');
var getDate = require('../utils/getDate.js');
var tempConverter = require('../utils/tempConverter.js');
var PropTypes = React.PropTypes;

function Detail (props) {

	var font = {
		fontFamily: "'Lato', sans-serif"
	};

	var locationHeader = {		
		marginTop: 30,
		fontSize: 80
	};

	var iDetail = {
		fontSize: 205,
		color: '#333'
	};

	var dateText = {
		position: 'relative',
		bottom: 20,
		fontSize: 30
	};

	var descriptionText = {
		fontSize: 35
	};	

	var statusCode = props.forecast.list[props.id].weather[0].id;
	
	return (
		<div className="container text-center" style={font}>
			<div style={locationHeader}>{props.forecast.city.name + ', ' + props.forecast.city.country}</div>
			<i className={'owf ' + 'owf-' + statusCode} style={iDetail}></i>
			<div style={dateText}>{getDate(props.id)}</div>
			<div style={descriptionText}>
				<div>{props.forecast.list[props.id].weather[0].description}</div>
				<div>min temp: {tempConverter(props.forecast.list[props.id].temp.min)}</div>
				<div>max temp: {tempConverter(props.forecast.list[props.id].temp.max)}</div>
				<div>humidity: {props.forecast.list[props.id].humidity}</div>
			</div>
		</div>
	)
}

Detail.propTypes = {

};

module.exports = Detail;