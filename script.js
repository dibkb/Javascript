// const person = new Object({
//   name: "John Doe",
//   proession: "Teacher",
//   age: 43,
//   set updateName(newname) {
//     this.name = newname;
//   },
// });
// let content = "";
// for (x in person) {
//   content += person[x] + " ";
// }
// const personArr = Object.values(person);
// const personJson = JSON.stringify(person);
// person.updateName = "John Cena";
// document.getElementById("person").innerHTML = person.name;
// console.log(personJson);
// --------------------------- CONSTRUCTOR--------------------------------------
function Person(firstName, lastName, age, profession) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.profession = profession;
  this.changeName = function (newFirstName, newLastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
  };
}
const personOne = new Person("John", "Doe", 34, "Terrorist");
const personTwo = new Person("Sally", "Rose", 41, "Feminist");
console.log(personOne);
personOne.changeName("Rowdy", "Rathore");
console.log(personOne);
