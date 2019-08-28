var buildyourownFont, ecosystemFont, randomizedFont, lanturnFont, kingdomFont, mainmenuFont;

function preload() {
	backdrop = loadImage("images/sea6.png", updateCounter);
	messageBox = loadImage("images/messageBox.png", updateCounter);
	startScreenBackground = loadImage("images/start_screen/startScreenBackground1.jpeg", updateCounter);
	pokemonLogo = loadImage("images/start_screen/pokemonLogo.png", updateCounter);
	ecosystem = loadImage("images/start_screen/ecosystemLogo.png", updateCounter);
	buildyourownFont = loadImage("images/start_screen/buildyourownFont.png", updateCounter);
	ecosystemFont = loadImage("images/start_screen/ecosystemFont.png", updateCounter);
	randomizedFont = loadImage("images/start_screen/randomizedFont.png", updateCounter);
	lanturnFont = loadImage("images/start_screen/lanturnFont.png", updateCounter);
	kingdomFont = loadImage("images/start_screen/kingdomFont.png", updateCounter);
	mainmenuFont = loadImage("images/mainmenuFont.png", updateCounter);


	// menu bar
	/*tentacoolBar = loadImage("images/menu_bar/tentacool.png"); 
	chinchouBar = loadImage("images/menu_bar/chinchou.png"); 
	finneonBar = loadImage("images/menu_bar/finneon.png");  
	mantykeBar = loadImage("images/menu_bar/mantyke.png");  
	horseaBar = loadImage("images/menu_bar/horsea.png");  
	clamperlBar = loadImage("images/menu_bar/clamperl.png");  
	luvdiscBar = loadImage("images/menu_bar/luvdisc.png"); 
	shellderBar = loadImage("images/menu_bar/shellder.png"); 
	tynamoBar = loadImage("images/menu_bar/tynamo.png");*/

	/*for (var i = 1; i <= 60; i++) {
		// chinchou graphics
		tempLeft = loadImage("images/chinchou_left/chinchou_left" + i + ".png"); tempRight = loadImage("images/chinchou_right/chinchou_right" + i + ".png");
		chinchouLeft.push(tempLeft); chinchouRight.push(tempRight);

		// lanturn graphics
		tempLeft = loadImage("images/lanturn_left/lanturn_left" + i + ".png"); tempRight = loadImage("images/lanturn_right/lanturn_right" + i + ".png");
		lanturnLeft.push(tempLeft); lanturnRight.push(tempRight);
	}*/
	
	for (var i = 1; i <= 54; i++) {
		// clamperl graphics
		tempLeft = loadImage("images/clamperl_left/clamperl_left" + i + ".png", updateCounter); tempRight = loadImage("images/clamperl_right/clamperl_right" + i + ".png", updateCounter);
		clamperlLeft.push(tempLeft); clamperlRight.push(tempRight);
	}
	for (var i = 1; i <= 59; i++) {
		// cloyster graphics
		tempLeft = loadImage("images/cloyster_left/cloyster_left" + i + ".png", updateCounter); tempRight = loadImage("images/cloyster_right/cloyster_right" + i + ".png", updateCounter);
		cloysterLeft.push(tempLeft); cloysterRight.push(tempRight);

		// huntail graphics
		tempLeft = loadImage("images/huntail_left/huntail_left" + i + ".png", updateCounter); tempRight = loadImage("images/huntail_right/huntail_right" + i + ".png", updateCounter);
		huntailLeft.push(tempLeft); huntailRight.push(tempRight);

		// eelektrik graphics
		tempLeft = loadImage("images/eelektrik_left/eelektrik_left" + i + ".png", updateCounter); tempRight = loadImage("images/eelektrik_right/eelektrik_right" + i + ".png", updateCounter);
		eelektrikLeft.push(tempLeft); eelektrikRight.push(tempRight);

		// eelektross graphics
		tempLeft = loadImage("images/eelektross_left/eelektross_left" + i + ".png", updateCounter); tempRight = loadImage("images/eelektross_right/eelektross_right" + i + ".png", updateCounter);
		eelektrossLeft.push(tempLeft); eelektrossRight.push(tempRight);

		// finneon graphics
		tempLeft = loadImage("images/finneon_left/finneon_left" + i + ".png", updateCounter); tempRight = loadImage("images/finneon_right/finneon_right" + i + ".png", updateCounter);
		finneonLeft.push(tempLeft); finneonRight.push(tempRight);

		// lumineon graphics
		tempLeft = loadImage("images/lumineon_left/lumineon_left" + i + ".png", updateCounter); tempRight = loadImage("images/lumineon_right/lumineon_right" + i + ".png", updateCounter);
		lumineonLeft.push(tempLeft); lumineonRight.push(tempRight);

		// luvdisc graphics
		tempLeft = loadImage("images/luvdisc_left/luvdisc_left" + i + ".png", updateCounter); tempRight = loadImage("images/luvdisc_right/luvdisc_right" + i + ".png", updateCounter);
		luvdiscLeft.push(tempLeft); luvdiscRight.push(tempRight);
	}
	for (var i = 1; i <= 60; i++) {
		// tentacool graphics
		tempLeft = loadImage("images/tentacool_left/tentacool_left" + i + ".png", updateCounter); tempRight = loadImage("images/tentacool_right/tentacool_right" + i + ".png", updateCounter);
		tentacoolLeft.push(tempLeft); tentacoolRight.push(tempRight);

		// chinchou graphics
		tempLeft = loadImage("images/chinchou_left/chinchou_left" + i + ".png", updateCounter); tempRight = loadImage("images/chinchou_right/chinchou_right" + i + ".png", updateCounter);
		chinchouLeft.push(tempLeft); chinchouRight.push(tempRight);

		// lanturn graphics
		tempLeft = loadImage("images/lanturn_left/lanturn_left" + i + ".png", updateCounter); tempRight = loadImage("images/lanturn_right/lanturn_right" + i + ".png", updateCounter);
		lanturnLeft.push(tempLeft); lanturnRight.push(tempRight);

		// horsea graphics
		tempLeft = loadImage("images/horsea_left/horsea_left" + i + ".png", updateCounter); tempRight = loadImage("images/horsea_right/horsea_right" + i + ".png", updateCounter);
		horseaLeft.push(tempLeft); horseaRight.push(tempRight);

		// seadra graphics
		tempLeft = loadImage("images/seadra_left/seadra_left" + i + ".png", updateCounter); tempRight = loadImage("images/seadra_right/seadra_right" + i + ".png", updateCounter);
		seadraLeft.push(tempLeft); seadraRight.push(tempRight);
	}
	for (var i = 1; i <= 69; i++) {
		// primal kyogre graphics
		tempLeft = loadImage("images/primalkyogre_left/primalkyogre_left" + i + ".png", updateCounter); tempRight = loadImage("images/primalkyogre_right/primalkyogre_right" + i + ".png", updateCounter);
		primalkyogreLeft.push(tempLeft); primalkyogreRight.push(tempRight);
	}
	for (var i = 1; i <= 72; i++) {
		// kingdra graphics
		tempLeft = loadImage("images/kingdra_left/kingdra_left" + i + ".png", updateCounter); tempRight = loadImage("images/kingdra_right/kingdra_right" + i + ".png", updateCounter);
		kingdraLeft.push(tempLeft); kingdraRight.push(tempRight);
	}
	for (var i = 1; i <= 75; i++) {
		// kyogre graphics
		tempLeft = loadImage("images/kyogre_left/kyogre_left" + i + ".png", updateCounter); tempRight = loadImage("images/kyogre_right/kyogre_right" + i + ".png", updateCounter);
		kyogreLeft.push(tempLeft); kyogreRight.push(tempRight);
	}
	for (var i = 1; i <= 79; i++) {
		// gorebyss graphics
		tempLeft = loadImage("images/gorebyss_left/gorebyss_left" + i + ".png", updateCounter); tempRight = loadImage("images/gorebyss_right/gorebyss_right" + i + ".png", updateCounter);
		gorebyssLeft.push(tempLeft); gorebyssRight.push(tempRight);

		// tynamo graphics
		tempLeft = loadImage("images/tynamo_left/tynamo_left" + i + ".png", updateCounter); tempRight = loadImage("images/tynamo_right/tynamo_right" + i + ".png", updateCounter);
		tynamoLeft.push(tempLeft); tynamoRight.push(tempRight);

		// mantyke graphics
		tempLeft = loadImage("images/mantyke_left/mantyke_left" + i + ".png", updateCounter); tempRight = loadImage("images/mantyke_right/mantyke_right" + i + ".png", updateCounter);
		mantykeLeft.push(tempLeft); mantykeRight.push(tempRight);
	}
	for (var i = 1; i <= 80; i++) {
		// tentacruel graphics
		tempLeft = loadImage("images/tentacruel_left/tentacruel_left" + i + ".png", updateCounter); tempRight = loadImage("images/tentacruel_right/tentacruel_right" + i + ".png", updateCounter);
		tentacruelLeft.push(tempLeft); tentacruelRight.push(tempRight);

		// shellder graphics
		tempLeft = loadImage("images/shellder_left/shellder_left" + i + ".png", updateCounter); tempRight = loadImage("images/shellder_right/shellder_right" + i + ".png", updateCounter);
		shellderLeft.push(tempLeft); shellderRight.push(tempRight);

		// mantine graphics
		tempLeft = loadImage("images/mantine_left/mantine_left" + i + ".png", updateCounter); tempRight = loadImage("images/mantine_right/mantine_right" + i + ".png", updateCounter);
		mantineLeft.push(tempLeft); mantineRight.push(tempRight);
	}
	for (var i = 1; i <= 59; i++) {
		// haunter graphics
		tempLeft = loadImage("images/scary_pokemons/haunter_left/haunter_left" + i + ".png", updateCounter); tempRight = loadImage("images/scary_pokemons/haunter_right/haunter_right" + i + ".png", updateCounter);
		haunterLeft.push(tempLeft); haunterRight.push(tempRight);

		// octillery graphics
		tempLeft = loadImage("images/feed_pokemons/octillery_left/octillery_left" + i + ".png", updateCounter);
		octilleryLeft.push(tempLeft);

		// duskull graphics
		tempLeft = loadImage("images/death_pokemons/duskull_left/duskull_left" + i + ".png", updateCounter); tempRight = loadImage("images/death_pokemons/duskull_right/duskull_right" + i + ".png", updateCounter);
		duskullLeft.push(tempLeft); duskullRight.push(tempRight);

	}
	for (var i = 1; i <= 39; i++) {
		// gengar graphics
		tempLeft = loadImage("images/scary_pokemons/gengar_left/gengar_left" + i + ".png", updateCounter);
		gengarLeft.push(tempLeft);
	}
	for (var i = 1; i <= 60; i++) {
		// remoraid graphics
		tempLeft = loadImage("images/feed_pokemons/remoraid_left/remoraid_left" + i + ".png", updateCounter); tempRight = loadImage("images/feed_pokemons/remoraid_right/remoraid_right" + i + ".png", updateCounter);
		remoraidLeft.push(tempLeft); remoraidRight.push(tempRight);
	}
	for (var i = 1; i <= 64; i++) {
		// gastly graphics
		tempLeft = loadImage("images/death_pokemons/gastly_left/gastly_left" + i + ".png", updateCounter); tempRight = loadImage("images/death_pokemons/gastly_right/gastly_right" + i + ".png", updateCounter);
		gastlyLeft.push(tempLeft); gastlyRight.push(tempRight);
	}
	for (var i = 1; i <= 99; i++) {
		// phantump graphics
		tempLeft = loadImage("images/death_pokemons/phantump_left/phantump_left" + i + ".png", updateCounter); tempRight = loadImage("images/death_pokemons/phantump_right/phantump_right" + i + ".png", updateCounter);
		phantumpLeft.push(tempLeft); phantumpRight.push(tempRight);
	}

	// sounds
	seaMusic = loadSound("sounds/seaMusicMiddle.mp3");
	scaryMusic = loadSound("sounds/scaryMusicSoftSoftSoft.mp3");
	birthSound = loadSound("sounds/birthSoundJustRight.mp3");
	deathSound = loadSound("sounds/deathSoundSoftSoft.mp3");
	twinSound = loadSound("sounds/twinSound.mp3");
	existSound = loadSound("sounds/existSound.mp3");
	eatSound1 = loadSound("sounds/eatSound1.mp3");
	eatSound2 = loadSound("sounds/slurpSoundSoft.mp3");
	gengarSound = loadSound("sounds/gengar.mp3");
	shellderSound = loadSound("sounds/shellderSound.mp3");
	horseaSound = loadSound("sounds/horseaSound.mp3");
	tentacoolSound = loadSound("sounds/tentacoolSound.mp3");
	chinchouSound = loadSound("sounds/chinchouSound.mp3");
	clamperlSound = loadSound("sounds/clamperlSound.mp3");
	finneonSound = loadSound("sounds/finneonSound.mp3");
	mantykeSound = loadSound("sounds/mantykeSound.mp3");
	tynamoSound = loadSound("sounds/tynamoSound.mp3");
	remoraidSound = loadSound("sounds/remoraidSoundSoft.mp3");
	octillerySound = loadSound("sounds/octillerySoundSoft.mp3");
	octilleryFeedSound = loadSound("sounds/octilleryFeedSoundSoftSoft.mp3");
	startScreenMusic = loadSound("sounds/startScreenMusicSoft.mp3");
	clickSound = loadSound("sounds/clickSoundSoft.mp3");
	screamSound = loadSound("sounds/screamSound.mp3");
}












