const request = require('request');
const config = require('./config');

const darkskyAPI = config.darkSkyAPI;

var getWeather = (lat, lng, callback) => {
  //don't need URI encoding

  request(
    {
      url: `https://api.darksky.net/forecast/${darkskyAPI}/${lat},${lng}`,
      json: true,
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        var weatherResults = {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
        };
        callback(undefined, weatherResults);
      } else {
        callback('Unable to fetch weather.');
      }
    },
  );
};

module.exports = {
  getWeather,
};
