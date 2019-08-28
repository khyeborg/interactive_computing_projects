// our Leap motion hand sensor controller object (instantiated inside of 'setup');
var leapController;

// x & y position of our user controlled character
var x = 500;
var y = 500;

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
  leapController.loop( handleHandData );
}

function draw() {
  background(128);
  
  fill(255);
  ellipse(x, y, 25, 25);
}

// this function runs every time the leap provides us with hand tracking data
// it is passed a 'frame' object as an argument - we will dig into this object
// and what it contains throughout these tutorials
function handleHandData(frame) {

  // make sure we have exactly one hand being detected
  if (frame.hands.length == 1) {
    // get the position of this hand
    var handPosition = frame.hands[0].stabilizedPalmPosition;
    
    // grab the x, y & z components of the hand position
    // these numbers are measured in millimeters
    var hx = handPosition[0];
    var hy = handPosition[1];
    var hz = handPosition[2];
    
    // x is left-right, y is up-down, z is forward-back
    // for this example we will use x & y to move the circle around the screen
    // let's map the x & y values to screen coordinates
    // note that determining the correct values for your application takes some trial and error!
    x = map(hx, -200, 200, 100, 400);
    y = map(hy,    0, 500, 500,   0);
  }
}