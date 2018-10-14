const request = require('request');
const config = require('../geocode/config.js');

const googleAPI = config.googleAPI;

var geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request(
      {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleAPI}`,
        json: true,
      },
      (error, response, body) => {
        if (error) {
          reject('Unable to connect to Google servers');
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Address not found');
        } else if (body.status === 'OK') {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng,
          });
        }
      },
    );
  });
};
geocodeAddress('56501').then(
  location => {
    console.log(JSON.stringify(location, undefined, 2));
  },
  errorMessage => {
    console.log(errorMessage);
  },
);
