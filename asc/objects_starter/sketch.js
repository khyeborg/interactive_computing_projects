// declare some variables
let circlesArray = [];
let object;

function setup() {
	createCanvas(500, 500);
	background(0);

	// make the new object
	object = new Circle(250, 250, 100, 100, 255, 0, 0);

	// add the new object into the array
	circlesArray.push(object);

}

function draw() {
	// use a for loop to go through the array
	for (let i = 0; i < circlesArray.length; i++) {
		// fill in color with the object's own property
		fill(circlesArray[i].r, circlesArray[i].g, circlesArray[i].b);

		// draw the ellipse with the object's own property
		ellipse(circlesArray[i].x, circlesArray[i].y, circlesArray[i].width, circlesArray[i].height);
	}
}

class Circle {
	// make a constructor
	constructor(x, y, width, height, r, g, b) {
		// assign all the parameters to the object (properties?)
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.r = r;
		this.g = g;
		this.b = b;
	}
}

 