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

var texLoader = new THREE.TextureLoader(); //global

// REFRACTION CUBE
// var refractionCube = new THREE.CubeTextureLoader().load(urls);
// refractionCube.mapping = THREE.CubeRefractionMapping;
// refractionCube.format = THREE.RGBFormat;

var loadMaterials = function() {
    var materials = {};
    createBASICmany(materials);
    createAPmany(materials);
    createELmany(materials);
    createLFSmany(materials);
    createLLHmany(materials);
    createLHmany(materials);
    createLSNmany(materials);
    createLSUmany(materials);
    createMLmany(materials);
    createMRmany(materials);
    createMSmany(materials);
    createPSUmany(materials);
    createPTmany(materials);
    createSNmany(materials);
    createSUmany(materials);

    return materials;
}

console.log(loadMaterials());



//Complex materials
function repeatTex(mapName, repeat) {
    mapName.wrapS = THREE.RepeatWrapping;
    mapName.wrapT = THREE.RepeatWrapping;
    mapName.repeat.set(repeat, repeat);
};


//Basic mat
function createBASICmat(color, metalness, roughness, matEnvMap) {
    var mat = new THREE.MeshStandardMaterial({
        color: color,
        metalness: metalness,
        roughness: roughness
    });
    //mat.envMap = matEnvMap;

    return mat;
}

//Animal Prints mat //OK
function createAPmat(diffuse, repeat) {
    var diff = texLoader.load(diffuse);
    repeatTex(diff, repeat);
    var bump = texLoader.load('tex/AP-bump.jpg');
    repeatTex(bump, 8);
    var mat = new THREE.MeshPhysicalMaterial({
        bumpMap: bump,
        bumpScale: 0.15,
        map: diff,
        metalness: 0,
        reflectivity:0,
        roughness: 0.9
    });

    return mat;
}

//El mat  //OK
function createELmat(diffuse, bump, intensity) {
    var diff = texLoader.load(diffuse);
    repeatTex(diff, 8);
    var bump = texLoader.load(bump);
    repeatTex(bump, 8);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: intensity,
        map: diff,
        metalness: 0,
        roughness: 0.84
    });

    return mat;
}

//Fish mat //OK
function createLFSmat(color) {
    var bump = texLoader.load('tex/LFS-bump.jpg');
    repeatTex(bump, 15);
    var normal = texLoader.load('tex/LFS-normal.png');
    repeatTex(normal, 15);
    var metalnessM = texLoader.load('tex/LFS-lines-inv.jpg');
    repeatTex(metalnessM, 15);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.4,
        color: color,
        //envMap: background,
        metalness: 0.5,
        metalnessMap: metalnessM,
        normalMap: normal,
        roughness: 0.64,
    });

    return mat;
}

//LLH mat   //OK
function createLLHmat() {
    var diff = texLoader.load('tex/LLH-01_diff.jpg');
    repeatTex(diff, 1.2);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: diff,
        bumpScale: 0.3,
        //envMap: background,
        map: diff,
        metalness: 0,
        roughness: 0.8
    });

    return mat;
}

//Leather mat //OK
function createLHmat(color) {
    var bump = texLoader.load('tex/LH-bump.jpg');
    repeatTex(bump, 1);
    var mat = new THREE.MeshPhysicalMaterial({
        bumpMap: bump,
        bumpScale: 0.1,
        color: color,
        metalness: 0,
        reflectivity: 0.33,
        roughness: 0.44,
    });

    return mat;
}

//LSN mat //needs improvements
function createLSNmat(diffuse, bump, repeat) {
    var diff = texLoader.load(diffuse);
    repeatTex(diff, repeat);
    var bump = texLoader.load(bump);
    repeatTex(bump, repeat);
    var metalnessM = texLoader.load('tex/LSN-metalness.jpg');
    repeatTex(metalnessM, repeat);
    var roughtnessM = texLoader.load('tex/LSN-roughness.jpg');
    repeatTex(roughtnessM, repeat);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: -0.16,
        map: diff,
        metalness: 0.1,
        metalnessMap : metalnessM,
        roughness: 0.7,
        roughnessMap : roughtnessM,
    });

    return mat;
}


//LSU mat //OK
function createLSUmat(color) {
    var diff = texLoader.load('tex/LSU-silver-diff.jpg');
    var bump = texLoader.load('tex/LSU-metalness.jpg');
    var roughnessM = texLoader.load('tex/LSU-roughness.jpg');
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.08,
        color: color,
        color: color,
        map: diff,
        roughness: 0.9,
        roughnessMap: roughnessM,
    });

    return mat;
}

//Metallic Leather mat  //OKish
function createMLmat(color) {
    var bump = texLoader.load('tex/ML-bump.jpg');
    repeatTex(bump, 1.2);
    var mat = new THREE.MeshPhysicalMaterial({
        bumpMap: bump,
        bumpScale: 0.5,
        color: color,
        metalness: 0.1,
        reflectivity: 0.3,
        roughness: 0.92,
    });

    return mat;
}

//MIRROR Leather mat  //OKish
function createMRmat(color) {
    var bump = texLoader.load('tex/ML-bump.jpg');
    repeatTex(bump, 1.2);
    var mat = new THREE.MeshPhysicalMaterial({
        bumpMap: bump,
        bumpScale: 0.1,
        color: color,
        //envMap: background,
        metalness: 0.5,
        reflectivity: 0,
        roughness: 0.5,
    });

    return mat;
}


//Metallic Snake mat  //OK
function createMSmat(color) {
    var bump = texLoader.load('tex/SN-bump.jpg');
    repeatTex(bump, 6);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.3,
        color: color,
        metalness: 0.48,
        roughness: 0.52,
    });

    return mat;
}

//PSU mat  //needs improvement
function createPSUmat() {
    var diff = texLoader.load('tex/PSU-01-diffuse.jpg');
    repeatTex(diff, 2.5);
    var bump = texLoader.load('tex/PSU-spec.jpg');
    repeatTex(bump, 2.5);
    var roughnessM = texLoader.load('tex/PSU-roughness.jpg');
    repeatTex(roughnessM, 2.5);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: -0.2,
        map: diff,
        roughness: 0.9,
        roughnessMap: roughnessM,
    });

    return mat;
}

//Patent mat  //OK
function createPTmat(color) {
    var bump = texLoader.load('tex/PT-bump.jpg');
    repeatTex(bump, 2.5);
    var mat = new THREE.MeshPhysicalMaterial({
        bumpMap: bump,
        bumpScale: -0.2,
        color: color,
        //envMap: background,
        metalness: 0.04,
        reflectivity: 0.26,
        roughness: 0.23
    });

    return mat;
}

//SN mat
function createSNmat(diffuse, bump, repeatD, repeatB) {
    var diff = texLoader.load(diffuse);
    repeatTex(diff, repeatD);
    var bump = texLoader.load(bump);
    repeatTex(bump, repeatB);
    var mat = new THREE.MeshPhysicalMaterial({
        bumpMap: bump,
        bumpScale: 0.2,
        map: diff,
        metalness: 0.3,
        reflectivity: 0.2,
        roughness: 0.8,
    });

    return mat;
}

//Suede mat //OK
function createSUmat(color) {
    var bump = texLoader.load('tex/SU-bump.jpg');
    repeatTex(bump, 2);
    var mat = new THREE.MeshPhysicalMaterial({
        bumpMap: bump,
        bumpScale: 0.9,
        color: color,
        metalness: 0,
        reflectivity: 0,
        roughness: 0.9,
    });

    return mat;
}

//CREATE MANY FUNCTIONS

function createBASICmany(materials) {
    materials.matGrey = createBASICmat(0x787878, 0, 0.7);
    materials.matDarkGrey = createBASICmat(0x585858, 0, 0.7);
    materials.matChrome = createBASICmat(0xffffff, 1, 0.5);
    materials.matRed = createBASICmat(0xff0000, 0, 0.3);

    materials.matSO01 = createSUmat(0xf5e9dc); materials.matSO01.name = 'matSO01';
    materials.matLI01 = createMLmat(0xf5e9dc); materials.matLI01.name = 'matLI01';
    materials.matHG01 = createLHmat(0xf5e9dc); materials.matHG01.name = 'matHG01';
    materials.matHT01 = createPTmat(0x0222222); materials.matHT01.name = 'matHT01';
    materials.matIL01 = createMRmat(0xf4b196); materials.matIL01.name = 'matIL01';
    materials.matLO01 = createMRmat(0xf4b196); materials.matLO01.name = 'matLO01';
    materials.matBK01 = createMRmat(0xf4b196); materials.matBK01.name = 'matBK01';
    materials.matGE01 = createMRmat(0xf4b196); materials.matGE01.name = 'matGE01';
}

function createAPmany(materials) {
    materials.matAP03 = createAPmat('tex/AP-03-diff.jpg', 2.2); materials.matAP03.name = 'matAP03';
    materials.matAP05 = createAPmat('tex/AP-05-diff.jpg', 2.4); materials.matAP05.name = 'matAP05';
    materials.matAP06 = createAPmat('tex/AP-06-diff.jpg', 1.8); materials.matAP06.name = 'matAP06';
    materials.matAP09 = createAPmat('tex/AP-09-diff.jpg', 2.8); materials.matAP09.name = 'matAP09';
}

function createELmany(materials) {
    materials.matEL01 = createELmat('tex/EL-01-diff.jpg', 'tex/EL-01-bump.jpg', -0.24); materials.matEL01.name = 'matEL01';
    materials.matEL02 = createELmat('tex/EL-02-diff.jpg', 'tex/EL-01-bump.jpg', -0.24); materials.matEL02.name = 'matEL02';
    materials.matEL03 = createELmat('tex/EL-03-diff.jpg', 'tex/EL-03-bump.jpg', 0.4); materials.matEL03.name = 'matEL03';
}

function createLFSmany(materials) {
    materials.matLFS01 = createLFSmat(0x202957); materials.matLFS01.name = 'matLFS01';
    materials.matLFS02 = createLFSmat(0x0C6C74); materials.matLFS02.name = 'matLFS02';
    materials.matLFS03 = createLFSmat(0xB87B98); materials.matLFS03.name = 'matLFS03';
}


function createLLHmany(materials) {
    materials.matLLH01 = createLLHmat(); materials.matLLH01.name = 'matLLH01';
}

function createLSNmany(materials) {
    materials.matLSN01 = createLSNmat('tex/LSN-01-diff.jpg', 'tex/LSN-01-stencil.jpg', 2.8); materials.matLSN01.name = 'matLSN01';
    materials.matLSN02 = createLSNmat('tex/LSN-02-diff.jpg', 'tex/LSN-01-stencil.jpg', 2.8); materials.matLSN02.name = 'matLSN02';
    materials.matLSN03 = createLSNmat('tex/LSN-03-diff.jpg', 'tex/LSN-01-stencil.jpg', 2.8); materials.matLSN03.name = 'matLSN03';
    materials.matLSN04 = createLSNmat('tex/LSN-04-diffuse.jpg', 'tex/LSN-04-bump-inv.jpg', 4.5); materials.matLSN04.name = 'matLSN04';
    materials.matLSN08 = createLSNmat('tex/LSN-08-DIFF.jpg', 'tex/LSN-08-bump-inv.jpg', 4.5); materials.matLSN08.name = 'matLSN08';
}

function createLSUmany(materials) {
    materials.matLSU01 = createLSUmat(0xC9C9C9); materials.matLSU01.name = 'matLSU01'; 
    materials.matLSU02 = createLSUmat(0xeadd99); materials.matLSU02.name = 'matLSU02'; 
}

function createLHmany(materials) {
    materials.matLH01 = createLHmat(0x0222222); materials.matLH01.name = 'matLH01';
    materials.matLH02 = createLHmat(0x3B3B3B); materials.matLH02.name = 'matLH02';  
    materials.matLH04 = createLHmat(0x9E7854); materials.matLH04.name = 'matLH04'; 
    materials.matLH05 = createLHmat(0x803B1C); materials.matLH05.name = 'matLH05';
    materials.matLH06 = createLHmat(0x33211B); materials.matLH06.name = 'matLH06';
    materials.matLH07 = createLHmat(0x611522); materials.matLH07.name = 'matLH07';
    materials.matLH08 = createLHmat(0x8A141A); materials.matLH08.name = 'matLH08';
    materials.matLH09 = createLHmat(0x28223D); materials.matLH09.name = 'matLH09';
    materials.matLH10 = createLHmat(0x4D1F40); materials.matLH10.name = 'matLH10';
    materials.matLH13 = createLHmat(0xC74828); materials.matLH13.name = 'matLH13'; //?
    materials.matLH16 = createLHmat(0x17212E); materials.matLH16.name = 'matLH16';
    materials.matLH17 = createLHmat(0x008C89); materials.matLH17.name = 'matLH17';
    materials.matLH21 = createLHmat(0xC2B3A3); materials.matLH21.name = 'matLH21'; //x?
    materials.matLH25 = createLHmat(0x748387); materials.matLH25.name = 'matLH25';
    materials.matLH35 = createLHmat(0x2A855F); materials.matLH35.name = 'matLH35';
    materials.matLH36 = createLHmat(0x4A8A77); materials.matLH36.name = 'matLH36';
}

function createMLmany(materials) {
    materials.matML09 = createMLmat(0x591434); materials.matML09.name = 'matML09'; 
    materials.matML10 = createMLmat(0x1C5061); materials.matML10.name = 'matML10';
    materials.matML11 = createMLmat(0x008F85); materials.matML11.name = 'matML11';
    materials.matML12 = createMLmat(0x197A0A); materials.matML12.name = 'matML12';
}

function createMRmany(materials) {
    materials.matMR01 = createMRmat(0xCCCCCC); materials.matMR01.name = 'matMR01';
    materials.matMR02 = createMRmat(0xdfcd77); materials.matMR02.name = 'matMR02';
    materials.matMR03 = createMRmat(0xf4b196); materials.matMR03.name = 'matMR03';
}

function createMSmany(materials) {
    materials.matMS01 = createMSmat(0x807B73); materials.matMS01.name = 'matMS01';
    materials.matMS02 = createMSmat(0xBDBCBC); materials.matMS02.name = 'matMS02';
    materials.matMS03 = createMSmat(0xCCBA95); materials.matMS03.name = 'matMS03'; //can be removed
    materials.matMS05 = createMSmat(0x73593F); materials.matMS05.name = 'matMS05';
    materials.matMS06 = createMSmat(0x423731); materials.matMS06.name = 'matMS06'; //can be removed
    materials.matMS08 = createMSmat(0x871460); materials.matMS08.name = 'matMS08';
    materials.matMS09 = createMSmat(0x591434); materials.matMS09.name = 'matMS09';
    materials.matMS10 = createMSmat(0x1C5061); materials.matMS10.name = 'matMS10';
    materials.matMS11 = createMSmat(0x008F85); materials.matMS11.name = 'matMS11';
    materials.matMS12 = createMSmat(0x197A0A); materials.matMS12.name = 'matMS12';
}

function createPSUmany(materials) {
    materials.matPSU01 = createPSUmat(); materials.matPSU01.name = 'matPSU01';
}

function createPTmany(materials) {
    materials.matPT01 = createPTmat(0x807B73); materials.matPT01.name = 'matPT01';
    materials.matPT02 = createPTmat(0xa0a0a0); materials.matPT02.name = 'matPT02';
    materials.matPT08 = createPTmat(0x871460); materials.matPT08.name = 'matPT08';
    materials.matPT09 = createPTmat(0x591434); materials.matPT09.name = 'matPT09';
    materials.matPT10 = createPTmat(0x1C5061); materials.matPT10.name = 'matPT10';
    materials.matPT11 = createPTmat(0x008F85); materials.matPT11.name = 'matPT11';
    materials.matPT12 = createPTmat(0x197A0A); materials.matPT12.name = 'matPT12';
}

function createSNmany(materials) {
    materials.matSN06 = createSNmat('tex/SN-06_diffuse.jpg', 'tex/SN-bump.jpg', 8.4, 8); materials.matSN06.name = 'matSN06';
    materials.matSN23 = createSNmat('tex/SN-23-diffuse.jpg', 'tex/SN-bump.jpg', 5, 8); materials.matSN23.name = 'matSN23';
    materials.matSN24 = createSNmat('tex/SN-24-diffuse.jpg', 'tex/SN-bump.jpg', 5, 8); materials.matSN24.name = 'matSN24';
}

function createSUmany(materials) {
    materials.matSU01 = createSUmat(0x0222222); materials.matSU01.name = 'matSU01';
    materials.matSU02 = createSUmat(0x3B3B3B); materials.matSU02.name = 'matSU02';
    materials.matSU04 = createSUmat(0x9E7854); materials.matSU04.name = 'matSU04';
    materials.matSU05 = createSUmat(0x803B1C); materials.matSU05.name = 'matSU05';
    materials.matSU07 = createSUmat(0x611522); materials.matSU07.name = 'matSU07';
    materials.matSU08 = createSUmat(0x8A141A); materials.matSU08.name = 'matSU08';
    materials.matSU09 = createSUmat(0x28223D); materials.matSU09.name = 'matSU09';
    materials.matSU10 = createSUmat(0x4D1F40); materials.matSU10.name = 'matSU10';
    materials.matSU13 = createSUmat(0xC74828); materials.matSU13.name = 'matSU13'; //?
    materials.matSU16 = createSUmat(0x17212E); materials.matSU16.name = 'matSU16';
    materials.matSU17 = createSUmat(0x008C89); materials.matSU17.name = 'matSU17';
    materials.matSU25 = createSUmat(0x748387); materials.matSU25.name = 'matSU25';
    materials.matSU35 = createSUmat(0x2A855F); materials.matSU35.name = 'matSU35';
    materials.matSU36 = createSUmat(0x4A8A77); materials.matSU36.name = 'matSU36';
}




