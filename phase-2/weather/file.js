const WeatherApi = require('./weatherApi');
const Weather = require('./weather');

const api = new WeatherApi;
const weather = new Weather(api);

weather.fetch('London');
weather.getWeatherData();
console.log('Hello');