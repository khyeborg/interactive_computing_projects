/*var creatures = []; // declare an array, do not need to specify size

var offset = 0;
var c1;

function setup() {
	createCanvas(500, 500);

	var num = random(1, 100);
	console.log(num);

	noiseDetail(24); // smooth the curve 24 times before decided on the curve? 

	var num = noise(0); // number is always between 0 and 1
	console.log(num);
	fill(random(255), random(255), random(255));

	for (var i = 0; i < 100; i += 1) {
		var temp = new Creature(250, 250);
		creatures.push(temp);
	}

	c1 = new Creature(250, 250);
	c2 = new Creature(250, 250);
	c3 = new Creature(250, 250);
}

function draw() {

	background(0, 0, 0, 20);
	noStroke();

	var num = noise(offset); // number is always between 0 and 1
	//console.log(num);
	var size = map(num, 0, 1, 50, 250); // map remaps one number range to another number range, first 3 variables are always the same when dealing with pearl and noise
	//ellipse(250, 250, size, size);

	offset += 0.01; // a good increment (offset is infinite)

	for (var i = 0; i < 100; i += 1) {
		creatures[i].display();
	}

	c1.display();
	c2.display();
	c3.display();
}

class Creature {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.noiseOffsetX = random (0, 10000);
		this.noiseOffsetY = random (200000, 30000);
	}

	display() {
		fill(255);

		var noiseValueX = noise(this.noiseOffsetX);
		var moveAmountX = map(noiseValueX, 0, 1, -2 , 2);
		this.x += moveAmountX;

		var noiseValueY = noise(this.noiseOffsetY);
		var moveAmountY = map(noiseValueY, 0, 1, -2 , 2);
		this.y += moveAmountY;

		this.noiseOffsetX += 0.01;
		this.noiseOffsetY += 0.01;
		ellipse(this.x, this.y, 20, 20);

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
	}
}






var buffer;

function setup() {
	createCanvas(500, 500);

	ellipse(50, 50, 50, 50);

	buffer = createGraphics(500, 500);
	buffer.pixelDensity(1);

	stroke(255, 0, 0);
}

function draw() {
	//stroke(random(255), random(255), random(255));

	if (mouseIsPressed) {
		buffer.line(mouseX, mouseY, pmouseX, pmouseY);
	}
	//buffer.ellipse(mouseX, mouseY, 10, 10);

	imageMode(CENTER);

	for (var i = 0; i < 360; i+= 10) {
		push();
		translate(250, 250);
		rotate( radians(i));
		image(buffer, 0, 0);
		pop();
	}
}*/











var angle = 1;

function setup() {
	createCanvas(500, 500);
	fill(0, 0, 255);
	translate(100, 100);
	rotate( radians(45) );
	rectMode(CENTER);
	rect(0, 0, 50, 50);
}

function draw() {

	background(128);

	// multiple rotations
	push();
	translate(mouseX, mouseY);
	rotate( radians(angle) );
	rectMode(CENTER);
	fill(0, 0, 255);
	rect(0, 0, 50, 50);
	//pop(); // restores the previous value before push

	fill(0, 255, 0);
	rect(100, 100, 50, 50);

	angle += 1; 

}








/*var up, down;

function preload() {
	up = loadImage("images/up.png");
	down = loadImage("images/down.png");
}

function setup() {
  createCanvas(800, 600);
  mole1  = new Mole(300, 300);
  mole2  = new Mole(0, 300);
}

function draw() {
  background(128);
  mole1.display();
  mole1.update();
  mole2.display();
  mole2.update();
}

class Mole {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.state = "down";
		this.counter = 0;
		this.timeToWait = random(50, 200);
	}

	display() {
		if (this.state === "up") {
			image(up, this.x, this.y);
		}
		else {
			//image(down, this.x, this.y);
		}
	}

	update() {
		this.counter += 1;

		if (this.counter >= this.timeToWait) {
			if (this.state === "up") {
				this.state = "down";
			}
			else {
				this.state = "up";
			}

			this.counter = 0;
			this.timeToWait = random(50, 200);
		}
		
	}
}*/
