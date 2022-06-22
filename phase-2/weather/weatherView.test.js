const WeatherView = require('./weatherView');

global.console.log = jest.fn()

describe('WeatherView', () => {
  it('can display the weather', () => {
    const data = {
      weather: [{main: 'Clouds'}],
          main: {temp: 18.43, feels_like: 16.04, humidity: 64},
          name: 'London'
    }
    view = new WeatherView;
    view.displayWeatherData(data);
    expect(console.log).toHaveBeenLastCalledWith('City:         London\n'+
                                                 'Weather:      Clouds\n'+
                                                 'Temperature:  18.4\n'+
                                                 'Feels like:   16.0\n'+
                                                 'Humidity:     64%');
  });
});