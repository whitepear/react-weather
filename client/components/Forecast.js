var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var getDate = require('../utils/getDate.js');
var key = 0;

function Forecast (props) {
	
	function uniqueKey () {
		key++;		
		return key;
	}

	var font = {
		fontFamily: "'Lato', sans-serif"
	};

	var errorMessage = {
		fontSize: 50,
		marginTop: 40
	};

	var loadingMessage = {
		textAlign: "center",
		fontSize: 38,
		marginTop: 150,
		fontFamily: "'Lato', sans-serif"
	};

	var subLoading = {
		fontSize: 28
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
			<div style={loadingMessage}>
				<svg width='158px' height='158px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(0 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(30 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.08333333333333333s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(60 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.16666666666666666s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(90 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.25s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(120 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.3333333333333333s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(150 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.4166666666666667s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(180 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(210 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5833333333333334s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(240 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.6666666666666666s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(270 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.75s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(300 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.8333333333333334s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#333333' transform='rotate(330 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.9166666666666666s' repeatCount='indefinite'/></rect></svg>
				<div>Loading.</div>
				<div style={subLoading}>Please be patient. Due to API limitations, requests must be routed through a proxy.</div>
			</div>
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