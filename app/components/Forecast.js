var React = require('react');
var PropTypes = React.PropTypes;
var key = 0;

function Forecast (props) {
	var iBigger = {
		fontSize: 55
	};	

	function uniqueKey () {
		key++;
		console.log(key);
		return key;
	}
	
	if (props.isLoading) {
		return (
			<div>Loading.</div>
		)
	} else {
		return (
			<div className="container">
				<div className="row text-center">
					<div className="col-xs-12">{props.location}</div>
					<div className="col-xs-12">Select a day</div>					
				</div>
				<div className="row">					
					{props.weatherForecast.list.map(function (day) {						
						var statusCode = day.weather[0].id;
						return <div key={uniqueKey()} className="col-xs-12 col-sm-4 col-md-3">
									   <i className={'owf ' + 'owf-' + statusCode} style={iBigger}></i>{day.weather[0].description}
									 </div>	
					})}					
				</div>
			</div>			
		)
	}
}

Forecast.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	weatherForecast: PropTypes.object.isRequired
};

module.exports = Forecast;