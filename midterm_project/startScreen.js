var bar1Alpha, bar2Alpha, bar3Alpha = 255;

function startScreen() {
	background(228);
	imageMode(CORNER);
	image(startScreenBackground, 0, -25, 1050, 700);
	imageMode(CENTER);

	// play startScreen music
	if (startScreenMusic.isPlaying() == false) {startScreenMusic.play();}

	if (pokemonsSwimming === false) {
		// let Pokemons swim in the main screen
		for (var i = 0; i < Math.floor(random(0, 2)); i++) {pokemons.push(new Pokemon(tentacruel, Math.floor(random(tentacoolEvolveTimeLower, tentacoolEvolveTimeUpper)), random(200, canvasHeight), random(0, canvasWidth), false));}	
		for (var i = 0; i < Math.floor(random(0, 3)); i++) {pokemons.push(new Pokemon(lanturn, Math.floor(random(chinchouEvolveTimeLower, chinchouEvolveTimeUpper)), random(200, canvasHeight), random(0, canvasWidth), false));}
		for (var i = 0; i < Math.floor(random(0, 3)); i++) {pokemons.push(new Pokemon(tentacool, Math.floor(random(tentacoolEvolveTimeLower, tentacoolEvolveTimeUpper)), random(200, canvasHeight), random(0, canvasWidth), false));}
		for (var i = 0; i < Math.floor(random(0, 3)); i++) {pokemons.push(new Pokemon(mantyke, Math.floor(random(mantykeEvolveTimeLower, mantykeEvolveTimeUpper)), random(200, canvasHeight), random(0, canvasWidth), false));}	
		for (var i = 0; i < Math.floor(random(1, 3)); i++) {pokemons.push(new Pokemon(luvdisc, Math.floor(random(luvdiscEvolveTimeLower, luvdiscEvolveTimeUpper)), random(200, canvasHeight), random(0, canvasWidth), false));}	
		for (var i = 0; i < Math.floor(random(1, 3)); i++) {pokemons.push(new Pokemon(finneon, Math.floor(random(finneonEvolveTimeLower, finneonEvolveTimeUpper)), random(200, canvasHeight), random(0, canvasWidth), false));}
		for (var i = 0; i < Math.floor(random(1, 3)); i++) {pokemons.push(new Pokemon(chinchou, Math.floor(random(chinchouEvolveTimeLower, chinchouEvolveTimeUpper)), random(200, canvasHeight), random(0, canvasWidth), false));}
		pokemonsSwimming = true;
	}

	for (var i = 0; i < pokemons.length; i++) {
		pokemons[i].display();
		pokemons[i].updateMainScreen();
		pokemons[i].updateGraphics();
	}

	// program logo
	noStroke();
	rectMode(CENTER);
	fill(137, 224, 237); rect(975, 46, 120, 120);
	fill(2, 169, 232); rect(845, 97, 300, 175, 5);
	fill(186, 235, 230); rect(845, 97, 280, 155, 5);
	fill(4, 224, 250); rect(845, 137, 245, 58, 5);
	image(pokemonLogo, 845, 65, 200, 74);
	image(ecosystem, 845, 137, 230, 43);

	// options 
	// first option bar
	fill(11, 72, 107, bar1Alpha);
	rect(845, 255, 280, 110, 5);
	image(buildyourownFont, 845, 235, 250, 40);
	image(ecosystemFont, 845, 275, 250, 59);

	// second option bar
	fill(11, 72, 107, bar2Alpha);
	rect(845, 385, 280, 110, 5);
	image(randomizedFont, 845, 365, 250, 40);
	image(ecosystemFont, 845, 405, 250, 59);

	// third option bar
	fill(11, 72, 107, bar3Alpha);
	rect(845, 515, 280, 110, 5);
	image(lanturnFont, 842, 490, 180, 48);
	image(kingdomFont, 848, 540, 210, 57);

	if (mouseX > 705 && mouseX < 985 && mouseY > 200 && mouseY < 310) {bar1Alpha = 150;}
	else {bar1Alpha = 255;}
	if (mouseX > 705 && mouseX < 985 && mouseY > 340 && mouseY < 450) {bar2Alpha = 150;}
	else {bar2Alpha = 255;}
	if (mouseX > 705 && mouseX < 985 && mouseY > 480 && mouseY < 590) {bar3Alpha = 150;}
	else {bar3Alpha = 255;}

	rectMode(CORNER);

	//fill(0);
	//text("MouseX: " + mouseX + "   MouseY: " + mouseY, 20, 20);
}

function generateRandomEcosystem() {
	// determine number of random Pokemons to generate
	var clamperlNum = Math.floor(random(1, 4));
	var gorebyssNum = Math.floor(random(0, 3));
	var huntailNum = Math.floor(random(0, 3));
	var shellderNum = Math.floor(random(1, 4));
	var cloysterNum = Math.floor(random(0, 3));
	var tentacoolNum = Math.floor(random(1, 4));
	var tentacruelNum = Math.floor(random(0, 3));
	var horseaNum = Math.floor(random(0, 4));
	var seadraNum = Math.floor(random(0, 3));
	var kingdraNum = Math.floor(random(0, 2));
	var chinchouNum = Math.floor(random(1, 4));
	var lanturnNum = Math.floor(random(0, 3));
	var tynamoNum = Math.floor(random(0, 4));
	var eelektrikNum = Math.floor(random(0, 3));
	var eelektrossNum = Math.floor(random(0, 2));
	var mantykeNum = Math.floor(random(1, 4));
	var mantineNum = Math.floor(random(0, 3));
	var finneonNum = Math.floor(random(0, 5));
	var lumineonNum = Math.floor(random(0, 3));
	var luvdiscNum = Math.floor(random(0, 4));
	var kyogreNum = Math.floor(random(0, 2));

	// add randomly generated Pokemons into the pokemons array
	for (var i = 0; i < clamperlNum; i++) {pokemons.push(new Pokemon(clamperl, Math.floor(random(clamperlEvolveTimeLower, clamperlEvolveTimeUpper)), random(shoreLine, canvasHeight - 80 - wrapAroundLimit), random(0, canvasWidth), false));} // add clamperl first so other Pokemons can go in front of them
	for (var i = 0; i < kyogreNum; i++) {pokemons.push(new Pokemon(kyogre, Math.floor(random(kyogreEvolveTimeLower, kyogreEvolveTimeUpper)), random(0, shoreLine - 100), random(0, canvasWidth), false));}
	for (var i = 0; i < gorebyssNum; i++) {pokemons.push(new Pokemon(gorebyss, Math.floor(random(clamperlEvolveTimeLower, clamperlEvolveTimeUpper)), random(0, canvasHeight - 80 - wrapAroundLimit), random(0, canvasWidth), false));}
	for (var i = 0; i < huntailNum; i++) {pokemons.push(new Pokemon(huntail, Math.floor(random(clamperlEvolveTimeLower, clamperlEvolveTimeUpper)), random(0, canvasHeight - 80 - wrapAroundLimit), random(0, canvasWidth), false));}
	for (var i = 0; i < shellderNum; i++) {pokemons.push(new Pokemon(shellder, Math.floor(random(shellderEvolveTimeLower, shellderEvolveTimeUpper)), random(shoreLine, canvasHeight - 80 - wrapAroundLimit), random(0, canvasWidth), false));}
	for (var i = 0; i < cloysterNum; i++) {pokemons.push(new Pokemon(cloyster, Math.floor(random(shellderEvolveTimeLower, shellderEvolveTimeUpper)), random(shoreLine, canvasHeight - 80 - wrapAroundLimit), random(0, canvasWidth), false));}
	for (var i = 0; i < tentacoolNum; i++) {pokemons.push(new Pokemon(tentacool, Math.floor(random(tentacoolEvolveTimeLower, tentacoolEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < tentacruelNum; i++) {pokemons.push(new Pokemon(tentacruel, Math.floor(random(tentacoolEvolveTimeLower, tentacoolEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < horseaNum; i++) {pokemons.push(new Pokemon(horsea, Math.floor(random(horseaEvolveTimeLower, horseaEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < seadraNum; i++) {pokemons.push(new Pokemon(seadra, Math.floor(random(seadraEvolveTimeLower, seadraEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < kingdraNum; i++) {pokemons.push(new Pokemon(kingdra, Math.floor(random(seadraEvolveTimeLower, seadraEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < chinchouNum; i++) {pokemons.push(new Pokemon(chinchou, Math.floor(random(chinchouEvolveTimeLower, chinchouEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < lanturnNum; i++) {pokemons.push(new Pokemon(lanturn, Math.floor(random(chinchouEvolveTimeLower, chinchouEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < tynamoNum; i++) {pokemons.push(new Pokemon(tynamo, Math.floor(random(tynamoEvolveTimeLower, tynamoEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < eelektrikNum; i++) {pokemons.push(new Pokemon(eelektrik, Math.floor(random(eelektrikEvolveTimeLower, eelektrikEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < eelektrossNum; i++) {pokemons.push(new Pokemon(eelektross, Math.floor(random(eelektrikEvolveTimeLower, eelektrikEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < mantykeNum; i++) {pokemons.push(new Pokemon(mantyke, Math.floor(random(mantykeEvolveTimeLower, mantykeEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < mantineNum; i++) {pokemons.push(new Pokemon(mantine, Math.floor(random(mantykeEvolveTimeLower, mantykeEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < finneonNum; i++) {pokemons.push(new Pokemon(finneon, Math.floor(random(finneonEvolveTimeLower, finneonEvolveTimeUpper)), random(0, canvasHeight - 80 - wrapAroundLimit), random(0, canvasWidth), false));}
	for (var i = 0; i < lumineonNum; i++) {pokemons.push(new Pokemon(lumineon, Math.floor(random(finneonEvolveTimeLower, finneonEvolveTimeUpper)), random(0, canvasHeight - 80 - wrapAroundLimit), random(0, canvasWidth), false));}
	for (var i = 0; i < luvdiscNum; i++) {pokemons.push(new Pokemon(luvdisc, Math.floor(random(luvdiscEvolveTimeLower, luvdiscEvolveTimeUpper)), random(200, shoreLine), random(0, canvasWidth), false));}
}

function generateLanturnKingdom() {
	// determine number of chinchous and lanturns to generate
	var numberOfChinchous = Math.floor(random(10, 16));
	var numberOfLanturns = Math.floor(random(15, 31));

	// add chinchous and lanturns Pokemons into the pokemons array
	for (var i = 0; i < numberOfChinchous; i++) {pokemons.push(new Pokemon(chinchou, Math.floor(random(chinchouEvolveTimeLower, chinchouEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
	for (var i = 0; i < numberOfLanturns; i++) {pokemons.push(new Pokemon(lanturn, Math.floor(random(chinchouEvolveTimeLower, chinchouEvolveTimeUpper)), random(0, shoreLine), random(0, canvasWidth), false));}
}






