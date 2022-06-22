const Weather = require('./weather');

global.console.log = jest.fn()

describe('Weather', () => {
  it('gets the weather data fetched by the Api class', () => {
    const mockedWeatherApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          weather: [{main: 'Clouds'}],
          main: {temp: 18.43, feels_like: 16.04, humidity: 64},
          name: 'London'
        });
      }
    }

    const weather = new Weather(mockedWeatherApi);

    weather.fetch('London');
    
    expect(weather.getWeatherData()).toEqual({
      weather: [{main: 'Clouds'}],
          main: {temp: 18.43, feels_like: 16.04, humidity: 64},
          name: 'London'
    })
  });

  it('displayWeather prints the weather data out nicely', () => {
    const mockedWeatherApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          weather: [{main: 'Clouds'}],
          main: {temp: 18.43, feels_like: 16.04, humidity: 64},
          name: 'London'
        });
      }
    }
    const mockedWeatherView = {
      displayWeatherData: () => {
        console.log('City:         London\n'+
                    'Weather:      Clouds\n'+
                    'Temperature:  18.4\n'+
                    'Feels like:   16.0\n'+
                    'Humidity:     64%');
      }
    }

    const weather = new Weather(mockedWeatherApi);

    weather.fetch('London');
    weather.displayWeather();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenLastCalledWith('City:         London\n'+
                                                 'Weather:      Clouds\n'+
                                                 'Temperature:  18.4\n'+
                                                 'Feels like:   16.0\n'+
                                                 'Humidity:     64%');
  });
});