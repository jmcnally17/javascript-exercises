class WeatherView {
  displayWeatherData(data) {
    console.log(`City:         ${data.name}\n`+
                `Weather:      ${data.weather[0].main}\n`+
                `Temperature:  ${data.main.temp.toFixed(1)}\n`+
                `Feels like:   ${data.main.feels_like.toFixed(1)}\n`+
                `Humidity:     ${data.main.humidity}%`);
  }
}

module.exports = WeatherView;