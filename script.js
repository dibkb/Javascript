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
// function Person(firstName, lastName, age, profession) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.profession = profession;
//   this.changeName = function (newFirstName, newLastName) {
//     this.firstName = newFirstName;
//     this.lastName = newLastName;
//   };
// }
// const personOne = new Person("John", "Doe", 34, "Terrorist");
// const personTwo = new Person("Sally", "Rose", 41, "Feminist");
// console.log(personOne);
// personOne.changeName("Rowdy", "Rathore");
// console.log(personOne);
// --------------------------------SET--------------------------------------
// const letters = new Set(["a", "b", "c", "c"]);
// letters.add("g");
// letters.add("gg");
// letters.add("g");
// letters.forEach((val, inedx) => {
//   console.log(inedx);
// });
// console.log(letters.values());
// --------------------------------MAPS--------------------------------------
const cars = new Map();
cars.set("bmw", 4000);
cars.set("audi", 4000);
cars.set("lincoln", 5000);
cars.forEach((car, index) => {
  console.log(car);
  console.log("index", index);
});
