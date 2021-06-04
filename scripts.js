"use strict";

let randomNum;

let body = document.getElementById("body");

let color = document.getElementById("color");

let btn = document.getElementById("button");

btn.addEventListener("click", function () {
  randomNum = Math.floor(Math.random() * 10) + 1;

  switch (randomNum) {
    case 1:
      color.textContent = "Black";
      body.style.backgroundColor = "black";
      break;

    case 2:
      color.textContent = "Red";
      body.style.backgroundColor = "red";
      break;

    case 3:
      color.textContent = "Green";
      body.style.backgroundColor = "green";
      break;

    case 4:
      color.textContent = "Blue";
      body.style.backgroundColor = "blue";
      break;

    case 5:
      color.textContent = "Purple";
      body.style.backgroundColor = "purple";
      break;

    case 6:
      color.textContent = "Pink";
      body.style.backgroundColor = "pink";
      break;

    case 7:
      color.textContent = "Light Blue";
      body.style.backgroundColor = "lightblue";
      break;

    case 8:
      color.textContent = "Lime Green";
      body.style.backgroundColor = "limegreen";
      break;

    case 9:
      color.textContent = "Yellow";
      body.style.backgroundColor = "yellow";
      break;

    case 10:
      color.textContent = "Magenta";
      body.style.backgroundColor = "magenta";
      break;
  }
});
