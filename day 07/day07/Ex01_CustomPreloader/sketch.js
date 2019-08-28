// see the 'index.html' file in this sketch folder - it contains a
// div named '#p5_loading' - this div will be displayed while the
// preload() function is operating - once it completes the div will
// automatically be hidden

function preload() {
  var bigImage1 = loadImage("big_image1.png");
  var bigImage2 = loadImage("big_image2.png");
  var bigImage3 = loadImage("big_image3.png");
  var bigImage4 = loadImage("big_image4.png");
  var bigImage5 = loadImage("big_image5.png");
  var bigImage6 = loadImage("big_image6.png");
}

function setup() {
  // setup the canvas and center it horizontally
  var theCanvas = createCanvas(500,500);
  theCanvas.style('display', 'block');
  theCanvas.style('margin', 'auto');
  background(0);
}

function draw() {
  var s = random(10,30);
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), s, s);
}
