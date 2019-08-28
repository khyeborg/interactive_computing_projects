// our video object
var capture;

// an image object to "memorize" the previous frame of video
var compareFrame;

// an image object to display the result of the background removal algorithm
var mergedFrame;

// threshold to see how tolerant we should be
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

  // create an empty image that will hold a previous frame of video
  compareFrame = new p5.Image(320, 240);

    // create an empty image that will hold the result of the background removal algorithm
  mergedFrame = new p5.Image(320, 240);
}

function draw() {
  // adjust threshold based on the mouse position
  threshold = map(mouseX, 0, width, 0, 100);

  // expose the pixels of each of our image objects
  capture.loadPixels();
  compareFrame.loadPixels();
  mergedFrame.loadPixels();

  // keep track of how many different pixels we have
  var diff = 0;

  // if we have a frame of video and we have a comparison frame we can attempt
  // to perform the background removal algorithm
  if (capture.pixels.length > 0 && compareFrame.pixels.length > 0) {
    // examine all pixels in the video
    for (var i = 0; i < capture.pixels.length; i += 4) {
      // compare these pixels to the compareFrame pixels
      // we can use the distance formula for this
      if (dist(capture.pixels[i], capture.pixels[i+1], capture.pixels[i+2], compareFrame.pixels[i], compareFrame.pixels[i+1], compareFrame.pixels[i+2]) < threshold) {
        // this pixel is very similar - do nothing with it
        mergedFrame.pixels[i] = capture.pixels[i];
        mergedFrame.pixels[i+1] = capture.pixels[i+1];
        mergedFrame.pixels[i+2] = capture.pixels[i+2];
        mergedFrame.pixels[i+3] = 255;
      }
      else {
        // this pixel is very different - make it green to mark it as a "motion" pixel
        mergedFrame.pixels[i] = 0;
        mergedFrame.pixels[i+1] = 255;
        mergedFrame.pixels[i+2] = 0;
        mergedFrame.pixels[i+3] = 255;
        diff++;
      }
    }

    // update pixels and draw our merged frame
    mergedFrame.updatePixels();
    image(mergedFrame, 0, 0);

    // important - this frame of video becomes our comparision frame for the next iteration of 'draw'
    // (if there are a different # of pixels detected - this gets around the fact that the camera runs
    // at a slower framerate than draw)
    if (diff !== 0) {
      compareFrame.copy(capture, 0, 0, 320, 240, 0, 0, 320, 240);
    }
  }
}
