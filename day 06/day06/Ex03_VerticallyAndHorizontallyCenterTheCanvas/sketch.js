// declare a reference to our canvas element
var theCanvas;

function setup() {
  // create our canvas and store a reference to it
  theCanvas = createCanvas(500, 500);

  // run our "repositionCanvas" function - see below for more information
  repositionCanvas();

  // erase the background & set our stroke to white
  background(0);
  stroke(255);
}

function draw() {
  // just draw a line from the center of the screen to the position of the mouse
  line(250, 250, mouseX, mouseY);
}

function repositionCanvas() {
  // compute the new position of the canvas based on the width & height of the browser window
  // essentially move the canvas to the middle of the screen, and then back up by
  // 50% of the width and height of the canvas to center the canvas
  var xPos = int(windowWidth/2 - 0.5*width);
  var yPos = int(windowHeight/2 - 0.5*height);

  // adjust the position
  theCanvas.position(xPos, yPos);

  // 'vanilla' JavaScript implementation
  /*
  var canvasRef = document.querySelector('canvas');
  canvasRef.style.position = 'absolute';
  canvasRef.style.left = xPos + 'px';
  canvasRef.style.top = yPos + 'px';
  */
}

// this function runs every time the window is resized
function windowResized() {
  repositionCanvas();
}
