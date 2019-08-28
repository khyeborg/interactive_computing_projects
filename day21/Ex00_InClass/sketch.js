
// create a variable for A-Frame world
var world;

// references to our markers (which are defined in the HTML document)
var hiroMarker;

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  hiroMarker = world.getMarker("hiro");
}


function draw() {
  // erase the background of the canvas
  world.clearDrawingCanvas();
}
