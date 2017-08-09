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
    createLGSmany(materials);
    createLLHmany(materials);
    createLHmany(materials);
    createLSNmany(materials);
    createLSUmany(materials);
    createMLmany(materials);
    createMRmany(materials);
    createMSmany(materials);
    createLSUmany(materials);

    return materials;
}

console.log(loadMaterials());



//Complex Materials
function repeatTex(mapName, repeat) {
    mapName.wrapS = THREE.RepeatWrapping;
    mapName.wrapT = THREE.RepeatWrapping;
    mapName.repeat.set(repeat, repeat);
};


//Basic Mat
function createBasicMat(matColor, matMetalness, matRoughness, matEnvMap) {
    var basicMaterial = new THREE.MeshStandardMaterial({ 
        color: matColor, 
        metalness: matMetalness, 
        roughness: matRoughness 
    });
    basicMaterial.envMap = matEnvMap;

    return basicMaterial;
}

//Animal Prints Mat
function createAPMat(diffuse, repeat) {
    var diff = texLoader.load(diffuse);
    repeatTex(diff, repeat);
    var bump = texLoader.load('tex/AP-bump.jpg');
    repeatTex(bump, 8);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.15,
        map: diff,
        metalness: 0,
        roughness: 0.9
    });

    return mat;
}

//El Mat
function createELMat(diffuse, bump, intensity) {
    var diff = texLoader.load(diffuse);
    repeatTex(diff, 8);
    var bump = texLoader.load(bump);
    repeatTex(bump, 8);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: intensity,
        map: diff,
        metalness: 0,
        roughness: 0.8
    });

    return mat;
}

//Fish Mat
function createLFSMat(color) {
    var bump = texLoader.load('tex/LFS-bump.jpg');
    repeatTex(bump, 15);
    var normal = texLoader.load('tex/LFS-normal.png');
    repeatTex(normal, 15);
    var metalnessM = texLoader.load('tex/LFS-lines-inv.jpg');
    repeatTex(metalnessM, 15);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.3,
        color: color,
        envMap: background,
        metalness: 0.5,
        metalnessMap: metalnessM,
        normalMap: normal,
        roughness: 0.64,
    });

    return mat;
}

//Glitter Suede Mat
function createLGSMat(color) {
    var bump = texLoader.load('tex/SU-bump.jpg');
    repeatTex(bump, 24);
    var metalnessM = texLoader.load('tex/LGS-reflection.jpg');
    repeatTex(metalnessM, 24);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.3,
        color: color,
        envMap: background,
        metalness: 1,
        metalnessMap: metalnessM,
        roughness: 0.8,
        roughnessMap: metalnessM,
    });

    return mat;
}

//LLH Mat
function createLLHMat() {
    var diff = texLoader.load('tex/LLH-01_diff.jpg');
    repeatTex(diff, 1.2);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: diff,
        bumpScale: 0.3,
        envMap: background,
        map: diff,
        metalness: 0,
        roughness: 0.8
    });

    return mat;
}


//Leather Mat
function createLHmat(color) {
    var bump = texLoader.load('tex/LH-bump.jpg');
    repeatTex(bump, 1);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.08,
        color: color,
        metalness: 0.05,
        roughness: 0.46,
    });

    return mat;
}

//LSN Mat
function createLSNMat(diffuse, bump, repeat) {
    var diff = texLoader.load(diffuse);
    repeatTex(diff, repeat);
    var bump = texLoader.load(bump);
    repeatTex(bump, repeat);
    var metalnessM = texLoader.load('tex/LGS-reflection.jpg');
    repeatTex(metalnessM, 24);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: -0.3,
        map: diff,
        // metalness: 0.5,
        // metalnessMap : bump,
        // roughness: 0.8,
        // roughnessMap : bump,
    });

    return mat;
}


//LSU Mat
function createLSUMat(diffuse) {
    var diff = texLoader.load(diffuse);
    var bump = texLoader.load('tex/LSU-metalness.jpg');
    var roughnessM = texLoader.load('tex/LSU-roughness.jpg');
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.08,
        color: 0x666666,
        map: diff,
        // metalness: 0.2,
        // metalnessMap : metalnessM,
        roughness: 0.65,
        roughnessMap : roughnessM,
    });

    return mat;
}

//Metallic Leather Mat
function createMLmat(color) {
    var bump = texLoader.load('tex/ML-bump.jpg');
    repeatTex(bump, 1.2);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.5,
        color: color,
        metalness: 0.48,
        roughness: 0.52,
    });

    return mat;
}

//MIRROR Leather Mat
function createMRmat(color) {
    var bump = texLoader.load('tex/ML-bump.jpg');
    repeatTex(bump, 1.2);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.1,
        color: color,
        envMap: background,
        metalness: 0.7,
        roughness: 0.3,
    });

    return mat;
}


//Metallic Snake Mat
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

//PSU Mat
function createLSUmat() {
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
        roughnessMap : roughnessM,
    });

    return mat;
}









function createBASICmany(materials) {
    materials.matGrey = createBasicMat(0x787878, 0, 0.7);
    materials.matDarkGrey = createBasicMat(0x585858, 0, 0.7);
    materials.matChrome = createBasicMat(0xffffff, 1, 0.4, background);
    materials.matRed = createBasicMat(0xff0000, 0, 0.3);
}


//CREATE MANY FUNCTIONS
function createAPmany(materials) {
    materials.matAP03 = createAPMat('tex/AP-03-diff.jpg', 2.2);
    materials.matAP05 = createAPMat('tex/AP-05-diff.jpg', 2.4);
    materials.matAP06 = createAPMat('tex/AP-06-diff.jpg', 1.8);
    materials.matAP09 = createAPMat('tex/AP-09-diff.jpg', 2.8);
}

function createELmany(materials) {
    materials.matEL01 = createELMat('tex/EL-01-diff.jpg', 'tex/EL-01-bump.jpg', -0.4);
    materials.matEL02 = createELMat('tex/EL-02-diff.jpg', 'tex/EL-01-bump.jpg', -0.4);
    materials.matEL03 = createELMat('tex/EL-03-diff.jpg', 'tex/EL-03-bump.jpg', 0.4);
}

function createLFSmany(materials) {
    materials.matLFS01 = createLFSMat(0x202957);
    materials.matLFS02 = createLFSMat(0x0C6C74);
    materials.matLFS03 = createLFSMat(0xB87B98);
}

function createLGSmany(materials) {
    materials.matLGS01 = createLGSMat(0x461533);
    materials.matLGS02 = createLGSMat(0x2C2C2C);
    materials.matLGS04 = createLGSMat(0x192923);
    materials.matLGS05 = createLGSMat(0x322C34);
    materials.matLGS06 = createLGSMat(0x300C0D);
    materials.matLGS10 = createLGSMat(0x151F34);
    materials.matLGS11 = createLGSMat(0x061F1F);
}

function createLLHmany(materials) {
    materials.matLLH01 = createLLHMat();
}

function createLSNmany(materials) {
    materials.matLSN01 = createLSNMat('tex/LSN-01-main.jpg', 'tex/LSN-01-stencil.jpg', 2.8);
    materials.matLSN02 = createLSNMat('tex/LSN-02-main.jpg', 'tex/LSN-01-stencil.jpg', 2.8);
    materials.matLSN03 = createLSNMat('tex/LSN-03-main.jpg', 'tex/LSN-01-stencil.jpg', 2.8);
    materials.matLSN04 = createLSNMat('tex/LSN-04-diffuse.jpg', 'tex/LSN-04 bump.jpg', 4.5);
    materials.matLSN08 = createLSNMat('tex/LSN-08-DIFF.jpg', 'tex/LSN-08 bump.jpg', 4.5);
}

function createLSUmany(materials) {
    materials.matLSU01 = createLSUMat('tex/LSU-silver-diff.jpg');
    materials.matLSU02 = createLSUMat('tex/LSU-silver-diff.jpg'); 
}


function createLHmany(materials) {
    materials.matLH01 = createLHmat(0x0222222);
    materials.matLH02 = createLHmat(0x3B3B3B);
    materials.matLH03 = createLHmat(0xD0CCCA);
    materials.matLH04 = createLHmat(0x9E7854);
    materials.matLH05 = createLHmat(0x803B1C);
    materials.matLH06 = createLHmat(0x33211B);
    materials.matLH07 = createLHmat(0x611522);
    materials.matLH08 = createLHmat(0x8A141A);
    materials.matLH09 = createLHmat(0x28223D);
    materials.matLH10 = createLHmat(0x4D1F40);
    materials.matLH12 = createLHmat(0xD74A3D);
    materials.matLH13 = createLHmat(0xC74828);
    materials.matLH16 = createLHmat(0x17212E);
    materials.matLH17 = createLHmat(0x008C89);
    materials.matLH21 = createLHmat(0xC2B3A3);
    materials.matLH22 = createLHmat(0xBFA093);
    materials.matLH23 = createLHmat(0xFA3E88);
    materials.matLH24 = createLHmat(0xE3C658);
    materials.matLH25 = createLHmat(0xA4B8BD);
    materials.matLH35 = createLHmat(0x2A855F);
    materials.matLH36 = createLHmat(0x4A8A77);
    materials.matLH37 = createLHmat(0x92D1C1);
}

function createMLmany(materials) {
    materials.matML01 = createMLmat(0x807B73);
    materials.matML02 = createMLmat(0xBDBCBC);
    materials.matML03 = createMLmat(0xCCBA95);
    materials.matML05 = createMLmat(0x73593F);
    materials.matML06 = createMLmat(0x3B1B12);
    materials.matML08 = createMLmat(0xC9178C);
    materials.matML09 = createMLmat(0x591434);
    materials.matML10 = createMLmat(0x1C5061);
    materials.matML11 = createMLmat(0x008F85);
    materials.matML12 = createMLmat(0x197A0A);
}

function createMRmany(materials) {
    materials.matMR01 = createMRmat(0xCCCCCC);
    materials.matMR02 = createMRmat(0xdfcd77);
    materials.matMR03 = createMRmat(0xf4b196);
}

function createMSmany(materials) {
    materials.matMS01 = createMSmat(0x807B73);
    materials.matMS02 = createMSmat(0xBDBCBC);
    materials.matMS03 = createMSmat(0xCCBA95);
    materials.matMS05 = createMSmat(0x73593F);
    materials.matMS06 = createMSmat(0x3B1B12);
    materials.matMS08 = createMSmat(0xC9178C);
    materials.matMS09 = createMSmat(0x591434);
    materials.matMS10 = createMSmat(0x1C5061);
    materials.matMS11 = createMSmat(0x008F85);
    materials.matMS12 = createMSmat(0x197A0A);
}

function createLSUmany(materials) {
    materials.matLSU01 = createLSUmat();
}