var temp;

// images variables
var grass, water, fire, grassBackground, waterBackground, fireBackground, exercisesBackground;

// sound variables
var clickSound;

// font variables
var stoichiometryCalculator, mainMenuFont, calculateNowFont, exerciseFont, nextQuestionFont, flicker, pokemonFont;

function preload() {
	// eevee graphics
	for (var i = 1; i <= 25; i++) {
		temp = loadImage("images/eevee/eevee" + i + ".png"); 
		eevee.push(temp);
	}

	// flareon graphics
	for (var i = 1; i <= 29; i++) {
		temp = loadImage("images/flareon/flareon" + i + ".png"); 
		flareon.push(temp);
	}

	// wartortle graphics
	for (var i = 1; i <= 31; i++) {
		temp = loadImage("images/wartortle/wartortle" + i + ".png"); 
		wartortle.push(temp);
	}

	// pikachu graphics
	for (var i = 1; i <= 31; i++) {
		temp = loadImage("images/pikachu/pikachu" + i + ".png"); 
		pikachu.push(temp);
	}

	// leafeon graphics
	for (var i = 1; i <= 47; i++) {
		temp = loadImage("images/leafeon/leafeon" + i + ".png"); 
		leafeon.push(temp);
	}

	// ivysaur graphics
	for (var i = 1; i <= 49; i++) {
		temp = loadImage("images/ivysaur/ivysaur" + i + ".png"); 
		ivysaur.push(temp);
	}

	// charmeleon graphics
	for (var i = 1; i <= 59; i++) {
		temp = loadImage("images/charmeleon/charmeleon" + i + ".png"); 
		charmeleon.push(temp);
	}

	// vaporeon graphics
	for (var i = 1; i <= 63; i++) {
		temp = loadImage("images/vaporeon/vaporeon" + i + ".png"); 
		vaporeon.push(temp);
	}
	
	// images
	grass = loadImage("images/grass.jpeg");
	water = loadImage("images/water.jpeg");
	fire = loadImage("images/fire.jpeg");
	grassBackground = loadImage("images/backgrounds/grass1.jpeg");
	waterBackground = loadImage("images/backgrounds/water1.png");
	fireBackground = loadImage("images/backgrounds/fire1.png");
	exercisesBackground = loadImage("images/backgrounds/exercise1.jpg");

	// fonts
	stoichiometryCalculator = loadImage("images/fonts/stoichiometry_calculator.png");
	mainMenuFont = loadImage("images/fonts/main_menu.png");
	calculateNowFont = loadImage("images/fonts/calculate_now.png");
	exerciseFont = loadImage("images/fonts/exercises.png");
	nextQuestionFont = loadImage("images/fonts/next_question.png");
	flicker = loadFont('fonts/flicker/flicker.otf');
	pokemonFont = loadFont('fonts/pokemon.ttf');

	// sounds
	clickSound = loadSound("sounds/clickSoundSoft.mp3");
}












