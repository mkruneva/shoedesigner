var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

var light = new THREE.AmbientLight( 0xbfbfbf ); // soft white light
scene.add( light );

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Initail Cube Geometry
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshStandardMaterial( { color: 0xdddddd } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 300;
camera.position.y = 140;

var loader = new THREE.OBJLoader();
loader.load( 'obj/PC300AHPLAPL.obj', function ( object ) {
	object.rotation.y = (260 * Math.PI)/180;
	object.translateZ(90);
	object.translateY(-80);

    var material = new THREE.MeshStandardMaterial( { color: 0xdddddd, metalness: 0.5,  roughness: 0.5 } );
    object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
            child.material = material;
        }
    } );
    //animateShoe(object);
    scene.add( object );
} );

controls = new THREE.OrbitControls(camera, renderer.domElement);



var animate = function () {
	requestAnimationFrame( animate );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render(scene, camera);
	controls.update();
};

animate();