
// create a variable for A-Frame world
var world;

// references to our markers (which are defined in the HTML document)
var zbMarker;

// a static container that represents some graphics that we always want visible to our users
var staticContainer1;
var staticContainer2;

// a ball that can be passed between containers
var ball;

// a cooldown variable to prevent the ball from moving back and forth between containers
var cooldown = 0;

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  zbMarker = world.getMarker("zb");

  // create our ball
  ball = new Sphere({
    x:0, y:0.5, z:0,
    red: 255, green:0 , blue: 0,
    radius: 0.25
  });

  // add the ball to the marker initially
  zbMarker.addChild(ball);


  // create two static containers that will always be visible to the user even if not marker is being detected
  staticContainer1 = new Container3D({
    x:-2, y:0, z: -5
  });
  staticContainer2 = new Container3D({
    x:2, y:0, z: -5
  });


  // add some geometry to the static container
  staticContainer1.addChild(new Box({
    x:0, y:0, z:0,
    red:0, green:255, blue:0,
    opacity: 0.5,
    width: 0.5, height: 0.5, depth: 0.5
  }));

  // add some geometry to the static container
  staticContainer2.addChild(new Box({
    x:0, y:0, z:0,
    red:0, green:0, blue:255,
    opacity: 0.5,
    width: 0.5, height: 0.5, depth: 0.5
  }));


  // add the static container to the world
  world.scene.appendChild( staticContainer1.tag );
  world.scene.appendChild( staticContainer2.tag );
}


function draw() {

  if (zbMarker.isVisible()) {

    // which static container are we closest to?
    var markerPosition = new THREE.Vector3().setFromMatrixPosition( zbMarker.tag.object3D.matrixWorld );
    var s1Position = new THREE.Vector3().setFromMatrixPosition( staticContainer1.tag.object3D.matrixWorld );
    var s2Position = new THREE.Vector3().setFromMatrixPosition( staticContainer2.tag.object3D.matrixWorld );

    // staticContainer1
    if (cooldown <= 0 && dist(markerPosition.x, markerPosition.y, s1Position.x, s1Position.y) < 1) {

      // where is the ball?
      if (ball.tag.parentElement === zbMarker.tag) {
        console.log("Ball is currently attached to the marker, moving to container1");
        ball.tag.flushToDOM();
        zbMarker.removeChild ( ball );
        staticContainer1.addChild( ball );
      }
      else if (ball.tag.parentElement === staticContainer1.tag) {
        console.log("Ball is currently attached to container1, moving to marker");
        ball.tag.flushToDOM();
        staticContainer1.removeChild ( ball );
        zbMarker.addChild( ball );
      }

      // indicate that we are in 'cooldown' mode to prevent the ball from
      // moving back and forth between containers
      cooldown = 60;
    }

    // staticContainer2
    if (cooldown <= 0 && dist(markerPosition.x, markerPosition.y, s2Position.x, s2Position.y) < 1) {

      // where is the ball?
      if (ball.tag.parentElement === zbMarker.tag) {
        console.log("Ball is currently attached to the marker, moving to container2");
        ball.tag.flushToDOM();
        zbMarker.removeChild ( ball );
        staticContainer2.addChild( ball );
      }
      else if (ball.tag.parentElement === staticContainer2.tag) {
        console.log("Ball is currently attached to container2, moving to marker");
        ball.tag.flushToDOM();
        staticContainer2.removeChild ( ball );
        zbMarker.addChild( ball );
      }

      // indicate that we are in 'cooldown' mode to prevent the ball from
      // moving back and forth between containers
      cooldown = 60;
    }

  }

  // process cooldown counter
  cooldown--;
  if (cooldown < 0) {
    cooldown = 0;
  }
}
