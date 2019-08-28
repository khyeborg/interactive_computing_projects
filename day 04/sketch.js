/*var xPos = 250;
var yPos = 250;

var xSpeed = 1;
var ySpeed = 2;

function setup() {
	createCanvas(500, 500);
	fill(255);
	noStroke();
}

function draw() {
	background(0);

	rect(xPos, yPos, 50, 50);

	xPos += xSpeed;
	yPos += ySpeed;

	// test to see if it hits the bottom
	if (yPos >= height - 50 || yPos <= 0) {
		ySpeed *= -1.1;
		fill(random(255), random(255), random(255));
	}

	if (xPos >= width - 50 || xPos <= 0) {
		xSpeed *= -1.1;
		fill(random(255), random(255), random(255));
	}
}*/

// create a variable
var pokemon;

function preload() {
	// load the image 
	pokemon = loadImage("images/pikachu.jpg"); // jpeg: cannot support transparency 
	// png and gif files can support transparency
}

function setup() {
	createCanvas(800, 600);
	background(0);
	noCursor(); 
}

function draw() {
	background(255);
	image(pokemon, mouseX, mouseY);
}


























