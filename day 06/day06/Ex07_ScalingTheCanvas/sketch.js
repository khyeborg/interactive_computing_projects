var theCanvas;

function setup() {
  // create our canvas element to our desired dimensions
  theCanvas = createCanvas(800, 600);

  // set the canvas to scale as large as possible
  theCanvas.style('width', '100%');
  theCanvas.style('height', '100%');

  // 'vanilla' JavaScript
  /*
  var canvasRef = document.querySelector('canvas');
  canvasRef.style.width = '100%';
  canvasRef.style.height = '100%';
  */
}

function draw() {
  fill(random(255));
  ellipse(random(25, width-25), random(25, height-25), 30, 30);
}
