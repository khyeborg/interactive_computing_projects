var capture;

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(0);
  
  tint(255,255,255);
  image(capture, 0, 0, 320, 240);

  tint(255,0,0);
  image(capture, 320, 0, 320, 240);

  tint(0,255,0);
  image(capture, 0, 240, 320, 240);

  tint(0,0,255);
  image(capture, 320, 240, 320, 240);
}