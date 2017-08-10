if (!Detector.webgl) Detector.addGetWebGLMessage();

var camera, scene, renderer;
var controls;
var background;
var loader = new THREE.OBJLoader(); //global 

var objY = -65; 

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

    //RENDERER DESCRIPTION
    renderer = createRenderer(0xdddddd);
    var parent = document.getElementById('canvasContainer');
    parent.appendChild(renderer.domElement);

    //Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);


    //OBJ LOADER
    window.objectContainer = {
        loadObject: loadObject,
        materials: materials,
        material1: materials['matLH02'],
        material2: materials['matDarkGrey']

    };

    loadObject(objPathName, materials.matLH02, materials.matDarkGrey);


    //GEOMETRY
    var plane = createPlane(3000);
    scene.add(plane);


    // // //GUI
    // var gui = new dat.GUI();
    // var props = {
    //     hideBars: false,
    //     depthZ_Fraction: 0.015,
    //     barColor: '#222222',
    //     barDirection: 'Vertical'
    // };

    // var sLight = gui.addFolder('spot light');
    // sLight.add(spotLightFront, 'intensity', 0, 3);
    // sLight.add(spotLightFront.position, 'x', -500, 500);
    // sLight.add(spotLightFront.position, 'y', -500, 500);
    // sLight.add(spotLightFront.position, 'z', -500, 500);
    // sLight.add(spotLightFront, 'penumbra', 0, 1);

    // var lhMat = gui.addFolder('leather material');
    // lhMat.add(matML01, 'roughness', 0, 1);
    // lhMat.add(matML01, 'metalness', 0, 1);
    // lhColorCtrl =
    //     lhMat.addColor(props, 'barColor')
    //     .name('Leather Color')
    //     .listen();
    // lhColorCtrl.onChange(
    //     function(colorValue) {
    //         colorValue = colorValue.replace('#', '0x');
    //         //set the color in the object
    //         matML01.color.setHex(colorValue);
    //     });

}



//FUNCTION FOR CREATING RENDERER
function createRenderer(clearColour) {
    myRenderer = new THREE.WebGLRenderer({ antialias: true });
    myRenderer.shadowMap.enabled = true; //enabling shadow maps in the renderer
    myRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    myRenderer.setClearColor(clearColour, 1);
    myRenderer.setSize(window.innerWidth, window.innerHeight);

    return myRenderer;
}




//FUNCTIONS FOR CREATING GEO
//Shadow Plane 
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


//FUNCTION LOADING OBJ< HIDING MESHES<ASSIGNING MATERIALS
function loadObject(objPath, material1, material2) {
    loader.load(objPath, function(object) {

        object.rotation.y = (270 * Math.PI) / 180;
        object.translateZ(90);
        object.translateY(objY);

        //Assinging material to all meshes of the object
        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                // all meshes except for the default ones are hidden
                var startMeshes = (child.name == 'FR1') || (child.name == 'FR2') || (child.name == 'HE1') ||
                    (child.name == 'HG1') || (child.name == 'HT1') || (child.name == 'IB1') ||
                    (child.name == 'IL1') || (child.name == 'IN1') || (child.name == 'LI1') ||
                    (child.name == 'LO1') || (child.name == 'SO1') || (child.name == 'SO2') || (child.name == 'PF1') ||
                    (child.name == 'LI1') || (child.name == 'LC1') || (child.name == 'LC1LI') || (child.name == 'LC1HG') ||
                    (child.name == 'CO1') || (child.name == 'CO2') || (child.name == 'CO1LI') || (child.name == 'CO2LI');
                child.visible = startMeshes;
                child.castShadow = true;

                var mainMeshes = (child.name == 'FR1') || (child.name == 'FR2') ||
                    (child.name == 'CO1') || (child.name == 'CO2') || (child.name == 'LC1');
                if (mainMeshes) {
                    child.material = material1;
                } else {
                    child.material = material2;
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
    rectLightLeft.rotation.x = (45 * Math.PI) / 180;
    rectLightLeft.position.set(0, 100, -165);
    scene.add(rectLightLeft);
    // rectLightHelperLeft = new THREE.RectAreaLightHelper( rectLightLeft );
    // scene.add( rectLightHelperLeft );

    var rectLightRight = new THREE.RectAreaLight(0xffffff, 70000, 300, 300);
    rectLightRight.rotation.x = (135 * Math.PI) / 180;
    rectLightRight.position.set(0, 100, 165);
    scene.add(rectLightRight);
    // rectLightHelperRight = new THREE.RectAreaLightHelper( rectLightRight );
    // scene.add( rectLightHelperRight );

    var rectLightBack = new THREE.RectAreaLight(0xffffff, 70000, 300, 300);
    rectLightBack.rotation.x = (90 * Math.PI) / 180;
    rectLightBack.rotation.y = (45 * Math.PI) / 180;
    rectLightBack.position.set(-200, 100, 0);
    scene.add(rectLightBack);
    // rectLightHelperBack = new THREE.RectAreaLightHelper( rectLightBack );
    // scene.add( rectLightHelperBack );

    var rectLightFront = new THREE.RectAreaLight(0xffffff, 50000, 300, 300);
    rectLightFront.rotation.x = (90 * Math.PI) / 180;
    rectLightFront.rotation.y = (-45 * Math.PI) / 180;
    rectLightFront.position.set(200, 100, 0);
    scene.add(rectLightFront);
    // rectLightHelperFront = new THREE.RectAreaLightHelper(rectLightFront);
    // scene.add(rectLightHelperFront);

    //spotLight attached to the camera
    var spotLight = new THREE.SpotLight(0xffffff, 0.7);
    spotLight.position.set(-140, 100, -220);
    camera.add(spotLight);

    //point Light attached to Camera 
    var pointCamLight = new THREE.PointLight(0xffffff, 0.7);
    pointCamLight.position.set(300, 200, 0);
    camera.add(pointCamLight);

    //ambient Light
    var ambientLight = new THREE.AmbientLight(0xffffff); // soft white light
    ambientLight.intensity = 0.34;
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