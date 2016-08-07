function getDate (index) {
	// INCLUDE ABILITY TO HANDLE TRANSITION TO NEW MONTHS ON LATER INDEXES
	var currentDate = new Date();
	var date;
	var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var weekDay;
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var month;	
	

	if (index === 0) {		
		weekDay = weekDays[currentDate.getDay()];
		month = months[currentDate.getMonth()];	
		date = currentDate.getDate();	
		return weekDay + ', '	+ month + ' ' + date;
	} else if (index === 1) {
		currentDate = new Date(currentDate.getTime() + (1000 * 60 * 60 * 24));
		weekDay = weekDays[currentDate.getDay()];
		month = months[currentDate.getMonth()];	
		date = currentDate.getDate();	
		return weekDay + ', '	+ month + ' ' + date;
	} else if (index === 2) {
		currentDate = new Date(currentDate.getTime() + (1000 * 60 * 60 * 24 * 2));
		weekDay = weekDays[currentDate.getDay()];
		month = months[currentDate.getMonth()];	
		date = currentDate.getDate();			
		return weekDay + ', '	+ month + ' ' + date;
	} else if (index === 3) {
		currentDate = new Date(currentDate.getTime() + (1000 * 60 * 60 * 24 * 3));
		weekDay = weekDays[currentDate.getDay()];
		month = months[currentDate.getMonth()];	
		date = currentDate.getDate();		
		return weekDay + ', '	+ month + ' ' + date;
	} else if (index === 4) {
		currentDate = new Date(currentDate.getTime() + (1000 * 60 * 60 * 24 * 4));
		weekDay = weekDays[currentDate.getDay()];
		month = months[currentDate.getMonth()];	
		date = currentDate.getDate();	
		return weekDay + ', '	+ month + ' ' + date;		
	}
}

module.exports = getDate;