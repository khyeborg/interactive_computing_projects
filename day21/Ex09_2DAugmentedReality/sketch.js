// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerHiro, markerZb;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');
  markerZb = world.getMarker('zb');
}


function draw() {
  // erase the background
  world.clearDrawingCanvas();

  // use the markers as positional controllers
  if (markerHiro.isVisible() == true) {
    // get the position of this marker
    var hiroPosition = markerHiro.getScreenPosition();

    // draw an ellipse here
    fill(0,255,0);
    stroke(0);
    strokeWeight(5);
    ellipse( hiroPosition.x, hiroPosition.y, 50, 50 );
    strokeWeight(1);
    text("Hiro marker: " + hiroPosition.x + ", " + hiroPosition.y, hiroPosition.x, hiroPosition.y+50);
  }

}
