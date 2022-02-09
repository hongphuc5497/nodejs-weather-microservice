const props = require('./package.json');

const weather = require('./service/weather');

module.exports = {
	about: (req, res) => {
		res.json({
			name: props.name,
			version: props.version,
			license: props.license,
		});
	},
	getWeather: (req, res) => {
		weather.find(req, res, (err, data) => {
			if (err) res.send(err);

			res.json(data);
		});
	},
};
