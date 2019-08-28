
// create a variable for A-Frame world
var world;

// references to our markers (which are defined in the HTML document)
var zbMarker;

// a static container that represents some graphics that we always want visible to our users
var staticContainer1;
var staticContainer2;

// a ball indicator
var ball;

// cooldown indicator
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

  // add the ball to the marker
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

      // convert to local coordinates within staticContainer1
      var p = new THREE.Vector3();
      p.setFromMatrixPosition( ball.tag.object3D.matrixWorld );
      p = staticContainer1.tag.object3D.worldToLocal(p);

      var temp = new Sphere({
        x: p.x, y: p.y, z: p.z,
        radius: 0.05,
        red: random(255), green: random(255), blue: random(255)
      })
      staticContainer1.addChild( temp );

      // indicate that we are in 'cooldown' mode
      cooldown = 60;
    }

    // staticContainer2
    if (cooldown <= 0 && dist(markerPosition.x, markerPosition.y, s2Position.x, s2Position.y) < 1) {

      // convert to local coordinates within staticContainer2
      var p = new THREE.Vector3();
      p.setFromMatrixPosition( ball.tag.object3D.matrixWorld );
      p = staticContainer2.tag.object3D.worldToLocal(p);

      var temp = new Box({
        x: p.x, y: p.y, z: p.z,
        width: 0.1, height: 0.1, depth: 0.1,
        red: random(255), green: random(255), blue: random(255)
      })
      staticContainer2.addChild( temp );

      // indicate that we are in 'cooldown' mode
      cooldown = 60;
    }

  }

  staticContainer1.spinY(1);
  staticContainer2.spinY(1);

  // process cooldown counter
  cooldown--;
  if (cooldown < 0) {
    cooldown = 0;
  }
}
