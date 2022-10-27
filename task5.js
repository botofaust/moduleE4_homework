class ElectricDevice {
  constructor(consumption) {
    this.consumption = consumption;
    this.worked = false;
  }

  turnOn() {
    this.worked = true;
  }

  turnOff() {
    this.worked = false;
  }

  getConsumption() {
    if (this.worked) {
      return this.consumption;
    } else {
      return 0;
    }
  }
}

class ElectricNetwork {
  constructor() {
    this.devices = [];
  }

  getConsumption() {
    var consumption = 0;
    for (var device of this.devices) {
      consumption += device.getConsumption();
    }
    return consumption;
  }

  plugDevice(device) {
    this.devices.push(device);
  }

  unplugDevice(device) {
    index = this.devices.indexOf(device);
    if (index !== -1) {
      this.devices.splice(index, 1);
    }
  }
}

class Teapot extends ElectricDevice {
  constructor(volume) {
    super(1500);
    this.volume = volume;
    this.fullness = 0;
  }

  fill(amount) {
    this.fullness += amount;
  }
}

class VacuumCleaner extends ElectricDevice {
  constructor(noise) {
    super(500);
    this.noise = noise;
  }

  shutdown() {
    this.noise = 0;
    this.turnOff();
  }

  start() {
    this.noise = 100;
    this.turnOn();
  }
}

n = new ElectricNetwork();
teapot = new Teapot(2);
vacuumCleaner = new VacuumCleaner(100);

n.plugDevice(teapot);
n.plugDevice(vacuumCleaner);
console.log(n.getConsumption());

teapot.turnOn();
vacuumCleaner.start();
console.log(n.getConsumption());
