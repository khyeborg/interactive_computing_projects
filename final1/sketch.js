var backdrop, tree, candyCane;
var ornamentArray = [], particlesArray = [];
var disperseValue = 3;

var explode = false;

function preload() {
    backdrop = loadImage("forest.jpg");
    tree = loadImage("tree.png");
    candyCane = loadImage("candy_cane.png");
}

function setup() {
    createCanvas(800, 600);
    noCursor();
    noStroke();
}

function draw() {
    imageMode(CORNER);
    image(backdrop, 0, 0); 
    imageMode(CENTER);
    image(tree, width / 2, height / 2);

    for (var i = 0; i < ornamentArray.length; i++) {
        ornamentArray[i].display();
    }

    for (var i = 0; i < ornamentArray.length; i++) {
        if (ornamentArray[i].alpha == 0) {
            ornamentArray.splice(i, 1);
        }
    }

    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].display();
    }

    for (var i = 0; i < particlesArray.length; i++) {
        if (particlesArray[i].alpha <= 0) {
            particlesArray.splice(i, 1);
        }
    }

    // draw the cursor at mouseX and mouseY
    image(candyCane, mouseX, mouseY);
}

function mouseClicked() {
    for (var i = 0; i < ornamentArray.length; i++) {
        if (dist(mouseX, mouseY, ornamentArray[i].x, ornamentArray[i].y) < ornamentArray[i].diameter / 2) {
            ornamentArray[i].explode();
            explode = true;
        }
    }

    if (explode == false) {
        ornamentArray.push(new Ornament(mouseX, mouseY));
    }
    else {
        explode = false;
    }
}

class Ornament {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.aplha = 255;
        this.diameter = random(30, 60);
        //this.diameter = random(50, 100);
    }

    display() {
        fill(this.r, this.g, this.b, this.alpha);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    explode() {
        this.alpha = 0;
        for (var j = 0; j < 30; j++) {
            particlesArray.push(new Particles(this.x, this.y, this.r, this.g, this.b));
        }
    }
}

class Particles {
    constructor(x, y, r, g, b) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = 255;
        this.dx = random(-disperseValue, disperseValue);
        this.dy = random(-disperseValue, disperseValue);
        this.diameter = random(5, 10);

        this.moveX = this.dx;
        this.moveY = this.dy;
    }

    display() {
        fill(this.r, this.g, this.b, this.alpha);
        ellipse(this.x + this.moveX, this.y + this.moveY, this.diameter, this.diameter);
        this.moveX += this.dx;
        this.moveY += this.dy;
        this.alpha -= 20;
    }
}














