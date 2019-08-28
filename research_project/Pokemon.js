class Pokemon {
	constructor(graphics, x, y) {
		this.graphics = graphics;
		this.graphicsCounter = 0;

		this.x = x;
		this.y = y;
	}

	display() {
		image(this.graphics[this.graphicsCounter], this.x, this.y);

		// update graphics
		this.graphicsCounter++;
		if (this.graphicsCounter === this.graphics.length) {this.graphicsCounter = 0;}
	}
}