var song;
var x = 250;
var y = 250;
var xSpeed = 1;
var ySpeed = 2;

function preload() {
	soundFormats("ogg", "mp3");

	// if an mp3 is not supported, load the ogg file instead
	song = loadSound("sounds/pokemon_theme.mp3");
	boing = loadSound("sounds/boing.mp3");
}

function setup() {
	createCanvas(500, 500);
	//song.play();
}

function draw() {
	background(128);

	x += xSpeed;
	y += ySpeed;

	ellipse(x, y, 50, 50);

	if (y > height || y < 0) {
		ySpeed *= -1;
		boing.play();
	}

	if (x > width || x < 0) {
		xSpeed *= -1;
		boing.play();
	}

}

function mousePressed() {
	boing.play();
}

function keyPressed() {
	if (song.isPlaying() == false) {
		song.play();
	}

	else {
		song.stop();
	}
}

var cow, ufo, bg; 

var ufoX = 250;
var ufoY = 250;

var cowX = 250;
var cowY = 384;

var escapes = 0;
var points = 0;

var ufoXSpeed = 0;
var ufoYSpeed = 0;

function preload() {
  cow = loadImage("cow.png");
  ufo = loadImage("ufo.png");
  bg = loadImage("background.jpg");
}

function setup() {
	createCanvas(500, 500);
	background(128);
	image(bg, 0, 0, 500, 500);
}

function draw() {
	imageMode(CORNER);
	image(bg, 0, 0, 500, 500);

	text("Escapes: " + escapes, 20, 40);
	text("Points: " + points, 20, 60);

	if (keyIsDown(LEFT_ARROW)) {ufoXSpeed -= 0.1;}
	if (keyIsDown(RIGHT_ARROW)) {ufoXSpeed += 0.1;}
	if (keyIsDown(UP_ARROW)) {ufoY -= 3;}
	if (keyIsDown(DOWN_ARROW)) {ufoY += 3;}

	// adjust position based on speed
	ufoX += ufoXSpeed;

	if (ufoX < ufo.width / 2) {
		ufoX = width - ufo.width / 2;
	}

	if (ufoX > width - ufo.width / 2) {
		ufoX = ufo.width / 2;
	}

	console.log(ufo.width);

	imageMode(CENTER);
	image(ufo, ufoX, ufoY);

	var cowUFODistance = dist(ufoX, ufoY, cowX, cowY);

	if (cowUFODistance < 250) {
		if(ufoX > cowX) {
			cowX -= 1;
		}
		else {
			cowX += 1;
		}
	}

	if (cowUFODistance < 50) {
		points += 1;
		cowX = random(50, 450);
	}

	if(cowX > width ||  cowX < 0) {
		escapes += 1;
		cowX = 250;
	}

	image(cow, cowX, cowY);
}
