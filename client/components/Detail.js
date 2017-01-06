var React = require('react');
var getDate = require('../utils/getDate.js');
var tempConverter = require('../utils/tempConverter.js');
var PropTypes = React.PropTypes;

function Detail(props) {	
	var statusCode = props.forecast.list[props.id].weather[0].id;
	
	return (
		<div className="container text-center">
			<div className="detail-location-header">{props.forecast.city.name + ', ' + props.forecast.city.country}</div>
			<i className={'i-detail owf ' + 'owf-' + statusCode}></i>
			<div className="date-text">{getDate(props.id)}</div>
			<div className="description-text">
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