function init() {

	//Scene and Camera
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 30, 4/3, 10, 1000 );	
	camera.position.z = 600;
	camera.position.y = 140;

	scene.add( camera ); // adding camera as a child of the scene so that pont light can be attached to it

	//Renderer
	var renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.shadowMap.enabled = true; //enabling shadow maps in the renderer
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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
	var pointLight = new THREE.PointLight( 0xffffff, 0.6 );
	//Shadows
	pointLight.castShadow = true;
	pointLight.shadow.radius = 6;

	pointLight.position.x = -120;
	pointLight.position.y = 100;
	pointLight.position.z = 100;;
	scene.add( pointLight );


	//point Light attached to Camera 
	var pointCamLight = new THREE.PointLight( 0xffffff, 0.9 );
	pointCamLight.castShadow = false;
	pointCamLight.shadow.radius = 6;
	pointCamLight.position.x = 300;
	pointCamLight.position.x = 200;
	camera.add( pointCamLight );

	//ambient Light
	var ambientLight = new THREE.AmbientLight( 0xffffff ); // soft white light
	ambientLight.intensity = 0;
	scene.add( ambientLight );



	//GUI
	var gui = new dat.GUI();
	var pLight = gui.addFolder('point light');
	pLight.add(pointLight, 'intensity', 0, 3);
	pLight.add(pointLight.position, 'x', -500, 500);
	var cLight = gui.addFolder('camera light');
	cLight.add(pointCamLight, 'intensity', 0, 3);
	var aLight = gui.addFolder('ambient light');
	aLight.add(ambientLight, 'intensity', 0, 1);

	//Geo

	// var cube = createCube(100);
	// scene.add( cube );

	var plane = createPlane(2000);
	scene.add( plane );

	var lightSphere = createLightSphere (5);
	pointLight.add(lightSphere); //adding the lightSphere as a child of the pointLight


	// Red Material 
	var greyMaterial = new THREE.MeshStandardMaterial( { color: 0xdddddd, metalness: 0.5,  roughness: 0.5 } );
	var redMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000, metalness: 0, roughness: 0.3 } );

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

	    object.traverse( function ( child ) {
	        if ( child instanceof THREE.Mesh ) {
	        	child.castShadow = true;
	            child.material = greyMaterial;
	        }
	    } );

	    //animateShoe(object);

	    scene.add( object );
	    //console.log(object);
	} );





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
		cube.castShadow = true; 

		return cube;
	}

	//Shadow Plane - with parametric function 
	function createPlane (size) {
		var planeGeometry = new THREE.PlaneGeometry(size, size );
		planeGeometry.rotateX( - Math.PI / 2 );

		//Shadow catcher Material
		var planeMaterial = new THREE.ShadowMaterial();
		planeMaterial.opacity = 0.5;
		//change the opacity to a bit map

		var plane = new THREE.Mesh( planeGeometry, planeMaterial );
		plane.position.y = -48;
		plane.receiveShadow = true;

		return plane;
	}


	// //Hiding Box object in the scene 
	// cube.traverse( function ( object ) { object.visible = false; } );   // testing hiding object
	// cube.visible = 0;
	// scene.children[2].visible = 0;



	// Updating the renderer 
	var animate = function () {
		requestAnimationFrame( animate );

		controls.update();
		renderer.render(scene, camera);

		// //assigning redMaterial to the FR shoe part 
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

