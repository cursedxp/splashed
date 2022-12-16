export default class Canvas {
  //Creates canvas
  constructor() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    this.canvasContext = canvas.getContext("2d");
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
    this.canvasContext.fillStyle = "rgb(242, 242, 242)";
    this.canvasContext.fillRect(0, 0, width, height);
  }
  addImage(url, file) {
    let image = Image();
    image.src = url;
    image.onload = () => {
      this.canvasContext.drawImage(image, 0, 0);
    };
  }
}
