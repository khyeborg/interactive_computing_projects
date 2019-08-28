// artwork for the game
var artFrogLeft, artFrogRight, artFrogUp, artFrogDown;
var artBackground;
var artCar1, artCar2, artCar3;
var car1, car2, car3;
var player;

function preload() {
  // load in all of our graphics
  artBackground = loadImage("images/background.png");
  artFrogUp = loadImage("images/frog_up.png");
  artFrogDown = loadImage("images/frog_down.png");
  artFrogLeft = loadImage("images/frog_left.png");
  artFrogRight = loadImage("images/frog_right.png");
  artCar1 = loadImage("images/car_1.png");
  artCar2 = loadImage("images/car_2.png");
  artCar3 = loadImage("images/car_3.png");
}

function setup() {
  createCanvas(500,500);
  car1 = new Car(0, 400, 1, artCar1);
  car2 = new Car(0, 340, 5, artCar2);
  car3 = new Car(0, 290, 10, artCar3);
  player = new Frog(250, 400);
}

function draw() {
  // draw the background of our world
  image(artBackground, 0, 0);

  car1.display();
  car2.display();
  car3.display();

  player.display();
  player.move();
}

class Car {

  constructor(x, y, speed, graphic) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.graphic = graphic;
  }

  display() {
    if (dist(this.x, this.y, player.x, player.y) < 25) {
      player.reset();
    }

    this.x += this.speed;
    if (this.x > width) {
      this.x = 0;
    }
    image(this.graphic, this.x, this.y);
  }
}

class Frog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.artwork = artFrogUp;
  }

  display() {
    image(this.artwork, this.x, this.y);
  }

  move() {
    if (keyIsDown(65)) {
      this.x -= 2;
      this.artwork = artFrogLeft;
    }

    if (keyIsDown(68)) {
      this.x += 2;
      this.artwork = artFrogRight;
    }

    if (keyIsDown(87)) {
      this.y -= 2;
      this.artwork = artFrogUp;
    }

    if (keyIsDown(83)) {
      this.y += 2;
      this.artwork = artFrogDown;
    }
  }

  reset() {
    this.x = 250;
    this.y = 400;
  }
}




















