require('./weatherApi');
const WeatherApi = require('./weatherApi');
const WeatherView = require('./weatherView');

class Weather {
  constructor(api = new WeatherApi, view = new WeatherView) {
    this.api = api
    this.view = view
  }

  fetch(city) {
    this.api.fetchWeatherData(city, (response) => {
      this.data = response;
    });
  }

  getWeatherData() {
    return this.data;
  }

  displayWeather() {
    const view = new WeatherView;
    view.displayWeatherData(this.data);
  }
}

module.exports = Weather;