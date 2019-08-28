// 'capture' will be a reference to our video DOM element
var capture;

function setup() {
  createCanvas(640, 480);
  
  // create a new video capture instance
  capture = createCapture(VIDEO);
  
  // hide the element on the HTML document (we will choose how we want to display
  // it later in the 'draw' function)
  capture.hide();
}

function draw() {
  background(0);
  
  // draw the capture to the screen (it will function just like an image here)
  image(capture, 0, 0);
}