

/*var x = 0;
var y = 250; 
var x2 = 0; 
var y2 = 100;
var speed = 5;*/

//var shape = "ellipse";

function setup() {
	createCanvas(500, 500);
	background(0);
	fill(255);
	noStroke();

	/*background(128);
	noStroke();

	var foobar;
	foobar = 5;

	var foobars = 60;

	console.log(foobar);*/
}

function draw() {

	if (mouseIsPressed === true) { // true and data type matches
		ellipse(mouseX, mouseY, 15, 15);
	}

	// pick a x, y position for this ellipse
	/*var x = random(15, width - 15); // canvas width
	var y = random(15, height - 15); // canvas height
	var size = random(3, 25);
	var r = random(0, 255);
	var g = random(0, 255);
	var b = random(0, 255);
	var a = random(0, 255);
	//var offset = random(0, 25);
	//fill(r, g, b, a);

	//background(255);*/

	/*if (mouseX > 250) {
		ellipse(mouseX + random(-20, 20), mouseY + random(-20, 20), size, size);
	}

	else {
		ellipse(mouseX, mouseY, size, size);
	}*/

	/*if (random(0, 100) > 98) {
		var r = random(0, 255);
		var g = random(0, 255);
		var b = random(0, 255);
		var a = random(0, 255);
		//var offset = random(0, 25);
		fill(r, g, b, a);
	}



	if (shape = "ellipse") {
		ellipse(mouseX + random(-20, 20), mouseY + random(-20, 20), size, size);
	}
	//x += speed;*/

	/*ellipse(x2, y2, 25, 25);
	x2 += 2;*/

	/*fill(random(255), random(255), random(255));
	ellipse(mouseX, mouseY, 25, 25);
	//background(0, 0, 0, 25);*/
}

function mousePressed() {
	/*console.log("Mouse is pressed");
	ellipse(mouseX, mouseY, 75, 75);*/

	/*x = 0;
	speed = random(1, 5);*/

	//background(255);
}

function keyPressed() {
	fill(random(255), random(255), random(255));
	/*background(128);
	console.log("A key was pressed!");
	console.log("The key was", key);*/
	//save("masterpiece.png");
}