function tempConverter (kelvin) {
	var celsiusTemperature = (kelvin - 273.15).toFixed(1) + '°C';
	var fahrenheitTemperature = (kelvin * 1.8 - 459.67).toFixed(1) + '°F';
	return celsiusTemperature + ' / ' + fahrenheitTemperature;
}

module.exports = tempConverter;