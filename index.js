import Canvas from "/Canvas.js";
//Add canvas on page
const canvas = new Canvas();
canvas.createCanvas();

const startButton = document.querySelector("#startButton");
startButton.addEventListener("onclick", (e) => {});

const welcomeSlide = document.querySelector(".welcome");
const optionsSlide = document.querySelector(".options");

window.addEventListener("resize", () => {
  canvas.resizeCanvas();
});
