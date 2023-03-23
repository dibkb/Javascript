const person = new Object({
  name: "John Doe",
  proession: "Teacher",
  age: 43,
  info: function () {
    return `${this.name} is ${this.age} years old`;
  },
});
let content = "";
for (x in person) {
  content += person[x] + " ";
}
document.getElementById("person").innerHTML = content;
const personArr = Object.values(person);
// console.log(personArr[3]());
