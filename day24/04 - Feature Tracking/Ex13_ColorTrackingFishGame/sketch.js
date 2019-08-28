// video capture object
var capture;

// color we want to track
var r = 0;
var g = 0;
var b = 0;

// what is our current threshold?  This is how sensitve our color detection algorithm should be
// low numbers means more sensitivity, high numbers mean less sensitivity (aka false positives)
var threshold = 20;

// artwork
var fish, coin;

// fish location
var fishLocX = 0;
var fishLocY = 0;

// coins
var coins = [];

function preload() {
  fish = loadImage('images/fish.png');
  coin = loadImage('images/coin.png');
}

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

  // create our coins
  for (var i = 0; i < 25; i++) {
    coins.push( new Coin() );
  }
}

function draw() {
  // expose the pixels in the incoming video stream
  capture.loadPixels();

  // if we have some pixels to work wtih them we should proceed
  if (capture.pixels.length > 0) {

    // set up variables to test for the best pixel
    var bestLocations = [];

    for (var i = 0; i < capture.pixels.length; i += 4) {
      // determine how close of a match this color is to our desired color
      var match = dist(r, g, b, capture.pixels[i], capture.pixels[i + 1], capture.pixels[i + 2]);
      if (match < threshold) {
        // this pixel qualifies!  store its location into our array
        bestLocations.push(i);
      }
    }

    // draw the video
    imageMode(CORNER);
    image(capture, 0, 0);

    // do we have a best match?  it's possible that no pixels met our threshold
    if (bestLocations.length > 0) {
      // average up all of our locations
      var xSum = 0;
      var ySum = 0;
      for (var i = 0; i < bestLocations.length; i++) {
        xSum += (bestLocations[i] / 4) % 320;
        ySum += (bestLocations[i] / 4) / 320;
      }

      // average our sums to get our 'centroid' point
      fishLocX = xSum / bestLocations.length;
      fishLocY = ySum / bestLocations.length;
    }
  }

  // draw our coins
  for (var i = 0; i < coins.length; i++) {
    coins[i].drawAndMove();
  }

  // draw the fish here
  imageMode(CENTER);
  image(fish, fishLocX, fishLocY);
}

function mousePressed() {
  // memorize the color the user is clicking on
  var loc = int((mouseX  + mouseY  * capture.width) * 4);
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


function Coin() {
  // pick a random spot to fall from
  this.x = random(width);
  this.y = random(-300, 0);

  // perlin noise offest
  this.noiseOffset = random(1000);

  // draw and move
  this.drawAndMove = function() {
    this.y += 3;
    this.x += map(noise(this.noiseOffset), 0, 1, -1, 1);
    if (this.y > height) {
      this.y = random(-300, 0);
    }
    if (dist(this.x, this.y, fishLocX, fishLocY) < 100) {
      this.y = random(-300, 0);
    }
    this.noiseOffset += 0.01;

    imageMode(CENTER);
    image(coin, this.x, this.y);
  }
}
