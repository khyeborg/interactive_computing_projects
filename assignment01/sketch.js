var wy = 0, cy = 0, py = 0;
var wd = 1, cd = -1, pd = 1;
var rate = 1.3, limit = 13;
var circles = [];
var circleSizeLimit = 60, initialIntensity = 120, intensityDecreaseRate = 0.8;
var circleCounter = 0, circleCounterRate = 2;

function setup() {
  createCanvas(700, 450);
  frameRate(40);
}

function drawW() {
    // wingglytuff
    fill(250, 220, 228);
    rect(20, 125 + wy, 200, 200, 20);

    // wingglytuff's mouth
    fill(249, 244, 248);
    rect(45, 225 + wy, 150, 100);
    fill(139, 63, 62);
    rect(90, 235 + wy, 60, 25);
    fill(234, 140, 154);
    rect(100, 245 + wy, 40, 15);

    // wingglytuff's eyes
    fill(255);
    rect(35, 170 + wy, 50, 60);
    rect(155, 170 + wy, 50, 60)
    fill(28, 122, 147);
    rect(50, 180 + wy, 35, 40);
    rect(155, 180 + wy, 35, 40);
    fill(255);
    rect(65, 185 + wy, 15, 15);
    rect(160, 185 + wy, 15, 15);
    fill(122, 165, 182);
    rect(60, 212 + wy, 20, 8);
    rect(160, 212 + wy, 20, 8);

    // wingglytuff's forehead
    fill(230, 197, 204);
    rect(75, 145 + wy, 85, 10, 20);
    fill(250, 220, 228);
    rect(85, 139 + wy, 65, 10, 10);
    fill(230, 197, 204);
    rect(75, 125 + wy, 10, 23);
    rect(150, 125 + wy, 10, 23);
}

function drawC() {
    // charmander
    fill(247, 186, 133);
    rect(250, 125 + cy, 200, 200, 20);

    // charmander's eyes
    fill(29, 45, 49); 
    rect(275, 150 + cy, 35, 65);
    rect(390, 150 + cy, 35, 65);
    fill(60, 109, 126);
    rect(275, 195 + cy, 35, 20)
    rect(390, 195 + cy, 35, 20)
    fill(26, 33, 41);
    rect(285, 165 + cy, 15, 40);
    rect(400, 165 + cy, 15, 40);
    fill(255);
    rect(295, 155 + cy, 10, 20);
    rect(395, 155 + cy, 10, 20);

    // charmander's mouth
    fill(160, 111, 141);
    rect(275, 245 + cy, 150, 55);
    fill(201, 153, 191);
    rect(290, 270 + cy, 120, 30);
    fill(255);
    rect(300, 285 + cy, 15, 15);
    rect(385, 285 + cy, 15, 15);
    rect(285, 245 + cy, 18, 18);
    rect(397, 245 + cy, 18, 18);

    // charmander's nose 
    fill(206, 152, 116);
    rect(340, 225 + cy, 5, 12)
    rect(355, 225 + cy, 5, 12)
}

function drawP() {
    // poliwag
    fill(102, 148, 207);
    rect(480, 125 + py, 200, 200, 20);

    // poliwag's tummy
    fill(250, 250, 250);
    rect(500, 215 + py, 160, 110, 10);
    fill(54, 40, 40);
    rect(520, 230 + py, 15, 95);
    rect(525, 230 + py, 100, 15);
    rect(625, 230 + py, 15, 95);
    rect(550, 310 + py, 80, 15); 
    rect(550, 265 + py, 15, 60);
    rect(550, 260 + py, 60, 15);
    rect(595, 265 + py, 15, 35);
    rect(580, 285 + py, 30, 15);

    // poliwag's eyes
    fill(255);
    rect(500, 145 + py, 50, 50);
    rect(610, 145 + py, 50, 50);
    fill(0);
    rect(510, 145 + py, 40, 40);
    rect(610, 145 + py, 40, 40);
    fill(255);
    rect(528, 153 + py, 15, 15);
    rect(617, 153 + py, 15, 15);

    // poliwag's mouth
    fill(241, 200, 217);
    rect(560, 195 + py, 40, 30);
    fill(78, 46, 67);
    rect(570, 205 + py, 20, 10);
}

function draw() {

    background(255);
    circleCounter++;

    // background circles
    if (circleCounter % circleCounterRate == 0) {
        circles.push(new Circle(random(width), random(height), random(circleSizeLimit)));
    }

    for (var i = 0; i < circles.length; i++) {
        circles[i].drawCircle(i);
    }
    
    // manipulate variables
    wy += rate * wd;
    cy += rate * cd;
    py += rate * pd;

    if (wy <= -limit || wy >= limit) {wd *= -1;}
    if (cy <= -limit || cy >= limit) {cd *= -1;}
    if (py <= -limit || py >= limit) {pd *= -1;}

    // no outline
    noStroke();

    drawW();
    drawC();
    drawP();
}

class Circle {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.intensity = initialIntensity;
    }

    drawCircle(i) {
        fill(this.r, this.g, this.b, this.intensity);
        ellipse(this.x, this.y, this.size, this.size);

        this.intensity -= intensityDecreaseRate;

        if (this.intensity < 0) {
            circles.splice(i, 1);
        }
    }
}















