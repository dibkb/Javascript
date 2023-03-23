const person = new Object({
  name: "John Doe",
  proession: "Teacher",
  age: 43,
  set updateName(newname) {
    this.name = newname;
  },
});
let content = "";
for (x in person) {
  content += person[x] + " ";
}
const personArr = Object.values(person);
const personJson = JSON.stringify(person);
person.updateName = "John Cena";
document.getElementById("person").innerHTML = person.name;
console.log(personJson);
