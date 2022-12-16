import Canvas from "/Canvas.js";
//Add canvas on page
const canvas = new Canvas();
canvas.createCanvas();

let sectionIsHidden = false;
const section = document.querySelectorAll(".section");
const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");

startButton.addEventListener("click", (e) => {
  let sectionIsHidden = true;
  sectionVisibility(sectionIsHidden);
});
backButton.addEventListener("click", (e) => {
  let sectionIsHidden = false;
  sectionVisibility(sectionIsHidden);
});

const sectionVisibility = function (status) {
  if (status == true) {
    section[0].classList.add("hidden");
    section[1].classList.remove("hidden");
  } else {
    section[1].classList.add("hidden");
    section[0].classList.remove("hidden");
  }
};

window.addEventListener("resize", () => {
  canvas.resizeCanvas();
});
