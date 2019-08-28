// our Leap motion hand sensor controller object (instantiated inside of 'setup');
var leapController;

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
  background(0);

  fill(255);
  ellipse(characterX, characterY, 25, 25);

}

var characterX = 250;
var characterY = 250;

// this function runs every time the leap provides us with hand tracking data
// it is passed a 'frame' object as an argument - we will dig into this object
// and what it contains throughout these tutorials
function handleHandData(frame) {
  if (frame.hands.length == 1) {
    // get the x & y position of the handsvar
    var position = frame.hands[0].stabilizedPalmPosition;

    var x = position[0];
    var y = position[1];

    console.log(x + ', ' + y);

    characterX = map( x, -200, 200, 0, 500 );
    characterY = map( y, 100, 500, height, 0);
  }
}















/* */
