class Pokemon {
	constructor(pokemon, evolutionTime, startY, startX, userCreate) {
		//0 left, 1 right, 2 message, 3 evolvable, 4 speedX, 5 speedY, 6 directionTimerLower, 7 directionTimerUpper, 8 width, 9 height, 10 name 
		this.nameTitle = pokemon[10];
		this.graphicsLeft = pokemon[0];
		this.graphicsRight = pokemon[1];
		this.speedX = pokemon[4]; 
		this.speedY = pokemon[5];
		this.x = startX; // all Pokemons can be at any x positions
		this.y = startY;

		// to determine where clamperl is facing
		var pokemonDirection = Math.floor(random(0, 2));
		if (pokemonDirection === 0) {this.previousX = 0;}
		else if (pokemonDirection === 1) {this.previousX = canvasWidth;}

		// create your own ecosystem
		this.userCreate = userCreate;

		// clamperl needs to have a fixedX and a fixedY
		if (this.graphicsLeft === clamperlLeft) {
			if (this.userCreate === true) {
				this.x = mouseX;
				this.y = mouseY;
				this.y = constrain(this.y, shoreLine, canvasHeight - 80);
			}
			else {
				this.x = random(wrapAroundLimit, width - wrapAroundLimit);
				this.y = random(shoreLine, canvasHeight - 80 - wrapAroundLimit);
			}
			// to determine where clamperl is facing
			var clamperlDirection = Math.floor(random(0, 2));
			if (clamperlDirection === 0) {this.previousX = 0;}
			else if (clamperlDirection === 1) {this.previousX = canvasWidth;}
		}

		this.noiseOffsetX = random (0, 10000);
		this.noiseOffsetY = random (200000, 30000);
		this.graphicsCounter = Math.floor(random(0, pokemon[0].length));

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
		this.directionRandomNumber = Math.floor(random(10, 20));
	
		// attract
		this.attractionZoneSize = 0;
		this.attractState = false;
		this.attractedAmount = 0;
		this.attractionZoneFactor = pokemon[11];

		// graphics size
		this.sizeX = pokemon[8];
		this.sizeY = pokemon[9];
		this.sizeFactor = 1;

		// click disperse 
		this.clumped = false;
		this.attractableCounter = Math.floor(random(50, 200)); // don't let them attract when they first come into existence

		// lay babies
		this.layBabiesCounter = 150;
		this.layBabiesEatNum = Math.floor(random(layBabiesEatNumLower, layBabiesEatNumUpper));
		this.greenAmount = 255;
		this.layBabiesBlinkCounter = 0;
		this.twinChance = 0;

		// feed 
		this.hungry = false; 
		this.hungryDuration = 0;
		this.hungryCounter = Math.floor(random(hungryCounterLower, hungryCounterUpper));
		this.eatNum = 0;
		this.evolveEatNum = Math.floor(random(pokemon[12], pokemon[13]));
		this.evolveTranstionTime = Math.floor(random(200, 300));
		this.aboutToDie = false; 
		this.decidedFood = false;
		this.yLower = pokemon[14];
		this.yUpper = pokemon[15];
		this.hungryRed = 187;
		this.hungryGreen = 232;
		this.hungryBlue = 41;
		this.hungryRedCounter = 0;
		this.hungryGreenCounter = 0;
		this.hungryBlueCounter = 0;

		// death
		this.deathState = false;
		this.alive = true;
	}

	display() {
		// tint the Pokemon if it's about to evolve
		if (this.evolutionState === true && this.attractedAmount === 0) {this.evolutionTint();} 

		// make the Pokemon blink if it's pregnant (except for kyogre)
		this.layBabiesBlinkCounter++;
		if (this.evolvable === false && this.graphicsLeft != primalkyogreLeft && this.layBabiesCounter < 150 && this.attractedAmount === 0) {
			this.layBabiesBlinkCounter++;
			if (this.layBabiesBlinkCounter % 20 <= 10) {this.pregnantTint();}
		}
		else {this.greenAmount = 255;}

		// tint the Pokemon if it's hungry
		if (this.hungry === true) {
			if (this.clumped === true && this.aboutToDie === true) {this.disperse();} // make the hungry Pokemon get out of the group

			if (this.hungryDuration > 300) {this.aboutToDie = true; this.hungryTint();} // paint it a hungry color
		}

		// if Pokemon is moving to the left
		if (this.x <= this.previousX) {image(this.graphicsLeft[this.graphicsCounter], this.x + 5, this.y, this.sizeX * this.sizeFactor * 0.9, this.sizeY * this.sizeFactor * 0.9);} // this.x + 5 so the left and right images are drawn closer to each other
		// if Pokemon is moving to the right
		else if (this.x > this.previousX) {image(this.graphicsRight[this.graphicsCounter], this.x - 5, this.y, this.sizeX * this.sizeFactor * 0.9, this.sizeY * this.sizeFactor * 0.9);} // this.x - 5 so the left and right images are drawn closer to each other
		
		noTint();
	}

	update() {
		// update position
		if (this.attractState === false) {
			this.previousX = this.x; // get the previous x position to determine if Pokemon graphics is left or right

			// move x and y positions
			noiseValueX = noise(this.noiseOffsetX);
			noiseValueY = noise(this.noiseOffsetY);
			// don't let the Pokemon change its x direction too quickly (wait at least 50 frames)
			if (this.directionCounter < this.directionRandomNumber) {
				if (this.direction === "left") {this.moveAmountX = map(noiseValueX, 0, 1, -this.speedX , 0); this.x += this.moveAmountX;} // keep moving left for at least 50 frames
				else if (this.direction === "right") {this.moveAmountX = map(noiseValueX, 0, 1, 0, this.speedX); this.x += this.moveAmountX;} // keep moving right for at least 50 frames
			}
			else {
				var num2 = Math.floor(random(0, 2));
				if (num2 === 0) {this.moveAmountX = map(noiseValueX, 0, 1, -this.speedX , 0); this.x += this.moveAmountX; this.direction = "left";}
				else {this.moveAmountX = map(noiseValueX, 0, 1, 0, this.speedX); this.x += this.moveAmountX; this.direction = "right";}
				this.directionCounter = 0;
				// pick a new change direction wait time (kyogre and horsea family should change direction more often)
				this.directionRandomNumber = Math.floor(random(this.directionTimeLower, this.directionTimeUpper));
			}
			this.moveAmountY = map(noiseValueX, 0, 1, -this.speedY , this.speedY);
			this.y += this.moveAmountY;
			this.noiseOffsetX += 0.01;
			this.noiseOffsetY += 0.01;
			this.directionCounter++;
		}

		// x wrap arounds (ALL POKEMONS should be able to move freely for all x positions)
		if (this.graphicsLeft === kyogreLeft || this.graphicsLeft === primalkyogreLeft || this.graphicsLeft === mantineLeft) { // special wrap around for kyogre and mantine because it is so wide
			if (this.x > width + wrapAroundLimit + 100) {this.x = -wrapAroundLimit - 100;}
			if (this.x < -wrapAroundLimit - 100) {this.x = width + wrapAroundLimit + 100;}
		}
		else {
			if (this.clumped === false) {
				if (this.x > width + wrapAroundLimit) {this.x = -wrapAroundLimit;}
				if (this.x < -wrapAroundLimit) {this.x = width + wrapAroundLimit;}
			}
			else {this.x = constrain(this.x, -wrapAroundLimit * 2, canvasWidth + (wrapAroundLimit * 2));}
		}

		// restrict shellder's and colyster's y-position on canvas
		if (this.graphicsLeft === shellderLeft || this.graphicsLeft === cloysterLeft) {
			this.y = constrain(this.y, shoreLine, canvasHeight - 80 - wrapAroundLimit);
		}
		// restrict kyogre and primal kyogre's y position, don't let it go too close to the floor
		else if (this.graphicsLeft === kyogreLeft || this.graphicsLeft === primalkyogreLeft) {
			this.y = constrain(this.y, -wrapAroundLimit - 50, shoreLine - 100);
		}
		// let gorebyss, huntail, finneon, and lumineon move all over 
		else if (this.graphicsLeft === gorebyssLeft || this.graphicsLeft === huntailLeft || this.graphicsLeft === finneonLeft || this.graphicsLeft === lumineonLeft || this.graphicsLeft === luvdiscLeft) {
			if (this.clumped === false) {
				if (this.y > canvasHeight - 80 + wrapAroundLimit) {this.y = -wrapAroundLimit;}
				if (this.y < -wrapAroundLimit) {this.y = canvasHeight - 80 + wrapAroundLimit;}
			}
			else {this.y = constrain(this.y, -wrapAroundLimit * 2, canvasHeight - 80 + (wrapAroundLimit * 2));}
		}
		// y restrictions for all other pokemons
		else {
			if (this.clumped === false) {
				if (this.y >= shoreLine) {this.y = shoreLine;}
				if (this.y <= -wrapAroundLimit) {this.y = -wrapAroundLimit;}
			}
			else {
				if (this.y >= shoreLine) {this.y = shoreLine;}
				if (this.y <= -wrapAroundLimit * 2) {this.y = -wrapAroundLimit * 2;}
			}
		}	
	}

	updateGraphics() {
		// update graphics
		this.graphicsCounter++;
		if (this.graphicsCounter === this.graphicsLeft.length) {this.graphicsCounter = 0;}

		// perform message and evolution check
		this.messageCheck();
		if (this.evolvable === true) {this.evolutionEatNumCheck();} // only perform evolutionCheck if the Pokemon is evolvable
	}

	attract(otherPokemon) {
		// if the two Pokemons are the same type
		if (this.graphicsLeft === otherPokemon.graphicsLeft) {
			// compute the distance between the two Pokemons
			var d = dist(this.x, this.y, otherPokemon.x, otherPokemon.y);
			// is other Pokemon in the attraction zone of this Pokemon or is this Pokemon in the other Pokemon's attraction zone (only big Pokemons can attract small Pokemons)
			if ((d < this.attractionZoneSize || d < otherPokemon.attractionZoneSize) && this.attractedAmount >= otherPokemon.attractedAmount) {
				otherPokemon.attractState = true; 

				// what is the x and y distance between the two Pokemons?
			    var dX = this.x - otherPokemon.x;
			    var dY = this.y - otherPokemon.y;

			    // let other Pokemon move 10% of the way to this Pokemon
			    otherPokemon.x += dX * 0.1;
			    otherPokemon.y += dY * 0.1;

			    // if other Pokemon moves close enough to this Pokemon (only larger Pokemons can attract smaller Pokemons)
			    if (d < 25) {
			    	// once they are attracted to each other, make them share most properties (MORE TO ADD)
			    	this.attractedAmount++;
			    	otherPokemon.attractedAmount++;
			    	otherPokemon.x = this.x;
			    	otherPokemon.y = this.y;
			    	otherPokemon.graphicsCounter = this.graphicsCounter; 
			    	otherPokemon.previousX = this.previousX;
			    	otherPokemon.attractionZoneSize = this.attractionZoneSize;

			    	// for click disperse
			    	this.clumped = true;
			    	otherPokemon.clumped = true;
			    }
			}
		}
	}

	evolutionEatNumCheck() {
		if (this.eatNum >= this.evolveEatNum) {
			this.evolveTranstionTime--; 
			if (this.evolveTranstionTime <= 80) {this.evolutionState = true;}
			if (this.evolveTranstionTime === 0) {
				this.evolutionState = false;
				// tentacool 
				if (this.graphicsLeft === tentacoolLeft) {this.graphicsLeft = tentacruelLeft; this.graphicsRight = tentacruelRight; this.sizeX = tentacruelSizeX; this.sizeY = tentacruelSizeY; this.evolvable = false;}
				// shellder
				else if (this.graphicsLeft === shellderLeft) {this.graphicsLeft = cloysterLeft; this.graphicsRight = cloysterRight; this.sizeX = cloysterSizeX; this.sizeY = cloysterSizeY; this.evolvable = false;}
				// chinchou
				else if (this.graphicsLeft === chinchouLeft) {this.graphicsLeft = lanturnLeft; this.graphicsRight = lanturnRight; this.sizeX = lanturnSizeX; this.sizeY = lanturnSizeY; this.evolvable = false;}
				// clamperl
				else if (this.graphicsLeft === clamperlLeft) {
					var num = Math.floor(random(1, 11));
					if (num <= 7) {this.graphicsLeft = gorebyssLeft; this.graphicsRight = gorebyssRight; this.sizeX = gorebyssSizeX; this.sizeY = gorebyssSizeY;}
					else {this.graphicsLeft = huntailLeft;this.graphicsRight = huntailRight; this.sizeX = huntailSizeX; this.sizeY = huntailSizeY; this.speedX = 8; this.speedY = 1.5;}
					this.evolvable = false;
				}
				// kyogre
				else if (this.graphicsLeft === kyogreLeft) {this.graphicsLeft = primalkyogreLeft; this.graphicsRight = primalkyogreRight; this.sizeX = primalkyogreSizeX; this.sizeY = primalkyogreSizeY; this.evolvable = false;}
				// horsea
				else if (this.graphicsLeft === horseaLeft) {this.graphicsLeft = seadraLeft; this.graphicsRight = seadraRight; this.sizeX = seadraSizeX; this.sizeY = seadraSizeY; this.evolutionTime = Math.floor(random(seadraEatNumLower, seadraEatNumUpper)); this.tintCounter = 160;}
				// seadra
				else if (this.graphicsLeft === seadraLeft) {this.graphicsLeft = kingdraLeft; this.graphicsRight = kingdraRight; this.sizeX = kingdraSizeX; this.sizeY = kingdraSizeY; this.evolvable = false;}
				// tynamo
				else if (this.graphicsLeft === tynamoLeft) {this.graphicsLeft = eelektrikLeft; this.graphicsRight = eelektrikRight; this.sizeX = eelektrikSizeX; this.sizeY = eelektrikSizeY; this.evolutionTime = Math.floor(random(eelektrikEatNumLower, eelektrikEatNumUpper)); this.tintCounter = 160;}
				// eelektrik
				else if (this.graphicsLeft === eelektrikLeft) {this.graphicsLeft = eelektrossLeft; this.graphicsRight = eelektrossRight; this.sizeX = eelektrossSizeX; this.sizeY = eelektrossSizeY; this.evolvable = false;}
				// mantyke
				else if (this.graphicsLeft === mantykeLeft) {this.graphicsLeft = mantineLeft; this.graphicsRight = mantineRight; this.sizeX = mantineSizeX; this.sizeY = mantineSizeY; this.evolvable = false;}
				// finneon
				else if (this.graphicsLeft === finneonLeft) {this.graphicsLeft = lumineonLeft; this.graphicsRight = lumineonRight; this.sizeX = lumineonSizeX; this.sizeY = lumineonSizeY; this.evolvable = false;}

				this.attractionZoneFactor = 1;
				if (this.graphicsLeft === kingdraLeft) {this.attractionZoneFactor = 0.8;}
				this.eatNum = 0;
				this.evolveTranstionTime = Math.floor(random(200, 300));
				this.graphicsCounter = Math.floor(random(0, this.graphicsLeft.length));;
				this.attractableCounter = 0; // after they evolve they can attract right away

				// if the Pokemon can't evolve anymore, give it a timer to lay babies
				this.layBabiesEatNum = Math.floor(random(layBabiesEatNumLower, layBabiesEatNumUpper));
			}
			
		}
	}

	evolutionTint() {
		var tintAmount = map(this.tintCounter, 0, 160, 50, 255);
		tint(255, tintAmount);
		this.tintCounter-= 2;
	}

	pregnantTint() { 
		tint(250, 255, this.greenAmount);
		this.greenAmount -= 5;
	}

	hungryTint() {
		tint(this.hungryRed, this.hungryGreen, this.hungryBlue); // 187 to 70, 232 to 89, 41 to 12 // 160 frames from hungry to death
		this.hungryRedCounter++; 
		this.hungryGreenCounter++; 
		this.hungryBlueCounter++;
		if ((this.hungryRedCounter % 1.5) === 0 && this.hungryRed > 120) {this.hungryRed -= 1.5;}
		if ((this.hungryGreenCounter % 1.5) === 0 && this.hungryGreen > 174) {this.hungryGreen -= 1.5;}
		if ((this.hungryBlueCounter % 8) === 0 && this.hungryBlue > 26) {this.hungryBlue -= 1;}
	}

	messageCheck() {
		this.messageTimer++;
		if (this.messageTimer >= this.messageTime && this.messageTimer <= this.messageTime + 200) {
			//image(messageBox, this.x, this.y - wrapAroundLimit, 25, 25);

			if (this.messageTimer == this.messageTime + 250) {
				this.messageTimer = 0;
				this.messageTime = Math.floor(random(200, 3000))
			}
		}
	}

	mappingFactors() {
		// map the size factor and attraction zone size based on the number of Pokemons attracted
		this.sizeFactor = map(this.attractedAmount, 0, 10 * 2, 1, 4);
		this.attractionZoneSize = map(this.attractedAmount, 0, 10 * 2, 70 * this.attractionZoneFactor, 260 * this.attractionZoneFactor);
		if (this.sizeFactor >= 2.65) {this.sizeFactor = 2.65;} // get bigger up to 12 attracting Pokemons
		if (this.attractionZoneSize >= this.attractionZoneFactor * 175) {this.attractionZoneSize = this.attractionZoneFactor * 175;}
	}

	disperse() {
		// make the pokemon disperse
		this.x = this.x + random(-disperseDistance, disperseDistance);
		this.y = this.y + random(-disperseDistance, disperseDistance);

		// give all Pokemons random graphics counter 
		this.graphicsCounter = Math.floor(random(0, this.graphicsLeft.length));

		// don't let them clumped back together right away
		this.attractableCounter = Math.floor(random(100, 500));

		this.directionRandomNumber = Math.floor(random(10, 30));
	}

	layBabies() {
		if (this.eatNum >= this.layBabiesEatNum) {
			this.layBabiesCounter--;
			if (this.layBabiesCounter === 0) {
				this.twinChance = Math.floor(random(1, 11));
				if (this.twinChance <= 9) {
					if (this.graphicsLeft === tentacruelLeft) {pokemons.push(new Pokemon(tentacool, Math.floor(random(tentacoolEvolveTimeLower, tentacoolEvolveTimeUpper)), this.y + 5, this.x, false));}
					else if (this.graphicsLeft === lanturnLeft) {pokemons.push(new Pokemon(chinchou, Math.floor(random(chinchouEvolveTimeLower, chinchouEvolveTimeUpper)), this.y + 5, this.x, false)); }
					else if (this.graphicsLeft === lumineonLeft) {pokemons.push(new Pokemon(finneon, Math.floor(random(finneonEvolveTimeLower, finneonEvolveTimeUpper)), this.y + 5, this.x, false));}
					else if (this.graphicsLeft === mantineLeft) {pokemons.push(new Pokemon(mantyke, Math.floor(random(mantykeEvolveTimeLower, mantykeEvolveTimeUpper)), this.y + 5, this.x, false));}
					else if (this.graphicsLeft === kingdraLeft) {pokemons.push(new Pokemon(horsea, Math.floor(random(horseaEvolveTimeLower, horseaEvolveTimeUpper)), this.y + 5, this.x, false));}
					else if (this.graphicsLeft === gorebyssLeft) {pokemons.unshift(new Pokemon(clamperl, Math.floor(random(clamperlEvolveTimeLower, clamperlEvolveTimeUpper)), this.y + 5, this.x, false));}
					else if (this.graphicsLeft === huntailLeft) {pokemons.unshift(new Pokemon(clamperl, Math.floor(random(clamperlEvolveTimeLower, clamperlEvolveTimeUpper)), this.y + 5, this.x, false));}
					else if (this.graphicsLeft === eelektrossLeft) {pokemons.push(new Pokemon(tynamo, Math.floor(random(tynamoEvolveTimeLower, tynamoEvolveTimeUpper)), this.y + 5, this.x, false));}
					else if (this.graphicsLeft === cloysterLeft) {pokemons.push(new Pokemon(shellder, Math.floor(random(shellderEvolveTimeLower, shellderEvolveTimeUpper)), this.y + 5, this.x, false));}
					else if (this.graphicsLeft === luvdiscLeft) {pokemons.push(new Pokemon(luvdisc, Math.floor(random(luvdiscEvolveTimeLower, luvdiscEvolveTimeUpper)), this.y + 5, this.x, false));}				
					birthSound.play(); // pop sound when babies come out
				}
				else {
					// twins! 
					for (var i = 0; i < 2; i++) {
						if (this.graphicsLeft === tentacruelLeft) {pokemons.push(new Pokemon(tentacool, Math.floor(random(tentacoolEvolveTimeLower, tentacoolEvolveTimeUpper)), this.y + 5, this.x, false));}
						else if (this.graphicsLeft === lanturnLeft) {pokemons.push(new Pokemon(chinchou, Math.floor(random(chinchouEvolveTimeLower, chinchouEvolveTimeUpper)), this.y + 5, this.x, false)); }
						else if (this.graphicsLeft === lumineonLeft) {pokemons.push(new Pokemon(finneon, Math.floor(random(finneonEvolveTimeLower, finneonEvolveTimeUpper)), this.y + 5, this.x, false));}
						else if (this.graphicsLeft === mantineLeft) {pokemons.push(new Pokemon(mantyke, Math.floor(random(mantykeEvolveTimeLower, mantykeEvolveTimeUpper)), this.y + 5, this.x, false));}
						else if (this.graphicsLeft === kingdraLeft) {pokemons.push(new Pokemon(horsea, Math.floor(random(horseaEvolveTimeLower, horseaEvolveTimeUpper)), this.y + 5, this.x, false));}
						else if (this.graphicsLeft === gorebyssLeft) {pokemons.unshift(new Pokemon(clamperl, Math.floor(random(clamperlEvolveTimeLower, clamperlEvolveTimeUpper)), this.y + 5, this.x, false));}
						else if (this.graphicsLeft === huntailLeft) {pokemons.unshift(new Pokemon(clamperl, Math.floor(random(clamperlEvolveTimeLower, clamperlEvolveTimeUpper)), this.y + 5, this.x, false));}
						else if (this.graphicsLeft === eelektrossLeft) {pokemons.push(new Pokemon(tynamo, Math.floor(random(tynamoEvolveTimeLower, tynamoEvolveTimeUpper)), this.y + 5, this.x, false));}
						else if (this.graphicsLeft === cloysterLeft) {pokemons.push(new Pokemon(shellder, Math.floor(random(shellderEvolveTimeLower, shellderEvolveTimeUpper)), this.y + 5, this.x, false));}
						else if (this.graphicsLeft === luvdiscLeft) {pokemons.push(new Pokemon(luvdisc, Math.floor(random(luvdiscEvolveTimeLower, luvdiscEvolveTimeUpper)), this.y + 5, this.x, false));}				
					}
					twinSound.play(); // pop pop sound when twins come out
				}
				this.layBabiesEatNum = Math.floor(random(layBabiesEatNumLower, layBabiesEatNumUpper));
				this.eatNum = 0;
				this.layBabiesCounter = 150;
				/*// create a 'push' effect
				if (this.x <= this.previousX) {this.x -= 20;}
				else {this.x += 20};*/
				}
		}
	}

	scare(num) {
		// run away!
      	if (scaryPokemons[num].x > this.x) {this.x -= map(volume, volumeThreshold, 0.8, 3, 10);}
      	else {this.x += map(volume, volumeThreshold, 0.8, 3, 10);}
     	if (scaryPokemons[num].y > this.y) {this.y -= map(volume, volumeThreshold, 0.8, 3, 10);}
      	else {this.y += map(volume, volumeThreshold, 0.8, 3, 10);}

      	// restrict shellder's and colyster's y-position on canvas
		if (this.graphicsLeft === shellderLeft || this.graphicsLeft === cloysterLeft || this.graphicsLeft === clamperlLeft) {
			this.y = constrain(this.y, shoreLine, canvasHeight - 80 - wrapAroundLimit);
		}

		// disperse if clumped Pokemons got scared
      	if (this.clumped === true && globalDragPokemon === null && volume > 0.1) {
      		this.disperse();
      	}
	}

	checkHungry() {
		this.hungryCounter--;
		// the Pokemon's hungry
		if (this.hungryCounter < hungerThreshold) {
			this.hungry = true;
			this.hungryDuration++;
		}
	}

	eat() {
		for (var i = 0; i < feedPokemons.length; i++) {
			if (this.hungry === true && dist(this.x, this.y, feedPokemons[i].x, feedPokemons[i].y) < 25) {
				eatSound2.play();
				feedPokemons[i].eaten = true;
				// move the Pokemon minFoodPosition down by 1 if its food 
				for (var j = 0; j < pokemons.length; j++) {
					if (pokemons[j].minFoodPosition > i) {pokemons[j].minFoodPosition -= 1;}
				}
				this.hungry = false;
				this.hungryDuration = 0;
				this.eatNum += 1;
				this.hungryCounter = Math.floor(random(hungryCounterLower, hungryCounterUpper));
				this.aboutToDie = false;
				this.decidedFood = false;
				this.minFoodPosition = 0;
			}
		}
	}

	updateTowardsFood() {
		// calculate distance between the Pokemon and the first remoraid in the array (assume the first remoraid is the nearest to the Pokemon)
		if (feedPokemons.length > 0 && this.decidedFood === false) {
			this.minFoodDistance = dist(this.x, this.y, feedPokemons[0].x, feedPokemons[0].y); 
			this.minFoodPosition = 0;
			// determine the nearest food source
			for (var i = 1; i < feedPokemons.length; i++) {
				if (dist(this.x, this.y, feedPokemons[i].x, feedPokemons[i].y) < this.minFoodDistance) {
					this.minFoodDistance = dist(this.x, this.y, feedPokemons[i].x, feedPokemons[i].y);
					this.minFoodPosition = i;
				}
			}
			if (this.minFoodDistance < 200 && feedPokemons[this.minFoodPosition].taken === false) {
				this.decidedFood = true;
				feedPokemons[this.minFoodPosition].taken = true;
				feedPokemons[this.minFoodPosition].predator = pokemons.indexOf(this);
			}
			else {
				this.update();
			}
		}
		if (feedPokemons.length === 0) {
			this.update();
		}
		
		if (feedPokemons.length > 0 && this.decidedFood === true && this.minFoodPosition < feedPokemons.length) {
			if (dist(this.x, this.y, feedPokemons[this.minFoodPosition].x, feedPokemons[this.minFoodPosition].y) > 200 || feedPokemons[this.minFoodPosition].y < this.yLower || feedPokemons[this.minFoodPosition].y > this.yUpper) {
				this.decidedFood = false;
				feedPokemons[this.minFoodPosition].taken = false;
				this.update();
			}
			
			if (this.decidedFood === true) {
				// if the food go out of their "comfort zone"
				// accelerate towards the nearest food source 
				// what is the x and y distance between the two Pokemons?
			    var dXFeed = feedPokemons[this.minFoodPosition].x - this.x;
			    var dYFeed = feedPokemons[this.minFoodPosition].y - this.y;

			    // let other Pokemon move 5% of the way to this Pokemon
			    this.x += dXFeed / 5;
			    this.y += dYFeed / 5;

			    this.graphicsCounter++;
				if (this.graphicsCounter === this.graphicsLeft.length) {this.graphicsCounter = 0;}
			}
		}
	}

	updateMainScreen() {
		// update position
		if (this.attractState === false) {
			this.previousX = this.x; // get the previous x position to determine if Pokemon graphics is left or right

			// move x and y positions
			noiseValueX = noise(this.noiseOffsetX);
			noiseValueY = noise(this.noiseOffsetY);
			// don't let the Pokemon change its x direction too quickly (wait at least 50 frames)
			if (this.directionCounter < this.directionRandomNumber) {
				if (this.direction === "left") {this.moveAmountX = map(noiseValueX, 0, 1, -this.speedX , 0); this.x += this.moveAmountX;} // keep moving left for at least 50 frames
				else if (this.direction === "right") {this.moveAmountX = map(noiseValueX, 0, 1, 0, this.speedX); this.x += this.moveAmountX;} // keep moving right for at least 50 frames
			}
			else {
				var num2 = Math.floor(random(0, 2));
				if (num2 === 0) {this.moveAmountX = map(noiseValueX, 0, 1, -this.speedX , 0); this.x += this.moveAmountX; this.direction = "left";}
				else {this.moveAmountX = map(noiseValueX, 0, 1, 0, this.speedX); this.x += this.moveAmountX; this.direction = "right";}
				this.directionCounter = 0;
				// pick a new change direction wait time (kyogre and horsea family should change direction more often)
				this.directionRandomNumber = Math.floor(random(this.directionTimeLower, this.directionTimeUpper));
			}
			this.moveAmountY = map(noiseValueX, 0, 1, -this.speedY , this.speedY);
			this.y += this.moveAmountY;
			this.noiseOffsetX += 0.01;
			this.noiseOffsetY += 0.01;
			this.directionCounter++;
		}

		// x wrap arounds (ALL POKEMONS should be able to move freely for all x positions)
		if (this.graphicsLeft === kyogreLeft || this.graphicsLeft === primalkyogreLeft || this.graphicsLeft === mantineLeft) { // special wrap around for kyogre and mantine because it is so wide
			if (this.x > width + wrapAroundLimit + 100) {this.x = -wrapAroundLimit - 100;}
			if (this.x < -wrapAroundLimit - 100) {this.x = width + wrapAroundLimit + 100;}
		}
		else {
			if (this.clumped === false) {
				if (this.x > width + wrapAroundLimit) {this.x = -wrapAroundLimit;}
				if (this.x < -wrapAroundLimit) {this.x = width + wrapAroundLimit;}
			}
			else {this.x = constrain(this.x, -wrapAroundLimit * 2, canvasWidth + (wrapAroundLimit * 2));}
		}

		// restrict shellder's and colyster's y-position on canvas
		if (this.graphicsLeft === shellderLeft || this.graphicsLeft === cloysterLeft) {
			this.y = constrain(this.y, shoreLine, canvasHeight - 80 - wrapAroundLimit);
		}
		// restrict kyogre and primal kyogre's y position, don't let it go too close to the floor
		else if (this.graphicsLeft === kyogreLeft || this.graphicsLeft === primalkyogreLeft) {
			this.y = constrain(this.y, -wrapAroundLimit - 50, shoreLine - 100);
		}
		// let gorebyss, huntail, finneon, and lumineon move all over 
		else if (this.graphicsLeft === gorebyssLeft || this.graphicsLeft === huntailLeft || this.graphicsLeft === finneonLeft || this.graphicsLeft === lumineonLeft || this.graphicsLeft === luvdiscLeft) {
			if (this.clumped === false) {this.y = constrain(this.y, 230, canvasHeight + wrapAroundLimit);}
			else {this.y = constrain(this.y, 230, canvasHeight + (wrapAroundLimit * 2));}
		}
		// y restrictions for all other pokemons
		else {
			if (this.clumped === false) {this.y = constrain(this.y, 230, canvasHeight + wrapAroundLimit);}
			else {this.y = constrain(this.y, 230, canvasHeight + (wrapAroundLimit * 2));}
		}	
	}
}