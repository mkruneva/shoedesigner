function init() {

	//Scene and Camera
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 30, 4/3, 10, 2000 );	
	camera.position.z = 600;
	camera.position.y = 140;

	scene.add( camera ); // adding camera as a child of the scene so that pont light can be attached to it

	//Renderer
	var renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.shadowMap.enabled = true; //enabling shadow maps in the renderer
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.setClearColor( 0xdddddd, 1 );
	//renderer.setClearColor( 0x000000, 1 );  //darker clear colour
	renderer.setSize( window.innerWidth, window.innerHeight );
	var parent = document.getElementById('canvasContainer');
	parent.appendChild(renderer.domElement);

	//Controls
	controls = new THREE.OrbitControls(camera, renderer.domElement);

	//LIGHTS

	//TEST Light
	//spotLight added to the camera
	var spotLight = new THREE.SpotLight(0xffffff, 0.4);

	spotLight.castShadow = true;
	spotLight.distance = 1500;
	spotLight.shadow.mapSize.width = 1024*2;
	spotLight.shadow.mapSize.height = 1024*2;
	//spotLight.shadow.radius = 4;
	spotLight.position.set(-140,100,-220);
	//camera.add( spotLight);


	//areaRectLight - it cannot cast shadows currently (under development)
	var rectLight = new THREE.RectAreaLight(0xffffff, 60000, 300, 300);
	rectLight.rotation.x = (45 * Math.PI)/180;
	rectLight.position.set(0,100,-165);
	scene.add(rectLight);
	// rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
	// scene.add( rectLightHelper );


	//point Light attached to Camera 
	var pointCamLight = new THREE.PointLight( 0xffffff, 0.7 );
	pointCamLight.position.set(300,200,0);
	camera.add( pointCamLight );


	//ambient Light
	var ambientLight = new THREE.AmbientLight( 0xffffff ); // soft white light
	ambientLight.intensity = 0.2;
	scene.add( ambientLight );

	//Geo

	// var cube = createCube(100);
	// scene.add( cube );

	var plane = createPlane(3000);
	scene.add( plane );

	var lightSphere = createLightSphere (5);
	spotLight.add(lightSphere); //adding the lightSphere as a child of the spotLight

	//  Materials 
	var greyMaterial = new THREE.MeshStandardMaterial( { color: 0xdddddd, metalness: 0.5,  roughness: 0.5 } );
	var redMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000, metalness: 0, roughness: 0.3 } );
	var greenMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00, metalness: 0, roughness: 0.3 } );
	var goldMaterial = new THREE.MeshStandardMaterial( { color: 0xB4500F, metalness: 0.7, roughness: 0.5 } );



	//OBJ Loader
	var objName = 'PE300SAPLAPL-simple.obj';
	var objPathName = 'obj/' + objName;
	var loader = new THREE.OBJLoader();
	loader.load( objPathName, function ( object ) {
		
		//Assigning name to the object
		object.name = "PC300AHPLAPL-simple";

		// //Getting the mesh name
		//console.log(object.children[10]);

		object.rotation.y = (270 * Math.PI)/180;
		object.translateZ(90);
		object.translateY(-50);

		//Assinging material to all meshes of the object

	    object.traverse( function ( child ) {
	        if ( child instanceof THREE.Mesh ) {


	        	// all meshes except for the default ones are hidden
	        	var startMeshes = (child.name == 'FR1')||(child.name == 'FR2')||(child.name == 'HE1')||(child.name == 'HG1')||(child.name == 'HT1')||(child.name == 'IB1')||(child.name == 'IL1')||(child.name == 'IN1')||(child.name == 'LI1')||(child.name == 'LO1')||(child.name == 'SO1');
	        	if (startMeshes) {
	        		child.visible = true;
	        	} else {
	        		child.visible = false;
	        	}

	        	child.castShadow = true;

	        	if (child.name == 'FR1') {
				child.material = goldMaterial;
				} else 
				if (child.name == 'HE1') {
				child.material = greenMaterial;
				} 
				else 
				if (child.name == 'LO1') {
				child.material = goldMaterial;
				} else {
		            child.material = greyMaterial;
				}
		        } 
	    } );

	    //animateShoe(object);

	    scene.add( object );
	    //console.log(object);
	} );



	//GUI
	var gui = new dat.GUI();
	var sLight = gui.addFolder('spot light');
	sLight.add(spotLight, 'intensity', 0, 1);
	sLight.add(spotLight.position, 'x', -500, 500);
	sLight.add(spotLight.position, 'y', -500, 500);
	sLight.add(spotLight.position, 'z', -500, 500);
	sLight.add(spotLight, 'penumbra', 0, 1);
	sLight.add(spotLight, 'distance', 0, 2000);
	sLight.add(spotLight, 'decay', 0, 2000);

	var rLight = gui.addFolder('rect light');
	rLight.add(rectLight, 'intensity', 0, 100000);
	rLight.add(rectLight.position, 'x', -500, 500);
	rLight.add(rectLight.position, 'y', -500, 500);
	rLight.add(rectLight.position, 'z', -500, 500);
	rLight.add(rectLight.rotation, 'x', 0, 1);
	rLight.add(rectLight.rotation, 'y', 0, 1);
	rLight.add(rectLight.rotation, 'z', 0, 1);

	var cLight = gui.addFolder('camera light');
	cLight.add(pointCamLight, 'intensity', 0, 3);
	var aLight = gui.addFolder('ambient light');
	aLight.add(ambientLight, 'intensity', 0, 1);





	//Parametric Functions for creating GEO

	//Light Sphere 
	function createLightSphere (radius) {
		var sphereGeometry = new THREE.SphereGeometry( radius );
		var lightMaterial = new THREE.MeshBasicMaterial( 0xffffff);
		var lightSphere = new THREE.Mesh( sphereGeometry, lightMaterial);

		return lightSphere;
	}


	//Cube 
	function createCube(size) {
		var geometry = new THREE.BoxGeometry( size, size, size );
		var material = new THREE.MeshStandardMaterial( { color: 0xdddddd } );
		var cube = new THREE.Mesh( geometry, material );
		cube.castShadow = true; 

		return cube;
	}

	//Shadow Plane 
	function createPlane (size) {
		var planeGeometry = new THREE.PlaneGeometry(size, size );
		planeGeometry.rotateX( - Math.PI / 2 );

		// //Shadow catcher Material
		// var planeMaterial = new THREE.ShadowMaterial();
		// planeMaterial.opacity = 0.3; //change the opacity to a bit map
		

		var planeMaterial = new THREE.MeshLambertMaterial( {color: 0xffffff} );

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
	
		// // forEch method test to select all childrent of the  element 
		// newObject.children.forEach(function (child) {
		// 	if (child.name == 'FR1') {
		// 	child.material = goldMaterial;
		// 	} else 
		// 	if (child.name == 'HE1') {
		// 	child.material = redMaterial;
		// 	} 
		// 	else 
		// 	if (child.name == 'LO1') {
		// 	child.material = goldMaterial;
		// 	} 
		// });
		//newObject.children[10].material = redMaterial;
		
	};

	animate();

	


	// //Console logging objects in the scene

	console.log(scene);
	// console.log(scene.children);
	// console.log(scene.children[3]);
	// console.log(plane);
}

