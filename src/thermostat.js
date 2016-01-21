function Thermostat() {
  this.MIN = 5;
  this.MAX_ON = 26;
  this.MAX_OFF = 36;
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSave = true;
}

Thermostat.prototype.getTemp = function() {
  return this.temperature;
};

Thermostat.prototype.downTemp = function() {
  if (this._isMinTemp()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.upTemp = function() {
  if (this._isMaxTemp()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype._isMinTemp = function() {
  return this.temperature === this.MIN;
}


Thermostat.prototype.isPowerSaveOn = function() {
  return this.powerSave === true;
}

Thermostat.prototype._isMaxTemp = function() {
  if (this.isPowerSaveOn()) {
    return this.temperature === this.MAX_ON;
  }
  return this.temperature === this.MAX_OFF;
}

Thermostat.prototype.powerSaveSwitch = function() {
  if (this.isPowerSaveOn()) {
    this.powerSave = false;
  } else {
  this.powerSave = true;
  }
}
