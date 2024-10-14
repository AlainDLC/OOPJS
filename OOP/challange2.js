'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  get speedUS() {
    return console.log(`speed in ${this.speed / 1.6} km/h`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new Car('Ford', 120);

ford.speedUS = 200;

console.log(ford);
