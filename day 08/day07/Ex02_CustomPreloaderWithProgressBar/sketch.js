// see the 'index.html' file in this sketch folder - it contains a 
// div named '#p5_loading' - this div will be displayed while the
// preload() function is operating - once it completes the div will
// automatically be hidden

var counter = 0;

function preload() {
  for (var i = 0; i < 49; i++) {
    var tempImage = loadImage('images/' + i + '.png', updateCounter);
  }
  var bigImage1 = loadImage("big_image1.png", updateCounter);
  var bigImage2 = loadImage("big_image2.png", updateCounter);
  var bigImage3 = loadImage("big_image3.png", updateCounter);
}

// this function is called when a load request finishes
function updateCounter() {
  // increase our counter
  counter++;
  
  // use the counter to set the style on the '#progress_bar' div
  var progress_bar = select('#progress_bar');
  progress_bar.style('width', int(counter/52*100) + "%");
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