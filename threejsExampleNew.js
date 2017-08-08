if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera, scene, renderer;

init();
animate();

function init() {



	//Origin Camera 
    // camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
    // camera.position.z = 2000;

    //My camera
    camera = new THREE.PerspectiveCamera(30, 4 / 3, 2, 5000);
    camera.position.z = 600;
    //camera.position.y = 140;


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
    scene.background = reflectionCube;


    // LIGHTS

    var ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);

    pointLight = new THREE.PointLight(0xffffff, 2);
    scene.add(pointLight);

    // light representation

    //My Gold Materia 
    var goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        envMap: scene.background,
        metalness: 1,
        roughness: 0.4
    });


    // //Initial Sphere
    // var sphere = new THREE.SphereGeometry(100, 16, 8);
    // var mesh = new THREE.Mesh(sphere, goldMaterial);
    // mesh.scale.set(0.5, 0.5, 0.5);
    // pointLight.add(mesh);

    //My cube
    var cube = createCube(100);
    scene.add( cube );

    function createCube(size) {
        var geometry = new THREE.BoxGeometry(size, size, size);
        var cube = new THREE.Mesh(geometry, goldMaterial);
        cube.castShadow = true;

        return cube;
    }


    var refractionCube = new THREE.CubeTextureLoader().load(urls);
    refractionCube.mapping = THREE.CubeRefractionMapping;
    refractionCube.format = THREE.RGBFormat;

    //var cubeMaterial3 = new THREE.MeshPhongMaterial( { color: 0x000000, specular:0xaa0000, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.25 } );
    var cubeMaterial3 = new THREE.MeshLambertMaterial({ color: 0xff6600, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3 });
    var cubeMaterial2 = new THREE.MeshLambertMaterial({ color: 0xffee00, envMap: refractionCube, refractionRatio: 0.95 });
    var cubeMaterial1 = new THREE.MeshLambertMaterial({ color: 0xffffff, envMap: reflectionCube });

    //

    // renderer = new THREE.WebGLRenderer();
    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // container.appendChild(renderer.domElement);

    //

    //My Renderer 
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true; //enabling shadow maps in the renderer
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    //renderer.setClearColor( 0xdddddd, 1 );
    renderer.setClearColor( 0x000000, 1 );  //darker clear colour
    renderer.setSize(window.innerWidth, window.innerHeight);
    var parent = document.getElementById('canvasContainer');
    parent.appendChild(renderer.domElement);



    // loader = new THREE.BinaryLoader();
    // loader.load("obj/walt/WaltHead_bin.js", function(geometry) { createScene(geometry, cubeMaterial1, cubeMaterial2, cubeMaterial3) });

    //

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

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

function onDocumentMouseMove(event) {

    mouseX = (event.clientX - windowHalfX) * 4;
    mouseY = (event.clientY - windowHalfY) * 4;

}

//

function animate() {

    requestAnimationFrame(animate);

    render();

}

function render() {

    var timer = -0.0002 * Date.now();

    pointLight.position.x = 1500 * Math.cos(timer);
    pointLight.position.z = 1500 * Math.sin(timer);

    // camera.position.x += (mouseX - camera.position.x) * .05;
    // camera.position.y += (-mouseY - camera.position.y) * .05;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);

}