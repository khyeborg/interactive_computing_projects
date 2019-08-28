var theCanvas;

function setup() {
  // create our canvas element so that it is the full size of the browser window
  theCanvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(random(255));
  ellipse(random(25, width-25), random(25, height-25), 30, 30);
}

function windowResized() {
  theCanvas.size(windowWidth, windowHeight);

  // 'vanilla' JavaScript
  /*
  var canvasRef = document.querySelector('canvas');
  canvasRef.style.width = windowWidth + 'px';
  canvasRef.style.height = windowHeight + 'px';
  */
}
