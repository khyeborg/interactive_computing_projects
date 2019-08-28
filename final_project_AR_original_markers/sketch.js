// world variable
var world; 

// pokemon variables
var poliwagShadow = [83, 131, 197], diglettShadow = [0, 0, 0], bulbasaurShadow = [116, 178, 108], magnemiteShadow = [0, 0, 0], pikachuShadow = [0, 0, 0], slowpokeShadow = [0, 0, 0];
var pokemons = []; 

// marker variables
var pikachuMarker, bulbasaurMarker, poliwagMarker, magnemiteMarker, diglettMarker, slowpokeMarker, zbMarker;
var pokemonMarkers = [], pokemonNames = ["poliwag", "diglett", "bulbasaur", "magnemite","pikachu", "slowpoke"];
var poliwag, diglett, bulbasaur, magnemite, pikachu, slowpoke;

// 3D model variables
var egg, eggScale = 0.005;

// random setup variables
var temp, cooldown = 0;
var boxOpacity = 0; drawShadow = false;

// game variables
var turnAmount = 0.8;
var maximumGrowth = 2, growthRate = 0.01;
var startRotation = 360;
var scaleFactor = 0.1;
var xConstrain = 6 * scaleFactor, zConstrain = 10 * scaleFactor; // screen is about 5 x-axis wide 
var shinyChanceNum = 50;
var setCoolDown = 60;

// lay babies variables
// var layBabiesTimeLower = 200, layBabiesTimeUpper = 300;
var layBabiesTimeLower = 1000, layBabiesTimeUpper = 2000;
var pregnantTime = 500;

function setup() {
    frameRate(50);
    
    // construct the A-Frame world
    world = new World('ARScene');

    var floor = new Plane({
        x: 0, y: 0, width: 100, height: 100, rotationX: -90, // how to rotate the floor to make it work the way we want it to?
        asset: "floor_color",
        side: "double"
    });

    var floorCube = new Plane({
        x: 0, y: 0, width: 100, height: 0.1, depth: 100, rotationX: -90, 
        asset: "floor_color"
    });

    // grab a reference to our marker in the HTML document
    poliwagMarker   = world.getMarker("poliwagMarker");
    diglettMarker   = world.getMarker("diglettMarker");
    bulbasaurMarker = world.getMarker("bulbasaurMarker");
    magnemiteMarker = world.getMarker("magnemiteMarker");
    pikachuMarker   = world.getMarker("pikachuMarker");
    zbMarker        = world.getMarker("zbMarker");
    pokemonMarkers.push(poliwagMarker); pokemonMarkers.push(diglettMarker); pokemonMarkers.push(bulbasaurMarker); pokemonMarkers.push(magnemiteMarker); pokemonMarkers.push(pikachuMarker);

    // instantiate object and add to marker
    poliwag   = new MarkerPokemon("poliwag",   0, 0, 0, -90);      
    diglett   = new MarkerPokemon("diglett",   0, 0, 0, -90);   
    bulbasaur = new MarkerPokemon("bulbasaur", 0, 0, 0, -90); 
    magnemite = new MarkerPokemon("magnemite", 0, 0, 0, -90);  
    pikachu   = new MarkerPokemon("pikachu",   0, 0, 0, -90);  
    poliwagMarker.addChild(poliwag.container);
    diglettMarker.addChild(diglett.container);
    bulbasaurMarker.addChild(bulbasaur.container);
    magnemiteMarker.addChild(magnemite.container);
    pikachuMarker.addChild(pikachu.container);
    zbMarker.addChild(floor);

    // create a static container that will always be visible to the user even if marker is not being detected
    staticContainer = new Container3D({
        x: 0, y: 0, z: 0 // should the x, y, and z coordinates be based on the floor tag then? 
    });

    // add the static container to the world
    world.scene.appendChild(staticContainer.tag); // what is tag? 
}

function draw() {
    // mova and animate all Pokemons
    for (var i = 0; i < pokemons.length; i++) {
        pokemons[i].animate();
        pokemons[i].move();
        pokemons[i].layBabies();

        // pregant egg
        if (pokemons[i].pregnant == true) {pokemons[i].containerArray[pokemons[i].containerArray.length - 1].show();}
        else {pokemons[i].containerArray[pokemons[i].containerArray.length - 1].hide();}

        pokemons[i].growAmount = pokemons[i].grow();
        pokemons[i].container.setScale(scaleFactor * pokemons[i].growAmount, scaleFactor * pokemons[i].growAmount, scaleFactor * pokemons[i].growAmount);
    }

    // for loop to iterate through all markers
    for (var i = 0; i < pokemonMarkers.length; i++) {
        if (pokemonMarkers[i].isVisible()) {
            // which static container are we closest to? (I don't think we need these)
            var markerPosition = new THREE.Vector3().setFromMatrixPosition(pikachuMarker.tag.object3D.matrixWorld);
            var s1Position = new THREE.Vector3().setFromMatrixPosition(staticContainer.tag.object3D.matrixWorld);

            // staticContainer
            if (cooldown <= 0) {

              // convert to local coordinates within staticContainer
              var p = new THREE.Vector3();
              p.setFromMatrixPosition(pikachu.container.tag.object3D.matrixWorld); // flying problem? 
              p = staticContainer.tag.object3D.worldToLocal(p);

              temp = new Pokemon(pokemonNames[i], pikachuShadow, random(-xConstrain, xConstrain), random(-2.5, 2.5), -zConstrain, Math.floor(random(1, 101)));
              staticContainer.addChild(temp.container);
              pokemons.push(temp);

              // indicate that we are in 'cooldown' mode
              cooldown = setCoolDown;
            }

            // process cooldown counter
            cooldown--;
            if (cooldown < 0) {cooldown = 0;}
        }
    }

    // the floor marker
    if (zbMarker.isVisible()) {

    }
}
