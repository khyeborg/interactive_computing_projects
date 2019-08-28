// wanderer array
var theWanderers = [];

// video capture object
var capture;

function setup() {
  createCanvas(640, 480);

  // startup our video
  capture = createCapture(VIDEO);
  capture.hide();

  // randomize perlin noise landscape
  noiseDetail(24);

  // slice up our image into a series of smaller strips
  // we will send those strips into a bunch of 'Wanderer' objects
  // and have them move around the world randomly
  for (var x = 0; x < 640; x += 80) {
    for (var y = 0; y < 480; y += 80) {
      // cut out a strip (start this off as empty for now)
      var strip = new p5.Image(80, 80);

      // construct a new wanderer
      var tempWanderer = new Wanderer(x, y, strip);

      // add the wanderer to our array
      theWanderers.push(tempWanderer);
    }
  }
}

function draw() {
  background(0);

  // if the video has data to analyze
  capture.loadPixels();
  if (capture.pixels.length > 0) {

    // display all wanderers
    for (var i = 0; i < theWanderers.length; i++) {
      // ask the wanderer to extract their portion of the video
      theWanderers[i].extractSlice(capture);

      // move and display the wanderer
      theWanderers[i].displayAndMove();
    }
  }
}

function Wanderer(x, y, myImage) {
  // store our initial position
  this.x = x;
  this.y = y;

  // also store our "desired" position
  this.desiredX = x;
  this.desiredY = y;

  // store our image
  this.myImage = myImage;

  // perlin noise offset
  this.xOffset = random(1000);
  this.yOffset = random(2000, 3000);

  // image slice extraction
  this.extractSlice = function(c) {
    this.myImage.copy(c, x, y, 80, 80, 0, 0, 80, 80);
  }

  // display and move function
  this.displayAndMove = function() {
    // if the mouse is not pressed we should wander using perlin noise
    if (!mouseIsPressed) {
      this.x += map(noise(this.xOffset), 0, 1, -2, 2);
      this.y += map(noise(this.yOffset), 0, 1, -2, 2);
      this.xOffset += 0.01;
      this.yOffset += 0.01;
    }
    // if the mouse isn't pressed we should try and move back to our desired spot
    else {
      // compute x & y distance
      var xDist = this.desiredX - this.x;
      var yDist = this.desiredY - this.y;

      // move a little bit
      this.x += xDist * 0.05;
      this.y += yDist * 0.05;
    }

    // display ourselves
    image(this.myImage, this.x, this.y);
  }
}
