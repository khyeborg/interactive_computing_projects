// video capture object
var capture;

function setup() {
  createCanvas(640, 480);
  
  // start up our video
  capture = createCapture(VIDEO);
  capture.hide();
  
  noStroke();
}

function draw() {
  background(0);

  // first make sure the video is actually loaded and ready to go
  capture.loadPixels();
  if (capture.pixels.length > 0) {
    
    // figure out how big we want our ellipses to be based on the mouse position
    var s = int(map(mouseX, 0, width, 10, 50));
    
    // iterate over every pixel position
    for (var x = 0; x < capture.width; x+=s) {
      for (var y = 0; y < capture.height; y+=s) {
        // compute our location in the 1D array
        var location = (x + y*capture.width) * 4;
        
        // use the color here to draw an ellipse
        fill(capture.pixels[location], capture.pixels[location+1], capture.pixels[location+2]);
        ellipse(x, y, s, s);
      }
    }

    // debugging info to see what pixel we are looking out    
    console.log( "Mouse position: " + mouseX + ", " + mouseY);
    var location = (mouseX + mouseY*capture.width) * 4;
    console.log( "1D Array location:" + location );
    console.log( "X position: " + int( (location/4) % width) );
    console.log( "Y position: " + int( (location/4) / width) );
    console.log();
  }
}