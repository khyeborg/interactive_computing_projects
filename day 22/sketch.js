var world; 
var temp;
var things = [];

var allImages = ['#sky1', '#sky2', '#sky3'];
var currentImage = 0;

// equirectangular projection image 

// OBJ file format 
// DAE file format 

// google poly 

function setup() {
	noCanvas();
	world = new World('VRScene');

	//temp = new Particle(0, 0, -5);
}

function draw() {
	//temp.move();

	// move to the next sky image periodically
	if (frameCount % 600 == 0) {
		// move to the next image in our array
		currentImage += 1;
		if (currentImage == allImages.length) {
			currentImage = 0;
		}

		// set our sky to the newly selected image

		// grab a reference to our sky sphere
		var sky = select('#theSky');
		sky.attribute('src', allImages[currentImage]);
	}

	if (frameCount % 10 == 0) {
		things.push(new Particle(0, 0, -5));
	}

	for (var i = 0; i < things.length; i++) {
		things[i].move();
	} 
}


class Particle {

	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.alive = true;

		this.box = new Box ({
			x: this.x, y: this.y, z: this.z,
			red: random(255), green: random(255), blue: random(255), 
			opacity: 0.5, 
			asset: "two"
		});

		world.add(this.box);

		this.size = 0;
	}

	move() {
		this.box.nudge(0, 0.05, 0);
		this.box.setScaleX(this.size);
		this.box.setScaleY(this.size);
		this.box.setScaleZ(this.size);
		this.size += 0.01;

		if (this.alive === true && this.box.getY() > 20) {
			world.remove(this.box);
			this.alive = false;
			return true;
		}
		return false;
	}
}









var sketch1 = function(p) {
	
	p.setup = function() {
		var canvas = p.createCanvas(500, 500); 
		canvas.id("one");
	}

	p.draw = function() {
		p.fill(p.random(255), p.random(255), p.random(255));
		p.ellipse(p.random(500), p.random(500), 25, 25);
	}
}

var sketch2 = function(p) {
	
	p.setup = function() {
		var canvas = p.createCanvas(500, 500);
		canvas.id("two");
	}

	p.draw = function() {
		p.fill(p.random(255), p.random(255), p.random(255));
		p.rect(p.random(500), p.random(500), 25, 25);
	}
}

var temp1 = new p5(sketch1);
var temp2 = new p5(sketch2);
// p5 instance mode 

