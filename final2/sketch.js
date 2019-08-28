var world;
var treeArray = [], presentArray = [];

function setup() {
    
    // construct the A-Frame world
    world = new World('VRScene');
    //world.setFlying(true);

    var floor = new Plane({
        x: 0, y: -2, width: 150, height: 150, rotationX: -90, 
        //red: 0, green: 0, blue: 255,
        side: "double",
        asset: "floorAsset", repeatX: 50, repeatY: 50
    });
    world.add(floor);

    for (var i = 0; i < 50; i++) {
        treeArray.push(new Tree());
    }

    for (var i = 0; i < treeArray.length; i++) {
        world.add(treeArray[i].container);
    }

    for (var i = 0; i < 10; i++) {
        presentArray.push(new Present());
    }

    for (var i = 0; i < presentArray.length; i++) {
        world.add(presentArray[i].container);
    }
}

function draw() {
    if (mouseIsPressed) {
        world.moveUserForward(0.05);
    }

    for (var i = 0; i < treeArray.length; i++) {
        treeArray[i].container.setScale(10, 10, 10);
    }
}

function mouseIsPressed() {
}

class Tree {
    constructor() {
        this.container = new Container3D({x: random(-75, 75), y: -2, z: random(-75, 75)});

        this.trunkHeight = random(1, 3);

        this.trunk = new Box({
          x: 0 , y: 0, z: 0,
          width: 0.1, height: this.trunkHeight, depth: 0.1,
          red: 160, green: 19, blue: 19,
        });

        this.cone = new Cone ({
            x: 0 , y: this.trunkHeight, z: 0,
            height: this.trunkHeight, radiusBottom: 0.3, radiusTop: 0,
            red: 0, green: 255, blue: 0
        });

        // add trunk and cone
        this.container.addChild(this.trunk);
        this.container.addChild(this.cone);
    }
}

class Present {
    constructor() {
        this.container = new Container3D({
            x: random(-75, 75), y: -2, z: random(-75, 75)
        });

        this.present = new Box({
            x: 0 , y: 1.5, z: 0,
            width: 3, height: 3, depth: 3,
            asset: "presentAsset",
            red: random(255), green: random(255), blue: random(255),
            clickFunction: function(theBox) {
                // update position
                // the box is only moving with respect to the cylinder, not the world
                theBox.setPosition(random(-3, 3), 1.5, random(-3, 3));
            }
        });

        // add trunk
        this.container.addChild(this.present);
    }
}
















