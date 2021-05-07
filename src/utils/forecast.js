const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2e5d71be6871e6bce896c6a6c1817ca8&query=' + latitude + ',' + longitude + '&units=m';

    request({url, json: true }, (err, { body }) => {
        if(err) {
            callback('Unable to connect weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out.');
        }
    })

}

module.exports = forecast;