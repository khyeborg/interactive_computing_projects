// individual Pokemon variables
var tentacool, tentacruel, shellder, cloyster, chinchou, lanturn, clamperl, gorebyss, huntail, kyogre, primalkyogre, horsea, seadra, kingdra, mantyke, mantine, finneon, lumineon, luvdisc, remoraid, octillery, duskull, gastly, phantump;

// all-Pokemon array
var pokemons = [];
var numberOfPokemons = 0;

// canvas variables
var backdrop;
var canvasWidth = 1000, canvasHeight = 630;
var shoreLine = 420; wrapAroundLimit = 50;
var layBabiesEatNumLower = 1, layBabiesEatNumUpper = 3;

// evolution times variables 
var tentacoolEvolveTimeLower = 300, tentacoolEvolveTimeUpper = 800;
var shellderEvolveTimeLower = 600, shellderEvolveTimeUpper = 1500;
var chinchouEvolveTimeLower = 200, chinchouEvolveTimeUpper = 700;
var clamperlEvolveTimeLower = 800, clamperlEvolveTimeUpper = 3500;
var kyogreEvolveTimeLower = 1500, kyogreEvolveTimeUpper = 5000;
var horseaEvolveTimeLower = 300, horseaEvolveTimeUpper = 800;
var seadraEvolveTimeLower = 1000, seadraEvolveTimeUpper = 1500;
var tynamoEvolveTimeLower = 300, tynamoEvolveTimeUpper = 800;
var eelektrikEvolveTimeLower = 500, eelektrikEvolveTimeUpper = 1000;
var mantykeEvolveTimeLower = 300, mantykeEvolveTimeUpper = 800;
var finneonEvolveTimeLower = 500, finneonEvolveTimeUpper = 2000;
var luvdiscEvolveTimeLower = 10, luvdiscEvolveTimeUpper = 20;

// evolution eat number variables 
var tentacoolEatNumLower = 1, tentacoolEatNumUpper = 4;
var shellderEatNumLower = 1, shellderEatNumUpper = 4;
var chinchouEatNumLower = 1, chinchouEatNumUpper = 2;
var clamperlEatNumLower = 2, clamperlEatNumUpper = 5;
var kyogreEatNumLower = 8, kyogreEatNumUpper = 15;
var horseaEatNumLower = 1, horseaEatNumUpper = 3;
var seadraEatNumLower = 1, seadraEatNumUpper = 5;
var tynamoEatNumLower = 1, tynamoEatNumUpper = 4;
var eelektrikEatNumLower = 2, eelektrikEatNumUpper = 5;
var mantykeEatNumLower = 1, mantykeEatNumUpper = 5;
var finneonEatNumLower = 2, finneonEatNumUpper = 2;
var luvdiscEatNumLower = 1, luvdiscEatNumUpper = 2;

// size variables
var tentacoolSizeX = 45, tentacoolSizeY = 73;
var tentacruelSizeX = 68, tentacruelSizeY = 85;
var shellderSizeX = 52, shellderSizeY = 37;
var cloysterSizeX = 83, cloysterSizeY = 85;
var chinchouSizeX = 81, chinchouSizeY = 53;
var lanturnSizeX = 85, lanturnSizeY = 84;
var clamperlSizeX = 56, clamperlSizeY = 54;
var gorebyssSizeX = 82, gorebyssSizeY = 74;
var huntailSizeX = 93, huntailSizeY = 65;
var kyogreSizeX = 300, kyogreSizeY = 71;
var primalkyogreSizeX = 300, primalkyogreSizeY = 83;
var horseaSizeX = 31, horseaSizeY = 57;
var seadraSizeX = 69, seadraSizeY = 74;
var kingdraSizeX = 46, kingdraSizeY = 97;
var tynamoSizeX = 49, tynamoSizeY = 26;
var eelektrikSizeX = 74, eelektrikSizeY = 80;
var eelektrossSizeX = 111, eelektrossSizeY = 70;
var mantykeSizeX = 69, mantykeSizeY = 44;
var mantineSizeX = 131, mantineSizeY = 59;
var finneonSizeX = 50, finneonSizeY = 44;
var lumineonSizeX = 85, lumineonSizeY = 84;
var luvdiscSizeX = 34, luvdiscSizeY = 43;
var remoraidSizeX = 57, remoraidSizeY = 62;
var duskullSizeX = 48, duskullSizeY = 64;
var gastlySizeX = 52, gastlySizeY = 61;
var phantumpSizeX = 67, phantumpSizeY = 60;

// position limit variables 
var tentacoolYLower = -wrapAroundLimit, tentacoolYUpper = shoreLine;
var tentacruelYLower = -wrapAroundLimit, tentacruelYUpper = shoreLine;
var shellderYLower = shoreLine, shellderYUpper = canvasHeight - 80 - wrapAroundLimit;
var cloysterYLower = shoreLine, cloysterYUpper = canvasHeight - 80 - wrapAroundLimit;
var chinchouYLower = -wrapAroundLimit, chinchouYUpper = shoreLine;
var lanturnYLower = -wrapAroundLimit, lanturnYUpper = shoreLine;
var clamperlYLower = shoreLine, clamperlYUpper = canvasHeight - 80 - wrapAroundLimit;
var gorebyssYLower = -wrapAroundLimit, gorebyssYUpper = canvasHeight - 80 - wrapAroundLimit;
var huntailYLower = -wrapAroundLimit, huntailYUpper = canvasHeight - 80 - wrapAroundLimit;
var kyogreYLower = -wrapAroundLimit - 50, kyogreYUpper = shoreLine - 100;
var primalkyogreYLower = -wrapAroundLimit - 50, primalkyogreYUpper = shoreLine - 100;
var horseaYLower = -wrapAroundLimit, horseaYUpper = shoreLine;
var seadraYLower = -wrapAroundLimit, seadraYUpper = shoreLine;
var kingdraYLower = -wrapAroundLimit, kingdraYUpper = shoreLine;
var tynamoYLower = -wrapAroundLimit, tynamoYUpper = shoreLine;
var eelektrikYLower = -wrapAroundLimit, eelektrikYUpper = shoreLine;
var eelektrossYLower = -wrapAroundLimit, eelektrossYUpper = shoreLine;
var mantykeYLower = -wrapAroundLimit, mantykeYUpper = shoreLine;
var mantineYLower = -wrapAroundLimit, mantineYUpper = shoreLine;
var finneonYLower = -wrapAroundLimit, finneonYUpper = canvasHeight - 80 - wrapAroundLimit;
var lumineonYLower = -wrapAroundLimit, lumineonYUpper = canvasHeight - 80 - wrapAroundLimit;
var luvdiscYLower = -wrapAroundLimit, luvdiscYUpper = canvasHeight - 80 - wrapAroundLimit;

// individual Pokemon graphic arrays 
var tentacoolLeft = [], tentacoolRight = [], tentacruelLeft = [], tentacruelRight = [], shellderLeft = [], shellderRight = [], cloysterLeft = [], cloysterRight = [], chinchouLeft = [], chinchouRight = [], lanturnLeft = [], lanturnRight = [], clamperlLeft = [], clamperlRight = [], gorebyssLeft = [], gorebyssRight = [], huntailLeft = [], huntailRight = [], kyogreLeft = [], kyogreRight = [], primalkyogreLeft = [], primalkyogreRight = [], horseaLeft = [], horseaRight = [], seadraLeft = [], seadraRight = [], kingdraLeft = [], kingdraRight = [], tynamoLeft = [], tynamoRight = [], eelektrikLeft = [], eelektrikRight = [], eelektrossLeft = [], eelektrossRight = [], mantykeLeft = [], mantykeRight = [], mantineLeft = [], mantineRight = [], finneonLeft = [], finneonRight = [], lumineonLeft = [], lumineonRight = [], luvdiscLeft = [], luvdiscRight = [], duskullLeft = [], duskullRight = [], gastlyLeft = [], gastlyRight = [], phantumpLeft = [], phantumpRight = [];

// message variables
var tentacoolMessage = ["I'm a blue jellyfish"];
var tentacruelMessage = [];
var shellderMessage = [];
var cloysterMessage = [];
var chinchouMessage = [];
var lanturnMessage = [];
var clamperlMessage = [];
var gorebyssMessage = [];
var huntailMessage = [];
var kyogreMessage = [];
var primalkyogreMessage = [];
var horseaMessage = [];
var seadraMessage = [];
var kingdraMessage = [];
var tynamoMessage = [];
var eelektrikMessage = [];
var eelektrossMessage = [];
var mantykeMessage = [];
var mantineMessage = [];
var finneonMessage = [];
var lumineonMessage = [];
var luvdiscMessage = [];
var messageBox;

// Perlin noise variables
var noiseValueX, noiseValueY;
var moveAmountX, moveAmountY;

// temporary variables 
var tempLeft, tempRight;

// direction variables
var directionArray = ["left", "right"];

// disperse variables
var disperseDistance = 20;

// menu bar variables
var boxes = [];
var box1, box2, box3, box4, box5, box6, box7, box8;
var tentacoolBar, chinchouBar, finneonBar, mantykeBar, horseaBar, clamperlBar, luvdiscBar, tynamoBar;
var globalDragPokemon = null;
var r1 = 207, g1 = 240, b1 = 158;
var r2 = 168, g2 = 218, b2 = 168;
var r3 = 121, g3 = 189, b3 = 154;
var r4 = 59,  g4 = 134, b4 = 134;
var r5 = 207, g5 = 240, b5 = 158;
var r6 = 168, g6 = 218, b6 = 168;
var r7 = 121, g7 = 189, b7 = 154;
var r8 = 59,  g8 = 134, b8 = 134;

// microphone input variables
var microphone; // set up a variable that connects to the user's microphone
var volume;
var volumeThreshold = 0.03;
var scareBoolean = false;
var scareAlpha = 255;
var scareSize;
var haunter, haunterLeft = [], haunterRight = [], scaryPokemons = [], numberOfHaunters, gengarLeft = [], gengarCounter = 17;

// feed variables
var remoraidLeft = [], remoraidRight = [], octilleryLeft = [], octilleryRight = [], feedPokemons = [], feedPokemonsMouse = [];
var feedBoolean = false, autoFeedBoolean = false, remoraidCounter = 13, octilleryCounter = 39, feedNumber = 0;
var hungerThreshold = 100, hungryCounterLower = 200, hungryCounterUpper = 500;

// death variables
var deathPokemons = [];

// start screen variables
var startScreenBoolean = true, pokemonsSwimming = false;
var startScreenBackground, pokemonLogo, ecosystem;
var unownE = [], unownK = [], unownM = [], unownN = [], unownO = [], unownP = [];
var unownECounter = 0, unownKCounter = 0, unownMCounter = 0, unownNCounter = 0, unownOCounter = 0, unownPCounter = 0;
var disableBox = false;

// main menu bar variables
var mainMenuAlpha = 255;

// sound variables 
var seaMusic, scaryMusic, startScreenMusic, clickSound, birthSound, screamSound, deathSound, twinSound, existSound, eatSound1, eatSound2, gengarSound, shellderSound, horseaSound, tentacoolSound, clamperlSound, finneonSound, tynamoSound, mantykeSound, chinchouSound, remoraidSound, octillerySound, octilleryFeedSound;

// make a variable for counter
var counter = 0;

// this function is called when a load request finishes
function updateCounter() {
    // increase our counter
    counter++;

    // use the counter to set the style on the '#progress_bar' div
    var progress_bar = select('#progress_bar');
    progress_bar.style('width', int(counter / 3711 * 100) + "%");
}

function setup() {
	var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-holder');
    
	imageMode(CENTER);

	// connect to the microphone by createing a new AudioIn object
    microphone = new p5.AudioIn();

    // start the microphone (will request access to the mic from the user)
    microphone.start();

	// Perlin Noise
	noiseDetail(24);

	// individual Pokemon properties
	//              0 left            1 right            2 message            3 evolvable  4 speedX  5 speedY 6 directionTimerLower 7 directionTimerUpper 8 sizeX               9 sizeY             10 name         11 attraction zone factor 12 eatNumLower        13 eatNumUpper        14 yLower           15 yUpper
	tentacool    = [tentacoolLeft,    tentacoolRight,    tentacoolMessage,    true,        4,        6,       50,                   300,                  tentacoolSizeX,       tentacoolSizeY,     "tentacool",    0.9,                      tentacoolEatNumLower, tentacoolEatNumUpper, tentacoolYLower,    tentacoolYUpper];    // tentacool
	tentacruel   = [tentacruelLeft,   tentacruelRight,   tentacruelMessage,   false,       4,        6,       50,                   300,                  tentacruelSizeX,      tentacruelSizeY,    "tentacruel",   1,                        tentacoolEatNumLower, tentacoolEatNumUpper, tentacruelYLower,   tentacruelYUpper];   // tentacruel
	shellder     = [shellderLeft,     shellderRight,     shellderMessage,     true,        3,        2,       50,                   300,                  shellderSizeX,        shellderSizeY,      "shellder",     0.7,                      shellderEatNumLower,  shellderEatNumUpper,  shellderYLower,     shellderYUpper];     // shellder
	cloyster     = [cloysterLeft,     cloysterRight,     cloysterMessage,     false,       3,        2,       50,                   300,                  cloysterSizeX,        cloysterSizeY,      "cloyster",     1,                        shellderEatNumLower,  shellderEatNumUpper,  cloysterYLower,     cloysterYUpper];     // cloyster
	chinchou     = [chinchouLeft,     chinchouRight,     chinchouMessage,     true,        3,        3,       50,                   300,                  chinchouSizeX,        chinchouSizeY,      "chinchou",     1,                        chinchouEatNumLower,  chinchouEatNumUpper,  chinchouYLower,     chinchouYUpper];     // chinchou
	lanturn      = [lanturnLeft,      lanturnRight,      lanturnMessage,      false,       3,        3,       50,                   300,                  lanturnSizeX,         lanturnSizeY,       "lanturn",      1,                        chinchouEatNumLower,  chinchouEatNumUpper,  lanturnYLower,      lanturnYUpper];      // lanturn
	clamperl     = [clamperlLeft,     clamperlRight,     clamperlMessage,     true,        3,        3,       50,                   300,                  clamperlSizeX,        clamperlSizeY,      "clamperl",     0.9,                      clamperlEatNumLower,  clamperlEatNumUpper,  clamperlYLower,     clamperlYUpper];     // clamperl
	gorebyss     = [gorebyssLeft,     gorebyssRight,     gorebyssMessage,     false,       3,        3,       50,                   300,                  gorebyssSizeX,        gorebyssSizeY,      "gorebyss",     1,                        clamperlEatNumLower,  clamperlEatNumUpper,  gorebyssYLower,     gorebyssYUpper];     // gorebyss
	huntail      = [huntailLeft,      huntailRight,      huntailMessage,      false,       3,        3,       50,                   300,                  huntailSizeX,         huntailSizeY,       "huntail",      1,                        clamperlEatNumLower,  clamperlEatNumUpper,  huntailYLower,      huntailYUpper];      // huntail
	kyogre       = [kyogreLeft,       kyogreRight,       kyogreMessage,       true,        12,       5,       50,                   200,                  kyogreSizeX,          kyogreSizeY,        "kyogre",       1,                        kyogreEatNumLower,    kyogreEatNumUpper,    kyogreYLower,       kyogreYUpper];       // kyogre
	primalkyogre = [primalkyogreLeft, primalkyogreRight, primalkyogreMessage, false,       12,       5,       50,                   200,                  primalkyogreSizeX,    primalkyogreSizeY,  "primalkyogre", 1,                        kyogreEatNumLower,    kyogreEatNumUpper,    primalkyogreYLower, primalkyogreYUpper]; // primalkyogre
	horsea       = [horseaLeft,       horseaRight,       horseaMessage,       true,        3,        3,       10,                   30,                   horseaSizeX,          horseaSizeY,        "horsea",       0.6,                      horseaEatNumLower,    horseaEatNumUpper,    horseaYLower,       horseaYUpper];       // horsea
	seadra       = [seadraLeft,       seadraRight,       seadraMessage,       true,        3,        3,       10,                   30,                   seadraSizeX,          seadraSizeY,        "seadra",       1,                        seadraEatNumLower,    seadraEatNumUpper,    seadraYLower,       seadraYUpper];       // seadra
	kingdra      = [kingdraLeft,      kingdraRight,      kingdraMessage,      false,       3,        3,       10,                   30,                   kingdraSizeX,         kingdraSizeY,       "kingdra",      1,                        seadraEatNumLower,    seadraEatNumUpper,    kingdraYLower,      kingdraYUpper];      // kingdra
	tynamo       = [tynamoLeft,       tynamoRight,       tynamoMessage,       true,        6,        3,       20,                   50,                   tynamoSizeX,          tynamoSizeY,        "tynamo",       0.6,                      tynamoEatNumLower,    tynamoEatNumUpper,    tynamoYLower,       tynamoYUpper];       // tynamo
	eelektrik    = [eelektrikLeft,    eelektrikRight,    eelektrikMessage,    true,        3,        3,       50,                   300,                  eelektrikSizeX,       eelektrikSizeY,     "eelektrik",    1,                        eelektrikEatNumLower, eelektrikEatNumUpper, eelektrikYLower,    eelektrikYUpper];    // eelektrik
	eelektross   = [eelektrossLeft,   eelektrossRight,   eelektrossMessage,   false,       3,        3,       50,                   300,                  eelektrossSizeX,      eelektrossSizeY,    "eelektross",   1,                        eelektrikEatNumLower, eelektrikEatNumUpper, eelektrossYLower,   eelektrossYUpper];   // eelektross
	mantyke      = [mantykeLeft,      mantykeRight,      mantykeMessage,      true,        5,        3,       50,                   300,                  mantykeSizeX,         mantykeSizeY,       "mantyke",      0.9,                      mantykeEatNumLower,   mantykeEatNumUpper,   mantykeYLower,      mantykeYUpper];      // mantyke
	mantine      = [mantineLeft,      mantineRight,      mantineMessage,      false,       8,        3,       50,                   300,                  mantineSizeX,         mantineSizeY,       "mantine",      1,                        mantykeEatNumLower,   mantykeEatNumUpper,   mantineYLower,      mantineYUpper];      // mantine
	finneon      = [finneonLeft,      finneonRight,      finneonMessage,      true,        3,        3,       50,                   300,                  finneonSizeX,         finneonSizeY,       "finneon",      0.8,                      finneonEatNumLower,   finneonEatNumUpper,   finneonYLower,      finneonYUpper];      // finneon
	lumineon     = [lumineonLeft,     lumineonRight,     lumineonMessage,     false,       3,        3,       50,                   300,                  lumineonSizeX,        lumineonSizeY,      "lumineon",     1,                        finneonEatNumLower,   finneonEatNumUpper,   lumineonYLower,     lumineonYUpper];     // lumineon
	luvdisc      = [luvdiscLeft,      luvdiscRight,      luvdiscMessage,      false,       8,        3,       20,                   50,                   luvdiscSizeX,         luvdiscSizeY,       "luvdisc",      0.6,                      luvdiscEatNumLower,   luvdiscEatNumUpper,   luvdiscYLower,      luvdiscYUpper];      // luvdisc

	// make 8 boxes (menu bar)
	//             0 array position 1 r  2 g  3 b  4 xLower 5 xHigher 6 right graphics 7 Pokemon  8 evolveTimeLower         9 evolveTimeUpper         10 sound
	box1 = new Box(16,              r1,  g1,  b1,  0,       125,      tentacoolRight,  tentacool, tentacoolEvolveTimeLower, tentacoolEvolveTimeUpper, tentacoolSound);
	box2 = new Box(46,              r2,  g2,  b2,  125,     250,      chinchouRight,   chinchou,  chinchouEvolveTimeLower,  chinchouEvolveTimeUpper,  chinchouSound);
	box3 = new Box(4,               r3,  g3,  b3,  250,     375,      finneonRight,    finneon,   finneonEvolveTimeLower,   finneonEvolveTimeUpper,   finneonSound);
	box4 = new Box(14,              r4,  g4,  b4,  375,     500,      mantykeRight,    mantyke,   mantykeEvolveTimeLower,   mantykeEvolveTimeUpper,   mantykeSound);
	box5 = new Box(2,               r5,  g5,  b5,  500,     625,      horseaRight,     horsea,    horseaEvolveTimeLower,    horseaEvolveTimeUpper,    horseaSound);
	box6 = new Box(51,              r6,  g6,  b6,  625,     750,      clamperlRight,   clamperl,  clamperlEvolveTimeLower,  clamperlEvolveTimeUpper,  clamperlSound);
	box7 = new Box(40,              r7,  g7,  b7,  750,     875,      shellderRight,   shellder,  shellderEvolveTimeLower,  shellderEvolveTimeUpper,  shellderSound);
	box8 = new Box(34,              r8,  g8,  b8,  875,     1000,     tynamoRight,     tynamo,    tynamoEvolveTimeLower,    tynamoEvolveTimeUpper,    tynamoSound);
	boxes.push(box1); boxes.push(box2); boxes.push(box3); boxes.push(box4); boxes.push(box5); boxes.push(box6); boxes.push(box7); boxes.push(box8);
}

function draw() {
	if (startScreenBoolean === true) {startScreen();}

	else {
		imageMode(CORNER);
		image(backdrop, 0, 0);
		imageMode(CENTER);

		// ask the microphone how loud the volume is (this should be a number between 0.0 and 1.0)
	    volume = microphone.getLevel();

		// play game music
		if (scareBoolean === false && seaMusic.isPlaying() === false) {scaryMusic.stop(); seaMusic.play();}

		autoFeedMode();
		drawScareCircles();

		// draw the feed Pokemon
		for (var i = 0; i < feedPokemons.length; i++) {
			feedPokemons[i].update();
			// check if Pokemons can be scared 
			if (scareBoolean === true) {
				for (var j = 0; j < scaryPokemons.length; j++) {
					if (dist(scaryPokemons[j].x, scaryPokemons[j].y, feedPokemons[i].x, feedPokemons[i].y) < scareSize + 50 && volume > volumeThreshold && globalDragPokemon === null) {
						feedPokemons[i].scare(j);
					}
				}
			}
			feedPokemons[i].display();
		}

		for (var i = 0; i < pokemons.length; i++) {
			for (var j = i + 1; j < pokemons.length; j++) {
				// only try to attract if both of the Pokemons are in an attractable state
				if (pokemons[i].attractableCounter === 0 && pokemons[j].attractableCounter === 0 && pokemons[i].hungryDuration < 200 && pokemons[j].hungryDuration < 200) {pokemons[i].attract(pokemons[j]);}
			}
		}

		for (var i = 0; i < pokemons.length; i++) {
			// draw the 'attraction zone' for the Pokemons
		    /*fill(255, 0, 0, 10);
		    stroke(0,255,0);
		    ellipse(pokemons[i].x, pokemons[i].y, pokemons[i].attractionZoneSize, pokemons[i].attractionZoneSize);
			*/
			pokemons[i].mappingFactors();
			pokemons[i].display();

			// eat remoraids if hungry
			pokemons[i].checkHungry();
			pokemons[i].eat();

			// check if the Pokemon has attracted other Pokemons
			if (pokemons[i].attractedAmount === 0) {pokemons[i].clumped = false;} else {pokemons[i].clumped = true;}

			// if the Pokemon is in a non-attractable state 
			if (pokemons[i].attractableCounter > 0) {pokemons[i].attractableCounter--};

			if (pokemons[i].graphicsLeft != clamperlLeft) {
				if (pokemons[i].aboutToDie === false) {pokemons[i].update();}  
				else if (pokemons[i].aboutToDie === true) {pokemons[i].updateTowardsFood();}  
				pokemons[i].updateGraphics() // still update graphics regardless if Pokemon is about to die
			}
			else if (pokemons[i].graphicsLeft === clamperlLeft) {pokemons[i].updateGraphics();}

			// check if Pokemons can be scared 
			if (scareBoolean === true) {
				for (var j = 0; j < scaryPokemons.length; j++) {
					if (dist(scaryPokemons[j].x, scaryPokemons[j].y, pokemons[i].x, pokemons[i].y) < scareSize + 50 && volume > volumeThreshold && globalDragPokemon === null) {
						if (screamSound.isPlaying() === false && volume > 0.1) {screamSound.play();}
						pokemons[i].scare(j);
					}
				}
			}

			// refresh attract state so Pokemons can swim away after they evolve
			pokemons[i].attractState = false;
			pokemons[i].attractedAmount = 0;

			// lay babies
			if (pokemons[i].evolvable === false) {
				pokemons[i].layBabies();
			}

			// let the Pokemon die if it's been hungry for too long
			if (pokemons[i].hungryCounter < hungerThreshold - 550) {
				pokemons[i].alive = false;
				deathSound.play();
				var deathNum = Math.floor(random(0, 3));
				if (deathNum === 0) {deathPokemons.push(new DeathPokemon(duskullLeft, duskullRight, pokemons[i].x, pokemons[i].y, pokemons[i].sizeX, pokemons[i].sizeY, pokemons[i].direction));}
				else if (deathNum === 1) {deathPokemons.push(new DeathPokemon(gastlyLeft, gastlyRight, pokemons[i].x, pokemons[i].y, pokemons[i].sizeX, pokemons[i].sizeY, pokemons[i].direction));}
				else {deathPokemons.push(new DeathPokemon(phantumpLeft, phantumpRight, pokemons[i].x, pokemons[i].y, pokemons[i].sizeX, pokemons[i].sizeY, pokemons[i].direction));}
			}
		}

		scarePokemonBar(); // scare bar 
		feedBar(); // feed bar
		autoFeedBar(); // auto feed bar
		mainMenuBar();

		// check if we're in feeding mode
		if (feedBoolean === true) {
			for (var i = 0; i < feedPokemonsMouse.length; i++) {
				feedPokemonsMouse[i].display();
			}
		}

		// draw the scary Pokemons
		for (var i = 0; i < scaryPokemons.length; i++) {
			scaryPokemons[i].update();
			scaryPokemons[i].display();
		}

		// draw the death Pokemons
		for (var i = 0; i < deathPokemons.length; i++) {
			deathPokemons[i].updateAndDisplay();
		}
		// splice the feed Pokemons that was eaten
		for (var i = 0; i < feedPokemons.length; i++) {
			if (feedPokemons[i].eaten === true) {feedPokemons.splice(i, 1);}
		}
		// splice the death Pokemons that's out of canvas
		for (var i = 0; i < deathPokemons.length; i++) {
			if (deathPokemons[i].y < -wrapAroundLimit * 2) {deathPokemons.splice(i, 1);}
		}
		// splice the Pokemons that are dead
		for (var i = 0; i < pokemons.length; i++) {
			if (pokemons[i].alive === false) {pokemons.splice(i, 1);}
		}

		// menu bar
		if (disableBox === false) {
			fill(228);
			rect(0, 550, canvasWidth, 80);
			stroke(255);
			for (var i = 0; i < boxes.length; i++) {
				boxes[i].transparentBoxes();
				boxes[i].display();
				boxes[i].clickBoxes();
			}
		}
		if (disableBox === true) {
			fill(228);
			rect(0, 550, canvasWidth, 80);
			stroke(255);
			for (var i = 0; i < boxes.length; i++) {
				boxes[i].display(); 
				boxes[i].clickBoxes();
			}
			stroke(64, 67, 71, 200);
			fill(64, 67, 71, 200);
			rect(0, 550, canvasWidth, 80);
		}

		// draw our volume
	    //fill(0);
	    //text("Volume: " + volume, 25, 25);
	 	//textSize(20);
	 	//fill(255);
		//text("MouseX: " + mouseX + "   MouseY: " + mouseY, 20, 20);
		//console.log(frameRate());
	}
}

function checkClumped() {
	for (var i = 0; i < pokemons.length; i++) { 
		// only allow dispersion when no Pokemon is being added 
		if (dist(mouseX, mouseY, pokemons[i].x, pokemons[i].y) <= pokemons[i].attractionZoneSize / 2 && pokemons[i].clumped === true && globalDragPokemon === null && feedBoolean === false) {
			pokemons[i].disperse();
		}
	}
}

function drawScareCircles() {
	// draw the volume circle when scare mode is on (even though there is no Pokemon around)
	if (scareBoolean === true && scaryPokemons.length > 0) {
		for (var i = 0; i < scaryPokemons.length; i++) {
			// map the volume to a desired range and draw a circle
			scareSize = map(volume, 0, 0.8, 20, 150);
		    var scareA = map(volume, 0, 0.8, 0, 150);
		    noStroke(); 
		    fill(random(135, 212), random(0, 88), random(108, 255), scareA * 1);
		    ellipse(scaryPokemons[i].x, scaryPokemons[i].y, scareSize * 2, scareSize * 2);
		    fill(random(135, 212), random(0, 88), random(108, 255), scareA * 0.9);
		    ellipse(scaryPokemons[i].x, scaryPokemons[i].y, scareSize * 1.8, scareSize * 1.8);
		    fill(random(135, 212), random(0, 88), random(108, 255), scareA * 0.8);
		    ellipse(scaryPokemons[i].x, scaryPokemons[i].y, scareSize * 1.5, scareSize * 1.5);
		    fill(random(135, 212), random(0, 88), random(108, 255), scareA * 0.7);
		    ellipse(scaryPokemons[i].x, scaryPokemons[i].y, scareSize * 1.2, scareSize * 1.2);
		    fill(random(135, 212), random(0, 88), random(108, 255), scareA * 0.5);
		    ellipse(scaryPokemons[i].x, scaryPokemons[i].y, scareSize * 1, scareSize * 1);
		    fill(random(135, 212), random(0, 88), random(108, 255), scareA * 0.3);
		    ellipse(scaryPokemons[i].x, scaryPokemons[i].y, scareSize * 0.7, scareSize * 0.7);
		    fill(random(135, 212), random(0, 88), random(108, 255), scareA * 0.2);
		    ellipse(scaryPokemons[i].x, scaryPokemons[i].y, scareSize * 0.5, scareSize * 0.5);
		}
	}
}

function scarePokemonBar() {
	noStroke(); 
	if (globalDragPokemon != null) {scareBoolean = false;}
	if (scareBoolean === false && globalDragPokemon === null) {
		if (mouseX > 912 && mouseX < 980 && mouseY > 18 && mouseY < 87) {scareAlpha = 100;} 
		else {scareAlpha = 255;}
		fill(11, 72, 107, scareAlpha); rect(912, 15, 70, 70, 10);
		image(gengarLeft[gengarCounter], 948, 50, 60, 56);
	}
	else if (scareBoolean === true && globalDragPokemon === null) {
		fill(11, 72, 107, scareAlpha); rect(912, 15, 70, 70, 10); tint(255, 210);
		image(gengarLeft[gengarCounter], 948, 50, 60, 56); noTint();
		gengarCounter++;
		if (gengarCounter === gengarLeft.length) {gengarCounter = 0;}
	}
	else {
		scareAlpha = 100;
		fill(11, 72, 107, scareAlpha); rect(912, 15, 70, 70, 10);
		tint(255, 100); image(gengarLeft[gengarCounter], 948, 50, 60, 56); noTint();
	}
}

function feedBar() {
	noStroke(); 
	if (globalDragPokemon != null) {feedBoolean = false;}
	if (feedBoolean === false && globalDragPokemon === null) {
		if (mouseX > 913 && mouseX < 983 && mouseY > 103 && mouseY < 173) {feedAlpha = 100;} 
		else {feedAlpha = 255;}
		fill(11, 72, 107, feedAlpha); rect(912, 100, 70, 70, 10);
		image(remoraidLeft[remoraidCounter], 948, 135, remoraidSizeX * 0.9, remoraidSizeY * 0.9);
	}
	else if (feedBoolean === true && globalDragPokemon === null) {
		fill(11, 72, 107, feedAlpha); rect(912, 100, 70, 70, 10); tint(255, 210);
		image(remoraidLeft[remoraidCounter], 948, 135, remoraidSizeX * 0.9, remoraidSizeY * 0.9); noTint();
		remoraidCounter++;
		if (remoraidCounter === remoraidLeft.length) {remoraidCounter = 0;}
	}
	else {
		feedAlpha = 100;
		fill(11, 72, 107, feedAlpha); rect(912, 100, 70, 70, 10);
		tint(255, 100); image(remoraidLeft[remoraidCounter], 948, 135, remoraidSizeX * 0.9, remoraidSizeY * 0.9); noTint();
	}
}

function autoFeedBar() {
	noStroke(); 
	if (autoFeedBoolean === false && globalDragPokemon === null) {
		if (mouseX > 913 && mouseX < 983 && mouseY > 188 && mouseY < 258) {autoFeedAlpha = 100;} 
		else {autoFeedAlpha = 255;}
		fill(11, 72, 107, autoFeedAlpha); rect(912, 185, 70, 70, 10);
		image(octilleryLeft[octilleryCounter], 947, 220, 63, 45);
	}
	else if (autoFeedBoolean === true && globalDragPokemon === null) {
		fill(11, 72, 107, autoFeedAlpha); rect(912, 185, 70, 70, 10); tint(255, 210);
		image(octilleryLeft[octilleryCounter], 947, 220, 63, 45); noTint();
		octilleryCounter++;
		if (octilleryCounter === octilleryLeft.length) {octilleryCounter = 0;}
	}
	else {
		autoFeedAlpha = 100;
		fill(11, 72, 107, autoFeedAlpha); rect(912, 185, 70, 70, 10);
		tint(255, 100); image(octilleryLeft[octilleryCounter], 947, 220, 63, 45); noTint();
	}
}

function mainMenuBar() {
	noStroke(); 
	if (globalDragPokemon === null) {
		if (mouseX > 10 && mouseX < 140 && mouseY > 10 && mouseY < 80) {mainMenuAlpha = 100;} 
		else {mainMenuAlpha = 255;}
		fill(11, 72, 107, mainMenuAlpha); rect(10, 10, 150, 50, 10);
		image(mainmenuFont, 85, 35, 140, 25);
	}
	else {
		mainMenuAlpha = 100;
		fill(11, 72, 107, mainMenuAlpha); rect(10, 10, 150, 50, 10);
		tint(255, 100); image(mainmenuFont, 85, 35, 140, 25); noTint();
	}
}

function autoFeedMode() {
	// if user selects auto feed mode
	if (autoFeedBoolean === true) {
		image(octilleryLeft[octilleryCounter], canvasWidth / 2, (canvasHeight - 80)/ 2 + 100, 90 * 1.6, 60 * 1.6);
		octilleryCounter++;
		if (octilleryCounter === octilleryLeft.length) {octilleryCounter = 0;}

		// automatically generate remoraids
		// only generate remoraids when there are less than 30 remoraids on the screen
		if (feedPokemons.length < (pokemons.length * 3) && feedPokemons.length < 40) {
			if (octilleryCounter === 45 || octilleryCounter === 46) {
				if (pokemons.length === 1) {var numberOfAutoFeed = 5;}
				else {var numberOfAutoFeed = Math.floor(random(4, 11));}
				for (var i = 0; i < numberOfAutoFeed; i++) {
					var remoraidSizeFactor = random(0.4, 0.7);
					octilleryFeedSound.play();
					feedPokemons.push(new FeedPokemon(remoraidLeft, remoraidRight, canvasWidth / 2, (canvasHeight - 80)/ 2 + 100, remoraidSizeX * remoraidSizeFactor, remoraidSizeY * remoraidSizeFactor, Math.floor(random(0, remoraidLeft.length))));
				}
			}
		}
	}
}