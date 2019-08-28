// source artwork
var artwork;

// left and right 'holder' images
var leftStrip, rightStrip;

function preload() {
  // load our artwork
  artwork = loadImage('images/monalisa.jpg');
  
  // construct two new empty images
  leftStrip = new p5.Image(100,300);
  rightStrip = new p5.Image(100,300);
}

function setup() {
  createCanvas(640, 480);
  
  // slice up our image into two strips
  leftStrip.copy(artwork,0,0,100,300, 0,0,100,300);
  rightStrip.copy(artwork,100,0,100,300, 0,0,100,300);
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(leftStrip, mouseX, mouseY);
  image(rightStrip, width-mouseX, mouseY);  
}
