const readLine = require('readline');
const Weather = require('./weather');
const got = require('got');

const display = () => {
  weather.displayWeather();
}

const end = () => {
  rl.close();
}

console.log('Hello, welcome to the weather program!');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

  const weather = new Weather;

rl.question('Which city would you like to view?\n', (city) => {
  console.log(`You have chosen ${city}`);
  setInterval(async function(){
    weather.fetch(city);
    setTimeout(display, 100);
  }, 5000);
});