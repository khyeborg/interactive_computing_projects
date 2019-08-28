// video capture object
var capture;

// four slices for our video
var s1, s2, s3, s4;

function setup() {
  createCanvas(640, 480);
  
  // start up our video and hide the DOM element
  capture = createCapture(VIDEO);
  capture.hide();

  // create four holder images
  s1 = new p5.Image(320, 240);
  s2 = new p5.Image(320,240);
  s3 = new p5.Image(320,240);
  s4 = new p5.Image(320,240);
}

function draw() {
  background(0);

  // slice up the video in real-time!

  // first make sure the video is actually loaded and ready to go
  capture.loadPixels();
  if (capture.pixels.length > 0) {
    
    // ask the slices to copy over their assigned portions of the video
    s1.copy(capture, 0, 0, 320, 240, 0, 0, 320, 240);
    s2.copy(capture, 320, 0, 320, 240, 0, 0, 320, 240);
    s3.copy(capture, 0, 240, 320, 240, 0, 0, 320, 240);
    s4.copy(capture, 320, 240, 320, 240, 0, 0, 320, 240);

    // draw the images using an offset pattern
    imageMode(CENTER);
    image(s1, mouseX, mouseY);
    image(s2, width - mouseX, mouseY);
    image(s3, mouseX, height - mouseY);
    image(s4, width - mouseX, height - mouseY);
  }
}