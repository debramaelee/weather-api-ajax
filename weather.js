var APPID = 'API KEY';

$.get('http://api.openweathermap.org/data/2.5/weather', {
	q: 'Atlanta',
	APPID: APPID
})
.then(function(data){
	console.log('data', data);
})