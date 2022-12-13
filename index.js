import Canvas from "/Canvas.js";

const canvas = new Canvas();
canvas.createCanvas();

window.addEventListener("resize", () => {
  canvas.resizeCanvas();
});
