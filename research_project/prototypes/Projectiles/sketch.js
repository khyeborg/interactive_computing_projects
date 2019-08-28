// variable to hold a reference to our A-Frame world
var world;

// array to hold our projectiles
var projectiles = [];

// array to hold our targets
var targets = [];

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

	// create a bunch of targets to try and hit
	for (var i = 0; i < 50; i++) {
		var temp = new Sphere({
			x: random(-50, 50),
			y: random(10, 30),
			z: random(-50, 50),
			red: random(255),
			green: random(255),
			blue: random(255),
			radius: 1
		});
		world.add( temp );
		targets.push( temp );
	}
}

function draw() {
	// tell all projectiles to move
	for (var i = 0; i < projectiles.length; i++) {
		projectiles[i].move();

		// get WORLD position for this projectile
		var projectilePosition = projectiles[i].myCube.getWorldPosition();

		// did the projectile go off the screen? if so, just remove it and move into the next one
		if (projectilePosition.x > 50 || projectilePosition.x < -50 || projectilePosition.z > 50 || projectilePosition.z < -50) {
			world.remove(projectiles[i].myContainer);
			projectiles.splice(i, 1);
			i--;
			continue;
		}

		// otherwise check for collisions with our targets
		for (var j = 0; j < targets.length; j++) {

			// compute distance
			var d = dist(projectilePosition.x, projectilePosition.y, projectilePosition.z, targets[j].getX(), targets[j].getY(), targets[j].getZ());
			if (d < 2) {
				// hit!
				world.remove(targets[j]);
				targets.splice(j, 1);
				break;
			}
		}
	}
}

function keyPressed() {
	// time to create a projectile!
	var temp = new Projectile();
	projectiles.push( temp );
}


class Projectile {

	constructor() {
		// first, figure out where the user is so we know where to place our Projectile
		var userPosition = world.getUserPosition();

		// next, figure out how the user is currently rotated - this will allow us to
		// fire off our projectile along the user's line of sight
		var userRotation = world.getUserRotation();

		// next, construct an invisible container that is on top of the user and is rotated
		// in the same way as the user
		this.myContainer = new Container3D({
			x: userPosition.x,
			y: userPosition.y,
			z: userPosition.z,
			rotationX: userRotation.x,
			rotationY: userRotation.y,
			rotationZ: userRotation.z
		});
		world.add(this.myContainer);

		// now create an asset to serve as our projectile - we will place it at 0,0,0 inside since
		// we are going to put it inside of the invisible container (which is already at the right spot)
		this.myCube = new Box({
			x:0,
			y:0,
			z:0,
			width:0.1,
			height:0.1,
			width:0.1,
			red:random(255),
			blue:random(255),
			green:random(255)
		});

		// add the assset to the container (not the world!)
		this.myContainer.addChild(this.myCube);
	}

	// our move function
	move() {
		// easy peasy - the projectile just moves along the z-axis by a certain amount
		// because it's been placed into a container that is already rotated correctly
		// we don't need to deal with any fancy math here
		this.myCube.nudge(0,0,-0.2);
	}
}
