// graphics variables
var borderGraphics;
var pikachuGraphicsArray = [];
var caterpieGraphicsArray = [];
var backdrop;
var clock;

// mole variables
var moleArray = [];
var upDownArray = ["up", "down", "down", "down"];
var hitBooleanArray = [];
var missBooleanArray = [];

// caterpie variables
var caterpieCounter = 0;
var caterpieCounterDirection = 1;
var mallet1, mallet2;

// distance calculation variables
var distanceArray = [];

// adjustable variables 
var borderSize = 120;
var randomUpWaitTimeLower = 20, randomUpWaitTimeHigher = 60;
var randomDownWaitTimeLower = 80, randomDownWaitTimeHigher = 400;

// game variables
var score = 0;
var misses = 0;
var tintMapCounter;
var mouseIsClicked = false;
var millisecond, startScreenMillisecond;
var gameDuration = 30;

// temporary variables (for array.push())
var temp;
var distance;

// start screen variables
var startScreenBoolean = true;
var startScreenBackground;
var boxImage, boxImage2;

// sound variables
var scoreSound, clickSound, gameMusic, missSound, winMusic;

// end screen variables
var win1Image, pokemonCenter, winScreenBackground;
var winGameBoolean = false;
var pikachuWinArray = [];
var pikachuWinArrayCounter = 0;

function preload() {
	borderGraphics = loadImage("images/border.png");
	backdrop = loadImage("images/background.jpg");
	boxImage = loadImage("images/bar1.png");
	boxImage2 = loadImage("images/bar2.png");
	startScreenBackground = loadImage("images/startScreenBackground.jpg");
	mallet1 = loadImage("images/mallet1.png");
	mallet2 = loadImage("images/mallet2.png");
	clock = loadImage("images/clock.png");
	win1Image = loadImage("images/win1.jpeg");
	pokemonCenter = loadImage("images/pokemonCenter.png");
	winScreenBackground = loadImage("images/winScreenBackground.jpg");

	// place all pikachu images into an array
	for (var i = 1; i <= 8; i++) {
		temp = loadImage("images/pikachu" + i + ".png");
		pikachuGraphicsArray.push(temp);
	}

	// place all caterpie animation graphics into an array 
	for (var i = 32; i <= 56; i++) {
		temp = loadImage("images/caterpie_gif/caterpie" + i + ".png");
		caterpieGraphicsArray.push(temp);
	}

	// place all pikachu WIN images into an array
	for (var i = 1; i <= 5; i++) {
		temp = loadImage("images/pika_gif/pika" + i + ".png");
		pikachuWinArray.push(temp);
	}

	// load sounds 
	gameMusic = loadSound("sounds/pokemonCenterMusic.mp3");
	clickSound = loadSound("sounds/click.mp3");
	scoreSound = loadSound("sounds/pika.mp3");
	missSound = loadSound("sounds/miss.mp3");
	winMusic = loadSound("sounds/winMusic.mp3");
}

function setup() {
	createCanvas(500, 550);
	// create 9 objects for Mole class
	for (var y = 150; y <= 450; y += 150) {
		for (var x = 100; x <= 400; x += 150) {
			temp = new Mole(x, y);
			moleArray.push(temp);
		}
	}
}

function draw() {
	noCursor();

	// play game music
	if (gameMusic.isPlaying() == false) {
		gameMusic.play();
	}

	// start screen
	if (startScreenBoolean && winGameBoolean === false) {
		frameRate(60);
		startScreenmillisecond = Math.floor(millis() / 1000); // calculate start screen duration
		imageMode(CORNER);
		image(startScreenBackground, 0, 0, width + 160, height);
		strokeWeight(3);
		stroke(255);
		
		if (mouseX >= 84 && mouseX <= 425 && mouseY >= 180 && mouseY <= 330) {
			fill(200, 221, 206);
			rect(85, 180, 340, 150, 10);
			image(boxImage2, 115, 195, 105, 130);
			textSize(60);
			fill(0);
			text("Start", 250, 275);
			if (mouseIsClicked === true) {
				clickSound.play();
				startScreenBoolean = false;
				mouseIsClicked = false;
			}
		}
		else {
			// squirtle bar
			fill(151, 203, 216);
			rect(85, 180, 340, 150, 10);
			image(boxImage, 115, 195, 105, 130);
			textSize(60);
			fill(0);
			text("Start", 250, 275);
		}

		// draw caterpie (as the cursor) at the right position
		imageMode(CENTER);
		image(caterpieGraphicsArray[caterpieCounter], mouseX, mouseY - 35, 175, 175);
		caterpieCounter += 1 * caterpieCounterDirection;

		// caterpie animation
		if (caterpieCounter == 0 || caterpieCounter == 24) {
			caterpieCounterDirection *= -1;
		}
	}
	else if (startScreenBoolean === false && winGameBoolean === false) {
		millisecond = Math.floor(millis() / 1000); // calculate game time
		noStroke();
		imageMode(CENTER);


		image(backdrop, width / 2, height / 2, width + 500, height);

		// data presentation
		fill(255);
		textSize(18);
		text("Score: " + score, 30, 45);
		text("Misses: " + misses, 160, 45);
		text("Time elapsed: " + (millisecond - startScreenmillisecond) + "s", 330, 45);
		fill(255);
		ellipse(310, 37, 30, 30);
		image(clock, 310, 37, 32, 32);

		// calculate distance between caterpie and each mole + update the distance in the distance array every frame 
		for (var i = 0; i < moleArray.length; i++) {
			distance = dist(mouseX, mouseY, moleArray[i].x, moleArray[i].y);
			distanceArray[i] = distance;
		}

		// draw moles and borders onto the canvas
		for (var i = 0; i < moleArray.length; i++) {
			moleArray[i].displayBorder();
			moleArray[i].display();
			moleArray[i].update();
		}

		if (mouseIsPressed) {
			image(mallet2, mouseX, mouseY, 75, 75);
		}
		else {
			image(mallet1, mouseX - 10, mouseY + 20, 75, 75);
		}
	}

	// present data after 30 seconds 
	if ((millisecond - startScreenmillisecond) >= gameDuration) {
		cursor(ARROW);
		frameRate(10);
		//console.log(winMusic.isPlaying());
		winGameBoolean = true;
		gameMusic.stop();
		background(255);
		image(win1Image, 180, 190, 300, 300);
		fill(random(255), random(255), random(255));
		textSize(25);
		text("Pika pika! Thanks for playing!", 35, 380);
		textSize(18);
		text("Time to send Pikachu to the Pokemon Center", 35, 410);
		image(pokemonCenter, 410, 465, 160, 120);
		text("Final score: " + score, 35, 450)
		text("Misses: " + misses, 35, 475);
		stroke(128);
		strokeWeight(2);
		// change the color of the restart box if mouseX and mouseY is at the right position
		if (mouseX >= 30 && mouseX <= 211 && mouseY >= 492 && mouseY <= 531) { 
			fill(255, 224, 102);
			rect(30, 490, 180, 40, 10);
			noStroke();
			fill(0);
			text("Click here to restart", 40, 515);
		}
		else {
			fill(255, 255, 128);
			rect(30, 490, 180, 40, 10);
			noStroke();
			fill(0);
			text("Click here to restart", 40, 515);
		}
		image(pikachuWinArray[pikachuWinArrayCounter], 405, 90, 150, 100);
		image(pikachuWinArray[pikachuWinArrayCounter], 405, 190, 150, 100);
		image(pikachuWinArray[pikachuWinArrayCounter], 405, 290, 150, 100);
		pikachuWinArrayCounter += 1;
		if (pikachuWinArrayCounter >= 5) {
			pikachuWinArrayCounter = 0;
		}
		if (winMusic.isPlaying() === false) {
			//console.log("before " + winMusic.isPlaying());
			winMusic.play();
			//console.log("after " + winMusic.isPlaying());
		}
	}
}

function mouseClicked() {
	mouseIsClicked = true;

	// everytime the mouse is pressed, check if there's a hit or miss
	if (winGameBoolean === false && startScreenBoolean === false) {
		for (var i = 0; i < moleArray.length; i++) {
			var hitBoolean = moleArray[i].checkHit();
			if (hitBoolean === true) {
				// check if the mole is in an 'up' or 'down' state
				// if the mole is down
				if (moleArray[i].upDown === "down") {
					misses += 1;
					missSound.play();
				}
				// if the mole is up 
				else if (moleArray[i].upDown === "up") {
					score += moleArray[i].points;
					scoreSound.play();
					moleArray[i].upDown = "down";
					moleArray[i].upDownCounter = 0;	
				}
			}
		}
	}

	if (winGameBoolean === true && mouseX >= 30 && mouseX <= 211 && mouseY >= 492 && mouseY <= 531) {
		// reset game variables if user restarts the game
		clickSound.play();
		winMusic.stop();
		winGameBoolean = false;
		startScreenBoolean = true;
		startScreenmillisecond = 0;
		millisecond = 0;
		score = 0;
		misses = 0;
		mouseIsClicked = false;
	}
}

class Mole {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.distance = dist(mouseX, mouseY, this.x, this.y);
		this.graphics = Math.floor(random(0, pikachuGraphicsArray.length)); // this.graphics is an integer 
		// reduce the frequency of the golden mole 
		if (this.graphics == pikachuGraphicsArray.length - 1) {
			var n = Math.floor(random(0, 10));
			if (n < 5) {
				this.graphics = Math.floor(random(0, pikachuGraphicsArray.length - 1));
			}
		}
		this.upDown = upDownArray[Math.floor(random(0, 4))]; // 1 up and 3 down's so more moles are initally in a down state
		this.upDownCounter = 0;
		// assign the mole an initial time to wait based on initial up-down state
		if (this.upDown === "up") {
			this.timeToWait = random(randomUpWaitTimeLower, randomUpWaitTimeHigher);
		}
		else if (this.upDown === "down") {
			this.timeToWait = random(randomDownWaitTimeLower, randomDownWaitTimeHigher);
		}
		this.timeToWaitDynamic = this.timeToWait;
		
		// assign a sizeX, sizeY, and value of points to each mole graphic
		if (this.graphics === 0 || this.graphics === 2) {this.sizeX = 150; this.sizeY = 125; this.points = 1;}
		else if (this.graphics === 1) {this.sizeX = 140; this.sizeY = 140; this.points = 1;}
		else if (this.graphics === 3) {this.sizeX = 105; this.sizeY = 105; this.points = 1}
		else if (this.graphics === 4) {this.sizeX = 145; this.sizeY = 100; this.points = 1;}
		else if (this.graphics === 5) {this.sizeX = 90; this.sizeY = 130; this.points = 1;}
		else if (this.graphics === 6) {this.sizeX = 125; this.sizeY = 125; this.points = 1;}
		else if (this.graphics === 7) {this.sizeX = 115; this.sizeY = 115; this.points = 3;}
	}

	display() {
		// paint the mole graphics onto the canvas if it is at an 'up' state 
		if (this.upDown === "up") {
			// make the tint calculations
			this.tintCalculation();
			tint(255, this.tintMapCounter);
			image(pikachuGraphicsArray[this.graphics], this.x, this.y, this.sizeX, this.sizeY);
			noTint();
		}
	}

	update() {
		this.upDownCounter += 1;
		this.distance = dist(mouseX, mouseY, this.x, this.y);

		// flip the up-down states of the moles, have them pick a different wait time and graphics 
		if (this.upDownCounter >= this.timeToWait) {
			if (this.upDown === "up") {
				this.upDown = "down";
				this.timeToWait = random(randomDownWaitTimeLower, randomDownWaitTimeLower);
			}
			else {
				this.upDown = "up";
				this.timeToWait = random(randomUpWaitTimeLower, randomUpWaitTimeHigher);
			}
			this.upDownCounter = 0;
			this.graphics = Math.floor(random(0, pikachuGraphicsArray.length));
			// reduce the frequency of the golden mole 
			if (this.graphics == pikachuGraphicsArray.length - 1) {
				var n = Math.floor(random(0, 10));
				if (n < 5) {
					this.graphics = Math.floor(random(0, pikachuGraphicsArray.length - 1));
				}
			}
			this.timeToWaitDynamic = this.timeToWait;

			// assign a sizeX, sizeY, and value of points to each mole graphic
			if (this.graphics === 0 || this.graphics === 2) {this.sizeX = 150; this.sizeY = 125; this.points = 1;}
			else if (this.graphics === 1) {this.sizeX = 140; this.sizeY = 140; this.points = 1;}
			else if (this.graphics === 3) {this.sizeX = 105; this.sizeY = 105; this.points = 1;}
			else if (this.graphics === 4) {this.sizeX = 145; this.sizeY = 100; this.points = 1;}
			else if (this.graphics === 5) {this.sizeX = 90; this.sizeY = 130; this.points = 1;}
			else if (this.graphics === 6) {this.sizeX = 125; this.sizeY = 125; this.points = 1;}
			else if (this.graphics === 7) {this.sizeX = 115; this.sizeY = 115; this.points = 3;}
		}
	}

	checkHit() {
		// if the user clicks on the mouse (hits a mole)
		if (this.distance < 50) {
			return true;
		}
		return false;
	}

	displayBorder() {
		// paint the borders onto the canvas for every frame
		image(borderGraphics, this.x, this.y, borderSize, borderSize);
	}

	tintCalculation() {
		this.tintMapCounter = map(this.timeToWaitDynamic, 0, this.timeToWait, 150, 255);
		this.timeToWaitDynamic -= 1;
	}
}