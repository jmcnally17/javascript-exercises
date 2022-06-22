const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat')

const thermostat = new Thermostat;

app.get('/temperature', (req, res) => {
  res.send(`{"temperature": ${JSON.stringify(thermostat.getTemperature())}}`)
})

app.post('/up', (req, res) => {
  thermostat.up();
  res.redirect('./temperature');
})

app.post('/down', (req, res) => {
  thermostat.down();
  res.redirect('./temperature');
})

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.redirect('./temperature');
})

app.post('/setpsm', (req, res) => {
  if (thermostat.powerSavingMode === true) {
    thermostat.setPowerSavingMode(false)
  } else {
    thermostat.setPowerSavingMode(true)
  }
  res.redirect('./temperature')
})

app.get('/energyusage', (req, res) => {
  res.send(`Energy Usage: ${JSON.stringify(thermostat.energyUsage())}`)
})


console.log(`Server listening on localhost:${port}`);
app.listen(port);