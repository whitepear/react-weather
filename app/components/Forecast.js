var React = require('react');
var PropTypes = React.PropTypes;
var getDate = require('../utils/getDate.js');
var key = 0;

function Forecast (props) {
	
	function uniqueKey () {
		key++;
		console.log(key);
		return key;
	}

	var font = {
		fontFamily: "'Lato', sans-serif"
	};

	var locationHeader = {		
		marginTop: 30,
		fontSize: 80
	};

	var subHeader = {
		marginTop: 15,
		marginBottom: 40,
		fontSize: 30
	};

	var colStyle = {
		marginTop: 30
	};

	var iBigger = {
		fontSize: 205,
		cursor: 'pointer'		
	};

	var dateText = {
		position: 'relative',
		bottom: 30,
		fontSize: 30
	};
	
	if (props.isLoading) {
		return (
			<div>Loading.</div>
		)
	} else {
		return (
			<div className="container" style={font}>
				<div className="row text-center">
					<div className="col-xs-12" style={locationHeader}>{props.location}</div>
					<div className="col-xs-12" style={subHeader}>Select a day</div>					
				</div>
				<div className="row">					
					{props.weatherForecast.list.map(function (day, index) {						
						var statusCode = day.weather[0].id;
						return <div key={uniqueKey()} className="col-xs-12 col-sm-4 col-md-3 text-center" style={colStyle}>
									   <i className={'owf ' + 'owf-' + statusCode} style={iBigger}></i>
									   <div style={dateText}>{getDate(index)}</div>
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