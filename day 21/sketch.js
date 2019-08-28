// variable to hold a reference to our A-Frame world
var world;

var spinner;

var tower = [];

var myContainer;

function setup() {
	// no canvas needed
	//noCanvas();
	createCanvas(500,500);


	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');
	world.setFlying( true );

	for (var y = 0.5; y < 100; y += 1) {
		var b = new Box({
			x: 0, y: y, z: -5,
			red: random(255), green: random(255), blue: random(255),
			width: 0.5, height: 0.5, depth: 0.5,
			rotationX: random(0, 360),
			rotationY: random(0, 360),
			rotationZ: random(0, 360),
			asset: 'stone',
			scaleX: random(0.5, 1.5),
			clickFunction: function(me) {
				world.teleportToObject(me);
			}
		});
		world.add( b );

		tower.push(b);
	}

	var s = new Sphere({
		x: -8, y: 5, z: -5,
		radius: 1.0,
		red: 0, blue: 255, green: 0,
		clickFunction: function(me) {
			me.setRed( random(255) );
			me.setGreen( random(255) );
			me.setBlue( random(255) );

			world.slideToObject(me, 2000);
		}
	});
	world.add( s );

	var floor = new Plane({
		x: 0, y: 0,
		width: 100, height: 100,
		rotationX: -90,
		asset: 'stone',
		repeatX: 100, repeatY: 100
	});
	world.add( floor );


	spinner = new Box({
		x: 5, y: 5, z: -5,
		rotationY: 45,
		asset: 'defaultCanvas0'
	});
	world.add(spinner);


	myContainer = new Container3D({
		x: 0, y: 5, z: -5
	});
	world.add(myContainer);

	var b1 = new Box({
		red: 0, green: 255, blue: 0,
		x: -10, y: 0, z: 0
	});
	myContainer.addChild( b1 );

}

function draw() {
	myContainer.spinY(1);

	fill(random(255), random(255), random(255));
	ellipse(random(500), random(500), 50, 50);

	if (false && mouseIsPressed) {
		world.moveUserForward(0.05);
	}

	spinner.spinY(1);
	//spinner.spinZ(1);
	//spinner.spinX(1);

	for (var i = 0; i < tower.length; i++) {
		tower[i].spinY(1);
		if (tower[i].getScaleX() < 5) {
			tower[i].setScaleX( tower[i].getScaleX() + 0.1 )
		}
	}
}




/*var world;

function setup() {
	noCanvas();

	world  = new World('VRScene');
	world.setFlying(true);

	for (var y = 0; y < 100; y++) {
		var b = new Box({
		x: 0, y: y, z: -5,
		red: random(255), green: random(255), blue:random(255),
		width: 0.5, height: 0.5, depth: 0.5,
		rotationX: random(0, 360),
		rotationY: random(0, 360),
		rotationZ: random(0, 360)
	});
	world.add(b);
	}

	var floor = new Plane ({

	});
}

function draw() {

}*/