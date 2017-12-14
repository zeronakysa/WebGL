var onProgress = function ( xhr ) {
  if ( xhr.lengthComputable ) {
    var percentComplete = xhr.loaded / xhr.total * 100;
    console.log( Math.round(percentComplete, 2) + '% downloaded' );
  }
};
var onError = function ( xhr ) { };
THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath( 'obj/' );
mtlLoader.load( 'test.mtl', function( materials ) {
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials( materials );
  objLoader.setPath( 'obj/' );
  objLoader.load( 'test.obj', function ( object ) {
    object.position.y = 0;
    object.scale.x = object.scale.y = object.scale.z = 0.5;
    scene.add( object );
  }, onProgress, onError );
});
