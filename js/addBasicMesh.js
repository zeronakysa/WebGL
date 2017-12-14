// floor
var floorGeometry = new THREE.PlaneGeometry( 200, 200, 1, 100 );
floorGeometry.rotateX( - Math.PI / 2 );

var floorTexture = new THREE.TextureLoader().load('textures/stone.jpg');
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set( 10, 10 );

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
torusKnot.velocity = 1;
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

var blocks = [];

loader = new THREE.TextureLoader();

// Materials
table_material = Physijs.createMaterial(
    new THREE.MeshLambertMaterial({ map: loader.load( 'textures/wood.jpg' )}),
    .9, // high friction
    .2 // low restitution
);
table_material.map.wrapS = table_material.map.wrapT = THREE.RepeatWrapping;
table_material.map.repeat.set( 5, 5 );

block_material = Physijs.createMaterial(
    new THREE.MeshLambertMaterial({ map: loader.load( 'textures/plywood.jpg' )}),
    .4, // medium friction
    .4 // medium restitution
);
block_material.map.wrapS = block_material.map.wrapT = THREE.RepeatWrapping;
block_material.map.repeat.set( 1, .5 );

createTower = (function() {
    var block_length = 6, block_height = 1, block_width = 1.5, block_offset = 2,
        block_geometry = new THREE.BoxGeometry( block_length, block_height, block_width );

    return function() {
        var i, j, rows = 16,
            block;

        for ( i = 0; i < rows; i++ ) {
            for ( j = 0; j < 3; j++ ) {
                block = new Physijs.BoxMesh( block_geometry, block_material );
                block.position.y = (block_height / 2) + block_height * i;
                if ( i % 2 === 0 ) {
                    block.rotation.y = Math.PI / 2.01;
                    block.position.x = block_offset * j - ( block_offset * 3 / 2 - block_offset / 2 ) + 25;
                } else {
                    block.position.z = block_offset * j - ( block_offset * 3 / 2 - block_offset / 2 )+ 25;
                }
                block.receiveShadow = true;
                block.castShadow = true;
                scene.add( block );
                blocks.push( block );
            }
        }
    }
})();

createTower();
/*
var geometry = new Physijs.BoxMesh( 20, 20, 20 );
test = new THREE.Mesh( geometry, material );
test.position.set( 8, 1, 24 );
test.castShadow = true;
test.receiveShadow = true;
scene.add( test );
*/