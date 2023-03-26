// const multiply = function (a, b) {
//   return a * b;
// };
// const prod = multiply(4, 4);
// (function () {
//   console.log("this is an IREF");
// })();
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};
const info = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  add: function (x, y) {
    return this.firstName + " " + this.lastName + " " + (x + y);
  },
};
console.log(info.fullName.call(person1));
console.log(info.add.call(person2, 4, 8));
console.log(info.add.apply(person2, [4, 8]));
