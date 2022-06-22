const Thermostat = require('./thermostat');

describe('thermostat', () => {
  let thermostat = new Thermostat;

  it('has a temperature starting at 20˚', () => {
    expect(thermostat.getTemperature()).toBe('20˚C');
  });

  describe('#up', () => {
    it('raises the temperature by 1˚', () => {
      thermostat.up();
      expect(thermostat.getTemperature()).toBe('21˚C');
    });
  });

  describe('#down', () => {
    it('lowers the temperature by 1˚C', () => {
      thermostat.down();
      expect(thermostat.getTemperature()).toBe('20˚C');
    });

    it('cannot be lowered past 10˚C', () => {
      for (let i = 0 ; i < 100 ; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toBe('10˚C: minimum reached');
    });
  });

  describe('#checkPowerSavingMode', () => {
    it('is turned on by default', () => {
      expect(thermostat.checkPowerSavingMode()).toBe('PSM is turned on, max temperature is 25˚C');
    });
  });

  describe('#setPowerSavingMode', () => {
    it('can set PSM to off', () => {
      expect(thermostat.setPowerSavingMode(false)).toBe('PSM is turned off, max temperature is 32˚C');
    });

    it('can set PSM to on', () => {
      expect(thermostat.setPowerSavingMode(true)).toBe('PSM is turned on, max temperature is 25˚C');
    })

    it('only accepts true or false as a parameter', () => {
      expect(() => thermostat.setPowerSavingMode('chocolate')).toThrow('Invalid input');
    });

    it('cannot raise the temperature past 25˚C when PSM is on', () => {
      thermostat.setPowerSavingMode(true);
      for (let i = 0 ; i < 100 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toBe('25˚C: max reached');
    });

    it('cannot raise the temperature past 25˚C when PSM is off', () => {
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 100 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toBe('32˚C: max reached');
    });
  });

  describe('#reset', () => {
    it('resets the temperature back to 20˚C', () => {
      thermostat.reset();
      expect(thermostat.getTemperature()).toBe('20˚C');
    });
  });

  describe('#energyUsage', () => {
    it('gives low energy usage for colder than 18˚C', () => {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.energyUsage()).toBe('low-usage');
    });
  });
});