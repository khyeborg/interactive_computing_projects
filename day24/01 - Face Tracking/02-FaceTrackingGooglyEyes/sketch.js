// our video capture object
var capture;

// artwork for our googley eye
var eyeImage;

function preload() {
	// load in our googly eye graphic
	eyeImage = loadImage("googly_eye.png");
}

function setup() {
	// size our canvas
	createCanvas(320, 240);

	// create a video capture object
	capture = createCapture(VIDEO);
	capture.size(320, 240);

	// prevent the capture from being displayed (we will
	// choose to display it using the image() function in
	// our draw loop
	capture.hide();
  
	// tell the face tracker to start looking at our capture 
	// object to find a face in the incoming video stream
	startTrackerFromProcessing(capture);
}

function draw() {
	background(255);
	imageMode(CORNER);
	image(capture, 0, 0, 320, 240);
	
	// get face array
	var faceArray = getFaceArray();
	
	// do we see a face?
	if (faceArray != false)
	{
		// now draw it! the vertices in the face array describe features
		// of the face.  A full map of these vertices can be found here:
		// https://github.com/auduno/clmtrackr
		
		// each element of the faceArray contains two sub-elements - the x
		// position and the y position (i.e. faceArray[27][0] is the x component of the left
		// eye and faceArray[27][1] is the y component)
		
		// draw pupils
		imageMode(CENTER);
		image(eyeImage, faceArray[27][0], faceArray[27][1]);
		image(eyeImage, faceArray[32][0], faceArray[32][1]);
	}
}