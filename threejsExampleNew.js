if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera, scene, renderer;
var controls;
var background;
var cube; // has to be declared as global var 

init();
animate();

function init() {


	// CAMERA DESCRIPTION
    //My camera
    camera = new THREE.PerspectiveCamera(30, 4 / 3, 2, 5000);
    camera.position.z = 600;
    //camera.position.y = 140;


    //CUBEMAP DESCRIPTION 
    //My CubeMap
    var path = "cubemap/";
    var format = '.jpg';
    var urls = [
        path + 'posx' + format, path + 'negx' + format,
        path + 'posy' + format, path + 'negy' + format,
        path + 'posz' + format, path + 'negz' + format
    ];

    var reflectionCube = new THREE.CubeTextureLoader().load(urls);
    reflectionCube.format = THREE.RGBFormat;


    scene = new THREE.Scene();
    //scene.background = reflectionCube;
    background = reflectionCube;


    // LIGHTS DESCRIPTION

    var ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);

    pointLight = new THREE.PointLight(0xffffff, 2);
    scene.add(pointLight);


    //My cube
    cube = createCube(50);
    scene.add( cube );

    function createCube(size) {
        var geometry = new THREE.BoxGeometry(size, size, size);
        var cube = new THREE.Mesh(geometry, goldMaterial);
        cube.castShadow = true;

        return cube;
    }


    // REFRACTION CUBE
    // var refractionCube = new THREE.CubeTextureLoader().load(urls);
    // refractionCube.mapping = THREE.CubeRefractionMapping;
    // refractionCube.format = THREE.RGBFormat;


    //MATERIALS DESCRIPTIONS

    //My Gold Materia 
    var goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        envMap: background,
        metalness: 1,
        roughness: 0.4
    });


    //RENDERER DESCRIPTION

    //My Renderer 
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true; //enabling shadow maps in the renderer
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor( 0xdddddd, 1 );
    //renderer.setClearColor( 0x000000, 1 );  //darker clear colour
    renderer.setSize(window.innerWidth, window.innerHeight);
    var parent = document.getElementById('canvasContainer');
    parent.appendChild(renderer.domElement);

    //Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);



    // loader = new THREE.BinaryLoader();
    // loader.load("obj/walt/WaltHead_bin.js", function(geometry) { createScene(geometry, cubeMaterial1, cubeMaterial2, cubeMaterial3) });

}



function createScene(geometry, m1, m2, m3) {

    var s = 15;

    var mesh = new THREE.Mesh(geometry, m1);
    mesh.position.z = -100;
    mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
    scene.add(mesh);

    var mesh = new THREE.Mesh(geometry, m2);
    mesh.position.x = -900;
    mesh.position.z = -100;
    mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
    scene.add(mesh);

    var mesh = new THREE.Mesh(geometry, m3);
    mesh.position.x = 900;
    mesh.position.z = -100;
    mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
    scene.add(mesh);


}

function animate() {

    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    render();

}

function render() {

    var timer = -0.0002 * Date.now();

    pointLight.position.x = 1500 * Math.cos(timer);
    pointLight.position.z = 1500 * Math.sin(timer);

    renderer.render(scene, camera);

}