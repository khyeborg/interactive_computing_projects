var grid, cursor;

function preload() {
	grid = loadImage("grid.png");
	cursor = loadImage("cursor.png");
}

function setup() {
  createCanvas(1000, 1000);
  frameRate(40);
  imageMode(CENTER);
  // textFont('Calibri');
  textSize(25);

  image(grid, width / 2 + 10, height / 2, 800, 800);
  text("(0,0)", 88, 88);
  text("(100,0)", 280, 88);
  text("(200,0)", 480, 88);
  text("(300,0)", 680, 88);
  text("(400,0)", 870, 88);

  text("(0,100)", 20, 307);
  text("(0,200)", 20, 507);
  text("(0,300)", 20, 707);
  text("(0,400)", 20, 902);

  image(cursor, 867, 590, 80, 80);
}



