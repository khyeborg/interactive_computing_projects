// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerHiro, markerZb;

// speech to text object
var myRec;

// some 3D geometry
var cube, sphere;
var currentItem;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerZb = world.getMarker('zb');

  // create some geometry on the marker, but make it invisible
  cube = new Box({
    x:0, y:1, z:0,
    red:0, green:255, blue:0,
    visible: false
  });
  markerZb.addChild( cube );

  sphere = new Sphere({
    x:0, y:1, z:0,
    visible: false,
    asset: 'earth'
  });
  markerZb.addChild( sphere );
  currentItem=cube;

  // create speech to text object
  myRec = new p5.SpeechRec();

  // set up our recorder to constantly monitor the incoming audio stream
  myRec.continuous = true; // do continuous recognition

  // allow partial results - this will detect words as they are said and will
  // call the parse function as soon as a word is decoded
  // when a pause in conversation occurs the entire string will be sent
  // to the parse function
  myRec.interimResults = true;

  // define our parse function (called every time a word/phrase is detected)
	myRec.onResult = parseResult;

  // start the recording engine
	myRec.start();
}


function draw() {
  currentItem.spinX(1);
  currentItem.spinY(1);
  currentItem.spinZ(1);
}


// called every time a word/phrase is detected
function parseResult() {
  // myRec.resultString is the current result
  //text(myRec.resultString, 25, 25);
  console.log(myRec.resultString);
  var mostrecentword = myRec.resultString.split(' ').pop();

  if (mostrecentword.toLowerCase() === 'cube') {
    cube.show();
    sphere.hide();
    currentItem = cube;
  }
  if (mostrecentword.toLowerCase() === 'sphere') {
    sphere.show();
    cube.hide();
    currentItem = sphere;
  }
}
