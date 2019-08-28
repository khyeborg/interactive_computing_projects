class Pyramid {
	constructor(types, r1, g1, b1, r2, g2, b2, r3, g3, b3, phrase1, phrase2, phrase3) {
		this.types = types;
		this.r1 = r1; this.g1 = g1; this.b1 = b1;
		this.r2 = r2; this.g2 = g2; this.b2 = b2;
		this.r3 = r3; this.g3 = g3; this.b3 = b3;
		this.phrase1 = phrase1; this.phrase2 = phrase2; this.phrase3 = phrase3; 
		this.alpha1 = 255; this.alpha2 = 255; this.alpha3 = 255;
		this.selection1 =  0, this.selection2 =  0;
		this.selection1Boolean = false, this.selection2Boolean = false;
		this.onhold = false;
		this.data1phrase = "", this.data2phrase = ""; this.data3phrase = "";
		this.unit1 = "", this.unit2 = "", this.unit3 = "";
		this.line1 = "", this.line2 = "", this.line3 = "";
	}

	display() {
		strokeWeight(2);
		stroke(255);

		fill(this.r1, this.g1, this.b1, this.alpha1);
		triangle(canvasWidth/2 + offsetX, 50, canvasWidth/2 - 156 + offsetX, 190, canvasWidth/2 + 156 + offsetX, 190);
		fill(this.r2, this.g2, this.b2, this.alpha2);
		quad(canvasWidth/2 - 156 + offsetX, 190, canvasWidth/2 + offsetX, 190, canvasWidth/2 + offsetX, 320, canvasWidth/2 - 312 + offsetX, 320);
		fill(this.r3, this.g3, this.b3, this.alpha3);
		quad(canvasWidth/2 + 156 + offsetX, 190, canvasWidth/2 + offsetX, 190, canvasWidth/2 + offsetX, 320, canvasWidth/2 + 312 + offsetX, 320);

		noStroke();
		textAlign(CENTER);
		textSize(25);
		fill(255);

		if (this.types === "particles") {
			text(this.phrase2, canvasWidth/2 + offsetX, 160);
			text(this.phrase1, canvasWidth/2 - 110 + offsetX, 275);
			text("Avogadro's", canvasWidth/2 + 100 + offsetX, 245);
			text("constant", canvasWidth/2 + 90 + offsetX, 280);
		}
		else {
			text(this.phrase2, canvasWidth/2 + offsetX, 160);
			text(this.phrase1, canvasWidth/2 - 110 + offsetX, 265);
			text(this.phrase3, canvasWidth/2 + 110 + offsetX, 265);
		}
		
		textAlign(LEFT);
	}


}