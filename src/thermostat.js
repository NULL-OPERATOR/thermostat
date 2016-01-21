function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getTemp = function() {
  return this.temperature;
};

Thermostat.prototype.upTemp = function() {
  this.temperature += 1;
};

Thermostat.prototype.downTemp = function() {
  this.temperature -= 1;
};
