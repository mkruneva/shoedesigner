function init() {

	//Scene and Camera
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 30, 4/3, 10, 1000 );	
	camera.position.z = 600;
	camera.position.y = 140;

	//GUI
	var gui = new dat.GUI();

	//Renderer
	var renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setClearColor( 0xdddddd, 1 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	var parent = document.getElementById('canvasContainer');
	parent.appendChild(renderer.domElement);

	//Controls
	controls = new THREE.OrbitControls(camera, renderer.domElement);

	//LIGHTS
	//directional Light
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	//scene.add( directionalLight);

	//point Light
	var pointLight = new THREE.PointLight( 0xffffff, 1 );
	pointLight.translateY(100);
	pointLight.translateX(100);
	pointLight.translateZ(100);
	scene.add( pointLight );

	//ambient Light
	var ambientLight = new THREE.AmbientLight( 0x666666 ); // soft white light
	scene.add( ambientLight );


	//GUI Lights
	gui.add(pointLight, 'intensity', 0, 10);
	gui.add(pointLight.position, 'x', -500, 500);
	gui.add(ambientLight, 'intensity', 0, 2);

	//Geo

	var cube = createCube(100);
	scene.add( cube );

	var plane = createPlane(2000);
	scene.add( plane );

	var lightSphere = createLightSphere (5);
	pointLight.add(lightSphere); //adding the lightSphere as a child of the pointLight


	//OBJ Loader

	var loader = new THREE.OBJLoader();
	loader.load( 'obj/PC300AHPLAPL-simple.obj', function ( object ) {
		
		//Assigning name to the object
		object.name = "PC300AHPLAPL-simple";

		// //Getting the mesh name
		//console.log(object.children[10]);

		object.rotation.y = (260 * Math.PI)/180;
		object.translateZ(90);
		object.translateY(-50);

		//Assinging material to all meshes of the object
	    var material = new THREE.MeshStandardMaterial( { color: 0xdddddd, metalness: 0.5,  roughness: 0.5 } );
	    object.traverse( function ( child ) {
	        if ( child instanceof THREE.Mesh ) {
	            child.material = material;
	        }
	    } );

	    //object.castShadow = true; 
	    //animateShoe(object);

	    scene.add( object );
	    //console.log(object);
	} );


	// Red Material 

	var redMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000, metalness: 0,  roughness: 0.3 } );


	//Functions for creating LIGHTS, GEO, etc.

	//Light Sphere 
	function createLightSphere (radius) {
		var sphereGeometry = new THREE.SphereGeometry( radius );
		var lightMaterial = new THREE.MeshBasicMaterial( 0xffffff);
		var lightSphere = new THREE.Mesh( sphereGeometry, lightMaterial);

		return lightSphere;
	}


	//Cube - with parametric function
	function createCube(size) {
		var geometry = new THREE.BoxGeometry( size, size, size );
		var material = new THREE.MeshStandardMaterial( { color: 0xdddddd } );
		var cube = new THREE.Mesh( geometry, material );
		geometry.castShadow = true; 

		return cube;
	}

	//Shadow Plane - with parametric function 
	function createPlane (size) {
		var planeGeometry = new THREE.PlaneGeometry(size, size );
		planeGeometry.rotateX( - Math.PI / 2 );

		var planeMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff,  roughness: 1 } );
		//var planeMaterial = new THREE.ShadowMaterial();
		//planeMaterial.opacity = 0.2;

		var plane = new THREE.Mesh( planeGeometry, planeMaterial );
		plane.position.y = -48;
		plane.receiveShadow = true;

		return plane;
	}


	
	



	// //Hiding Box object in the scene 
	// cube.traverse( function ( object ) { object.visible = false; } );   // testing hiding object
	cube.visible = 0;
	// scene.children[2].visible = 0;



	// Updating the renderer 
	var animate = function () {
		requestAnimationFrame( animate );

		controls.update();
		renderer.render(scene, camera);

		var newObject = scene.getObjectByName( "PC300AHPLAPL-simple" );
		//console.log(newObject.children[10]);
		newObject.children[10].material = redMaterial;
		
	};

	animate();

	


	// //Console logging objects in the scene

	console.log(scene);
	// console.log(scene.children);
	// console.log(scene.children[3]);
	// console.log(plane);
}

