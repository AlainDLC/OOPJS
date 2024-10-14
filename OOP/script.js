'use strict';

// this kallar på parameter this är den tomma  {}
/*
const Person = function (firstName, lastName, birthYear) {
  this.firstName = firstName; // vi bygger objectet här
  this.lastName = lastName;
  this.birthYear = birthYear;

  // BIG NOOOO
  this.calAge = function () {
    console.log(2022 - this.birthYear);
  };
};

// new Skapar en ny object
const king = new Person('King', 'DLC', 1981);

const bella = new Person('Bella', 'ros', 1991);

// Prototypes coolt

Person.prototype.calcAge = function () {
  console.log(2028 - this.birthYear);
};

Person.hey = function () {
  console.log('Was up insatnce 🥷');
};

Person.hey();

//king.calcAge();
//bella.calcAge();

// inherats prototypes

Person.prototype.speciec = 'Kameler';

const arr = [1, 3, 5, 2, 5, 6, 5, 5, 5, 6, 6, 7];

Array.prototype.uniqe = function () {
  return [...new Set(this)];
};

// getter setter

const account = {
  owner: 'King',
  movements: [200, 654, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 1000;
console.log(account.movements);

// class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023, this.birthYear);
  }
  greet() {
    console.log(`Hej ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hej statisk');
  }
}

const walter = new PersonCl('walter hej', 1994);

PersonCl.hey();

const PersonProto = {
  calAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const luna = Object.create(PersonProto);

luna.name = 'Luna';
luna.city = 'Majorna';
luna.birthYear = 2001;

luna.calAge();

console.log(luna.__proto__ === PersonProto);

const buttterfly = Object.create(PersonProto);

buttterfly.init('Butterlay', 2020);

buttterfly.calAge();
*/

////////////////////////////////
// Inheritance Between "Classes": construktor funktion
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;
*/
// es6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023, this.birthYear);
  }
  greet() {
    console.log(`Hej ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hej statisk');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old in student mode`);
  }
}

const millan = new StudentCl('Mailla flay', 2010, 'Fullstack');

// Inhertitance Betwwen "Classes" : Object create

/*
const PeronProto = {
  calcAge() {
    console.log(2023, -this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PeronProto);

const StudentProto = Object.create(PeronProto);

StudentProto.init = function (firstName, birthYear, course) {
  PeronProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i stidy ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'FullStack');
jay.introduce();
jay.calcAge();
*/

class Account {
  // publick field ()instance
  locale = navigator.language;

  // privata fields
  #movments = [];
  #pin;

  constructor(owner, currensy, pin) {
    this.owner = owner;
    this.currensy = currensy;
    this.#pin = pin;
    //this._movments = [];
    //this.locale = navigator.language;
    console.log(`Thanx for opening a account ${owner}`);
  }
  // public interface
  getMovements() {
    return this.#movments;
  }
  deposit(val) {
    this.#movments.push(val);
    return this;
  }
  witdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approvedLoan(val)) this.deposit(val);
    console.log('Loan aprovde');
    return this;
  }
  // Privata metoder

  _approvedLoan(val) {
    return true;
  }
  // statiska funkar bara i klasssen

  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('King', 'SEK', 1237);

acc1.deposit(5000);
acc1.witdraw(150);
acc1.requestLoan(2000);
acc1._approvedLoan();

Account.helper();

// Chaning

acc1.deposit(300).deposit(500).witdraw(45).requestLoan(3000).witdraw(400);

console.log(acc1);
