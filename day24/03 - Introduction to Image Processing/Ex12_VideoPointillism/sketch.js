// video object
var capture;

function setup() {
  createCanvas(640, 480);
  
  // start up our video
  capture = createCapture(VIDEO);
  capture.hide();

  noStroke();
}

function draw() {
  // first make sure the video is actually loaded and ready to go
  capture.loadPixels();
  if (capture.pixels.length > 0) {
    
    // pick 500 random pixels
    for (var i = 0; i < 500; i++) {
      // pick a random x & y position
      var x = int(random(0,width));
      var y = int(random(0,height));
      
      // now convert these values into pixel array locations
      var location = (x + y * capture.width) * 4;
      
      // use the color here to draw an ellipse
      fill(capture.pixels[location], capture.pixels[location+1], capture.pixels[location+2]);
      ellipse(x, y, 10, 10);
    }
  }
}