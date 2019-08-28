// video capture object
var capture;

// color we want to track
var r = 0;
var g = 0;
var b = 0;

// what is our current threshold?  This is how sensitve our color detection algorithm should be
// low numbers means more sensitivity, high numbers mean less sensitivity (aka false positives)
var threshold = 20;

function setup() {
  createCanvas(320, 240);

  // start up our web cam
  capture = createCapture({
    video: {
      mandatory: {
        minWidth: 320,
        minHeight: 240,
        maxWidth: 320,
        maxHeight: 240
      }
    }
  });
  capture.hide();

  stroke(0, 255, 0);
  noFill();
  rectMode(CENTER);
}

function draw() {
  // expose the pixels in the incoming video stream
  capture.loadPixels();

  // if we have some pixels to work wtih them we should proceed
  if (capture.pixels.length > 0) {

    // set up variables to test for the best pixel
    var bestMatch = 1000;
    var bestLocation = -1;

    for (var i = 0; i < capture.pixels.length; i += 4) {
      // determine how close of a match this color is to our desired color
      var match = dist(r, g, b, capture.pixels[i], capture.pixels[i + 1], capture.pixels[i + 2]);
      if (match < threshold && match < bestMatch) {
        bestMatch = match;
        bestLocation = i;
      }
    }

    // draw the video
    image(capture, 0, 0);

    // do we have a best match?  it's possible that no pixels met our threshold
    if (bestLocation != -1) {
      // now we know the best match!  draw a box around it
      var xPos = (bestLocation / 4) % 320;
      var yPos = (bestLocation / 4) / 320;
      rect(xPos, yPos, 25, 25);
    }
  }
}

function mousePressed() {
  // memorize the color the user is clicking on
  var loc = int( (mouseX + mouseY * capture.width) * 4);
  r = capture.pixels[loc];
  g = capture.pixels[loc + 1];
  b = capture.pixels[loc + 2];

  console.log("Looking for: R=" + r + "; G=" + g + "; B=" + b);
}

function keyPressed() {
  if (key == 'A') {
    threshold--;
    console.log("Threshold is now: " + threshold);
  }
  if (key == 'D') {
    threshold++;
    console.log("Threshold is now: " + threshold);
  }
}
