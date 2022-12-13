export default class Canvas {
  constructor(width, height) {
    this.properties = {
      width: width,
      height: height,
    };
  }

  //Creates canvas
  createCanvas() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    this.resizeCanvas();
  }
  //Resizes the canvas based on browser size
  resizeCanvas() {
    const canvas = document.querySelector("canvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    this.styleCanvas(canvas, canvas.width, canvas.height);
  }

  //style canvas bg to grey or custom color
  styleCanvas(canvas, width, height) {
    const canvasContext = canvas.getContext("2d");
    canvasContext.fillStyle = "rgb(242, 242, 242)";
    canvasContext.fillRect(0, 0, width, height);
  }
}
