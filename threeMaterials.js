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


var texLoader = new THREE.TextureLoader(); //global
createLHmany();
createMLmany();
createAPmany();
createELmany();
createLFSmany();

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
        metalnessMap : metalnessM,
        normalMap: normal,
        roughness: 0.64,
    });

    return mat;
}

//Leather Mat
function createLHmat(color) {
    var bump = texLoader.load('tex/LH-bump.jpg');
    repeatTex(bump, 1.2);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.08,
        color: color,
        metalness: 0.05,
        roughness: 0.46,
    });

    return mat;
}

//Metallic Leather Mat
function createMLmat(color) {
    var bump = texLoader.load('tex/LH-bump.jpg');
    repeatTex(bump, 1.2);
    var mat = new THREE.MeshStandardMaterial({
        bumpMap: bump,
        bumpScale: 0.08,
        color: color,
        metalness: 0.48,
        roughness: 0.52,
    });

    return mat;
}


function createAPmany() {
    matAP03 = createAPMat('tex/AP-03-diff.jpg', 2.2);
    matAP05 = createAPMat('tex/AP-05-diff.jpg', 2.4);
    matAP06 = createAPMat('tex/AP-06-diff.jpg', 1.8);
    matAP09 = createAPMat('tex/AP-09-diff.jpg', 2.8);
}

function createELmany() {
    matEL01 = createELMat('tex/EL-01-diff.jpg', 'tex/EL-01-bump.jpg', -0.4);
    matEL02 = createELMat('tex/EL-02-diff.jpg', 'tex/EL-01-bump.jpg', -0.4);
    matEL03 = createELMat('tex/EL-03-diff.jpg', 'tex/EL-03-bump.jpg', 0.4);
}

function createLFSmany() {
    matLFS01 = createLFSMat(0x202957);
    matLFS02 = createLFSMat(0x0C6C74);
    matLFS03 = createLFSMat(0xB87B98);
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