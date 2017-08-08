if (!Detector.webgl) Detector.addGetWebGLMessage();

var camera, scene, renderer;
var controls;
var background;
var loader;
var objPathName = 'obj/PC/PC300AHPLAPL.obj'; //temporary assigning path
var cube; // has to be declared as global var 

init();
animate();

function init() {


    // SCENE DESCRIPTION
    scene = new THREE.Scene();

    // CAMERA DESCRIPTION
    //My camera
    camera = new THREE.PerspectiveCamera(30, 4 / 3, 2, 5000);
    camera.position.z = 600;
    //camera.position.y = 140;
    scene.add(camera); // adding camera as a child of the scene so that pont light can be attached to it


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

    background = reflectionCube;
    //scene.background = reflectionCube;

    // REFRACTION CUBE
    // var refractionCube = new THREE.CubeTextureLoader().load(urls);
    // refractionCube.mapping = THREE.CubeRefractionMapping;
    // refractionCube.format = THREE.RGBFormat;




    //LIGHTS
    var ambientLight = createAmbientLight(0.3);
    scene.add(ambientLight);

    var spotCameraLight = createSpotLight(0xffffff, 0.4, 4);
    scene.add(spotCameraLight);

    var pointCamLight = createPointCameraLight(0xffffff, 0.5);
    //camera.add(pointCamLight);







    //MY MATERIALS DESCRIPTIONS
    var goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        envMap: background,
        metalness: 1,
        roughness: 0.4
    });

    var greyMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.1, roughness: 0.4 });
    var redMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, metalness: 0, roughness: 0.3 });
    var greenMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0, roughness: 0.3 });

    //Shadow catcher Material
    var shadowMaterial = new THREE.ShadowMaterial();
    shadowMaterial.opacity = 0.3; //change the opacity to a bit map


    //RENDERER DESCRIPTION

    //My Renderer 
    renderer = createRenderer(0xdddddd);
    var parent = document.getElementById('canvasContainer');
    parent.appendChild(renderer.domElement);

    //Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);


    //GEOMETRY

    //My cube
    cube = createCube(50, goldMaterial);
    scene.add(cube);

    //My plane
    var plane = createPlane(3000, shadowMaterial);
    scene.add(plane);



    //OBJ LOADER

    //Loading obj
    loader = new THREE.OBJLoader();

    window.objectContainer = {
        loadObject: loadObject
    };

    loadObject(objPathName, greyMaterial);


    // loader = new THREE.BinaryLoader();
    // loader.load("obj/walt/WaltHead_bin.js", function(geometry) { createScene(geometry, cubeMaterial1, cubeMaterial2, cubeMaterial3) });

    //createScene();

}



//MY FUNCTIONS FOR CREATING RENDERER
function createRenderer(clearColour) {
    myRenderer = new THREE.WebGLRenderer({ antialias: true });
    myRenderer.shadowMap.enabled = true; //enabling shadow maps in the renderer
    myRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    myRenderer.setClearColor(clearColour, 1);
    myRenderer.setSize(window.innerWidth, window.innerHeight);

    return myRenderer;
}


//MY FUNCTIONS FOR CREATING LIGHTS
//ambient Light
function createAmbientLight(intensity) {
    var ambientL = new THREE.AmbientLight(0xffffff); // soft white light
    ambientL.intensity = intensity;

    return ambientL;
}

//spotLight added to the camera
function createSpotLight(color, intensity, radius) {
    var spotL = new THREE.SpotLight(color, intensity);

    spotL.castShadow = true;
    spotL.shadow.radius = radius;
    spotL.distance = 1500;
    spotL.shadow.mapSize.width = 1024 * 2;
    spotL.shadow.mapSize.height = 1024 * 2;
    spotL.position.set(-140, 100, -220);

    return spotL;
}

//point Light attached to Camera 
function createPointCameraLight(color, intensity) {
    var pointL = new THREE.PointLight(color, intensity);
    pointL.position.set(300, 200, 0);

    return pointL;
}






//MY FUNCTIONS FOR CREATING GEO

//Test Cube
function createCube(size, material) {
    var geometry = new THREE.BoxGeometry(size, size, size);
    var cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;

    return cube;
}

//Shadow Plane 
function createPlane(size, material) {
    var planeGeometry = new THREE.PlaneGeometry(size, size);
    planeGeometry.rotateX(-Math.PI / 2);

    var plane = new THREE.Mesh(planeGeometry, material);
    plane.position.y = -48;
    plane.receiveShadow = true;

    return plane;
}


function loadObject(objPath, material) {
    loader.load(objPath, function(object) {
        object.name = objPath;
        console.log(object);

        //Assigning name to the object
        object.rotation.y = (270 * Math.PI) / 180;
        object.translateZ(90);
        object.translateY(-50);

        //Assinging material to all meshes of the object
        // object.traverse(function(child) {
        //     if (child instanceof THREE.Mesh) {
        //         // all meshes except for the default ones are hidden
        //         var startMeshes = (child.name == 'FR1') || (child.name == 'FR2') || (child.name == 'HE1') || (child.name == 'HG1') || (child.name == 'HT1') || (child.name == 'IB1') || (child.name == 'IL1') || (child.name == 'IN1') || (child.name == 'LI1') || (child.name == 'LO1') || (child.name == 'SO1') || (child.name == 'SO2') || (child.name == 'PF1') || (child.name == 'LI1') || (child.name == 'LC1') || (child.name == 'LC1LI') || (child.name == 'LC1HG') || (child.name == 'CO1') || (child.name == 'CO2') || (child.name == 'CO1LI') || (child.name == 'CO2LI');
        //         if (startMeshes) {
        //             child.visible = true;
        //         } else {
        //             child.visible = false;
        //         }
        //         child.castShadow = true;

        //         if ((child.name == 'FR1') || (child.name == 'FR2') || (child.name == 'CO1') || (child.name == 'CO2') || (child.name == 'LC1')) {
        //             child.material = material;
        //         } else {
        //             child.material = material;
        //         }
        //     }
        // });


        //add material simple
        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
                child.castShadow = true;
            }
        });

        scene.add(object);
        window.objectContainer.scene = scene;
        window.objectContainer.obj = object;

    });
}



//CREATE SCEN FUNCTION ADDING ALL GEO AND MAT
// function createScene(geometry, m1, m2, m3) {

//     var s = 15;

//     var mesh = new THREE.Mesh(geometry, m1);
//     mesh.position.z = -100;
//     mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
//     scene.add(mesh);

//     var mesh = new THREE.Mesh(geometry, m2);
//     mesh.position.x = -900;
//     mesh.position.z = -100;
//     mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
//     scene.add(mesh);

//     var mesh = new THREE.Mesh(geometry, m3);
//     mesh.position.x = 900;
//     mesh.position.z = -100;
//     mesh.scale.x = mesh.scale.y = mesh.scale.z = s;
//     scene.add(mesh);
// }

function animate() {

    requestAnimationFrame(animate);
    controls.update();

    render();

}

function render() {

    renderer.render(scene, camera);

}