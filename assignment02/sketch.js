var layout1;
var layout2;
var layout_loaded;
var layout_change = 0;
var object;
var pokeball;
var border_width = 10;
var paddleX;
var paddleY;
var paddle_width = 120;
var ballX;
var ballY;
var ball_speedX;
var ball_speedY;
var ball_diameter = 25;
var speed_change = 0.05;
var speed_limit = 8;
var pballX;
var ball_escapes = true;
var r;
var g;
var b;
var object_size = 100;
var objectX;
var objectY;
var d;
var score = 0;
var misses = 0;
var win;

// sounds
var boing;
var pika;
var miss_sound;
var win_song;

function preload() {
	layout1 = loadImage("images/background.jpg");
	layout2 = loadImage("images/forest.png");
	pokeball = loadImage("images/pokeball.png");
	object = loadImage("images/pikachu.png");
	win = loadImage("images/win3.png");
	win2 = loadImage("images/win4.png");

	// sounds
	boing = loadSound("sounds/boing.mp3");
	pika = loadSound("sounds/pika.mp3");
	miss_sound = loadSound("sounds/miss.mp3");
	win_song = loadSound("sounds/pokemon_theme.mp3");
}

function setup() {
	width = 500;
	height = 500;
	createCanvas(width, height);
	noStroke();

	paddleX = 190;
	paddleY = height - border_width;

	ballX = width / 2;
	ballY = height / 2;

	ball_speedX = 0;
	ball_speedY = 0;
	
	r = random(255);
	g = random(255);
	b = random(255);

	while (true) {
		objectX = random(border_width + object_size / 2 + 10, width - border_width - object_size / 2 - 10);
		objectY = random(border_width + object_size / 2 + 10, height - object_size / 2 - 200);

		if (objectX <= width / 2 - object_size / 2 || objectX >= width / 2 - object_size && objectY <= height / 2 - object_size / 2 || objectY >= height / 2 + object_size / 2) {
			break;
		}
	}

	layout_loaded = layout1;

	imageMode(CENTER);
}

function draw() {

	// background image
	image(layout_loaded, width / 2, height / 2, width, height);

	// object image
	image(object, objectX, objectY, object_size, object_size);
  
	// visual borders
	fill(r, g, b);
	rect(0, 0, border_width, 500);
	rect(0, 0, 500, border_width);
	rect(width - border_width, 0, border_width, 500);

	// paddle
	rect(paddleX, paddleY, paddle_width, border_width);

	// moving the paddle left and right
	if (keyIsDown(LEFT_ARROW)) { // ASCII of 'A'
		paddleX -= 3;
	}

	if (keyIsDown(RIGHT_ARROW)) { // ASCII of 'D'
		paddleX += 3;
	}

	// make sure the paddle stays within the borders
	if (paddleX <= border_width) {
		paddleX = border_width; 
	}
	if (paddleX >= width - paddle_width - border_width) {
		paddleX = width - paddle_width - border_width;
	}

	// if the ball hits the borders
	if (ballX >= width - border_width - ball_diameter / 2 || ballX <= border_width + ball_diameter / 2) {
		ball_speedX *= -(1 + speed_change);
		ball_speedX += random(-0.1, 0.1);
		ball_speedY += random(-0.1, 0.1);
		r = random(255);
		g = random(255);
		b = random(255);
		boing.play();
	}
	if (ballY <= border_width + ball_diameter / 2) {
		ball_speedY *= -(1 + speed_change);
		ball_speedX += random(-0.1, 0.1);
		ball_speedY += random(-0.1, 0.1);
		r = random(255);
		g = random(255);
		b = random(255);
		boing.play();
	}

	// if the ball hits the paddle
	if (ballY >= height - border_width - ball_diameter / 2) {
		if (ballX >= paddleX - ball_diameter / 2 && ballX <= paddleX + paddle_width + ball_diameter / 2) {
			ballY = height - border_width - ball_diameter / 2;
			// if the ball hits the left side of the paddle 
			if (ballX <= paddleX + paddle_width / 2) {
				// if the ball came from the left side
				if (ballX >= pballX) {
					ball_speedX *= -(1 + speed_change);
				}
				// if the ball came from the right side
				else {
					ball_speedX *= 1 + speed_change;
				}
			}
			// if the ball hits the right side of the paddle 
			else {
				// if the ball came from the left side
				if (ballX >= pballX) {
					ball_speedX *= 1 + speed_change;
				}
				// if the ball came from the right side
				else {
					ball_speedX *= -(1 + speed_change);
				}
			}
			ball_speedY *= -(1 + speed_change);
			r = random(255);
			g = random(255);
			b = random(255);
			boing.play();
		}
	}
	
	// if the ball escapes
	if (ballY >= height + ball_diameter / 2) {
		// ball repositions itself in the middle
		ballX = width / 2;
		ballY = height / 2;
		ball_speedX = 0;
		ball_speedY = 0;
		ball_escapes = true;

		r = random(255);
		g = random(255);
		b = random(255);

		misses += 1;
		miss_sound.play();

		if (layout_change % 2 == 0) {
		layout_loaded = layout2;
		}
		else {
			layout_loaded = layout1;
		}
		layout_change += 1;
	}

	// distance between the ball and the object
	d = dist(objectX, objectY, ballX, ballY);

	// if the ball collides with the object
	if (d <= object_size / 2 + ball_diameter / 2) {
		score += 1;
		pika.play();
		while (true) {
			objectX = random(border_width + object_size / 2 + 10, width - border_width - object_size / 2 - 10);
			objectY = random(border_width + object_size / 2 + 10, height - object_size / 2 - 200);

			if (objectX <= width / 2 - object_size / 2 || objectX >= width / 2 - object_size && objectY <= height / 2 - object_size / 2 || objectY >= height / 2 + object_size / 2) {
				break;
			}
		}
	}

	// the ball
	image(pokeball, ballX, ballY, ball_diameter, ball_diameter);
	pballX = ballX;
	// introduce a speed limit
	if (ball_speedX > speed_limit) {
		ball_speedX = speed_limit;
	}
	if (ball_speedX < -speed_limit) {
		ball_speedX = -speed_limit;
	}
	if (ball_speedY > speed_limit) {
		ball_speedY = speed_limit;
	}
	if (ball_speedY < -speed_limit) {
		ball_speedY = -speed_limit;
	}
	ballX += ball_speedX;
	ballY += ball_speedY;

	fill(255);
	text("Pikachus caught: " + score, 40, 50);
	text("Misses : " + misses, 40, 75);

	if (score >= 10) {
		boing.stop();
		pika.stop();
		miss_sound.stop();
		if (win_song.isPlaying() == false) {
			win_song.play();
		}
		background(255);
		image(win, width / 2, height / 4, 490, 315);
		image(win2, width / 2, height - 150, 490, 240);
		fill(0);
		textSize(25);
		textAlign(CENTER);
		text("You win! Train your Pikachus wisely! :D", width / 2, height - 50);
	}
}

function mousePressed() {
	if (ball_escapes == true) {
		ball_speedX = random(-6, 6);
		ball_speedY = random(-6, 6);

		while (ball_speedX >= -1 && ball_speedX <= 1) {
			ball_speedX = random(-6, 6);
		}
		while (ball_speedY >= -1 && ball_speedY <= 1) {
			ball_speedY = random(-6, 6);
		}

		ball_escapes = false;
	}
}