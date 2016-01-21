'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getTemp()).toEqual(20);
  })

  it('can increase in temperature', function() {
    thermostat.upTemp();
    expect(thermostat.getTemp()).toEqual(21);
  });

  it('can decrease in temperature', function() {
    thermostat.downTemp();
    expect(thermostat.getTemp()).toEqual(19);
  });

  it('has a minimun temperature of 5 degrees', function() {
    for (var i = 0; i < 16; i++) {
      thermostat.downTemp();
    }
    expect(thermostat.getTemp()).toEqual(5);
  });

  it('power save mode is on by default', function() {
    expect(thermostat.isPowerSaveOn()).toBe(true);
  });

  it('powersave can be turned off', function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.isPowerSaveOn()).toBe(false);
  })
});
