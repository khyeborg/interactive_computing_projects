// individual Pokemon variables
var tentacool, tentacruel, shellder, cloyster, chinchou, lanturn, clamperl, gorebyss, huntail, kyogre, primalkyogre, horsea, seadra, kingdra;

// all-Pokemon array
var pokemons = [], drawPokemons = [], drawDrawPokemon = [];
var numberOfPokemons = 20;

// canvas variable
var backdrop, seaMusic;
var canvasWidth = 1000, canvasHeight = 550;
var shoreLine = 420; wrapAroundLimit = 50;

// evolution times
var tentacoolEvolveTimeLower = 300, tentacoolEvolveTimeUpper = 800;
var shellderEvolveTimeLower = 600, shellderEvolveTimeUpper = 1500;
var chinchouEvolveTimeLower = 200, chinchouEvolveTimeUpper = 700;
var clamperlEvolveTimeLower = 800, clamperlEvolveTimeUpper = 3500;
var kyogreEvolveTimeLower = 1500, kyogreEvolveTimeUpper = 5000;
var horseaEvolveTimeLower = 300, horseaEvolveTimeUpper = 800;
var seadraEvolveTimeLower = 1000, seadraEvolveTimeUpper = 1500;

// individual Pokemon graphic arrays 
var tentacoolLeft = [], tentacoolRight = [], tentacruelLeft = [], tentacruelRight = [], shellderLeft = [], shellderRight = [], cloysterLeft = [], cloysterRight = [], chinchouLeft = [], chinchouRight = [], lanturnLeft = [], lanturnRight = [], clamperlLeft = [], clamperlRight = [], gorebyssLeft = [], gorebyssRight = [], huntailLeft = [], huntailRight = [], kyogreLeft = [], kyogreRight = [], primalkyogreLeft = [], primalkyogreRight = [], horseaLeft = [], horseaRight = [], seadraLeft = [], seadraRight = [], kingdraLeft = [], kingdraRight = [];

// message variables
var tentacoolMessage = ["I'm a blue jellyfish"];
var tentacruelMessage = [];
var shellderMessage = [];
var cloysterMessage = [];
var chinchouMessage = [];
var lanturnMessage = [];
var clamperlMessage = [];
var gorebyssMessage = [];
var huntailMessage = [];
var kyogreMessage = [];
var primalkyogreMessage = [];
var horseaMessage = [];
var seadraMessage = [];
var kingdraMessage = [];
var messageBox;

// Perlin noise variables
var noiseValueX, noiseValueY;
var moveAmountX, moveAmountY;

// temporary variables 
var tempLeft, tempRight;

// direction variables
var directionArray = ["left", "right"];

var clumped = [];


function preload() {
	backdrop = loadImage("images/sea6.png");
	messageBox = loadImage("images/messageBox.png");
	for (var i = 1; i <= 54; i++) {
		// clamperl graphics
		tempLeft = loadImage("images/clamperl_left/clamperl_left" + i + ".png"); tempRight = loadImage("images/clamperl_right/clamperl_right" + i + ".png");
		clamperlLeft.push(tempLeft); clamperlRight.push(tempRight);
	}
	for (var i = 1; i <= 59; i++) {
		// cloyster graphics
		tempLeft = loadImage("images/cloyster_left/cloyster_left" + i + ".png"); tempRight = loadImage("images/cloyster_right/cloyster_right" + i + ".png");
		cloysterLeft.push(tempLeft); cloysterRight.push(tempRight);

		// huntail graphics
		tempLeft = loadImage("images/huntail_left/huntail_left" + i + ".png"); tempRight = loadImage("images/huntail_right/huntail_right" + i + ".png");
		huntailLeft.push(tempLeft); huntailRight.push(tempRight);
	}
	for (var i = 1; i <= 60; i++) {
		// tentacool graphics
		tempLeft = loadImage("images/tentacool_left/tentacool_left" + i + ".png"); tempRight = loadImage("images/tentacool_right/tentacool_right" + i + ".png");
		tentacoolLeft.push(tempLeft); tentacoolRight.push(tempRight);

		// chinchou graphics
		tempLeft = loadImage("images/chinchou_left/chinchou_left" + i + ".png"); tempRight = loadImage("images/chinchou_right/chinchou_right" + i + ".png");
		chinchouLeft.push(tempLeft); chinchouRight.push(tempRight);

		// lanturn graphics
		tempLeft = loadImage("images/lanturn_left/lanturn_left" + i + ".png"); tempRight = loadImage("images/lanturn_right/lanturn_right" + i + ".png");
		lanturnLeft.push(tempLeft); lanturnRight.push(tempRight);

		// horsea graphics
		tempLeft = loadImage("images/horsea_left/horsea_left" + i + ".png"); tempRight = loadImage("images/horsea_right/horsea_right" + i + ".png");
		horseaLeft.push(tempLeft); horseaRight.push(tempRight);

		// seadra graphics
		tempLeft = loadImage("images/seadra_left/seadra_left" + i + ".png"); tempRight = loadImage("images/seadra_right/seadra_right" + i + ".png");
		seadraLeft.push(tempLeft); seadraRight.push(tempRight);
	}
	for (var i = 1; i <= 69; i++) {
		// primal kyogre graphics
		tempLeft = loadImage("images/primalkyogre_left/primalkyogre_left" + i + ".png"); tempRight = loadImage("images/primalkyogre_right/primalkyogre_right" + i + ".png");
		primalkyogreLeft.push(tempLeft); primalkyogreRight.push(tempRight);
	}
	for (var i = 1; i <= 72; i++) {
		// kingdra graphics
		tempLeft = loadImage("images/kingdra_left/kingdra_left" + i + ".png"); tempRight = loadImage("images/kingdra_right/kingdra_right" + i + ".png");
		kingdraLeft.push(tempLeft); kingdraRight.push(tempRight);
	}
	for (var i = 1; i <= 75; i++) {
		// kyogre graphics
		tempLeft = loadImage("images/kyogre_left/kyogre_left" + i + ".png"); tempRight = loadImage("images/kyogre_right/kyogre_right" + i + ".png");
		kyogreLeft.push(tempLeft); kyogreRight.push(tempRight);
	}
	for (var i = 1; i <= 79; i++) {
		// gorebyss graphics
		tempLeft = loadImage("images/gorebyss_left/gorebyss_left" + i + ".png"); tempRight = loadImage("images/gorebyss_right/gorebyss_right" + i + ".png");
		gorebyssLeft.push(tempLeft); gorebyssRight.push(tempRight);
	}
	for (var i = 1; i <= 80; i++) {
		// tentacruel graphics
		tempLeft = loadImage("images/tentacruel_left/tentacruel_left" + i + ".png"); tempRight = loadImage("images/tentacruel_right/tentacruel_right" + i + ".png");
		tentacruelLeft.push(tempLeft); tentacruelRight.push(tempRight);

		// shellder graphics
		tempLeft = loadImage("images/shellder_left/shellder_left" + i + ".png"); tempRight = loadImage("images/shellder_right/shellder_right" + i + ".png");
		shellderLeft.push(tempLeft); shellderRight.push(tempRight);
	}

}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	imageMode(CENTER);

	// Perlin Noise
	noiseDetail(24);

	// individual Pokemon property
	//              0 left            1 right            2 message            3 evolvable  4 speedX  5 speedY 6 directionTimerLower 7 directionTimerUpper
	tentacool    = [tentacoolLeft,    tentacoolRight,    tentacoolMessage,    true,        4,        6,       50,                   300]; // tentacool
	tentacruel   = [tentacruelLeft,   tentacruelRight,   tentacruelMessage,   false,       4,        6,       50,                   300]; // tentacruel
	shellder     = [shellderLeft,     shellderRight,     shellderMessage,     true,        3,        2,       50,                   300]; // shellder
	cloyster     = [cloysterLeft,     cloysterRight,     cloysterMessage,     false,       3,        2,       50,                   300]; // cloyster
	chinchou     = [chinchouLeft,     chinchouRight,     chinchouMessage,     true,        5,        3,       50,                   300]; // chinchou
	lanturn      = [lanturnLeft,      lanturnRight,      lanturnMessage,      false,       5,        3,       50,                   300]; // lanturn
	clamperl     = [clamperlLeft,     clamperlRight,     clamperlMessage,     true,        3,        3,       50,                   300]; // clamperl
	gorebyss     = [gorebyssLeft,     gorebyssRight,     huntailMessage,      false,       3,        3,       50,                   300];	// gorebyss
	huntail      = [huntailLeft,      huntailRight,      gorebyssMessage,     false,       3,        3,       50,                   300]; // huntail
	kyogre       = [kyogreLeft,       kyogreRight,       kyogreMessage,       true,        12,       5,       50,                   200]; // kyogre
	primalkyogre = [primalkyogreLeft, primalkyogreRight, primalkyogreMessage, false,       12,       5,       50,                   200]; // primalkyogre
	horsea       = [horseaLeft,       horseaRight,       horseaMessage,       true,        3,        3,       10,                   30 ]; // horsea
	seadra       = [seadraLeft,       seadraRight,       seadraMessage,       true,        3,        3,       10,                   30 ]; // seadra
	kingdra      = [kingdraLeft,      kingdraRight,      kingdraMessage,      false,       3,        3,       10,                   30 ]; // kingdra
	
	// add new Pokemons into the pokemons array
	/*for (var i = 1; i <= numberOfPokemons; i++) {
		pokemons.push(new Pokemon(clamperl,  Math.floor(random(clamperlEvolveTimeLower,  clamperlEvolveTimeUpper)),     random(shoreLine, canvasHeight - wrapAroundLimit))); // add clamperl first so other Pokemons can go in front of them
	}
	pokemons.push(new Pokemon(kyogre,        Math.floor(random(kyogreEvolveTimeLower,    kyogreEvolveTimeUpper)),       random(0, shoreLine - 100)));
	*/for (var i = 1; i <= numberOfPokemons; i++) {
		//pokemons.push(new Pokemon(shellder,  Math.floor(random(shellderEvolveTimeLower,  shellderEvolveTimeUpper)),     random(shoreLine, canvasHeight - wrapAroundLimit)));
		//pokemons.push(new Pokemon(tentacool, Math.floor(random(tentacoolEvolveTimeLower, tentacoolEvolveTimeUpper)),    random(0, shoreLine)));
		//pokemons.push(new Pokemon(horsea,    Math.floor(random(horseaEvolveTimeLower,    horseaEvolveTimeUpper)),       random(0, shoreLine)));
		pokemons.push(new Pokemon(kyogre,        Math.floor(random(kyogreEvolveTimeLower,    kyogreEvolveTimeUpper)),       random(0, shoreLine - 100)));

		pokemons.push(new Pokemon(chinchou,  Math.floor(random(chinchouEvolveTimeLower,  chinchouEvolveTimeUpper)),     random(0, shoreLine)));
	}



	// copy the array as the draw array 
	for (var i = 0; i < pokemons.length; i++) {
		drawPokemons.push(pokemons[i]);
	}
}

function draw() {
	image(backdrop, width / 2, height / 2);

	// play game music
	//if (seaMusic.isPlaying() == false) {seaMusic.play();}

	for (var i = 0; i < pokemons.length; i++) {
		// visit every other pokemon and see if they attract each other
	    /*for (var j = i + 1; j < pokemons.length; j++) {
	     	pokemons[i].attract(pokemons[j]);
	    }*/
		pokemons[i].update();
		pokemons[i].display();
	}

	/*// update the drawPokemon array at every frame 
	for (var i = 0; i < pokemons.length; i++) {
		drawPokemons[i] = pokemons[i];
	}

	for (var i = 0; i < drawDrawPokemon.length; i++) {
		drawDrawPokemon.splice(i, 1);
	}
	for (var i = 0; i < drawPokemons.length; i++) {
		if (drawPokemons[i].draw === true) {
			drawDrawPokemon.push(drawPokemons[i]);
		}
		drawPokemons[i].draw = true;
	}
	for (var i = 0; i < drawDrawPokemon.length; i++) {
		drawDrawPokemon[i].display();
	}*/
		

		/*// draw the 'attraction zone' for the Pokemons
	    noFill();
	    stroke(0,255,0);
	    ellipse(drawPokemons[i].x, drawPokemons[i].y, drawPokemons[i].attractionZoneSize, drawPokemons[i].attractionZoneSize);*/
	

	text("MouseX: " + mouseX + "   MouseY: " + mouseY, 20, 20);

	/* // gif error
	tentacool_left.position(mouseX, mouseY);
	tentacool_right.position(mouseX, mouseY);
	*/
	//console.log(frameRate());
}

class Pokemon {
	constructor(pokemon, evolutionTime, startY) {
		//0 left, 1 right, 2 message, 3 evolvable, 4 speedX, 5 speedY, 6 directionTimerLower, 7 directionTimerUpper
		this.graphicsLeft = pokemon[0];
		this.graphicsRight = pokemon[1];
		this.speedX = pokemon[4]; 
		this.speedY = pokemon[5];
		this.x = 50//random(0, canvasWidth); // all Pokemons can be at any x positions
		this.y = 50//startY;
		this.previousX = this.x;

		// clamperl needs to have a fixedX and a fixedY
		if (this.graphicsLeft === clamperlLeft) {
			this.x = random(wrapAroundLimit, width - wrapAroundLimit);
			this.y = random(shoreLine, canvasHeight - wrapAroundLimit);
			this.previousX = random(0, canvasWidth);
		}

		this.noiseOffsetX = random (0, 10000);
		this.noiseOffsetY = random (200000, 30000);
		this.graphicsCounter = 0//Math.floor(random(0, pokemon[0].length));

		// evolution
		this.evolvable = pokemon[3];
		this.evolutionTimer = 0;
		this.evolutionTime = evolutionTime
		this.evolutionState = false;
		this.tintCounter = 160;

		// message 
		this.message = pokemon[2][Math.floor(random(0, pokemon[2].length))];
		this.messageTimer = 0;
		this.messageTime = Math.floor(random(200, 3000))

		// control direction
		this.direction = directionArray[Math.floor(random(0, 2))];
		this.directionCounter = 0;
		this.directionTimeLower = pokemon[6];
		this.directionTimeUpper = pokemon[7];
		this.directionRandomNumber = Math.floor(random(this.directionTimeLower, this.directionTimeUpper));
	
		// attracting each other 
		this.attractionZoneSize = 100;
		this.draw = true;
	}

	display() {

		//if (this.draw === true) {
			if (this.evolutionState === true) {this.evolutionTint();} // tint the Pokemon if it's about to evolve
			// if Pokemon is moving to the left
			if (this.x <= this.previousX) {image(this.graphicsLeft[this.graphicsCounter], this.x + 5, this.y);} // this.x + 5 so the left and right images are drawn closer to each other
			// if Pokemon is moving to the right
			else if (this.x > this.previousX) {image(this.graphicsRight[this.graphicsCounter], this.x - 5, this.y);} // this.x - 5 so the left and right images are drawn closer to each other
		
			noTint();
		//}
		
		// update for each Pokemon
		/*if (this.graphicsLeft == clamperlLeft) {this.evolutionCheck(); this.messageCheck();}
		else {this.update();}*/
	}

	update() {
		// update position
		this.previousX = this.x; // get the previous x position to determine if Pokemon graphics is left or right

		// move x and y positions
		noiseValueX = noise(this.noiseOffsetX);
		noiseValueY = noise(this.noiseOffsetY);
		// don't let the Pokemon change its x direction too quickly (wait at least 50 frames)
		if (this.directionCounter < this.directionRandomNumber) {
			if (this.direction === "left") {this.x += map(noiseValueX, 0, 1, -this.speedX , 0);} // keep moving left for at least 50 frames
			else if (this.direction === "right") {this.x += map(noiseValueX, 0, 1, 0, this.speedX);} // keep moving right for at least 50 frames
		}
		else {
			var num2 = Math.floor(random(0, 2));
			if (num2 === 0) {this.x += map(noiseValueX, 0, 1, -this.speedX , 0); this.direction = "left";}
			else {this.x += map(noiseValueX, 0, 1, 0, this.speedX); this.direction = "right";}
			this.directionCounter = 0;
			// pick a new change direction wait time (kyogre and horsea family should change direction more often)
			this.directionRandomNumber = Math.floor(random(this.directionTimeLower, this.directionTimeUpper));
		}
		this.y += map(noiseValueX, 0, 1, -this.speedY , this.speedY);
		this.noiseOffsetX += 0.01;
		this.noiseOffsetY += 0.01;
		this.directionCounter++;

		// x wrap arounds (ALL POKEMONS should be able to move freely for all x positions)
		if (this.graphicsLeft === kyogreLeft || this.graphicsLeft === primalkyogreLeft) { // special wrap around for kyogre because it is so wide
			if (this.x > width + wrapAroundLimit + 100) {this.x = -wrapAroundLimit - 100;}
			if (this.x < -wrapAroundLimit - 100) {this.x = width + wrapAroundLimit + 100;}
		}
		else {
			if (this.x > width + wrapAroundLimit) {this.x = -wrapAroundLimit;}
			if (this.x < -wrapAroundLimit) {this.x = width + wrapAroundLimit;}
		}

		// restrict shellder's and colyster's y-position on canvas
		if (this.graphicsLeft === shellderLeft || this.graphicsLeft === cloysterLeft) {
			this.y = constrain(this.y, shoreLine, height + 80);
		}
		// restrict kyogre and primal kyogre's y position, don't let it go too close to the floor
		else if (this.graphicsLeft === kyogreLeft || this.graphicsLeft === primalkyogreLeft) {
			this.y = constrain(this.y, -wrapAroundLimit - 50, shoreLine - 100);
		}
		// let gorebyss and huntail move all over 
		else if (this.graphicsLeft === gorebyssLeft || this.graphicsLeft === huntailLeft) {
			if (this.y > width + wrapAroundLimit) {this.y = -wrapAroundLimit;}
			if (this.y < -wrapAroundLimit) {this.y = height + wrapAroundLimit;}
		}
		// y restrictions for all other pokemons
		else {
			if (this.y >= shoreLine) {this.y = shoreLine;}
			if (this.y <= -wrapAroundLimit) {this.y = -wrapAroundLimit;}
		}

		if (this.evolvable === true) {this.evolutionCheck();} // only perform evolutionCheck if the Pokemon is evolvable
		this.messageCheck();

		// update graphics
		this.graphicsCounter++;
		if (this.graphicsCounter === this.graphicsLeft.length) {this.graphicsCounter = 0;}
	}

	attract(otherPokemon) {
    	// see how far away we are from the other Pokemons
	    var d = dist(this.x, this.y, otherPokemon.x, otherPokemon.y);
	    // are they the same Pokemon
	    if (this.graphicsLeft === otherPokemon.graphicsLeft) {
	    	fill(255);

	    	//are they in the attraction zone? 
	    	if (d < this.attractionZoneSize) {
	    		//noFill();
	    		//stroke(255);
	    		//ellipse(this.x, this.y, this.attractionZoneSize, this.attractionZoneSize);

			    // move toward the Pokemon a little bit
			    var dX = otherPokemon.x - this.x;
			    var dY = otherPokemon.y - this.y;

			    // move 5% of the way to the other Pokemon
			    this.x += dX * 0.05;
			    this.y += dY * 0.05;

			    if (dX < 5 && dX > -5 || dY < 5 && dY > -5) {this.x += dX; this.y += dY;}

			    if (d < this.attractionZoneSize / 4) {
					// set the draw state of Pokemon at drawPokemon[j] to be false
		    		drawPokemons[drawPokemons.indexOf(otherPokemon)].draw = false;
		    		//otherPokemon.x = this.x;
				    //otherPokemon.y = this.y;
				}
			}

			// some Pokemons just DON'T attract each other, it only disappears when d < attractionZoneSize / 4
			
	    }
	}


	evolutionCheck() {
		// check if it's time to evolve
		this.evolutionTimer += 1; 

		// check if Pokemon is about to evolve (for tint calculation)
		if (this.evolutionTimer == this.evolutionTime - 80) {this.evolutionState = true;}

		if (this.evolutionTimer === this.evolutionTime) {
			this.evolutionState = false;
			// tentacool
			if (this.graphicsLeft === tentacoolLeft) {
				this.graphicsLeft = tentacruelLeft;
				this.graphicsRight = tentacruelRight;
				this.evolvable = false;
			}
			// shellder
			else if (this.graphicsLeft === shellderLeft) {
				this.graphicsLeft = cloysterLeft;
				this.graphicsRight = cloysterRight;
				this.evolvable = false;
			}
			// chinchou
			else if (this.graphicsLeft === chinchouLeft) {
				this.graphicsLeft = lanturnLeft;
				this.graphicsRight = lanturnRight;
				this.evolvable = false;
			}
			// clamperl
			else if (this.graphicsLeft === clamperlLeft) {
				var num = Math.floor(random(1, 11));
				if (num <= 7) {
					this.graphicsLeft = gorebyssLeft;
					this.graphicsRight = gorebyssRight;
					//this.speedX = 3; 
					//this.speedY = 3;
				}
				else {
					this.graphicsLeft = huntailLeft;
					this.graphicsRight = huntailRight;
					this.speedX = 8; 
					this.speedY = 1.5;
				}
				this.evolvable = false;
			}
			else if (this.graphicsLeft === kyogreLeft) {
				this.graphicsLeft = primalkyogreLeft;
				this.graphicsRight = primalkyogreRight;
				this.evolvable = false;
			}
			else if (this.graphicsLeft === horseaLeft) {
				this.graphicsLeft = seadraLeft;
				this.graphicsRight = seadraRight;
				this.evolutionTime = Math.floor(random(seadraEvolveTimeLower, seadraEvolveTimeUpper));
				this.tintCounter = 160;
			}
			else if (this.graphicsLeft === seadraLeft) {
				this.graphicsLeft = kingdraLeft;
				this.graphicsRight = kingdraRight;
				this.evolvable = false;
			}
			this.evolutionTimer = 0;
			this.graphicsCounter = 2//Math.floor(random(0, this.graphicsLeft.length));;
		}
	}

	evolutionTint() {
		var tintAmount = map(this.tintCounter, 0, 160, 50, 255);
		tint(255, tintAmount);
		this.tintCounter-= 2;
	}

	messageCheck() {
		this.messageTimer++;
		if (this.messageTimer >= this.messageTime && this.messageTimer <= this.messageTime + 200) {
			image(messageBox, this.x, this.y - wrapAroundLimit, 25, 25);

			if (this.messageTimer == this.messageTime + 250) {
				this.messageTimer = 0;
				this.messageTime = Math.floor(random(200, 3000))
			}
		}
	}
}



// make 2 arrays, one for updating one for drawing (the combined ones)
// if arraw is not in the drawing one, draw the updating one (individual Pokemon)






