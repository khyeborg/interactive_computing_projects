var pokemons = [];
var boxOpacity = 0;
var scaleFactor = 1.2;
var xConstrain = 20 * scaleFactor, zConstrain = 20 * scaleFactor;
//var numberOfPokemons = 12;

function setup() {
    frameRate(50);
    
    // construct the A-Frame world
    world = new World('VRScene');
    world.setFlying(true);
    // world.setUserPosition(0.8957223394348126, 0.991226997352836, 5.259820918756246);
    world.setUserPosition(0.5984239299672317, 2.3754209416864414, 8.413249113497988);
    // world.setUserPosition(0.2611772087318868, 9.198350431525817, 32.500726791711);

    /*var floor = new Plane({
        x: 0, y: 0.5, width: 100, height: 100, rotationX: -90, 
        red: 0, green: 0, blue: 255,
        side: "double"
    });
    world.add(floor);*/

    // instantiate Pokemon objects and add it to the pokemons array
    // pokemons.push(new Pokemon("diglett", 0, 1, 4));
    // pokemons.push(new Pokemon("poliwag", 1, 0.95, 4));
    // pokemons.push(new Pokemon("bulbasaur", 2, 0.9, 4));
    // pokemons.push(new Pokemon("magnemite", -1, 0.95, 4));
    // pokemons.push(new Pokemon("pikachu", 3, 0.91, 4));


    // instantiating 50 Pokemon objects at random positions
    for (var i = 0; i < 8; i++) {
        pokemons.push(new Pokemon("diglett", random(-10, 10), 1, random(-10, 10)));
        pokemons.push(new Pokemon("poliwag", random(-10, 10), 0.95, random(-10, 10)));
        pokemons.push(new Pokemon("bulbasaur", random(-10, 10), 0.9, random(-10, 10)));
        pokemons.push(new Pokemon("magnemite", random(-10, 10), random(1.5, 2), random(-10, 10)));
        pokemons.push(new Pokemon("pikachu", random(-10, 10), 0.91, random(-10, 10)));
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
        pokemons[i].move();
        var growAmount = pokemons[i].grow();
        pokemons[i].container.setScale(scaleFactor * growAmount, scaleFactor * growAmount, scaleFactor * growAmount);
    }
}
