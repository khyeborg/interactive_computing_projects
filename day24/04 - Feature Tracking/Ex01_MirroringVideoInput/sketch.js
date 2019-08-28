// our video object
var capture;

// an image object to "memorize" a previous frame of video
var compareFrame;

// an image object to display the result of the background removal algorithm
var mergedFrame;

// how tolerant should our threshold be for keeping pixels?
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
}

function draw() {
  capture.loadPixels();
  if (capture.pixels.length > 0) {
    mirrorVideo();
    image(capture, 0, 0);
  }
}

// mirror our video
function mirrorVideo() {
  // iterate over 1/2 of the width of the image & the full height of the image
  for (var x = 0; x < capture.width/2; x++) {
    for (var y = 0; y < capture.height; y++) {
      // compute location here
      var loc1 = (x + y*capture.width) * 4;
      var loc2 = (capture.width-x + y*capture.width) * 4;
      
      // swap pixels from left to right
      var tR = capture.pixels[loc1];
      var tG = capture.pixels[loc1+1];
      var tB = capture.pixels[loc1+2];

      capture.pixels[loc1]   = capture.pixels[loc2];
      capture.pixels[loc1+1] = capture.pixels[loc2+1];
      capture.pixels[loc1+2] = capture.pixels[loc2+2];

      capture.pixels[loc2] = tR;
      capture.pixels[loc2+1] = tG;
      capture.pixels[loc2+2] = tB;
    }
  }
  capture.updatePixels();
}