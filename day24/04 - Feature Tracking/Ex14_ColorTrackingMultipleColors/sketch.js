// video capture object
var capture;

// colors we want to track
var r1 = 0;
var g1 = 0;
var b1 = 0;

var r2 = 0;
var g2 = 0;
var b2 = 0;

// keep track of which color we are currently going to set (the user will click to
// set color #1 and then click again to set color #2)
var currentColor = 1;

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
    var bestLocations1 = [];
    var bestLocations2 = [];

    for (var i = 0; i < capture.pixels.length; i += 4) {
      // determine how close of a match this color is to our desired colors
      var match1 = dist(r1, g1, b1, capture.pixels[i], capture.pixels[i + 1], capture.pixels[i + 2]);
      if (match1 < threshold) {
        // this pixel qualifies!  store its location into our array
        bestLocations1.push(i);
      }
      var match2 = dist(r2, g2, b2, capture.pixels[i], capture.pixels[i + 1], capture.pixels[i + 2]);
      if (match2 < threshold) {
        // this pixel qualifies!  store its location into our array
        bestLocations2.push(i);
      }
    }

    // draw the video
    image(capture, 0, 0);

    // do we have a best match?  it's possible that no pixels met our threshold
    if (bestLocations1.length > 0) {
      // average up all of our locations
      var xSum = 0;
      var ySum = 0;
      for (var i = 0; i < bestLocations1.length; i++) {
        xSum += (bestLocations1[i] / 4) % 320;
        ySum += (bestLocations1[i] / 4) / 320;
      }

      // average our sums to get our 'centroid' point
      var xPos1 = xSum / bestLocations1.length;
      var yPos1 = ySum / bestLocations1.length;

      // now we know the best match!  draw a box around it
      stroke(0,255,0);
      rect(xPos1, yPos1, 25, 25);
    }

    if (bestLocations2.length > 0) {
      // average up all of our locations
      var xSum = 0;
      var ySum = 0;
      for (var i = 0; i < bestLocations2.length; i++) {
        xSum += (bestLocations2[i] / 4) % 320;
        ySum += (bestLocations2[i] / 4) / 320;
      }

      // average our sums to get our 'centroid' point
      var xPos2 = xSum / bestLocations2.length;
      var yPos2 = ySum / bestLocations2.length;

      // now we know the best match!  draw a box around it
      stroke(255,0,0);
      rect(xPos2, yPos2, 25, 25);
    }

  }
}

function mousePressed() {
  // memorize the color the user is clicking on
  var loc = int( (mouseX + mouseY * capture.width) * 4);

  if (currentColor == 1) {
    r1 = capture.pixels[loc];
    g1 = capture.pixels[loc + 1];
    b1 = capture.pixels[loc + 2];

    console.log("Color 1 - Looking for: R=" + r1 + "; G=" + g1 + "; B=" + b1);
    currentColor = 2;
  }
  else if (currentColor == 2) {
    r2 = capture.pixels[loc];
    g2 = capture.pixels[loc + 1];
    b2 = capture.pixels[loc + 2];

    console.log("Color 2 - Looking for: R=" + r2 + "; G=" + g2 + "; B=" + b2);
    currentColor = 1;
  }
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
