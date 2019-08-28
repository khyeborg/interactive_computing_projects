class DeathPokemon {
	constructor(graphicsLeft, graphicsRight, x, y, sizeX, sizeY, direction) {
		this.graphicsLeft = graphicsLeft;
		this.graphicsRight = graphicsRight;
		this.x = x;
		this.y = y;
		this.graphicsCounter = Math.floor(random(0, graphicsLeft.length));
		if (this.graphicsLeft === duskullLeft) {this.sizeX = duskullSizeX; this.sizeY = duskullSizeY;}
		else if (this.graphicsLeft === gastlyLeft) {this.sizeX = gastlySizeX; this.sizeY = gastlySizeY;}
		else if (this.graphicsLeft === phantumpLeft) {this.sizeX = phantumpSizeX; this.sizeY = phantumpSizeY;}
		this.direction = direction;
		this.tintCounter = 150;
	}

	updateAndDisplay() {
		this.y -= 3;
		tint(255, this.tintCounter);
		if (this.direction === "left") {
			image(this.graphicsLeft[this.graphicsCounter], this.x, this.y, this.sizeX * 0.85, this.sizeY * 0.85);
		}
		else if (this.direction === "right") {
			image(this.graphicsRight[this.graphicsCounter], this.x, this.y, this.sizeX * 0.85, this.sizeY * 0.85);
		}
		noTint();
		this.graphicsCounter++;
		if (this.graphicsCounter === this.graphicsLeft.length) {this.graphicsCounter = 0;}

		this.tintCounter -= 4;
		if (this.tintCounter <= 0) {this.tintCounter = 0;}
	}
}