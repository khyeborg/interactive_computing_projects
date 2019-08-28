class FeedPokemon {
	constructor(graphicsLeft, graphicsRight, x, y, sizeX, sizeY, graphicsCounter) {
		this.graphicsLeft = graphicsLeft;
		this.graphicsRight = graphicsRight;
		this.x = x;
		this.y = y;
		this.speedX = 3; 
		this.speedY = 3;
		this.noiseOffsetX = random (0, 10000);
		this.noiseOffsetY = random (200000, 30000);
		this.graphicsCounter = graphicsCounter;
		this.sizeX = sizeX;
		this.sizeY = sizeY;

		// control direction
		this.direction = directionArray[Math.floor(random(0, 2))];
		this.directionCounter = 0;
		this.directionTimeLower = 50;
		this.directionTimeUpper = 200;
		this.directionRandomNumber = Math.floor(random(10, 30));

		this.taken = false;
		this.drawState = true;
		this.eaten = false;
	}

	update() {
		// update position
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
			this.directionRandomNumber = Math.floor(random(50, 300));
		}
		this.moveAmountY = map(noiseValueX, 0, 1, -this.speedY , this.speedY);
		this.y += this.moveAmountY;
		this.noiseOffsetX += 0.01;
		this.noiseOffsetY += 0.01;
		this.directionCounter++;

		// x and y wrap arounds 
		if (this.x > width + 30) {this.x = -30;}
		if (this.x < -30) {this.x = width + 30;}
		if (this.y > canvasHeight - 80 + 30) {this.y = -30;}
		if (this.y < -30) {this.y = canvasHeight - 80 + 30;}

		this.updateGraphics();	
	}

	display() {
		if (this.drawState === true) {
			// if feed Pokemon is moving to the left
			if (this.x <= this.previousX) {
				image(this.graphicsLeft[this.graphicsCounter], this.x, this.y, this.sizeX, this.sizeY);
			} 
			// if feed Pokemon is moving to the right
			else if (this.x > this.previousX) {
				image(this.graphicsRight[this.graphicsCounter], this.x, this.y, this.sizeX, this.sizeY);
			}
		}
	}

	updateGraphics() {
		// update graphics
		this.graphicsCounter++;
		if (this.graphicsCounter === this.graphicsLeft.length) {this.graphicsCounter = 0;}
	}

	scare(num) {
		// run away!
      	if (scaryPokemons[num].x > this.x) {this.x -= map(volume, volumeThreshold, 0.8, 3, 10);}
      	else {this.x += map(volume, volumeThreshold, 0.8, 3, 10);}
     	if (scaryPokemons[num].y > this.y) {this.y -= map(volume, volumeThreshold, 0.8, 3, 10);}
      	else {this.y += map(volume, volumeThreshold, 0.8, 3, 10);}
	}
}