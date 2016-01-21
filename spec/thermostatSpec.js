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

});
