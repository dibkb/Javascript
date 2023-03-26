// class Cars {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/hr`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/hr`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(val) {
//     this.speed = 1.6 * val;
//   }
// }
// const ford = new Cars("FORD", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (val) {
  this.charge = val;
};
EV.prototype.accelerate = function (val) {
  this.speed += 10;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};
const tesla = new EV("tesla", 120, 34);
tesla.chargeBattery(90);
tesla.accelerate();
console.log(tesla);
