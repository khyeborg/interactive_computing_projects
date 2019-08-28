// variable to hold a reference to our A-Frame world
var world;

// array to hold our particles
var particles = [];

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// make a floor for our world
	world.add( new Plane({
		rotationX: -90,
		asset: "stone",
		repeatX: 50,
		repeatY: 50,
		width: 100,
		height: 100
	}));

	// set up Perlin noise
	noiseDetail(24);

	// create a bunch of particles
	for (var i = 0; i < 100; i++) {
		particles.push( new Particle(0,0,-5));
	}
}

function draw() {
	// move all particles
	for (var i = 0; i < particles.length; i++) {
		particles[i].move();
	}
}

class Particle {

	constructor(x,y,z) {
		// every particle needs its own asset
		this.myBox = new Box({
			x: x,
			y: y,
			z: z,
			red: random(255),
			green: random(255),
			blue: random(255),
			width: 0.25,
			height: 0.25,
			depth: 0.25
		});
		world.add(this.myBox);

		// every box is going to wander around, so it needs a Perlin noise offset
		this.noiseX = random(0,1000);
		this.noiseY = random(2000,3000);
		this.noiseZ = random(4000,5000);
	}

	// every box should be able to move
	move() {
		// compute how much to move using Perlin noise
		var moveX = map( noise(this.noiseX), 0, 1, -0.03, 0.03 );
		var moveY = map( noise(this.noiseY), 0, 1, -0.03, 0.03 );
		var moveZ = map( noise(this.noiseZ), 0, 1, -0.03, 0.03 );

		// nudge the box
		this.myBox.nudge(moveX, moveY, moveZ);

		// make sure it doesn't leave the middle of the screen
		this.myBox.constrainPosition(-10, 10, 0, 10, -10, 10);

		// update Perlin noise offsets
		this.noiseX += 0.01;
		this.noiseY += 0.01;
		this.noiseZ += 0.01;

		// spin a bit, just for fun
		this.myBox.spinX(1);
	}
}
