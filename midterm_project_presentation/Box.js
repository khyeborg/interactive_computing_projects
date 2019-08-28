class Box {
	constructor(graphicsCounter, r, g, b, xLower, xHigher, graphics, pokemon, evolveTimeLower, evolveTimeUpper, sound) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.alpha = 255;
		this.xLower = xLower;
		this.xHigher = xHigher;
		this.boxClick = false;
		this.graphics = graphics;
		this.graphicsCounter = graphicsCounter;
		this.drag = false;
		this.pokemon = pokemon;
		this.evolveTimeLower = evolveTimeLower;
		this.evolveTimeUpper = evolveTimeUpper;
		this.sound = sound;
	}

	display() {
		fill(this.r, this.g, this.b, this.alpha);
		rect(this.xLower, 550, 125, 80);
	}

	transparentBoxes() {
		if (mouseX > this.xLower && mouseX < this.xHigher && mouseY > 550 && mouseY < 630) {this.alpha = 100;}
		else {this.alpha = 255;}
	}

	clickBoxes() {
		if (this.boxClick === true) {
			// animate the box Pokemon
			image(this.graphics[this.graphicsCounter], this.xLower + 62.5, 590);
			this.graphicsCounter++;
			if (this.graphicsCounter === this.graphics.length) {this.graphicsCounter = 0;}

			// draw the Pokemon to the screen
			if (mouseX > 0 && mouseX < canvasWidth && mouseY > 0 && mouseY < canvasHeight - 80) {
				this.drag = true;
				tint(255, 120);
				image(this.graphics[this.graphicsCounter], mouseX, mouseY);
				noTint();
			}
		}
		else {
			image(this.graphics[this.graphicsCounter], this.xLower + 62.5, 590);
		}
	}
}








