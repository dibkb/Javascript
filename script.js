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
const display = (message) => {
  const displayDiv = document.getElementById("loading");
  displayDiv.innerHTML = message;
};
setTimeout(() => display("Yo yo"), 3000);
