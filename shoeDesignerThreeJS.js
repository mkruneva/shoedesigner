function init() {
	console.log(THREE);

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 30, 4/3, 1, 1000 );	
	camera.position.z = 600;
	camera.position.y = 140;

	//Lights

	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	scene.add( directionalLight);

	var light = new THREE.AmbientLight( 0xbfbfbf ); // soft white light
	scene.add( light );

	var renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setClearColor( 0xdddddd, 1 );
	//var renderer = new THREE.WebGLRenderer({ antialias: true });
	var parent = document.getElementById('canvasContainer');
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById('canvasContainer').appendChild(renderer.domElement);
	//document.body.appendChild( renderer.domElement );

	//Initail Cube Geometry
	var geometry = new THREE.BoxGeometry( 100, 100, 100 );
	var material = new THREE.MeshStandardMaterial( { color: 0xdddddd } );
	var cube = new THREE.Mesh( geometry, material );
	geometry.castShadow = true; 
	scene.add( cube );
	cube.traverse( function ( object ) { object.visible = false; } );   // testing hiding object


	//Shadow Plane
	var planeGeometry = new THREE.PlaneGeometry( 2000, 2000 );
	planeGeometry.rotateX( - Math.PI / 2 );

	var planeMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff,  roughness: 1 } );
	//var planeMaterial = new THREE.ShadowMaterial();
	//planeMaterial.opacity = 0.2;

	var plane = new THREE.Mesh( planeGeometry, planeMaterial );
	plane.position.y = -68;
	plane.receiveShadow = true;
	scene.add( plane );


	var loader = new THREE.OBJLoader();
	loader.load( 'obj/PC300AHPLAPL.obj', function ( object ) {
		object.rotation.y = (260 * Math.PI)/180;
		object.translateZ(90);
		object.translateY(-70);

	    var material = new THREE.MeshStandardMaterial( { color: 0xdddddd, metalness: 0.5,  roughness: 0.5 } );
	    object.traverse( function ( child ) {
	        if ( child instanceof THREE.Mesh ) {
	            child.material = material;
	        }
	    } );
	    //object.castShadow = true; 
	    //animateShoe(object);
	    scene.add( object );
	} );

	controls = new THREE.OrbitControls(camera, renderer.domElement);



	var animate = function () {
		requestAnimationFrame( animate );
		renderer.render(scene, camera);
		controls.update();
	};

	animate();
}

