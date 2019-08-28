// our video capture object
var capture;

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

	// draw the camera image to the screen
	imageMode(CORNER);
	image(capture, 0, 0, 320, 240);

	// get face array
	var faceArray = getFaceArray();

	// do we see a face?
	if (faceArray != false)
	{

	}
}
