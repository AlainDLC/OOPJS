'use strict';

// this kallar på parameter this är den tomma  {}
const Person = function (firstName, lastName, birthYear) {
  this.firstName = firstName; // vi bygger objectet här
  this.lastName = lastName;
  this.birthYear = birthYear;

  /* BIG NOOOO
  this.calAge = function () {
    console.log(2022 - this.birthYear);
  };*/
};

// new Skapar en ny object
const king = new Person('King', 'DLC', 1981);

const bella = new Person('Bella', 'ros', 1991);

console.log(king, ' ', bella);
