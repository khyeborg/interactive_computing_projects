var canvasWidth = 1000, canvasHeight = 600;
var startScreenBoolean = true; generatePyramid = false; generatedPokemon = false;
var calculationsOption = "";
var offsetX = 150, offsetY = 25;

// pokemon variables
var ivysaur = [], wartortle = [], charmeleon = [], eevee = [], leafeon = [], vaporeon = [], flareon = [], pikachu = [];
var drawIvysaur, drawWartortle, drawCharmeleon, drawEevee, drawPokemon;
var pokemons = [];

// main menu variables
var mainMenuAlpha = 255;

// pyramid variables
var pyramid;
var alpha1 = 255, alpha2 = 255, alpha3 = 255;
var moles = "No. of Moles", numberOfParticles = "No. of Particles", avogadro = "Avogadro's Constant";
var mass = "Mass", molarMass = "Molar Mass";
var volume = "Volume", molarVolume = "Molar Volume";
var data, data1, data2;
var finishedSelection = false;
var calculateNowAlpha = 255; calculateNowBoolean = false;
var messageState = 0;

// exercises variables
var exercisesAlpha = 255; nextQuestionAlpha = 255;
var exercisesMode = false; generateExercises = false;
var exercisesState = 1; 
var question1Answer = "", question1Selected = false, question1Correct = 0; 
var question2Answer = "", question2Selected = false, question2Correct = 0; 
var question3Answer = "", question3Selected = false, question3Correct = 0; 
var question4Answer = "", question4Selected = false, question4Correct = 0; 
var question5Answer = "", question5Selected = false, question5Correct = 0; 
var correctAnswer = 0;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	noStroke();
	textFont(flicker);
}

function draw() {
	// startScreenBoolean = false;
	if (startScreenBoolean === true && exercisesMode == false) {startScreen(); exercisesBar();}

	else if (generatePyramid === false && exercisesMode == false) {
		generatePyramid = true;
		generatePyramidFunction(); 
		exercisesBar();
	}

	else if (startScreenBoolean === false && generatePyramid === true && exercisesMode == false) {
		background(126, 129, 160);
		imageMode(CORNER); 

		// background
		if (calculationsOption === "particles") {image(grassBackground, 0, 0, canvasWidth, canvasHeight);}
		else if (calculationsOption === "mass") {image(waterBackground, 0, 0, canvasWidth, canvasHeight);}
		else if (calculationsOption === "volume") {image(fireBackground, 0, 0, canvasWidth, canvasHeight);}

		// display pyramid
		pyramid.display();

		// displays Pokemons
		for (var i = 0; i < pokemons.length; i++) {
			pokemons[i].display();
		}

		// main menu 
		imageMode(CENTER);
		mainMenuBar();
		exercisesBar();

		// // show values on the screen
		// pyramid.types = "volume";
		// pyramid.selection1Boolean = true; pyramid.selection2Boolean = true, finishedSelection = true;
		// calculateNowBoolean = true;
		// pyramid.data1phrase = "No. of moles", pyramid.data2phrase = "Volume";
		// pyramid.unit1 = "mol", pyramid.unit2 = "particles";
		// data1 = 4; data2 = 100; messageState = 5;

		if (pyramid.selection1Boolean == true) {fill(255); textSize(20); text(pyramid.data1phrase + " = " + data1 + " " + pyramid.unit1, 360, 360);}
		if (pyramid.selection2Boolean == true) {fill(255); textSize(20); text(pyramid.data2phrase + " = " + data2 + " " + pyramid.unit2, 360, 395);}

		// generate calculation data
		if (finishedSelection == true) {whatToCalculate();}

		// compute partner Pokemon message
		partnerPokemonMessage();

		// present calculation data
		if (calculateNowBoolean == true) {
			fill(255);
			text(pyramid.line1, 100, 450);
			text(pyramid.line2, 100, 500);
			text(pyramid.line3, 100, 550);
		}
	}
	
	// exercisesMode = true; exercisesState = 6;
	if (exercisesMode == true) {
		if (generateExercises == false) {generateExercisesFunction(); generateExercises = true;}
		exercises();
		exercisesPokemonMessage();
	}
}

function exercisesBar() {
	if (startScreenBoolean == true) {
		if (mouseX > 810 && mouseX < 955 && mouseY > 25 && mouseY < 75) {exercisesAlpha = 100;} 
		else {exercisesAlpha = 255;}
		fill(92, 139, 143, exercisesAlpha); rect(810, 25, 145, 50, 10); image(exerciseFont, 880, 50, 120, 29);
	}
	else {
		if (mouseX > 810 && mouseX < 955 && mouseY > 25 && mouseY < 75) {exercisesAlpha = 100;} 
		else {exercisesAlpha = 255;}
		fill(3, 3, 3, exercisesAlpha); rect(810, 25, 145, 50, 10); image(exerciseFont, 880, 50, 120, 29);
	}
}

function mainMenuBar() {
	if (exercisesState <= 5) {
		if (mouseX > 10 && mouseX < 160 && mouseY > 10 && mouseY < 60) {mainMenuAlpha = 100;} 
		else {mainMenuAlpha = 255;}
		fill(3, 3, 3, mainMenuAlpha); rect(10, 10, 150, 50, 10); image(mainMenuFont, 85, 35, 140, 25);
	}
	else {
		if (mouseX > 770 && mouseX < 920 && mouseY > 280 && mouseY < 330) {mainMenuAlpha = 100;} 
		else {mainMenuAlpha = 255;}
		fill(3, 3, 3, mainMenuAlpha); rect(770, 280, 150, 50, 10); image(mainMenuFont, 845, 305, 140, 25);
	}
}

function calculateNowBar() {
	stroke(255); strokeWeight(1);
	if (mouseX > 50 && mouseX < 270 && mouseY > 170 - offsetY && mouseY < 235 - offsetY) {calculateNowAlpha = 100;} 
	else {calculateNowAlpha = 255;}
	fill(3, 3, 3, calculateNowAlpha); rect(50, 170 - offsetY, 220, 65, 10); image(calculateNowFont, 157, 202 - offsetY, 200, 30);
	noStroke();
}

function nextQuestionBar() {
	if (mouseX > 770 && mouseX < 970 && mouseY > 505 && mouseY < 555) {nextQuestionAlpha = 100;} 
	else {nextQuestionAlpha = 255;}
	fill(3, 3, 3, nextQuestionAlpha); rect(770, 505, 200, 50, 10); image(nextQuestionFont, 870, 530, 180, 29);
}

function generatePyramidFunction() {
	if (calculationsOption === "particles") {pyramid = new Pyramid("particles", 59, 134, 134, 168, 219, 168, 121, 189, 154, moles, numberOfParticles, avogadro); drawPokemon = new Pokemon(leafeon, 120, 270 - offsetY); pokemons.push(drawPokemon);}
	else if (calculationsOption === "mass") {pyramid = new Pyramid("mass", 11, 72, 107, 105, 210, 231, 176, 248, 255, moles, mass, molarMass); drawPokemon = new Pokemon(vaporeon, 50, 270 - offsetY); pokemons.push(drawPokemon);}
	else if (calculationsOption === "volume") {pyramid = new Pyramid("volume", 192, 48, 47, 251, 101, 74, 252, 221, 130, moles, volume, molarVolume); drawPokemon = new Pokemon(flareon, 120, 270 - offsetY); pokemons.push(drawPokemon);}
}

function partnerPokemonMessage() {
	textFont(pokemonFont);
	fill(255);
	textSize(17);
	if (messageState == 0) {text('Select', 50, 200 - offsetY); text('your first option.', 50, 230 - offsetY);}
	else if (messageState == 1) {text('Input a value.', 50, 230 - offsetY);}
	else if (messageState == 2) {text('Invalid input...', 50, 230 - offsetY);}
	else if (messageState == 3) {text('Select', 50, 200 - offsetY); text('your second option.', 50, 230 - offsetY);}
	else if (messageState == 4) {text('Input another value.', 50, 230 - offsetY);}
	else if (messageState == 5) {text('Click here to compute', 50, 120 - offsetY); text('the ' + pyramid.data3phrase + ".", 50, 150 - offsetY); calculateNowBar();}
	else if (messageState == 6) {text("Calculations for the", 50, 200 - offsetY); text(pyramid.data3phrase + ".", 50, 230 - offsetY);}

	textSize(26);
	textFont(flicker);
}

function whatToCalculate() {
	if (pyramid.types == "particles") {
		if (pyramid.data1phrase == "No. of moles") {
			if (pyramid.data2phrase == "No. of particles") {
				pyramid.data3phrase = "Avogadro's Constant", pyramid.unit3 = "/mol";
				pyramid.line1 = "Avogadro's constant =  No. of particles / No. of moles";
				pyramid.line2 = "                                             = " + data2.toString() + " " + pyramid.unit2 + " / " + data1.toString() + " " + pyramid.unit1;
				var answer = data2 / data1;
				// var answer = parseFloat(Math.round(data2 / data1)).toFixed(3);
				pyramid.line3 = "                                             = " + answer.toString() + " " + pyramid.unit3;
			}
			else if (pyramid.data2phrase == "Avogadro's constant") {
				pyramid.data3phrase = "No. of Particles", pyramid.unit3 = "particles";
				pyramid.line1 = "No. of particles = No. of moles x Avogadro's constant";
				pyramid.line2 = "                                = " + data1.toString() + " " + pyramid.unit1 + " x " + data2.toString() + " " + pyramid.unit2;
				var answer = data1 * data2;
				// var answer = parseFloat(Math.round(data1 * data2)).toFixed(3);
				pyramid.line3 = "                                = " + answer.toString() + " " + pyramid.unit3;
			}
		}

		else if (pyramid.data1phrase == "No. of particles") {
			if (pyramid.data2phrase == "No. of moles") {
				pyramid.data3phrase = "Avogadro's Constant", pyramid.unit3 = "/mol";
				pyramid.line1 = "Avogadro's constant =  No. of particles / No. of moles";
				pyramid.line2 = "                                             = " + data1.toString() + " " + pyramid.unit1 + " / " + data2.toString() + " " + pyramid.unit2;
				var answer = data1 / data2;
				// var answer = parseFloat(Math.round(data1 / data2)).toFixed(3);
				pyramid.line3 = "                                             = " + answer.toString() + " " + pyramid.unit3;
			}
			else if (pyramid.data2phrase == "Avogadro's constant") {
				pyramid.data3phrase = "No. of Moles", pyramid.unit3 = "mol";
				pyramid.line1 = "No. of moles = No. of particles / Avogadro's constant";
				pyramid.line2 = "                          = " + data1.toString() + " " + pyramid.unit1 + " / " + data2.toString() + " " + pyramid.unit2;
				var answer = data1 / data2;
				// var answer = parseFloat(Math.round(data1 / data2)).toFixed(3);
				pyramid.line3 = "                          = " + answer.toString() + " " + pyramid.unit3;
			}
		}

		else if (pyramid.data1phrase == "Avogadro's constant") {
			if (pyramid.data2phrase == "No. of moles") {
				pyramid.data3phrase = "No. of Particles", pyramid.unit3 = "particles";
				pyramid.line1 = "No. of particles = No. of moles x Avogadro's constant";
				pyramid.line2 = "                                = " + data2.toString() + " " + pyramid.unit2 + " x " + data1.toString() + " " + pyramid.unit1;
				var answer = data2 * data1;
				// var answer = parseFloat(Math.round(data2 * data1)).toFixed(3);
				pyramid.line3 = "                                = " + answer.toString() + " " + pyramid.unit3;
			}
			else if (pyramid.data2phrase == "No. of particles") {
				pyramid.data3phrase = "No. of Moles", pyramid.unit3 = "mol";
				pyramid.line1 = "No. of moles = No. of particles / Avogadro's constant";
				pyramid.line2 = "                          = " + data2.toString() + " " + pyramid.unit2 + " / " + data1.toString() + " " + pyramid.unit1;
				var answer = data2 / data1;
				// var answer = parseFloat(Math.round(data2 / data1)).toFixed(3);
				pyramid.line3 = "                          = " + answer.toString() + " " + pyramid.unit3;
			}
		}
	}

	else if (pyramid.types == "mass") {
		if (pyramid.data1phrase == "No. of moles") {
			if (pyramid.data2phrase == "Mass") {
				pyramid.data3phrase = "Molar Mass", pyramid.unit3 = "g/mol";
				pyramid.line1 = "Molar mass =  Mass / No. of moles";
				pyramid.line2 = "                         = " + data2.toString() + " " + pyramid.unit2 + " / " + data1.toString() + " " + pyramid.unit1;
				var answer = data2 / data1;
				pyramid.line3 = "                         = " + answer.toString() + " " + pyramid.unit3;
			}
			else if (pyramid.data2phrase == "Molar mass") {
				pyramid.data3phrase = "Mass", pyramid.unit3 = "g";
				pyramid.line1 = "Mass = No. of moles x Molar mass";
				pyramid.line2 = "           = " + data1.toString() + " " + pyramid.unit1 + " x " + data2.toString() + " " + pyramid.unit2;
				var answer = data1 * data2;
				pyramid.line3 = "           = " + answer.toString() + " " + pyramid.unit3;
			}
		}

		else if (pyramid.data1phrase == "Mass") {
			if (pyramid.data2phrase == "No. of moles") {
				pyramid.data3phrase = "Molar Mass", pyramid.unit3 = "g/mol";
				pyramid.line1 = "Molar mass =  Mass / No. of moles";
				pyramid.line2 = "                         = " + data1.toString() + " " + pyramid.unit1 + " / " + data2.toString() + " " + pyramid.unit2;
				var answer = data1 / data2;
				pyramid.line3 = "                         = " + answer.toString() + " " + pyramid.unit3;
			}
			else if (pyramid.data2phrase == "Molar mass") {
				pyramid.data3phrase = "No. of Moles", pyramid.unit3 = "mol";
				pyramid.line1 = "No. of moles = Mass / Molar mass";
				pyramid.line2 = "                          = " + data1.toString() + " " + pyramid.unit1 + " / " + data2.toString() + " " + pyramid.unit2;
				var answer = data1 / data2;
				pyramid.line3 = "                          = " + answer.toString() + " " + pyramid.unit3;
			}
		}

		else if (pyramid.data1phrase == "Molar mass") {
			if (pyramid.data2phrase == "No. of moles") {
				pyramid.data3phrase = "Mass", pyramid.unit3 = "g";
				pyramid.line1 = "Mass = No. of moles x Molar mass";
				pyramid.line2 = "           = " + data2.toString() + " " + pyramid.unit2 + " x " + data1.toString() + " " + pyramid.unit1;
				var answer = data2 * data1;
				pyramid.line3 = "           = " + answer.toString() + " " + pyramid.unit3;
			}
			else if (pyramid.data2phrase == "Mass") {
				pyramid.data3phrase = "No. of Moles", pyramid.unit3 = "mol";
				pyramid.line1 = "No. of moles = Mass / Molar mass";
				pyramid.line2 = "                          = " + data2.toString() + " " + pyramid.unit2 + " / " + data1.toString() + " " + pyramid.unit1;
				var answer = data2 / data1;
				pyramid.line3 = "                          = " + answer.toString() + " " + pyramid.unit3;
			}
		}
	}

	else if (pyramid.types == "volume") {
		if (pyramid.data1phrase == "No. of moles") {
			if (pyramid.data2phrase == "Volume") {
				pyramid.data3phrase = "Molar Volume", pyramid.unit3 = "L/mol";
				pyramid.line1 = "Molar volume =  Volume / No. of moles";
				pyramid.line2 = "                             = " + data2.toString() + " " + pyramid.unit2 + " / " + data1.toString() + " " + pyramid.unit1;
				var answer = data2 / data1;
				pyramid.line3 = "                             = " + answer.toString() + " " + pyramid.unit3;
			}
			else if (pyramid.data2phrase == "Molar volume") {
				pyramid.data3phrase = "Volume", pyramid.unit3 = "L";
				pyramid.line1 = "Volume = No. of moles x Molar volume";
				pyramid.line2 = "               = " + data1.toString() + " " + pyramid.unit1 + " x " + data2.toString() + " " + pyramid.unit2;
				var answer = data1 * data2;
				pyramid.line3 = "               = " + answer.toString() + " " + pyramid.unit3;
			}
		}

		else if (pyramid.data1phrase == "Volume") {
			if (pyramid.data2phrase == "No. of moles") {
				pyramid.data3phrase = "Molar Volume", pyramid.unit3 = "L/mol";
				pyramid.line1 = "Molar volume =  Volume / No. of moles";
				pyramid.line2 = "                             = " + data1.toString() + " " + pyramid.unit1 + " / " + data2.toString() + " " + pyramid.unit2;
				var answer = data1 / data2;
				pyramid.line3 = "                             = " + answer.toString() + " " + pyramid.unit3;
			}
			else if (pyramid.data2phrase == "Molar volume") {
				pyramid.data3phrase = "No. of Moles", pyramid.unit3 = "mol";
				pyramid.line1 = "No. of moles = Volume / Molar volume";
				pyramid.line2 = "                          = " + data1.toString() + " " + pyramid.unit1 + " / " + data2.toString() + " " + pyramid.unit2;
				var answer = data1 / data2;
				pyramid.line3 = "                          = " + answer.toString() + " " + pyramid.unit3;
			}
		}

		else if (pyramid.data1phrase == "Molar volume") {
			if (pyramid.data2phrase == "No. of moles") {
				pyramid.data3phrase = "Volume", pyramid.unit3 = "L";
				pyramid.line1 = "Volume = No. of moles x Molar volume";
				pyramid.line2 = "               = " + data2.toString() + " " + pyramid.unit2 + " x " + data1.toString() + " " + pyramid.unit1;
				var answer = data2 * data1;
				pyramid.line3 = "               = " + answer.toString() + " " + pyramid.unit3;
			}
			else if (pyramid.data2phrase == "Volume") {
				pyramid.data3phrase = "No. of Moles", pyramid.unit3 = "mol";
				pyramid.line1 = "No. of moles = Volume / Molar volume";
				pyramid.line2 = "                          = " + data2.toString() + " " + pyramid.unit2 + " / " + data1.toString() + " " + pyramid.unit1;
				var answer = data2 / data1;
				pyramid.line3 = "                          = " + answer.toString() + " " + pyramid.unit3;
			}
		}
	}
	finishedSelection = false;
}