export default class Canvas {
  //Creates canvas
  constructor() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    this.canvasContext = canvas.getContext("2d");
    this.canvas = canvas;
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
  //Add an image to canvas
  addImage(url, file) {
    let image = new Image();
    image.src = url;
    let width = image.width * 0.5;
    let height = image.height * 0.5;
    image.onload = () => {
      //Add shadow to the background of image
      this.canvasContext.shadowColor = "rgba(0, 0, 0, 0.3)";
      this.canvasContext.shadowBlur = 20;
      this.canvasContext.shadowOffsetX = 2.5;
      this.canvasContext.shadowOffsetY = 2.5;
      this.canvasContext.drawImage(
        image,
        this.canvas.width / 2 - (image.width * 0.5) / 2,
        this.canvas.height / 2 - (image.width * 0.5) / 2,
        image.width * 0.5,
        image.height * 0.5
      );
    };
  }
}
