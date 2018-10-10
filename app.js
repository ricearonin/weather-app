const request = require('request');
const config = require('./config');

var mykey = config.googleAPI;

console.log(mykey);

request(
  {
    url:
      'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=' +
      mykey,
    json: true,
  },
  (error, response, body) => {
    console.log(body);
  },
);
