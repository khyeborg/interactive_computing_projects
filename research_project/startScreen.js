var bar1Alpha, bar2Alpha, bar3Alpha = 255;
var hoverMessage = false, hoverMode = 0;

function startScreen() {

	if (generatedPokemon === false) {
		drawIvysaur = new Pokemon(ivysaur, 555, 205); pokemons.push(drawIvysaur);
		drawWartortle = new Pokemon(wartortle, 555, 355); pokemons.push(drawWartortle);
		drawCharmeleon = new Pokemon(charmeleon, 555, 505); pokemons.push(drawCharmeleon);
		drawEevee = new Pokemon(eevee, 180, 450); pokemons.push(drawEevee);
		generatedPokemon = true;
	}	
	
	background(3, 3, 3);
	textSize(26);
	textFont(flicker);

	imageMode(CORNER);
	image(stoichiometryCalculator, 30, 40);
	imageMode(CENTER);
	rectMode(CENTER);

	// options 
	// first option bar
	stroke(255);
	fill(200);
	rect(740, 205, 260, 110, 5);
	fill(111, 183, 48, bar1Alpha);
	rect(740, 205, 260, 110, 5);
	noStroke(); fill(255);
	text('Number of Particles', 625, 195);
	text('Calculation', 625, 230);
	image(grass, 925, 205, 80, 83);

	// second option bar
	stroke(255);
	fill(200);
	rect(740, 355, 260, 110, 5);
	fill(99, 165, 234, bar2Alpha);
	rect(740, 355, 260, 110, 5);
	noStroke(); fill(255);
	text('Mass', 625, 345);
	text('Calculation', 625, 380);
	image(water, 925, 360, 85, 81);

	// third option bar
	stroke(255);
	fill(200);
	rect(740, 505, 260, 110, 5);
	fill(255, 136, 77, bar3Alpha);
	rect(740, 505, 260, 110, 5);
	noStroke(); fill(255);
	text('Volume', 625, 495);
	text('Calculation', 625, 530);
	image(fire, 925, 505, 81, 86);

	// displaye Pokemons
	for (var i = 0; i < pokemons.length; i++) {
		pokemons[i].display();
	}

	if (mouseX > 612 && mouseX < 870 && mouseY > 150 && mouseY < 260) {bar1Alpha = 150;}
	else {bar1Alpha = 255;}
	if (mouseX > 612 && mouseX < 870 && mouseY > 310 && mouseY < 420) {bar2Alpha = 150;}
	else {bar2Alpha = 255;}
	if (mouseX > 612 && mouseX < 870 && mouseY > 450 && mouseY < 560) {bar3Alpha = 150;}
	else {bar3Alpha = 255;}

	if (mouseX > 612 && mouseX < 870 && mouseY > 150 && mouseY < 260) {hoverMessage = true; hoverMode = 1;}
	else if (mouseX > 612 && mouseX < 870 && mouseY > 310 && mouseY < 420) {hoverMessage = true; hoverMode = 2;}
	else if (mouseX > 612 && mouseX < 870 && mouseY > 450 && mouseY < 560) {hoverMessage = true; hoverMode = 3;}
	else {hoverMessage = false; hoverMode = 0;}

	rectMode(CORNER);

	// eevee message 
	if (hoverMessage == false) {
		textFont(pokemonFont);
		fill(255);
		text('Welcome!', 80, 280);
		textSize(15);
		text('Select a calculation mode', 80, 330);
	}
	else {
		textFont(pokemonFont);
		fill(255);
		if (hoverMode == 1) {
			textSize(18);
			text('Number of Particles', 80, 290);
			text('Calculation', 80, 330);
		}
		else if (hoverMode == 2) {
			textSize(20);
			text('Mass', 80, 290);
			text('Calculation', 80, 330);
		}
		else if (hoverMode == 3) {
			textSize(20);
			text('Volume', 80, 290);
			text('Calculation', 80, 330);
		}
	}
	textFont(flicker);
}

