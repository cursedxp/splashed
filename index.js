import Canvas from "/Canvas.js";
//Add canvas on page
const canvas = new Canvas();

//Selectors
const importUrlContainer = document.querySelector(".importUrl-container");
const modal = document.querySelector(".modal-container");
const section = document.querySelectorAll(".section");
const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");
const importURLButton = document.querySelector("#importUrl");
const importButton = document.querySelector("#import");
const urlField = document.querySelector("#urlField");

let sectionIsHidden = false;

importURLButton.addEventListener("click", (e) => {
  modal.classList.add("hidden");
  importUrlContainer.classList.remove("hidden");
});

startButton.addEventListener("click", (e) => {
  let sectionIsHidden = true;
  sectionVisibility(sectionIsHidden);
});
backButton.addEventListener("click", (e) => {
  let sectionIsHidden = false;
  sectionVisibility(sectionIsHidden);
});

//Shoving and hiding the sections
const sectionVisibility = function (status) {
  if (status == true) {
    section[0].classList.add("hidden");
    section[1].classList.remove("hidden");
  } else {
    section[1].classList.add("hidden");
    section[0].classList.remove("hidden");
  }
};

//Impor image from URL
importButton.addEventListener("click", (e) => {
  e.preventDefault();
  let url = urlField.value;
  canvas.addImage(url);
  importUrlContainer.classList.add("hidden");
});

window.addEventListener("resize", () => {
  canvas.resizeCanvas();
});
