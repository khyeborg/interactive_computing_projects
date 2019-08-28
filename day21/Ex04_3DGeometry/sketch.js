// create a variable to hold our world object
var world;

// create a variable to hold our marker
var markerHiro;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left to right, z-xaxis runs top to bottom, y-axis runs up/down (through the marker)

  // add in a demo of a few different 3D geometry type
  var box = new Box({
    x: -0.5,
    y: 0.1,
    z: -0.5,
    width: 0.2,
    height: 0.2,
    depth: 0.2,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(box);

  var plane = new Plane({
    x: -0.5,
    y: 0.1,
    z: 0,
    width: 0.2,
    height: 0.2,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(plane);

  var sphere = new Sphere({
    x: -0.5,
    y: 0.1,
    z: 0.5,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(sphere);

  var circle = new Circle({
    x: 0,
    y: 0.1,
    z: -0.5,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(circle);

  var cone = new Cone({
    x: 0,
    y: 0.1,
    z: 0,
    radiusBottom: 0.1,
    radiusTop: 0.0,
    height: 0.2,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(cone);

  var cylinder = new Cylinder({
    x: 0,
    y: 0.1,
    z: 0.5,
    radius: 0.1,
    height: 0.2,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(cylinder);

  var ring = new Ring({
    x: 0.5,
    y: 0.1,
    z: -0.5,
    radiusOuter: 0.1,
    radiusInner: 0.05,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(ring);

  var dodecahedron = new Dodecahedron({
    x: 1,
    y: 0.1,
    z: -0.5,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(dodecahedron);

  var octahedron = new Octahedron({
    x: 1,
    y: 0.1,
    z: 0,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(octahedron);

  var tetrahedron = new Tetrahedron({
    x: 1,
    y: 0.1,
    z: 0.5,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(tetrahedron);

}


function draw() {



}
