// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerZb;

// keep track of the position of our character
var characterX = 0;
var characterY = 0;

// artwork
var characterArtwork;

// load in p5 artwork
function preload() {
  characterArtwork = loadImage('images/pikachu.png');
}

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
  if (markerZb.isVisible() == true) {
    // get the position of this marker
    var zbPosition = markerZb.getScreenPosition();

    // set the character's position using this info
    characterX = zbPosition.x;
    characterY = zbPosition.y;
  }

  // draw the character here (even if the marker isn't visible)
  imageMode(CENTER);
  image(characterArtwork, characterX, characterY);
}
