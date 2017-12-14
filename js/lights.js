//Sph�re rouge lumineuse
var lightpt = new THREE.SphereGeometry( 0.5, 16, 8 );
light1 = new THREE.PointLight( 0xff0040, 2, 50 );
light1.add( new THREE.Mesh( lightpt, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) ); //Ajout d'une forme sur le ligthpoint
light1.position.set (3,3,3);
//scene.add( light1 );

//AJOUT D'UN POINT LUMINEUX LIEE AU GLOBE TRANSPARENT
var glob = new THREE.Mesh( geometry, material1 );
var lightpoint = new THREE.PointLight( 0xa7118d, 5, 100 );
lightpoint.position.set(-40,30,2);
lightpoint.castShadow = true;
//lightpoint.distance = 550;
lightpoint.decay = 1;
lightpoint.shadow.camera.near = 8; // ?
lightpoint.add (glob); //Lie le globe au Pointlight
lightpoint.shadow.camera.far = 40;
lightpoint.shadow.mapSize.width = 200;
lightpoint.shadow.mapSize.height = 200;
//scene.add( lightpoint );

//Ajoute un mesh cible pour le spotlight (pour orienter la direction d'un spotlight)
var targetObject = new THREE.Object3D();
targetObject.position.set (100,-20,-20)
//scene.add(targetObject);

//Spotlight
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 80, 80, 80 );
spotLight.intensity = 1;
spotLight.penumbra = 0.5;
spotLight.angle = 1.01;
spotLight.castShadow = true;
spotLight.distance = 200;
spotLight.decay = 0.5;
spotLight.shadow.mapSize.width = 800;//d�tails des ombres (pixels)
spotLight.shadow.mapSize.height = 800;//d�tails des ombres (pixels)

spotLight.shadow.camera.near = 40;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;
//scene.add( spotLight );

spotLight.target = targetObject; //Spotlight cible la target

//Helper pour le spotlight (Affiche sous forme de lignes les lumi�res et les ombres du spotlight) //A retirer en prod
lightHelper = new THREE.SpotLightHelper( spotLight );
//scene.add( lightHelper );
shadowCameraHelper = new THREE.CameraHelper( spotLight.shadow.camera );
//scene.add( shadowCameraHelper );