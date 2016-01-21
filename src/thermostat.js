function Thermostat() {
  this.temperature = 20;
  this.MIN = 5;
  this.powerSave = true;
}

Thermostat.prototype.getTemp = function() {
  return this.temperature;
};

Thermostat.prototype.upTemp = function() {
  this.temperature += 1;
};

Thermostat.prototype.downTemp = function() {
  if (this._isMinTemp()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype._isMinTemp = function() {
  return this.temperature === this.MIN;
}

Thermostat.prototype.isPowerSaveOn = function() {
  return this.powerSave === true;
}

Thermostat.prototype.powerSaveSwitch = function() {
  if (this.isPowerSaveOn()) {
    this.powerSave = false;
  } else {
  this.powerSave = true;
  }
}
