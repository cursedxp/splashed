export default class Canvas {
  constructor(width, height, color) {
    this.properties = {
      width: width,
      height: height,
      color: color,
    };
    this.createCanvas(this.properties.width, this.properties.height);
  }

  //Creates canvas based on width and heigh
  createCanvas(width, height) {
    const canvas = document.createElement("canvas");

    if (!width && !height) {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
    } else {
      canvas.width = width;
      canvas.height = height;
    }
    document.body.appendChild(canvas);

    this.styleCanvas(canvas, canvas.width, canvas.height);
  }

  //style canvas bg to grey or custom color
  styleCanvas(canvas, width, height) {
    const canvasContext = canvas.getContext("2d");
    canvasContext.fillStyle = "lightgrey";
    canvasContext.fillRect(0, 0, width, height);
  }
}
