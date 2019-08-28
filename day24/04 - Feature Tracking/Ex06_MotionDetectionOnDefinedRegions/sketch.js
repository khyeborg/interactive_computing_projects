// our video object
var capture;

// an image object to "memorize" the previous frame of video
var compareFrame;

// a "merged" image object to show motion pixels
var mergedFrame;

// threshold to see how tolerant we should be
var threshold = 20;

// keep track of "motion" pixels
var leftChange = 0;
var rightChange = 0;

// keep track of our character's position
var characterX = 160;

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

  // create an empty image that will hold a previous frame of video
  compareFrame = new p5.Image(320, 240);

  // create an empty image that will hold our final image that we want to display to the user
  mergedFrame = new p5.Image(320, 240);

}

function draw() {
  // adjust threshold based on the mouse position
  threshold = map(mouseX, 0, width, 0, 100);

  // expose the pixels of each of our image objects
  capture.loadPixels();
  compareFrame.loadPixels();
  mergedFrame.loadPixels();

  // if we have a frame of video and we have a comparison frame we can attempt
  // to perform the background removal algorithm
  if (capture.pixels.length > 0 && compareFrame.pixels.length > 0) {

    // assume that we have no motion pixels
    leftChange = 0;
    rightChange = 0;

    // examine all pixels
    for (var x = 0; x < 320; x++) {
      for (var y = 0; y < 240; y++) {
        // compute 1D location here
        var location = int((x + y * 320) * 4);

        // see if this is a changed pixel
        if (x < 50 && dist(capture.pixels[location], capture.pixels[location + 1], capture.pixels[location + 2], compareFrame.pixels[location], compareFrame.pixels[location + 1], compareFrame.pixels[location + 2]) > threshold) {
          leftChange += 1;
          mergedFrame.pixels[location] = 0;
          mergedFrame.pixels[location + 1] = 255;
          mergedFrame.pixels[location + 2] = 0;
          mergedFrame.pixels[location + 3] = 255;
        } else if (x > 240 && dist(capture.pixels[location], capture.pixels[location + 1], capture.pixels[location + 2], compareFrame.pixels[location], compareFrame.pixels[location + 1], compareFrame.pixels[location + 2]) > threshold) {
          rightChange += 1;
          mergedFrame.pixels[location] = 0;
          mergedFrame.pixels[location + 1] = 255;
          mergedFrame.pixels[location + 2] = 0;
          mergedFrame.pixels[location + 3] = 255;
        } else {
          mergedFrame.pixels[location] = capture.pixels[location];
          mergedFrame.pixels[location + 1] = capture.pixels[location + 2];
          mergedFrame.pixels[location + 2] = capture.pixels[location + 2];
          mergedFrame.pixels[location + 3] = 255;
        }
      }
    }

    // update pixels and draw our merged frame
    mergedFrame.updatePixels();
    image(mergedFrame, 0, 0);

    // see if we have to move our character
    if (leftChange > 1000) {
      characterX -= 5;
    } else if (rightChange > 1000) {
      characterX += 5;
    }

    // draw our character
    fill(255);
    ellipse(characterX, height / 2, 25, 25);

    // important - this frame of video becomes our comparision frame for the next iteration of 'draw'
    compareFrame.copy(capture, 0, 0, 320, 240, 0, 0, 320, 240);
  }
}

function mousePressed() {
  characterX = width/2;
  characterY = height/2;
}
