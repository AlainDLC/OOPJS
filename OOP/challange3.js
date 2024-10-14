'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const jaguar = new Ev('Jaguar', 120, 23);

jaguar.chargeBattery(90);

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going ${this.speed} km/h charge ${this.charge} %`
  );
};

jaguar.accelerate();
jaguar.accelerate();
jaguar.accelerate();
jaguar.accelerate();

console.log(jaguar);

Ev.prototype.constructor = Ev;
