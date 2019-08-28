// our Leap motion hand sensor controller object (instantiated inside of 'setup');
var leapController;

// x & y position of our user controlled character
var x1 = 150;
var y1 = 250;
var x2 = 350;
var y2 = 250;

// our output div (see the HTML file);
var outputDiv;

function setup() {
  createCanvas(500, 500);

  // grab a connection to our output div
  outputDiv = select('#output');

  // set up our leap controller
  leapController = new Leap.Controller({
    enableGestures: true
  });

  // every time the Leap provides us with hand data we will ask it to run this function
  leapController.loop(handleHandData);
}

function draw() {
  background(128);

  fill(255,0,0);
  ellipse(x1, y1, 25, 25);

  fill(0,255,0);
  ellipse(x2, y2, 25, 25);
}

// this function runs every time the leap provides us with hand tracking data
// it is passed a 'frame' object as an argument - we will dig into this object
// and what it contains throughout these tutorials
function handleHandData(frame) {

  // make sure we have exactly one hand being detected
  if (frame.hands.length == 2) {
    // get the position of the two hands
    var handPosition1 = frame.hands[0].stabilizedPalmPosition;
    var handPosition2 = frame.hands[1].stabilizedPalmPosition;

    // grab the x, y & z components of the hand position
    // these numbers are measured in millimeters
    var hx1 = handPosition1[0];
    var hy1 = handPosition1[1];
    var hz1 = handPosition1[2];

    // grab the x, y & z components of the hand position
    // these numbers are measured in millimeters
    var hx2 = handPosition2[0];
    var hy2 = handPosition2[1];
    var hz2 = handPosition2[2];

    // swap them so that handPosition1 is the hand on the left
    if (hx1 > hx2) {
      hx1 = handPosition2[0];
      hy1 = handPosition2[1];
      hz1 = handPosition2[2];

      hx2 = handPosition1[0];
      hy2 = handPosition1[1];
      hz2 = handPosition1[2];
    }

    console.log(hx1 + "," + hy1 + " - " + hx2 + ", " + hy2);

    // x is left-right, y is up-down, z is forward-back
    // for this example we will use x & y to move the circle around the screen
    // let's map the x & y values to screen coordinates
    // note that determining the correct values for your application takes some trial and error!
    x1 = map(hx1, -200, 200, 0, width);
    y1 = map(hy1, 0, 500, height, 0);

    x2 = map(hx2, -200, 200, 0, width);
    y2 = map(hy2, 0, 500, height, 0);
  }
}
