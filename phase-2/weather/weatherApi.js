const apiKey = require('./weatherApiKey');
const got = require('got');

class WeatherApi {
  fetchWeatherData = (city, callback) => {
    got(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
    .then((response) => {
      callback(JSON.parse(response.body));
    });
  }
}

module.exports = WeatherApi;