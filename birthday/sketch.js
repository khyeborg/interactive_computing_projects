var martin, hat, confetti;
var counter;

function preload() {
    martin1 = loadImage("images/martin1.png");
    martin2 = loadImage("images/martin2.png");
    hat = loadImage("images/hat.png");
    confetti = loadImage("images/confetti.png")
}

function setup() {
  createCanvas(2000, 2000);
  frameRate(60);
  counter = 0;
}

function draw() {

	if (counter % 2 === 0) {
		image(martin1, 100, 200);
	}
	else {
		image(martin2, 100, 200);
	}
   
    image(hat, 190, 40);
    counter++;
}