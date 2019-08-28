var theCanvas;

function setup() {

  // create our canvas element - note that we are capturing the result
  // of this function into a variable.  this will serve as a reference to the
  // canvas element on the HTML page
  theCanvas = createCanvas(500,500);

  // set two CSS rules on our canvas element - first, tell the element to behave
  // like a 'block' (instead of as an in-line element, which is the default
  // behavior for canvas tags)
  theCanvas.style('display', 'block');

  // next, tell the canvas to set its margin to 'auto' -- this will compute the
  // total width of the browser window and the width of the canvas and then
  // evenly distribute any extra space on both sides of the canvas element
  theCanvas.style('margin', 'auto');

  // 'vanilla' JavaScript implementation
  /*
  var canvasRef = document.querySelector("canvas");
  canvasRef.style.display = 'block';
  canvasRef.style.margin = 'auto';
  */

  // some drawing stuff
  background(0);
  stroke(255);
}

function draw() {
  line(width/2, height/2, mouseX, mouseY);
}
