var world;
var pokemons = [];
var boxOpacity = 0;
var scaleFactor = 1.2;
var xConstrain = 20 * scaleFactor, zConstrain = 20 * scaleFactor; 
var startRotation = 0;
var turnAmount = 0.8;
var shinyChanceNum = 1;
var poliwagShadow = [83, 131, 197], diglettShadow = [0, 0, 0], bulbasaurShadow = [116, 178, 108], magnemiteShadow = [0, 0, 0], pikachuShadow = [0, 0, 0], slowpokeShadow = [0, 0, 0];
var drawShadow = false;
//var numberOfPokemons = 12;

// 3D models
var egg, eggScale = 0.005;

// lay babies
// var layBabiesTimeLower = 500, layBabiesTimeUpper = 600;
var layBabiesTimeLower = 1000, layBabiesTimeUpper = 2000;
var pregnantTime = 500;

function setup() {
    frameRate(50);
    
    // construct the A-Frame world
    world = new World('VRScene');
    world.setFlying(true);
    world.setUserPosition(3.4676121223873246, 0.6458707955548807, 7.334448788186884);
    // world.setUserPosition(0.5984239299672317, 2.3754209416864414, 8.413249113497988);
    // world.setUserPosition(0.2611772087318868, 9.198350431525817, 32.500726791711);

    var floor = new Plane({
        x: 0, y: 0, width: 100, height: 100, rotationX: -90, 
        //red: 0, green: 0, blue: 255,
        asset: "floor_color",
        side: "double"
    });
    // world.add(floor);

    // // instantiate Pokemon objects and add it to the pokemons array
    pokemons.push(new Pokemon("magnemite", magnemiteShadow, -2, 0.5, 3.7, 100));
    pokemons.push(new Pokemon("magnemite", magnemiteShadow, -1, 0.5, 3.7, 1));
    pokemons.push(new Pokemon("diglett", diglettShadow, 0, 0.35, 3.7, 100));
    pokemons.push(new Pokemon("diglett", diglettShadow, 1, 0.35, 3.7, 1));
    pokemons.push(new Pokemon("poliwag", poliwagShadow, 2, 0.3, 3.7, 100));
    pokemons.push(new Pokemon("poliwag", poliwagShadow, 3, 0.3, 3.7, 1));
    pokemons.push(new Pokemon("bulbasaur", bulbasaurShadow, 4, 0.25, 4, 100));
    pokemons.push(new Pokemon("bulbasaur", bulbasaurShadow, 5, 0.25, 4, 1));
    pokemons.push(new Pokemon("pikachu", pikachuShadow, 6, 0.295, 4, 100));
    pokemons.push(new Pokemon("pikachu", pikachuShadow, 7, 0.295, 4, 1));
    pokemons.push(new Pokemon("slowpoke", slowpokeShadow, 8, 0.15, 4, 100));
    pokemons.push(new Pokemon("slowpoke", slowpokeShadow, 9, 0.15, 4, 1));


    // instantiating 50 Pokemon objects at random positions
    for (var i = 0; i < 10; i++) {
        // pokemons.push(new Pokemon("poliwag", poliwagShadow, random(-xConstrain, xConstrain), 0.3, random(-zConstrain, zConstrain), Math.floor(random(1, 101))));
        // pokemons.push(new Pokemon("diglett", diglettShadow, random(-xConstrain, xConstrain), 0.35, random(-zConstrain, zConstrain), Math.floor(random(1, 101))));
        // pokemons.push(new Pokemon("bulbasaur", bulbasaurShadow, random(-xConstrain, xConstrain), 0.25, random(-zConstrain, zConstrain), Math.floor(random(1, 101))));
        // pokemons.push(new Pokemon("magnemite", magnemiteShadow, random(-xConstrain, xConstrain), random(0.5, 1), random(-zConstrain, zConstrain), Math.floor(random(1, 101))));
        // pokemons.push(new Pokemon("pikachu", pikachuShadow, random(-xConstrain, xConstrain), 0.295, random(-zConstrain, zConstrain), Math.floor(random(1, 101))));
        // pokemons.push(new Pokemon("slowpoke", slowpokeShadow, random(-xConstrain, xConstrain), 0.15, random(-zConstrain, zConstrain), Math.floor(random(1, 101))));
    }

    // add all Pokemon objects to our world
    for (var i = 0; i < pokemons.length; i++) {
        world.add(pokemons[i].container);
    }
}

function draw() {
    // mova and animate all Pokemons
    for (var i = 0; i < pokemons.length; i++) {
        pokemons[i].animate();
        // pokemons[i].move();
        // pokemons[i].layBabies();

        // // pregant egg
        // if (pokemons[i].pregnant == true) {pokemons[i].containerArray[pokemons[i].containerArray.length - 1].show();}
        // else {pokemons[i].containerArray[pokemons[i].containerArray.length - 1].hide();}

        // pokemons[i].growAmount = pokemons[i].grow();
        // pokemons[i].container.setScale(scaleFactor * pokemons[i].growAmount, scaleFactor * pokemons[i].growAmount, scaleFactor * pokemons[i].growAmount);
    }
}
