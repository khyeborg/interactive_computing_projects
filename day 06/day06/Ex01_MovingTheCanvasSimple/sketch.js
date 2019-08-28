var theCanvas;

function setup() {

  // create our canvas element - note that we are capturing the result
  // of this function into a variable.  this will serve as a reference to the
  // canvas element on the HTML page
  theCanvas = createCanvas(500,500);

  // get the current position of the canvas
  var currentPosition = theCanvas.position();
  console.log(currentPosition);

  // nudge the canvas - this will absolutely position the canvas based
  // on the top-left portion of the HTML page
  theCanvas.position(currentPosition.x + 200, currentPosition.y);

  // alternately you can also do this using "vanilla" JavaScript
  /*
  var canvasRef = document.querySelector("canvas");
  canvasRef.style.position = 'absolute';
  canvasRef.style.left = currentPosition.x + 200 + 'px';
  canvasRef.style.top = currentPosition.y + 'px';
  */

  // some drawing stuff
  background(0);
  stroke(255);
}

function draw() {
  line(width/2, height/2, mouseX, mouseY);
}
