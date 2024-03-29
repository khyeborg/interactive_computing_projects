// our video capture object
var capture;

// artwork
var eyeImage;
var rainbowImage;

function preload() {
  // load in our googly eye graphic
  eyeImage = loadImage("googly_eye.png");

  // load in our rainbow image
  rainbowImage = loadImage("rainbow.jpg");
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
  if (faceArray != false) {
    // now draw it! the vertices in the face array describe features
    // of the face.  A full map of these vertices can be found here:
    // https://github.com/auduno/clmtrackr

    // each element of the faceArray contains two sub-elements - the x
    // position and the y position

    // compute the distance between the eyes
    var eyeSize = dist(faceArray[23][0], faceArray[23][1], faceArray[25][0], faceArray[25][1]) * 2;

    // draw pupils
    imageMode(CENTER);
    image(eyeImage, faceArray[27][0], faceArray[27][1], eyeSize, eyeSize);
    image(eyeImage, faceArray[32][0], faceArray[32][1], eyeSize, eyeSize);



    // compute the distance between the top of the upper lip and the bottom of lower lip
    var lipDistance = dist(faceArray[47][0], faceArray[47][1], faceArray[53][0], faceArray[53][1]);

    // compute the distance between the lips (mouth opening)
    var openDistance = dist(faceArray[60][0], faceArray[60][1], faceArray[57][0], faceArray[57][1]);

    // compute the distance between the edges of the mouth
    var mouthWidth = dist(faceArray[44][0], faceArray[44][1], faceArray[50][0], faceArray[50][1]);

    // does the mouth opening take up at least 40% of this space?
    if (openDistance / lipDistance > 0.4) {
      image(rainbowImage, faceArray[57][0], faceArray[57][1], mouthWidth, openDistance);
    }

  }
}