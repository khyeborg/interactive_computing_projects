class FeedPokemonMouse {
	constructor(graphicsLeft, graphicsRight) {
		this.graphicsLeft = graphicsLeft;
		this.graphicsRight = graphicsRight;
		this.direction = Math.floor(random(0, 2));
		this.xOffset = random(-20, 20);
		this.yOffset = random(-20, 20);
		this.graphicsCounter = Math.floor(random(0, this.graphicsLeft.length));
		this.sizeFactor = random(0.4, 0.7);
		this.sizeX = remoraidSizeX * this.sizeFactor;
		this.sizeY = remoraidSizeY * this.sizeFactor;
	}

	display() {
		tint(255, 120);
		if (this.direction == 0) {image(this.graphicsLeft[this.graphicsCounter], mouseX + this.xOffset, mouseY + this.yOffset, this.sizeX, this.sizeY);}
		else {image(this.graphicsRight[this.graphicsCounter], mouseX + this.xOffset, mouseY + this.yOffset, this.sizeX, this.sizeY);}
		this.graphicsCounter++;
		if (this.graphicsCounter === this.graphicsLeft.length) {this.graphicsCounter = 0;}
		noTint();
	}

}