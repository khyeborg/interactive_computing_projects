/*function preload() {
}

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(128);

}

foo(); // calling function before it is defined is fine 

function foo() {
	console.log("Hey there, this is foo!");
}

foo();

var a = function() { // variables can store int, float, strings, and even function
	console.log("Hey there");
} 

a();*/
/*
var myPokemon = { 
	name: 'Pikachu', 
	power: 'Electricity',
	alive: true,
	hitPoints: 100, 
	sayHello: function() {
		console.log("Hey there, what's up?");
		console.log("My name is: " + this.name); // 'this' is a reference to the object itself
	} 
};

var myPokemon2 = { 
	name: 'Charmander', 
	power: 'Fire',
	alive: true,
	hitPoints: 50, 
	sayHello: function() {
		console.log("Hey there, what's up?");
		console.log("My name is: " + this.name); // 'this' is a reference to the object itself
	} 
};

console.log(myPokemon);
console.log(myPokemon.name);
console.log(myPokemon["name"]);

myPokemon.sayHello();
myPokemon2.sayHello();
*/
/*
class Pokemon {

	constructor(name, power) { // the constructor class 
		this.name = name;
		this.power = power;
	}

	sayHello() {
		console.log("Hi, my name is " + this.name);
		console.log("My power is " + this.power);
	}
}

var a = new Pokemon("squirtle"); // instantiation 
var b = new Pokemon("eevee", "normal");

b.name = "charmander";

console.log("\n");
console.log(a.name, a.power);
console.log(b.name, b.power);

a.sayHello();
b.sayHello();
*/

var ball1;
var ball2;

var theBalls = [];

function setup () {
	createCanvas(500, 500);
	background(128);
	noStroke();

	ball1 = new Ball(250, 250);
	ball2 = new Ball(250, 250);


	/*for (var i = 0; i < 100; i++) {
		theBalls.push(new Ball(random(0, 500), random(0, 500))); // push balls into the array
	}*/
}

function draw() {

	background(0, 0, 0, 80);

	ball1.move();
	ball1.display();

	ball2.move();
	ball2.display();

	if (mouseIsPressed) {
		var temp = new Ball(mouseX, mouseY);
		theBalls.push(temp);
	}

	for (var i = 0; i < theBalls.length; i++) {
		theBalls[i].move();
		theBalls[i].display();
	}
}

class Ball {

	constructor(startX, startY) {
		// place the ball in the middle of the screen
		this.x = startX;
		this.y = startY;

		this.xSpeed = random(-10, 10);
		this.ySpeed = random(-10, 10);

		this.red = random(0, 255);
		this.green = random(0, 255);
		this.blue = random(0, 255);

		this.size = 25;
	}

	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if (dist(this.x, this.y, mouseX, mouseY) < this.size) {
			this.size += 1;
		
			if (this.size > 100) {
				this.size = 100;
			}
		 }
		 else {
		 	this.size -= 1;
		 	if (this.size < 25) {
		 		this.size = 25;
		 	}
		 }

		if (this.x > width || this.x < 0) {
			this.xSpeed *= -1;
			this.red = random(0, 255);
			this.green = random(0, 255);
			this.blue = random(0, 255);
		}
		if (this.y > height || this.y < 0) {
			this.ySpeed *= -1;
			this.red = random(0, 255);
			this.green = random(0, 255);
			this.blue = random(0, 255);
		}
	}

	display() {
		fill(this.red, this.green, this.blue);
		ellipse(this.x, this.y, this.size, this.size);
	}
}
























