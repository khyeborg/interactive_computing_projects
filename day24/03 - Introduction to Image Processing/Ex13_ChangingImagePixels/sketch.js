// our artwork
var artwork;

function preload() {
  artwork = loadImage('images/bieber.png');
}

function setup() {
  createCanvas(500, 500);
  
  // expose the pixels in the bieber image
  artwork.loadPixels();
  
  // iterate over every pixel in the image
  for (var x = 0; x < artwork.width; x++) {
    for (var y = 0; y < artwork.height; y++) {
      // compute our 1D location
      var location = (x + y * artwork.width) * 4
      
      // grab the r, g & b values to make things easier
      var r = artwork.pixels[location];
      var g = artwork.pixels[location + 1];
      var b = artwork.pixels[location + 2];

      // is this a white pixel?
      if (r == 255 && g == 255 && b == 255) {
        // put a blue pixel here instead
        artwork.pixels[location] = 0;
        artwork.pixels[location+1] = 0;
        artwork.pixels[location+2] = 255;
      }
    }
  }
  
  // because we don't really need the nested array above we could've just written
  // this using a simple for loop that would look at each pixel - I did this to reiterate
  // the procedure we went through to move between 2D images and 1D pixel arrays
  
  // all done, update the image
  artwork.updatePixels();
  
  // draw the image
  image(artwork, 0, 0);
}

function draw() {
  
}