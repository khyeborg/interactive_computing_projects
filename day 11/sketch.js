/*var fred;

var theWalkers = [];

function setup() {
	createCanvas(500, 500);

	for (var i = 0; i < 100; i++) {
		theWalkers.push(new NoiseWalker(250, 250));
	}
}

function draw() {
	background(0, 50);

	theWalkers.push(new NoiseWalker(mouseX, mouseY));

	for (var i = 0; i < theWalkers.length; i++) {
		theWalkers[i].moveAndDisplay();

		if (theWalkers[i].alive == false) {
			// get out of the array
			theWalkers.splice(i , 1);
			i = i - 1; // so we don't skip a walker
		}
	}

	console.log(theWalkers.length, frameRate());
}

// myArray.splice(1,1); remove from position 1, remove 1 item 

class NoiseWalker {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.w = 30;
		this.h = 30;
		this.noiseOffsetX = random(0, 1000);
		this.noiseOffsetY = random(1000, 2000);
		this.alive = true;
		this.r = random(255);
		this.g = random(255);
		this.b = random(255);
		this.a = 0;
	}

	moveAndDisplay() {
		var noiseX = noise(this.noiseOffsetX); // gives us a number between 0 and 1 
		var moveX = map(noiseX, 0, 1, -2, 2);
		this.x += moveX; 
		this.noiseOffSetX += 0.01; 

		var noiseY = noise(this.noiseOffsetY); // gives us a number between 0 and 1 
		var moveY = map(noiseY, 0, 1, -2, 2);
		this.y += moveY;
		this.noiseOffSetY += 0.01; 

		if (this.x > width) {
			this.x = 0;
		}

		if (this.x < 0) {
			this.x = width;
		}

		if (this.y > height) {
			this.y = 0;
		}

		if (this.y < 0) {
			this.y = height;
		}

		fill(this.r, this.g, this.b, this.a);
		noStroke();
		ellipse(this.x, this.y, this.w, this.h);

		this.a += 1;
		this.w -= 0.1;
		this.h -= 0.1;

		this.w = constrain(this.w, 0, 30);
		this.h = constrain(this.h, 0, 30);

		if (this.w <= 0) {
			this.alive = false;
		}
	}
}*/

var coin, kitty;
var coins = [];

function preload() {
	coin = loadImage("coin.png");
	kitty = loadImage("evilHelloKitty.png");
}

function setup() {
	createCanvas(500, 500);
	for (var i = 0; i < 50; i++) {
		coins.push(new Coin(random(0, 600), 0));
	}
}

function draw() {
	background(0);
	for (var i = 0; i < coins.length; i++) {
		coins[i].moveAndDisplay();
	}
}

class Coin {
	constructor() {
		this.x = random(0, width);
		this.y = random(-500, 0);
		this.noiseOffset = random(0, 1000);
	}

	moveAndDisplay() {
		this.y += 2;

		this.x += map(noise(this.noiseOffset), 0, 1, -2, 2);
		this.noiseOffset += 0.1;

		image(coin, this.x, this.y);

		if (this.y > height) {
			this.y = random(-500, 0);
		}
	}
}




















