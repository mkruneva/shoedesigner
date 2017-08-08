if (!Detector.webgl) Detector.addGetWebGLMessage();

var camera, scene, renderer;
var controls;
var background;
var loader = new THREE.OBJLoader(); //global 
var texLoader = new THREE.TextureLoader(); //global
var objY = -65;
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
    camera.position.y = 140;
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
    var ambientLight = createAmbientLight(0.5);
    scene.add(ambientLight);

    var spotLightFront = createSpotLight(0xffffff, 0.4);
    spotLightFront.position.set(40, 100, 220);
    scene.add(spotLightFront);

    var spotLightBack = createSpotLight(0xffffff, 0.6);
    spotLightBack.position.set(-140, 100, -220);
    scene.add(spotLightBack);

    var shadowSpotLight = createShadowSpotLight(0xffffff, 0.6, 4, 2);
    scene.add(shadowSpotLight);

    var pointCamLight = createPointCameraLight(0xffffff, 1);


    //MY MATERIALS DESCRIPTIONS
    var chromeMaterial = createBasicStandardMat(0xffffff, 1, 0.4, background);
    var greyMaterial = createBasicStandardMat(0xcccccc, 0.1, 0.4);
    var redMaterial = createBasicStandardMat(0xff0000, 0, 0.3);

    //Shadow catcher Material
    var shadowMaterial = new THREE.ShadowMaterial();
    shadowMaterial.opacity = 0.36; //change the opacity to a bit map

    //Many Mat 
    createLHmany();
    createMLmany();

    var matAP6 = createAPMat();


    //RENDERER DESCRIPTION
    renderer = createRenderer(0xdddddd);
    var parent = document.getElementById('canvasContainer');
    parent.appendChild(renderer.domElement);

    //Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);


    //OBJ LOADER

    //Loading obj
    window.objectContainer = {
        loadObject: loadObject
    };

    loadObject(objPathName, matAP6);


    //GEOMETRY
    var plane = createPlane(3000, shadowMaterial);
    scene.add(plane);


    // //GUI
    var gui = new dat.GUI();
    var props = {
        hideBars: false,
        depthZ_Fraction: 0.015,
        barColor: '#222222',
        barDirection: 'Vertical'
    };

    var sLight = gui.addFolder('spot light');
    sLight.add(spotLightFront, 'intensity', 0, 3);
    sLight.add(spotLightFront.position, 'x', -500, 500);
    sLight.add(spotLightFront.position, 'y', -500, 500);
    sLight.add(spotLightFront.position, 'z', -500, 500);
    sLight.add(spotLightFront, 'penumbra', 0, 1);

    var lhMat = gui.addFolder('leather material');
    lhMat.add(matML01, 'roughness', 0, 1);
    lhMat.add(matML01, 'metalness', 0, 1);
    lhColorCtrl =
        lhMat.addColor(props, 'barColor')
        .name('Leather Color')
        .listen();
    lhColorCtrl.onChange(
        function(colorValue) {
            colorValue = colorValue.replace('#', '0x');
            //set the color in the object
            matML01.color.setHex(colorValue);
        });



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
function createSpotLight(color, intensity) {
    var spotL = new THREE.SpotLight(color, intensity);

    return spotL;
}

//Shadow spotLight added to the camera
function createShadowSpotLight(color, intensity, radius, mapsize) {
    var shadowSpotL = new THREE.SpotLight(color, intensity);

    shadowSpotL.castShadow = true;
    shadowSpotL.shadow.radius = radius;
    shadowSpotL.distance = 1500;
    shadowSpotL.shadow.mapSize.width = 1024 * mapsize;
    shadowSpotL.shadow.mapSize.height = 1024 * mapsize;
    shadowSpotL.position.set(0, 500, 0);

    return shadowSpotL;
}

function createRectLightBack(argument) {
    //areaRectLights - cannot cast shadows currently (under development)
    var rectLight3 = new THREE.RectAreaLight(0xffffff, 90000, 300, 300);
    rectLight3.rotation.x = (90 * Math.PI) / 180;
    rectLight3.rotation.y = (45 * Math.PI) / 180;
    rectLight3.position.set(-200, 100, 0);
    scene.add(rectLight3);
    rectLightHelper3 = new THREE.RectAreaLightHelper(rectLight3);
    scene.add(rectLightHelper3);
}



//point Light attached to Camera 
function createPointCameraLight(color, intensity) {
    var pointL = new THREE.PointLight(color, intensity);
    pointL.position.set(300, 200, 0);

    return pointL;
}


//Materials 
//Basic Mat
function createBasicStandardMat(matColor, matMetalness, matRoughness, matEnvMap) {
    var basicMaterial = new THREE.MeshStandardMaterial({ color: matColor, metalness: matMetalness, roughness: matRoughness });
    basicMaterial.envMap = matEnvMap;

    return basicMaterial;
}

//Complex Materials
function repeatTex(mapName, repeat) {
    mapName.wrapS = THREE.RepeatWrapping;
    mapName.wrapT = THREE.RepeatWrapping;
    mapName.repeat.set(repeat, repeat);
};

//Leather Mat
function createLHmat(color) {
    var bumpTex = texLoader.load('tex/LH-bump.jpg');
    repeatTex(bumpTex, 1.2);
    var LHmat = new THREE.MeshStandardMaterial({
        bumpMap: bumpTex,
        bumpScale: 0.08,
        color: color,
        metalness: 0.05,
        roughness: 0.46,
    });

    return LHmat;
}

//Metallic Leather Mat
function createMLmat(color) {
    var bumpTex = texLoader.load('tex/LH-bump.jpg');
    repeatTex(bumpTex, 1.2);
    var MLmat = new THREE.MeshStandardMaterial({
        bumpMap: bumpTex,
        bumpScale: 0.08,
        color: color,
        metalness: 0.48,
        roughness: 0.52,
    });

    return MLmat;
}

function createAPMat() {
    var diffAP6 = texLoader.load('tex/AP-06-diff.jpg');
    repeatTex(diffAP6, 1.8);
    var bumpAP = texLoader.load('tex/AP_bump.jpg');
    repeatTex(bumpAP, 8);
    var AP6mat = new THREE.MeshStandardMaterial({
        bumpMap: bumpAP,
        bumpScale: 0.15,
        map: diffAP6,
        metalness: 0,
        roughness: 0.9
    });

    return AP6mat;
}




function createMLmany() {
    matML01 = createMLmat(0x807B73);
    matML02 = createMLmat(0xBDBCBC);
    matML03 = createMLmat(0xCCBA95);
    matML05 = createMLmat(0x73593F);
    matML06 = createMLmat(0x3B1B12);
    matML08 = createMLmat(0xC9178C);
    matML09 = createMLmat(0x591434);
    matML10 = createMLmat(0x1C5061);
    matML11 = createMLmat(0x008F85);
    matML12 = createMLmat(0x197A0A);
}

//create many global LH variables 
function createLHmany() {
    matLH01 = createLHmat(0x0222222);
    matLH02 = createLHmat(0x3B3B3B);
    matLH03 = createLHmat(0xD0CCCA);
    matLH04 = createLHmat(0x9E7854);
    matLH05 = createLHmat(0x803B1C);
    matLH06 = createLHmat(0x33211B);
    matLH07 = createLHmat(0x611522);
    matLH08 = createLHmat(0x8A141A);
    matLH09 = createLHmat(0x28223D);
    matLH10 = createLHmat(0x4D1F40);
    matLH12 = createLHmat(0xD74A3D);
    matLH13 = createLHmat(0xC74828);
    matLH16 = createLHmat(0x17212E);
    matLH17 = createLHmat(0x008C89);
    matLH21 = createLHmat(0xC2B3A3);
    matLH22 = createLHmat(0xBFA093);
    matLH23 = createLHmat(0xFA3E88);
    matLH24 = createLHmat(0xE3C658);
    matLH25 = createLHmat(0xA4B8BD);
    matLH35 = createLHmat(0x2A855F);
    matLH36 = createLHmat(0x4A8A77);
    matLH37 = createLHmat(0x92D1C1);
}


//FUNCTIONS FOR CREATING GEO

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
    plane.position.y = objY + 1;
    plane.receiveShadow = true;

    return plane;
}


function loadObject(objPath, material) {
    loader.load(objPath, function(object) {
        object.name = objPath;

        //Assigning name to the object
        object.rotation.y = (270 * Math.PI) / 180;
        object.translateZ(90);
        object.translateY(objY);

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