var React = require('react');
var Link = require('react-router').Link;
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

	var errorMessage = {
		fontSize: 50,
		marginTop: 40
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

	var iStyling = {
		fontSize: 205,
		cursor: 'pointer',
		color: '#333'		
	};

	var dateText = {
		position: 'relative',
		bottom: 20,
		fontSize: 30
	};
	
	if (props.isLoading) {
		return (
			<div>Loading.</div>
		)
	} else if (props.weatherForecast.cod === '404') {
		return (
			<div className="container text-center" style={font}>
				<div style={errorMessage}>
					An error occurred. Please check that your input is correct.
				</div>
			</div>
		)
	} else {
		return (
			<div className="container" style={font}>
				<div className="row text-center">
					<div className="col-xs-12" style={locationHeader}>{props.weatherForecast.city.name + ', ' + props.weatherForecast.city.country}</div>
					<div className="col-xs-12" style={subHeader}>Select a day</div>					
				</div>
				<div className="row">					
					{props.weatherForecast.list.map(function (day, index) {						
						var statusCode = day.weather[0].id;

						return <div key={uniqueKey()} className="col-xs-12 col-sm-4 col-md-3 text-center" style={colStyle}>
										 <Link to={{
									 	    pathname: '/detail',
										    state: {
									 		    id: index,
											    forecast: props.weatherForecast
										    }									  	
										 }}>
									   	 <i className={'owf ' + 'owf-' + statusCode} style={iStyling}></i>
									   </Link>
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