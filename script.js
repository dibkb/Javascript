// const request = fetch("https://restcountries.com/v3.1/name/usa");
// request
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json);
//   });
// const display = (val) => {
//   const displayDiv = document.getElementById("display");
//   displayDiv.innerHTML = val;
// };
// const calcluate = (numOne, numTwo, cb) => {
//   const sum = numOne + numTwo;
//   cb(sum);
// };
// calcluate(5, 4, display);
// const display = (message) => {
//   const displayDiv = document.getElementById("loading");
//   displayDiv.innerHTML = message;
// };
// setTimeout(() => display("Yo yo"), 3000);
// --------------------------------------- PROMISES------------------------------------
// const myPromise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("OK");
//   } else {
//     reject("FAILED");
//   }
// });
// myPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("Completed");
//   });
// const timeOutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Sucessfully rejected after 3 seconds"), 3000);
// });
// timeOutPromise.then((res) => console.log(res)).catch((err) => console.log(err));
// ----------------async functions------------------------
// async function display() {
//   return "HelloWorld";
// }
// display().then((res) => console.log(res));
// ------------------DOM--------------------
// const divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// const display = document.getElementById("display");
// display.innerHTML = "Hello";
// const changeDisplay = (message) => {
//   const display = document.getElementById("display");
//   display.innerHTML = message;
// };
// const messages = ["1", "2", "3", "5345", "32"];
// messages.forEach((val, index) => {
//   changeDisplay(val);
// });
const button = document.getElementById("button");
button.addEventListener("mouseover", function () {
  this.innerHTML = "Ouch";
});
button.addEventListener("mouseover", function () {
  this.innerHTML = "Ouch";
});
