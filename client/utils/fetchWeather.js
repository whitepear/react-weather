var axios = require('axios');

function fetchWeather (location, callback) {		
	axios.post('/getForecast?location=' + location)
	.then(function(res) {
		return callback(res.data);
	})
	.catch(function(err) {
		return console.warn('Error in fetchWeather: ', err)
	});
} // return 5 day forecast


module.exports = fetchWeather;