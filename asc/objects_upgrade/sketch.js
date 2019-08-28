// declare some variables
let circlesArray = [];
let object;

function setup() {
	createCanvas(500, 500);
	background(0);
	noStroke();
}

function draw() {
	background(0);

	// use a for loop to go through the array
	for (let i = 0; i < circlesArray.length; i++) {
		// fill in color with the object's own property
		fill(circlesArray[i].r, circlesArray[i].g, circlesArray[i].b, circlesArray[i].opacity);

		// draw the ellipse with the object's own property
		ellipse(circlesArray[i].x, circlesArray[i].y, circlesArray[i].width, circlesArray[i].height);

		// make each object jitter on independently
		circlesArray[i].x += random(-5, 5);
		circlesArray[i].y += random(-5, 5);

		// decrease the opacity individually
		circlesArray[i].opacity -= circlesArray[i].opacityDecreaseRate;
	}
}

function mouseClicked() {
	// create a new object whenever the mouse is clicked
	object = new Circle(mouseX, mouseY, 25, 25, random(255), random(255), random(255), 255, random(0.1, 3));

	// add the new object into the array
	circlesArray.push(object);
}

class Circle {
	// make a constructor
	constructor(x, y, width, height, r, g, b, opacity, opacityDecreaseRate) {
		// assign all the parameters to the object (properties?)
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.r = r;
		this.g = g;
		this.b = b;
		this.opacity = opacity;
		this.opacityDecreaseRate = opacityDecreaseRate;
	}
}

 