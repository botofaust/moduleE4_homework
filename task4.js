function ElectricDevice(consumption) {
  this.consumption = consumption;
  this.worked = false;
  this.turnOn = function () {
    this.worked = true;
  };
  this.turnOff = function () {
    this.worked = false;
  };
  this.getConsumption = function () {
    if (this.worked) {
      return this.consumption;
    } else {
      return 0;
    }
  };
}

function ElectricNetwork() {
  this.devices = [];
  this.getConsumption = function () {
    var consumption = 0;
    for (var device of this.devices) {
      consumption = consumption + device.getConsumption();
    }
    return consumption;
  };
  this.plugDevice = function (device) {
    this.devices.push(device);
  };
  this.unplugDevice = function (device) {
    index = this.devices.indexOf(device);
    if (index !== -1) {
      this.devices.splice(index, 1);
    }
  };
}

teapot = new ElectricDevice(1500);
teapot.volume = 2;
teapot.fullness = 0;
teapot.fill = function (amount) {
  this.fullness += amount;
};

vacuumCleaner = new ElectricDevice(500);
vacuumCleaner.noise = 100;
vacuumCleaner.shutdown = function () {
  this.noise = 0;
  this.turnOff();
};
vacuumCleaner.start = function () {
  this.noise = 100;
  this.turnOn();
};

n = new ElectricNetwork();

n.plugDevice(teapot);
n.plugDevice(vacuumCleaner);
console.log(n.getConsumption());
teapot.turnOn();
vacuumCleaner.start();
console.log(n.getConsumption());
