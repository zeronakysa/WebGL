//Création d'un "écouteur" sur la caméra
var listener = new THREE.AudioListener();
camera.add(listener);

//Création du son spatialisé
var sound = new THREE.PositionalAudio(listener);

//Chargement d'un son
var audioLoader = new THREE.AudioLoader();
audioLoader.load('sounds/son.ogg', function(buffer) {
  sound.setBuffer(buffer);
  sound.setRefDistance(2);
  sound.play();
});

//Création d'un cube avec son spatialisé
var texture = new THREE.ImageUtils.loadTexture("textures/crate.jpg");
texture.minFilter = THREE.NearestFilter;
var geometry = new THREE.BoxGeometry(4, 4, 4);
var material = new THREE.MeshBasicMaterial({
  map: texture
});

mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 30;
mesh.position.y = 2;
mesh.position.z = 50;
scene.add(mesh);

mesh.add(sound);