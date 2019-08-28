// variables for main character
var main;
var mainFaceLeft;
var mainFaceRight;
var mainX;
var mainY;
var pmainX;
var mainSize;
var bottomLimit;
var mainChracterSpeed;

// variables for main character box
var mainLeft;
var mainRight;
var mainTop;
var mainBottom;

// variables for enemies
var enemy;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemy7;
var enemy8;
var enemy9;
var newEnemy;
var pEnemyNum;
var pEnemyX;
var enemyX;
var enemyY;
var enemyDistance;
var enemyNameArray;
var enemyNum;
var enemySpeed;
var enemyLeftArray;
var enemyRightArray;
var enemyTopArray;
var enemyBottomArray;
var size;

// variables for enemy boxes
var enemyLeft;
var enemyRight;
var enemyTop;
var enemyBottom;

// variables for nice Pokemons
var fairy;
var fairy1;
var fairy2;
var fairy3;
var fairySize;
var newFairy;
var pFairy;
var pFairyX;
var fairyX;
var fairyY;
var fairyDistance;
var fairyNameArray;
var fairyNum;
var fairySpeed;
var fairyLeftArray;
var fairyRightArray;
var fairyTopArray;
var fairyBottomArray;

// variables for fairy boxes
var fairyLeft;
var fairyRight;
var fairyTop;
var fairyBottom;

// variables for game
var backdrop;
var gameMusic;
var lives; 
var heartImage;
var pokemonCollected;
var numberOfPokemonsToWin;

// variables for sounds
var scoreSound;
var randomOuchNum;
var pOuchNum;
var ouchSound1;
var ouchSound2;
var ouchSound3;
var clickSound;

// variables for start screen
var startScreenBoolean;
var startScreenBackdrop;
var bar1;
var bar2;
var bar3;
var level;

// variables for win
var winScreen2;
var winScreen3;
var winScreen4;
var winScreen5;
var winScreen6;
var winScreen7;
var winScreenArray;
var winScreenIndex;
var winMusic;
var bounceCounter;
var winGameBoolean;
var mainSizeDirection;

// variables for lose
var loseScreen;
var loseMusic;
var lose1;
var lose2;
var lose3;
var lose4;
var loseRain;
var tearDrop;

// variables for speed
var enemySpeed1lower;
var enemySpeed2lower;
var enemySpeed3lower;
var enemySpeed1higher;
var enemySpeed2higher;
var enemySpeed3higher;
var fairySpeed1lower;
var fairySpeed2lower;
var fairySpeed3lower;
var fairySpeed1higher;
var fairySpeed2higher;
var fairySpeed3higher;

// variables for interface
var theCanvas;
var canvasX;
var canvasY;
var rangeData;
var finalRangeData;

function preload() {
	mainFaceLeft = loadImage("images/charmanderLeft.png");
	mainFaceRight = loadImage("images/charmanderRight.png");

	enemy1 = loadImage("images/mudkip.png");
	enemy2 = loadImage("images/piplup.png");
	enemy3 = loadImage("images/poliwag.png");
	enemy4 = loadImage("images/squirtle.png");
	enemy5 = loadImage("images/gyarados.png");
	enemy6 = loadImage("images/totodile.png");
	enemy7 = loadImage("images/poliwhirl.png");
	enemy8 = loadImage("images/blastoise.png");
	enemy9 = loadImage("images/wartortle.png");

	fairy1 = loadImage("images/togepi.png");
	fairy2 = loadImage("images/clefairy.png");
	fairy3 = loadImage("images/jingglypuff.png");

	heartImage = loadImage("images/heart.png");
	backdrop = loadImage("images/beach.png");

	startScreenBackdrop = loadImage("images/forest.png");
	bar1 = loadImage("images/bar1.png");
	bar2 = loadImage("images/bar2.png");
	bar3 = loadImage("images/bar3.png");
	clickSound = loadSound("sounds/click.mp3");

	gameMusic = loadSound("sounds/pokemonCenterMusic.mp3");
	scoreSound = loadSound("sounds/score.mp3");
	ouchSound1 = loadSound("sounds/ouch1.mp3");
	ouchSound2 = loadSound("sounds/ouch2.mp3");
	ouchSound3 = loadSound("sounds/ouch3.mp3");

	loseScreen = loadImage("images/lose.png");
	loseMusic = loadSound("sounds/loseMusic.mp3");
	lose1 = loadImage("images/lose1.png");
	lose2 = loadImage("images/lose2.png");
	loseRain = loadImage("images/loseRain.png");
	tearDrop = loadImage("images/tear.png");

	winMusic = loadSound("sounds/winMusic.mp3");

	winScreen2 = loadImage("images/win2.png");
	winScreen3 = loadImage("images/win3.png");
	winScreen4 = loadImage("images/win4.png");
	winScreen5 = loadImage("images/win5.png");
	winScreen6 = loadImage("images/win6.png");
	winScreen7 = loadImage("images/win7.png");
}

function setup() {
	theCanvas = createCanvas(500, 500);
	//repositionCanvas();
	imageMode(CORNER);
	noStroke();

	// game variables
	lives = 5;
	pokemonCollected = 0;
	numberOfPokemonsToWin = 10;
	winGameBoolean = false;
	mainSizeDirection = 1;

	// sizes and distances
	rangeData = 90;
	mainSize = rangeData;
	size = 90;
	fairySize = 40;
	enemyDistance = 100;
	fairyDistance = 50;

	// speeds
	mainChracterSpeed = 4.5;
	bottomLimit = height - mainSize - 5;
	
	// main character setup
	main = mainFaceLeft;
	mainX = 360;
	mainY = bottomLimit;

	// enemy setup
	enemyX = random(0, width - size);
	enemyY = 20;
	enemyNameArray = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9];
	enemyLeftArray = [enemyX + 10, enemyX + 5, enemyX, enemyX + 5, enemyX + 10, enemyX + 20, enemyX + 20, enemyX + 15, enemyX + 25];
	enemyRightArray = [enemyX + size - 15, enemyX + size - 35, enemyX + size - 45, enemyX + size - 30, enemyX + size - 10, enemyX + size - 20, enemyX + size - 25, enemyX + size - 15, enemyX + size - 15];
	enemyTopArray = [enemyY + 30, enemyY + 5, enemyY, enemyY + 5, enemyY + 15, enemyY + 5, enemyY + 10, enemyY + 5, enemyY + 10];
	enemyBottomArray = [enemyY + size - 5, enemyY + size - 5, enemyY + size - 40, enemyY + size - 15, enemyY + size - 15, enemyY + size - 5, enemyY + size - 40, enemyY + size - 20, enemyY + size - 10];
	enemyNum = Math.floor(random(0,6));
	enemy = enemyNameArray[enemyNum];
	enemyLeft  = enemyLeftArray[enemyNum];
	enemyRight = enemyRightArray[enemyNum];
	enemyTop = enemyTopArray[enemyNum];
	enemyBottom = enemyBottomArray[enemyNum];

	// fairy setup
	fairyNameArray = [fairy1, fairy2, fairy3];
	fairyLeftArray = [fairyX, fairyX, fairyX];
	fairyRightArray = [fairyX + fairySize, fairyX + fairySize, fairyX + fairySize];
	fairyTopArray = [fairyY, fairyY, fairyY];
	fairyBottomArray = [fairyY + fairySize, fairyY + fairySize, fairyY + fairySize];
	fairyNum = Math.floor(random(0,3));
	fairyNum = 2;
	fairy = fairyNameArray[fairyNum];
	fairyLeft  = fairyLeftArray[fairyNum];
	fairyRight = fairyRightArray[fairyNum];
	fairyTop = fairyTopArray[fairyNum];
	fairyBottom = fairyBottomArray[fairyNum];
	// the fairy must be more than 50 pixelds away from enemy 
	while (true) {
		fairyX = random(0, width - fairySize);
		if (fairyX > enemyX && fairyX - enemyX > fairyDistance || fairyX < enemyX && enemyX - fairyX > fairyDistance) {
			break;
		}
	}
	fairyY = 20;

	// sound setup
	randomOuchNum = Math.floor(random(0,3));

	// start screen setup
	startScreenBoolean = true;

	// enemy speed variables
	enemySpeed1lower = 2;
	enemySpeed1higher = 4;
	enemySpeed2lower = 5;
	enemySpeed2higher = 7;
	enemySpeed3lower = 11;
	enemySpeed3higher = 14;

	// fairy speed variables
	fairySpeed1lower = 2;
	fairySpeed1higher = 4;
	fairySpeed2lower = 4;
	fairySpeed2higher = 6;
	fairySpeed3lower = 8;
	fairySpeed3higher = 11;

	// win Screen setup
	winScreenArray = [winScreen2, winScreen3, winScreen4, winScreen5, winScreen6, winScreen7];
	winScreenIndex = 0;

	//frameRate(40);
}

function draw() {
	console.log(frameRate());
	if (winGameBoolean == false) {
		// update main character size
		mainSize = rangeData;
	}

	// play game music
	if (gameMusic.isPlaying() == false) {
		gameMusic.play();
	}

	// start screen
	if (startScreenBoolean) {
		image(startScreenBackdrop, 0, 0, width, height);

		strokeWeight(3);
		stroke(255);

		// pichu easy bar
		fill(254, 246, 137);
		rect(95, 90, 310, 100, 10);
		image(bar1, 105, 100, 180, 90);

		// pikachu medium bar
		fill(244, 237, 68);
		rect(95, 220, 310, 100, 10);
		image(bar2, 105, 230, 175, 90);

		// raichu hard bar
		fill(233, 190, 62);
		rect(95, 350, 310, 100, 10);
		image(bar3, 105, 360, 175, 90);

		textSize(48);
		fill(0);
		text("Easy", 210, 155);
		text("Medium", 210, 285);
		text("Hard", 210, 415);

		if (mouseIsPressed && mouseX >= 95 && mouseX <= 405 && mouseY >= 95 && mouseY <= 190) {
			level = 1;
			enemySpeed = Math.floor(random(enemySpeed1lower, enemySpeed1higher));
			fairySpeed = Math.floor(random(fairySpeed1lower,fairySpeed1higher));
			mainChracterSpeed = 4.5;
			clickSound.play();
			startScreenBoolean = false;
		}
		if (mouseIsPressed && mouseX >= 95 && mouseX <= 405 && mouseY >= 222 && mouseY <= 320) {
			level = 2;
			enemySpeed = Math.floor(random(enemySpeed2lower, enemySpeed2higher));
			fairySpeed = Math.floor(random(fairySpeed2lower,fairySpeed2higher));
			mainChracterSpeed = 4.5;
			clickSound.play();
			startScreenBoolean = false;
		}
		if (mouseIsPressed && mouseX >= 95 && mouseX <= 405 && mouseY >= 355 && mouseY <= 450) {
			level = 3;
			enemySpeed = Math.floor(random(enemySpeed3lower, enemySpeed3higher));
			fairySpeed = Math.floor(random(fairySpeed3lower,fairySpeed3higher));
			mainChracterSpeed = 8;
			clickSound.play();
			startScreenBoolean = false;
		}

		// draw the main character on the start screen
		// left, right, up, down of main character
		if (keyIsDown(65)) { // ASCII of 'A'
			mainX -= mainChracterSpeed;
		}
		if (keyIsDown(68)) { // ASCII of 'D'
			mainX += mainChracterSpeed;
		}
		if (keyIsDown(87)) { // ASCII of 'W'
			mainY -= mainChracterSpeed;
		}
		if (keyIsDown(83)) { // ASCII of 'S'
			mainY += mainChracterSpeed;
		}

		// constrain main character within the frame;
		if (mainX <= 5) {
			mainX = 5;
		}
		if (mainX >= width - mainSize - 5) {
			mainX = width - mainSize - 5;
		}
		if (mainY <= 5) {
			mainY = 5;
		}
		if (mainY >= height - mainSize - 5) {
			mainY = height - mainSize - 5;
		}

		// determine the direction of the main character
		if (mainX < pmainX) {
			main = mainFaceLeft;
		}
		else if (mainX > pmainX) {
			main = mainFaceRight;
		}

		// draw the main character
		image(main, mainX, mainY, mainSize, mainSize);
		pmainX = mainX;
	}

	else {
		image(backdrop, 0, 0, width, height);

		// report data
		stroke(0);
		strokeWeight(1);
	 	textSize(15);
	 	fill(200, 196, 188);
	 	rect(5, 5, 180, 70, 10);
	 	noStroke();
	 	fill(255);
	 	text (lives + "       left", 15, 30);
	 	image(heartImage, 27, 13, 20, 20);
	 	image(fairy1, 10, 40, 25, 25);
	 	image(fairy2, 35, 40, 30, 30);
	 	image(fairy3, 65, 40, 28, 28);
	 	text ("                   collected: " + pokemonCollected, 15, 60);
	 	textSize(20);
	 	fill(random(255), random(255), random(255));
	 	text("Avoid the water Pokemons...", 15, 430);
	 	text("Collect 10 fairy Pokemons to win!!!", 15, 470);

		// left, right, up, down of main character
		if (keyIsDown(65)) { // ASCII of 'A'
			mainX -= mainChracterSpeed;
		}
		if (keyIsDown(68)) { // ASCII of 'D'
			mainX += mainChracterSpeed;
		}
		if (keyIsDown(87)) { // ASCII of 'W'
			mainY -= mainChracterSpeed;
		}
		if (keyIsDown(83)) { // ASCII of 'S'
			mainY += mainChracterSpeed;
		}

		// constrain main character within the frame;
		if (mainX <= 5) {
			mainX = 5;
		}
		if (mainX >= width - mainSize - 5) {
			mainX = width - mainSize - 5;
		}
		if (mainY <= 5) {
			mainY = 5;
		}
		if (mainY >= height - mainSize - 5) {
			mainY = height - mainSize - 5;
		}

		// determine the direction of the main character
		if (mainX < pmainX) {
			main = mainFaceLeft;
		}
		else if (mainX > pmainX) {
			main = mainFaceRight;
		}

		// draw the enemy character
		image(enemy, enemyX, enemyY, size, size);

		// change location of enemy character
		enemyY += enemySpeed;

		// if the enemy gets off the screen
		if (enemyY > height + 30) {
			// prevent the same enemy from appearing twice in a row
			pEnemyNum = enemyNum;
			while (true) {
				enemyNum = Math.floor(random(0,9));
				if (enemyNum != pEnemyNum) {
					break;
				}
			}
			enemy = enemyNameArray[enemyNum];

			// the new enemy cannot be 100 pixels within the previous enemy 
			pEnemyX = enemyX;
			while (true) {
				enemyX = random(0, width - size);
				if (enemyX > pEnemyX && enemyX - pEnemyX > enemyDistance || enemyX < pEnemyX && pEnemyX - enemyX > enemyDistance) {
					break;
				}
			}
			enemyY = 20;

			// new random enemy speed based on level
			if (level == 1) {
				enemySpeed = Math.floor(random(enemySpeed1lower,enemySpeed1higher));
			}
			if (level == 2) {
				enemySpeed = Math.floor(random(enemySpeed2lower,enemySpeed2higher));
			}
			if (level == 3) {
				enemySpeed = Math.floor(random(enemySpeed3lower,enemySpeed3higher));
			}
		}

		// draw the fairy character
		image(fairy, fairyX, fairyY, fairySize, fairySize);

		// change location of fairy character
		fairyY += fairySpeed;
		
		// draw the main character
		image(main, mainX, mainY, mainSize, mainSize);
		pmainX = mainX;

		// if the fairy gets off the screen
		if (fairyY > height + fairySize / 2) {
			// prevent the same fairy from appearing twice in a row
			pFairyNum = fairyNum;
			while (true) {
				fairyNum = Math.floor(random(0,3));
				if (fairyNum != pFairyNum) {
					break;
				}
			}
			fairy = fairyNameArray[fairyNum];

			// the new fairy cannot be 100 pixels within the previous fairy 
			pFairyX = fairyX;
			while (true) {
				fairyX = random(0, width - fairySize);
				if (fairyX > pFairyX && fairyX - pFairyX > enemyDistance || fairyX < pFairyX && pFairyX - fairyX > enemyDistance) {
					break;
				}
			}
			fairyY = 20;

			// new random fairy speed based on level
			if (level == 1) {
				fairySpeed = Math.floor(random(fairySpeed1lower,fairySpeed1higher));
			}
			if (level == 2) {
				fairySpeed = Math.floor(random(fairySpeed2lower,fairySpeed2higher));
			}
			if (level == 3) {
				fairySpeed = Math.floor(random(fairySpeed3lower,fairySpeed3higher));
			}
		}

		// determine where the box for the main character is
		if (main == mainFaceLeft) {
			mainLeft  = mainX + 5;
			mainRight = mainX + mainSize - 45;
			mainTop = mainY;
			mainBottom = mainY + mainSize - 5;
		}
		else {
			mainLeft  = mainX + 45;
			mainRight = mainX + mainSize - 5;
			mainTop = mainY;
			mainBottom = mainY + mainSize - 5;
		}

		// update enemy Arrays
		enemyLeftArray = [enemyX + 10, enemyX + 5, enemyX, enemyX + 5, enemyX + 10, enemyX + 20, enemyX + 20, enemyX + 15, enemyX + 25];
		enemyRightArray = [enemyX + size - 15, enemyX + size - 35, enemyX + size - 45, enemyX + size - 30, enemyX + size - 10, enemyX + size - 20, enemyX + size - 25, enemyX + size - 15, enemyX + size - 15];
		enemyTopArray = [enemyY + 30, enemyY + 5, enemyY, enemyY + 5, enemyY + 15, enemyY + 5, enemyY + 10, enemyY + 5, enemyY + 10];
		enemyBottomArray = [enemyY + size - 5, enemyY + size - 5, enemyY + size - 40, enemyY + size - 15, enemyY + size - 15, enemyY + size - 5, enemyY + size - 40, enemyY + size - 20, enemyY + size - 10];

		// determine enemy boxes
		enemyLeft  = enemyLeftArray[enemyNum];
		enemyRight = enemyRightArray[enemyNum];
		enemyTop = enemyTopArray[enemyNum];
		enemyBottom = enemyBottomArray[enemyNum];

		// update fairy Arrays
		fairyLeftArray = [fairyX + 5, fairyX + 5, fairyX + 5];
		fairyRightArray = [fairyX + fairySize, fairyX + fairySize - 5, fairyX + fairySize - 10];
		fairyTopArray = [fairyY, fairyY + 5, fairyY + 5];
		fairyBottomArray = [fairyY + fairySize, fairyY + fairySize - 10, fairyY + fairySize - 5];

		// determine fairy boxes
		fairyLeft  = fairyLeftArray[fairyNum];
		fairyRight = fairyRightArray[fairyNum];
		fairyTop = fairyTopArray[fairyNum];
		fairyBottom = fairyBottomArray[fairyNum];

		
		// main character collision lines
		if (true) {
			stroke(0,255,0);
			line(mainRight, mainTop, mainRight, mainBottom);
		}
		if (true) {
		    stroke(0,255,0);
		    line(mainLeft, mainTop, mainLeft, mainBottom);    
		}
		if (true) {
		    stroke(0,255,0);
		    line(mainLeft, mainBottom, mainRight, mainBottom);
		}
		if (true) {
		    stroke(0,255,0);
		    line(mainLeft, mainTop, mainRight, mainTop);
		}
		
		// enemy collision lines
		if (true) {
			stroke(0,255,0);
			line(enemyRight, enemyTop, enemyRight, enemyBottom);
		}
		if (true) {
		    stroke(0,255,0);
		    line(enemyLeft, enemyTop, enemyLeft, enemyBottom);    
		}
		if (true) {
		    stroke(0,255,0);
		    line(enemyLeft, enemyBottom, enemyRight, enemyBottom);
		}
		if (true) {
		    stroke(0,255,0);
		    line(enemyLeft, enemyTop, enemyRight, enemyTop);
		}

		// fairy collision lines
		if (true) {
			stroke(0,255,0);
			line(fairyRight, fairyTop, fairyRight, fairyBottom);
		}
		if (true) {
		    stroke(0,255,0);
		    line(fairyLeft, fairyTop, fairyLeft, fairyBottom);    
		}
		if (true) {
		    stroke(0,255,0);
		    line(fairyLeft, fairyBottom, fairyRight, fairyBottom);
		}
		if (true) {
		    stroke(0,255,0);
		    line(fairyLeft, fairyTop, fairyRight, fairyTop);
		}
		

		// detect collision between main character and enemy
	  	if (mainRight < enemyLeft || mainLeft > enemyRight || mainBottom < enemyTop || mainTop > enemyBottom) {
	  	}
	  	else {
	   	 	lives -= 1;

	   	 	pOuchNum = randomOuchNum;
	   	 	while (true) {
	   	 		randomOuchNum = Math.floor(random(0,3));
	   	 		if (randomOuchNum != pOuchNum) {
	   	 			break;
	   	 		}
	   	 	}
	   	 	if (randomOuchNum == 0) {
	   	 		ouchSound1.play();

	   	 	}
	   	 	else if (randomOuchNum == 1) {
	   	 		ouchSound2.play();
	   	 	}
	   	 	else {
	   	 		ouchSound3.play();
	   	 	}
	   	 	
	   	 	// generate a new enemy
	   	 	pEnemyNum = enemyNum;
			while (true) {
				enemyNum = Math.floor(random(0,9));
				if (enemyNum != pEnemyNum) {
					break;
				}
			}
			enemy = enemyNameArray[enemyNum];

			// the new enemy cannot be 100 pixels within the previous enemy 
			pEnemyX = enemyX;
			while (true) {
				enemyX = random(0, width - size);
				if (enemyX > pEnemyX && enemyX - pEnemyX > enemyDistance || enemyX < pEnemyX && pEnemyX - enemyX > enemyDistance) {
					break;
				}
			}
			enemyY = 20;

			// new random enemy speed based on level
			if (level == 1) {
				enemySpeed = Math.floor(random(enemySpeed1lower,enemySpeed1higher));
			}
			if (level == 2) {
				enemySpeed = Math.floor(random(enemySpeed2lower,enemySpeed2higher));
			}
			if (level == 3) {
				enemySpeed = Math.floor(random(enemySpeed3lower,enemySpeed3higher));
			}
	 	}

	 	// detect collision between main character and fairy
	  	if (mainRight < fairyLeft || mainLeft > fairyRight || mainBottom < fairyTop || mainTop > fairyBottom) {
	  	}
	  	else {
	   	 	pokemonCollected += 1;
	   	 	scoreSound.play();

	   	 	// generate a new fairy
	   	 	pFairyNum = fairyNum;
			while (true) {
				fairyNum = Math.floor(random(0,3));
				if (fairyNum != pFairyNum) {
					break;
				}
			}
			fairy = fairyNameArray[fairyNum];

			// the new fairy cannot be 100 pixels within the previous fairy 
			pFairyX = fairyX;
			while (true) {
				fairyX = random(0, width - fairySize);
				if (fairyX > pFairyX && fairyX - pFairyX > enemyDistance || fairyX < pFairyX && pFairyX - fairyX > enemyDistance) {
					break;
				}
			}
			fairyY = 20;

			// new random fairy speed based on level
			if (level == 1) {
				fairySpeed = Math.floor(random(fairySpeed1lower,fairySpeed1higher));
			}
			if (level == 2) {
				fairySpeed = Math.floor(random(fairySpeed2lower,fairySpeed2higher));
			}
			if (level == 3) {
				fairySpeed = Math.floor(random(fairySpeed3lower,fairySpeed3higher));
			}
	 	}

	 	// if lose all lives 
	 	if (lives <= 0) {
	 		// so that the other if statement will never be true
	 		pokemonCollected = 0;

	 		gameMusic.stop();
	 		scoreSound.stop();
			ouchSound1.stop();
			ouchSound2.stop();
			ouchSound3.stop();
			if (loseMusic.isPlaying() == false) {
				loseMusic.play();
			}
	 		background(255);
	 		image(loseScreen, 0, 0, 500, 350);
	 		image(lose1, 320, 360, 175, 120);
	 		//image(loseRain, 280, 350, 220, 150);
	 		fill(0);
	 		textSize(30);
	 		text("Charmander... Char.....", 5, 390);
	 		image(tearDrop, 85, 150, 90, 90);
	 	}	

	 	// if collected 10 fairy Pokemons
	 	if (pokemonCollected >= numberOfPokemonsToWin) {

	 		imageMode(CORNER);
	 		// so that the lose if statement will never execute
	 		lives = 5;
	 		if (winGameBoolean == false) {
	 			finalRangeData = rangeData;
	 		}
	 		winGameBoolean = true;
	 		
	 		// adjust charmander size if win
	 		mainSize += 8 * mainSizeDirection;

	 		if (finalRangeData <= 100) {
	 			if (mainSize >= 200) {
	 				mainSizeDirection *= -1;
	 			}
	 			else if (mainSize <= 50) {
	 				mainSizeDirection *= -1;
	 			}
	 		}	
	 		else {
	 			if (mainSize > 208) {
	 				mainSizeDirection *= -1;
	 			}
	 			else if (mainSize <= 100) {
	 				mainSizeDirection *= -1;
	 			}
	 		}

	 		gameMusic.stop();
	 		scoreSound.stop();
			ouchSound1.stop();
			ouchSound2.stop();
			ouchSound3.stop();
			if (winMusic.isPlaying() == false) {
				winMusic.play();
			}
			background(255, 255, 255);
			image(winScreenArray[winScreenIndex], 0, 0, 500, 350);
			winScreenIndex += 1;

			if (winScreenIndex == 6) {
				winScreenIndex = 0;
			}

			// draw the main character on the start screen
			// left, right, up, down of main character
			if (keyIsDown(65)) { // ASCII of 'A'
				mainX -= mainChracterSpeed;
			}
			if (keyIsDown(68)) { // ASCII of 'D'
				mainX += mainChracterSpeed;
			}
			if (keyIsDown(87)) { // ASCII of 'W'
				mainY -= mainChracterSpeed;
			}
			if (keyIsDown(83)) { // ASCII of 'S'
				mainY += mainChracterSpeed;
			}

			// constrain main character within the frame;
			if (mainX <= mainSize / 2) {
				mainX = mainSize / 2;
			}
			if (mainX >= width) {
				mainX = width;
			}
			if (mainY <= mainSize / 2) {
				mainY = mainSize / 2;
			}
			if (mainY >= height) {
				mainY = height;
			}

			// determine the direction of the main character
			if (mainX < pmainX) {
				main = mainFaceLeft;
			}
			else if (mainX > pmainX) {
				main = mainFaceRight;
			}

			fill(random(255), random(255), random(255));
			textSize(30);
			text("Victory!!!", 15, 400);
			text("You're the best Charmander!!!", 15, 440);

			// draw the main character
			imageMode(CENTER);
			image(main, mainX, mainY, mainSize, mainSize);

			pmainX = mainX;
		}
	}
}

/*function repositionCanvas() {	
	canvasX = int(windowWidth / 2 - 0.5 * width);
  	canvasY = int(windowHeight / 2 - 0.5 * height);

  	// adjust the position
  	theCanvas.position(canvasX, canvasY);
}

// this function runs every time the window is resized
function windowResized() {
  repositionCanvas();
}*/

function updateRange(clickedRange) {
  // grab the range data as an integer
  rangeData = int(clickedRange.value);
}



