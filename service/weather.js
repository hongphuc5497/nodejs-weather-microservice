const fetch = require('node-fetch');

const apiKey = '23f0222f9125b18f91d051736b335050';

const apiUrl =
	'https://api.openweathermap.org/data/2.5/weather.json?lat={lat}&lon={lon}&appid={API_key}';

const currentCoordinate = {
	lat: '10.8050522',
	lon: '106.6476198',
};

module.exports = {
	find: async (req, res, next) => {
		const url = apiUrl
			.replace('{lat}', currentCoordinate.lat)
			.replace('{lon}', currentCoordinate.lon)
			.replace('{API_key}', apiKey);

		console.log(url);

		try {
			const response = await fetch(url);
			const data = await response.json();

			res.send(data);
		} catch (error) {
			console.log(err);

			res.send('An error occurred, it could be from your api');
		}
	},
};
