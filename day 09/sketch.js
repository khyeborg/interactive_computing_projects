var artwork;

function preload() {
	artwork = loadImage("images/beeber.png");
}

function setup() {
	createCanvas(800, 600);
	//background(128);
	bee1 = new Beeber(250, 300);
	bee2 = new Beeber(500, 150);
}

function draw() {
	//background(128);
	bee1.display();
	bee2.display();

	/*if (mouseIsPressed) {
		bee1.teleport();
		bee2.teleport();
	}*/
}

class Beeber {
	constructor(x, y) {
		// store these values into our object
		this.x = x;
		this.y = y;
		this.startX = x;
		this.startY = y;
		this.size = 100;
		//this.name = "craig";
	}

	display() {
		this.x += random(-1, 1);
		this.y += random(-1, 1);
		/*if (dist(this.x, this.y, this.startX, this.startY) > 5) {

		}*/
		image(artwork, this.x, this.y, size, size);
	}

	/*teleport() {
		this.x = random(0, width);
		this.y = random(0, height);
	}*/
}
















