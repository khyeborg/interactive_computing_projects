// our video capture object
var capture;

// an object that describes all of the possible points in a detected face
// this object is just being used for debugging purposes - it will be used to 
// draw the outline of a face on top of a detected region of your video
// for more information about these points visit the CLM Tracker distribution
// https://github.com/auduno/clmtrackr
var facePoints = {
	'faceOutline'  : {'closed':false, points: [0,1,2,3,4,5,6,7,8,9,10,11,12,13]},  
	'leftEye'      : {'closed':true,  points: [23,63,24,64,25,65,26,66]},
	'rightEye'     : {'closed':true,  points: [30,68,29,67,28,70,31,69]},
	'leftEyebrow'  : {'closed':false, points: [19,20,21,22]},
	'rightEyebrow' : {'closed':false, points: [18,17,16,15]},
	'noseBridge'   : {'closed':false, points: [33,41,62]},
	'nose'         : {'closed':false, points: [34,35,36,42,37,43,38,39,40]},
	'upperLip'     : {'closed':true,  points: [44,45,46,47,48,49,50,59,60,61]},
	'lowerLip'     : {'closed':true,  points: [44,55,54,53,52,51,50,58,57,56]}	
};

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
	image(capture, 0, 0, 320, 240);
	
	// get face array
	var faceArray = getFaceArray();
	
	// do we see a face?
	if (faceArray != false)
	{
		// now draw it! the vertices in the face array describe features
		// of the face.  A full map of these vertices can be found here:
		// https://github.com/auduno/clmtrackr
		
		stroke(0,255,0);

		// each element of the faceArray contains two sub-elements - the x
		// position and the y position
		
		// draw all points that have been defined above
		for (var key in facePoints)
		{
			// draw the shape
			var arrayLength = facePoints[key]['points'].length;
			for (var i = 0; i < arrayLength-1; i++)
			{	
				line(faceArray[ facePoints[key]['points'][i] ][0], faceArray[ facePoints[key]['points'][i] ][1], faceArray[ facePoints[key]['points'][i+1] ][0], faceArray[ facePoints[key]['points'][i+1] ][1]);					
			}
			
			// if the shape is closed we should connect the last point to the first point
			if (facePoints[key]['closed'])
			{
				line(faceArray[ facePoints[key]['points'][ arrayLength-1 ] ][0], faceArray[ facePoints[key]['points'][ arrayLength-1 ] ][1], faceArray[ facePoints[key]['points'][0] ][0], faceArray[ facePoints[key]['points'][0] ][1]);
			}
		}
		
		// draw pupils
		fill(255);
		noStroke();
		
		ellipse(faceArray[27][0], faceArray[27][1], 5, 5);
		ellipse(faceArray[32][0], faceArray[32][1], 5, 5);
	}
}