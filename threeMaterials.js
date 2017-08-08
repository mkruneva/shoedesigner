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

function createAPMat(diffuse, repeat) {
    var diffAP = texLoader.load(diffuse);
    repeatTex(diffAP, repeat);
    var bumpAP = texLoader.load('tex/AP_bump.jpg');
    repeatTex(bumpAP, 8);
    var APmat = new THREE.MeshStandardMaterial({
        bumpMap: bumpAP,
        bumpScale: 0.15,
        map: diffAP,
        metalness: 0,
        roughness: 0.9
    });

    return APmat;
}

function createAPmany() {
	matAP03 = createAPMat('tex/AP-03-diff.jpg', 2.2);
	matAP05 = createAPMat('tex/AP-05-diff.jpg', 2.4);
	matAP06 = createAPMat('tex/AP-06-diff.jpg', 1.8);
	matAP09 = createAPMat('tex/AP-09-diff.jpg', 2.8);
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

