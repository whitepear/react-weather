var axios = require('axios');

var getWeather = {	
	fiveDay: function (location) {
		console.log('fetchWeather location argument is: ' + location);
		return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&APPID=2a1dfced24bf88fa9d326596f4c84973&cnt=5')
			.then(function (res) {
				return res.data;
			})
			.catch(function (err) {
				console.warn('Error in fetchWeather: ', err)
			});
	} // return 5 day forecast
};

module.exports = getWeather;




//  CURRENT WEATHER API EXAMPLE
//  http://api.openweathermap.org/data/2.5/weather?q= + CITY-NAME + &type=accurate&APPID=2a1dfced24bf88fa9d326596f4c84973