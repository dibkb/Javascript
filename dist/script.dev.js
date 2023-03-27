"use strict";

var body = document.querySelector("body");
var divs = document.getElementsByTagName("div");
var zack = document.getElementById("person");
var yash = document.querySelector("div.yash");
yash.style.width = "600px";
yash.style.height = "600px";
yash.style.fontSize = "24px";
yash.style.backgroundImage = "url(https://images.pexels.com/photos/7175450/pexels-photo-7175450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
yash.addEventListener("mouseover", function () {
  this.innerHTML = "MOUSE HOVER";
});
yash.addEventListener("mouseout", function () {
  this.innerHTML = "Thankyou";
});
body.removeChild(zack);
var ironman = document.createElement("div");
var node = document.createTextNode("Tony Stark");
ironman.appendChild(node);
body.appendChild(ironman);
console.log(ironman);