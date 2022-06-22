class Thermostat {
  constructor () {
    this.temperature = 20;
    this.PSM = true;
  }

  getTemperature() {
    if (this.temperature === 10) {
      return `${this.temperature}˚C: minimum reached`;
    } else if ((this.temperature === 25 && this.PSM === true) || this.temperature === 32) {
      return `${this.temperature}˚C: max reached`;
    } else {
      return `${this.temperature}˚C`;
    }
  }

  up() {
    if (this.temperature < 25 || (this.temperature < 32 && this.PSM === false)) {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    }
  }

  checkPowerSavingMode() {
    if (this.PSM === true) {
      return 'PSM is turned on, max temperature is 25˚C';
    } else {
      return 'PSM is turned off, max temperature is 32˚C';
    }
  }

  setPowerSavingMode(value) {
    if (value === true || value === false) {
      this.PSM = value;
      return this.checkPowerSavingMode();
    } else {
      throw 'Invalid input';
    }
  }

  reset() {
    this.temperature = 20;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    }
  }
}

module.exports = Thermostat;