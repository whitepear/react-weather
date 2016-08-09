var React = require('react');
var Forecast = require('../components/Forecast.js');
var fetchWeather = require('../utils/fetchWeather.js');

var ForecastContainer = React.createClass({
	getInitialState: function () {
    return {
      location: '',
      isLoading: true,
      weatherForecast: {}
    }
  },
  componentDidMount: function () {    
    fetchWeather.fiveDay(this.props.routeParams.location)
    .then(function (weather) {    	
    	this.setState({
        location: this.props.routeParams.location,
    		isLoading: false,
    		weatherForecast: weather
    	});    	
    }.bind(this));
  },
  componentWillReceiveProps: function (newProps) {    
    fetchWeather.fiveDay(newProps.params.location)
    .then(function (weather) {    	
    	this.setState({
        location: newProps.params.location,
    		isLoading: false,
    		weatherForecast: weather
    	});    	
    }.bind(this));
  },
	render: function () {
		return (
			<Forecast isLoading={this.state.isLoading} weatherForecast={this.state.weatherForecast} location={this.state.location} />
		)	
	}
});

module.exports = ForecastContainer;