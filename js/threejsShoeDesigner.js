if (!Detector.webgl) Detector.addGetWebGLMessage();

var camera, scene, renderer;
var controls;
var background;
var loader = new THREE.OBJLoader(); //global 

var objY = -70;

init();
animate();

function init() {
    // SCENE DESCRIPTION
    scene = new THREE.Scene();

    // CAMERA DESCRIPTION
    camera = new THREE.PerspectiveCamera(30, 4 / 3, 2, 5000);
    camera.position.z = 600;
    camera.position.y = 140;
    scene.add(camera); // adding camera as a child of the scene so that pont light can be attached to it


    // //LIGHTS
    createAreaLights();

    //MATERIALS from threeMaterials.js 
    var materials = loadMaterials();

    //OBJ LOADER
    window.objectContainer = {
        loadObject: loadObject,
        materials: materials,
    };

    loadObject(objPathName, materials.matGrey, materials.matDarkGrey);

    //GEOMETRY
    var plane = createPlane(3000);
    scene.add(plane);

    //RENDERER DESCRIPTION
    renderer = createRenderer(0xdddddd);
    var parent = document.getElementById('canvasContainer');
    parent.appendChild(renderer.domElement);

    //Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

//LOADER
var loaderDiv = document.getElementById("loader");
THREE.DefaultLoadingManager.onStart = function(item, loaded, total) {
    loaderDiv.style.display = 'block';
};

THREE.DefaultLoadingManager.onLoad = function(item, loaded, total) {
    loaderDiv.style.display = 'none';
};

//FUNCTION FOR CREATING RENDERER
function createRenderer(clearColour) {
    myRenderer = new THREE.WebGLRenderer({ antialias: true });
    myRenderer.shadowMap.enabled = true; //enabling shadow maps in the renderer
    myRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    myRenderer.setClearColor(clearColour, 1);
    myRenderer.setSize(window.innerWidth, window.innerHeight);

    return myRenderer;
}

//FUNCTIONS FOR CREATING SHADOW PLANE 
function createPlane(size) {
    var planeGeometry = new THREE.PlaneGeometry(size, size);
    planeGeometry.rotateX(-Math.PI / 2);
    var shadowMaterial = new THREE.ShadowMaterial();
    shadowMaterial.opacity = 0.36; //change the opacity to a bit map
    var plane = new THREE.Mesh(planeGeometry, shadowMaterial);
    plane.position.y = objY + 1;
    plane.receiveShadow = true;

    return plane;
}


//FUNCTION LOADING OBJ > HIDING MESHES > ASSIGNING MATERIALS
function loadObject(objPath, material1, material2) {
    loader.load(objPath, function(object) {
        object.name = objPath; //to be able to compare with loaded object

        var defaultMeshes = ['FR1', 'FR2', 'HE1', 'IB1', 'HG1', 'HT1', 'IB1', 'IL1', 'IN1', 'LI1', 'LO1', 'SO1', 'SO2', 'PF1', 'LI1', 'LC1', 'LC1LI', 'LC1HG', 'CO1', 'CO2', 'CO1LI', 'CO2LI'];
        var material1Meshes = ['FR1', 'FR2', 'IB1', 'IL1', 'CO1', 'CO2', 'LC1', 'ST1', 'TN1BK', 'TK1BK', 'TT1BK', 'TT2BK', 'MJ1BK', 'TB1BK', 'BI1BK', 'BI2BK', 'BB2', 'TN1', 'TK1', 'TT1', 'HT1', 'LO1'];

        object.rotation.y = (270 * Math.PI) / 180;
        object.translateZ(90);
        object.translateY(objY);

        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {

                child.visible = false;
                child.material = material2;

                if (defaultMeshes.includes(child.name)) {
                    child.visible = true;
                    child.castShadow = true;
                }
                if (material1Meshes.includes(child.name)) {
                    child.material = material1;
                }
            }
        });

        scene.add(object);
        window.objectContainer.scene = scene;
        window.objectContainer.obj = object;

    });
}

//FUNCTION FOR CREATING LIGHTS
function createAreaLights() {
    //AREA LIGHTS
    var rectLightLeft = new THREE.RectAreaLight(0xffffff, 70000, 300, 300);
    rectLightLeft.position.set(0, 0, -165);
    scene.add(rectLightLeft);
    // rectLightHelperLeft = new THREE.RectAreaLightHelper( rectLightLeft );
    // scene.add( rectLightHelperLeft );

    var rectLightRight = new THREE.RectAreaLight(0xffffff, 70000, 300, 300);
    rectLightRight.rotation.x = (180 * Math.PI) / 180;
    rectLightRight.position.set(0, 0, 165);
    scene.add(rectLightRight);
    // rectLightHelperRight = new THREE.RectAreaLightHelper( rectLightRight );
    // scene.add( rectLightHelperRight );

    var rectLightBack = new THREE.RectAreaLight(0xffffff, 70000, 300, 300);
    rectLightBack.rotation.x = (90 * Math.PI) / 180;
    rectLightBack.rotation.y = (90 * Math.PI) / 180;
    rectLightBack.position.set(-200, 0, 0);
    scene.add(rectLightBack);
    // rectLightHelperBack = new THREE.RectAreaLightHelper( rectLightBack );
    // scene.add( rectLightHelperBack );

    var rectLightFront = new THREE.RectAreaLight(0xffffff, 70000, 300, 300);
    rectLightFront.rotation.x = (90 * Math.PI) / 180;
    rectLightFront.rotation.y = (-60 * Math.PI) / 180;
    rectLightFront.position.set(200, 100, 0);
    scene.add(rectLightFront);
    // rectLightHelperFront = new THREE.RectAreaLightHelper(rectLightFront);
    // scene.add(rectLightHelperFront);

    //spotLight attached to the camera
    var spotLight = new THREE.SpotLight(0xffffff, 0.22);
    spotLight.position.set(-140, 100, -220);
    camera.add(spotLight);

    //point Light attached to Camera 
    var pointCamLight = new THREE.PointLight(0xffffff, 0.32);
    pointCamLight.position.set(300, 200, 0);
    camera.add(pointCamLight);

    //ambient Light
    var ambientLight = new THREE.AmbientLight(0xffffff); // soft white light
    ambientLight.intensity = 0.3;
    scene.add(ambientLight);

    var shadowSpotLight = new THREE.SpotLight(0xffffff, 0);
    shadowSpotLight.castShadow = true;
    shadowSpotLight.shadow.radius = 4;
    shadowSpotLight.distance = 1500;
    shadowSpotLight.shadow.mapSize.width = 1024 * 2;
    shadowSpotLight.shadow.mapSize.height = 1024 * 2;
    shadowSpotLight.position.set(0, 500, 0);
    scene.add(shadowSpotLight);
}

function animate() {

    requestAnimationFrame(animate);
    controls.update();

    render();

}

function render() {

    renderer.render(scene, camera);

}