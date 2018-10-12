const request = require('request');
const config = require('./config');
const yargs = require(`yargs`);

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
    },
  })
  .help()
  .alias('help', 'h').argv;

const mykey = config.googleAPI;

var encodedAddress = encodeURIComponent(argv.address);

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${mykey}`,
    json: true,
  },
  (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  },
);
