// floor
var floorGeometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
floorGeometry.rotateX( - Math.PI / 2 );

var floorTexture = new THREE.TextureLoader().load('textures/sol.jpg');
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set( 15, 15 );

var floorMaterial = new THREE.MeshPhongMaterial( { map: floorTexture } );
var floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.receiveShadow = true; // A METTRE POUR AFFICHER OMBRES AU SOL

scene.add( floor );


//Ajout de formes g�om�triques (cube et noeud)
var geometry = new THREE.TorusKnotGeometry( 25, 8, 75, 20 );
var material = new THREE.MeshPhongMaterial( {
    color: 0x3fce21,
    shininess: 150,
    specular: 0x222222
} );
torusKnot = new THREE.Mesh( geometry, material );
torusKnot.scale.multiplyScalar( 1 / 18 );
torusKnot.position.y = 3;
torusKnot.castShadow = true;
torusKnot.receiveShadow = true;
scene.add( torusKnot );

var geometry = new THREE.BoxGeometry( 20, 20, 20 );
cube = new THREE.Mesh( geometry, material );
cube.position.set( 8, 1, 24 );
cube.castShadow = true;
cube.receiveShadow = true;
scene.add( cube );

//Clone du cube
var cube2 = cube.clone ();
cube2.position.set (8, 12, -20);
scene.add(cube2);

//globe ==> sph�re transparente
var geometry = new THREE.SphereGeometry( 12, 10, 10 );
var material1 = new THREE.MeshStandardMaterial( {
    opacity: 0.30,
    color: 0x3fce21,
    shininess: 150,
    specular: 0x222222,
    emissive: 0x9b9205,
    roughness: 0,//Aspect verre
    metalness: 1,//Aspect verre
    transparent: true
} );