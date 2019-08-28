var theCanvas;

function setup() {
  theCanvas = createCanvas(500, 500);
  background(0,255,0);

  theCanvas.position(0,0);
  theCanvas.style('z-index', '-1');
  document.querySelector("canvas").style.position = 'fixed';

  resizeToFullScreen();
}

function draw() {
  noStroke();
  fill(random(255));
  ellipse(random(width), random(height), 25, 25);
}

function windowResized() {
  resizeToFullScreen();
}

function resizeToFullScreen() {
  if (windowWidth > windowHeight) {
    var scale = windowWidth / width;
    theCanvas.style('width', windowWidth + "px");
    theCanvas.style('height', int(height * scale) + "px");
    console.log(windowWidth + ", " + displayHeight);
    console.log("W: " + windowWidth + " -> " + scale + " -> " + int(height*scale));
  }
  else {
    var scale = windowHeight / height;
    theCanvas.style('width', int(width * scale) + "px");
    theCanvas.style('height', windowHeight + "px");
    console.log("H: " + windowHeight + " -> " + scale + " -> " + int(width*scale));
  }
}
