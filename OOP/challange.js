'use strict';

/*Person.prototype.calcAge = function () {
  console.log(2028 - this.birthYear);
};

king.calcAge();
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercha = new Car('Mercha', 120);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.brake());
console.log(bmw.brake());
console.log(bmw.brake());
console.log(bmw.brake());
console.log(bmw.brake());
