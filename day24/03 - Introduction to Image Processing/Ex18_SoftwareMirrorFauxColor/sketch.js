// our video object
var capture;

// rotation angle
var angle = 0;

function setup() {
  createCanvas(500, 500);

  // start up our video
  capture = createCapture(VIDEO);
  capture.hide();
  
  noStroke();
}

function draw() {
  // erase the bg
  background(255);

  // expose the pixels in the video
  capture.loadPixels();

  // make sure we have pixels to work with
  if (capture.pixels.length > 0) {
    
    // how big should our boxes be?
    var boxSize = int(map(mouseX, 0, width, 10, 50));

    // iterate over every pixel in the image
    for (var x = 0; x < capture.width; x += boxSize) {
      for (var y = 0; y < capture.height; y += boxSize) {
        // compute the location in 1D space
        i = (x + y * capture.width) * 4;

        // grab the r, g & b values to make things easier
        var r = capture.pixels[i];
        var g = capture.pixels[i + 1];
        var b = capture.pixels[i + 2];
        
        // pick a color based on brightness
        if (r + g + b > 380) {
          // white
          fill(255);
        }
        else {
          // blue
          fill(0,0,255);
        }

        // draw a box here
        push();
        translate(x,y);
        rotate(radians(angle));
        rect(0,0,boxSize,boxSize);
        pop();
      }
    }
  }
  
  angle += 1;
}