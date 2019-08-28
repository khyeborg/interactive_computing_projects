// our video object
var capture;

// a holder image
var holder;

function setup() {
  createCanvas(500, 500);

  // start up our video
  capture = createCapture(VIDEO);
  capture.hide();

  // create our holder (make it the same size as our source artwork)
  holder = new p5.Image(640, 480);
}

function draw() {
  // erase the bg
  background(255);

  // expose the pixels in the video
  capture.loadPixels();

  // make sure we have pixels to work with
  if (capture.pixels.length > 0) {

    // expose the pixels in the holder image
    holder.loadPixels();

    // iterate over every pixel in the image
    for (var x = 0; x < capture.width; x++) {
      for (var y = 0; y < capture.height; y++) {
        i = (x + y * capture.width) * 4;

        // grab the r, g & b values to make things easier
        var r = capture.pixels[i];
        var g = capture.pixels[i + 1];
        var b = capture.pixels[i + 2];

        // is this pixel close to the mouse?  If so, keep it
        if (dist(mouseX, mouseY, x, y) < 100) {
          // put a blue pixel in the holder instead
          holder.pixels[i] = r;
          holder.pixels[i + 1] = g;
          holder.pixels[i + 2] = b;
          holder.pixels[i + 3] = 255;
        }
        // otherwise the pixel should be black
        else {
          holder.pixels[i] = 0;
          holder.pixels[i + 1] = 0;
          holder.pixels[i + 2] = 0;
          holder.pixels[i + 3] = 255;
        }
      }
    }

    // all done, update the holder image
    holder.updatePixels();

    // draw the image
    image(holder, 0, 0);
  }
}