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
// const button = document.getElementById("button");
// button.addEventListener("mouseover", function () {
//   this.innerHTML = "Ouch";
// });
// button.addEventListener("mouseover", function () {
//   this.innerHTML = "Ouch";
// });

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/
function whereAmI(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
whereAmI("australia");
