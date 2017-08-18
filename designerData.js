//DATA
var objPathName = 'obj/PC/PC300AHPLAPL.obj'; // Initial obj file

var materialMeshes = ['FR1', 'FR2', 'IB1', 'CO1', 'CO2', 'LC1', 'TN1', 'TK1', 'TT1'];
var materialMeshGroups = {
    mainFrontMat: ['FR1', 'FR2', 'CO1', 'CO2', 'IB1', 'ST1', 'BB2'],
    mainBackMat: ['LC1', 'TN1', 'TT1', 'TK1'],
    heelMat: ['HE1', 'PF1'],
    capsMat: ['PT1', 'TO1', 'BB1', 'SH1', 'PH1'],
    strapsMat: ['LS1', 'MJ1', 'MJ2', 'TB1', 'TB2', 'BI1', 'BI2', 'BI3', 'BI4', 'TN2', 'TK2', 'TK3', 'TT2', 'TT3', 'TT4', 'TT5'],
    defaultMat: ['FR1', 'FR2', 'IB1', 'CO1', 'CO2', 'LC1', 'TN1', 'TK1', 'TT1', 'BB2'],
};
var defaultMeshMaterials = {
    'SO1': 'matSO01',
    'SO2': 'matSO01',
    'LO1': 'matLO01',
    'IL1': 'matIL01',
    'HT1': 'matHT01',
    'IN1': 'matLI01',
    'LI1': 'matLI01',
    'TN1LI': 'matLI01',
    'TN2LI': 'matLI01',
    'TK1LI': 'matLI01',
    'TK2LI': 'matLI01',
    'TT1LI': 'matLI01',
    'TT2LI': 'matLI01',
    'CO1LI': 'matLI01',
    'CO2LI': 'matLI01',
    'LC1LI': 'matLI01',
    'LS1LI': 'matLI01',
    'MJ1LI': 'matLI01',
    'TB1LI': 'matLI01',
    'BI1LI': 'matLI01',
    'BI2LI': 'matLI01',
    'HG1': 'matHG01',
    'LC1HG': 'matHG01',
    'TN1HG': 'matHG01',
    'TK1HG': 'matHG01',
    'TT1HG': 'matHG01',
    'TN1BK': 'matBK01', 
    'TK1BK': 'matBK01', 
    'TT1BK': 'matBK01', 
    'TT2BK': 'matBK01', 
    'MJ1BK': 'matBK01', 
    'TB1BK': 'matBK01', 
    'BI1BK': 'matBK01', 
    'BI2BK': 'matBK01', 
    'GC1': 'matBK01',
    'GE1': 'matGE01', 
    'GE2': 'matGE01', 
    'GE3': 'matGE01'
};

//Menu objects and arrays
function ThumbObject(abr, imgSrc, objSrc, tooltip, enabled, children, selection) {
    this.abr = abr;
    this.imgSrc = imgSrc;
    this.objSrc = objSrc;
    this.tooltip = tooltip;
    this.enabled = enabled;
    this.children = children;
    this.selection = selection;
}

//Menu objects and arrays
function SwatchObject(abr, imgSrc, matName) {
    this.abr = abr;
    this.imgSrc = imgSrc;
    this.matName = matName;
}

// //SWATCHES
var swatches = [
    new SwatchObject('AP-03', 'swatches/AP-03.jpg', 'matAP03'),
    new SwatchObject('AP-05', 'swatches/AP-05.jpg', 'matAP05'),
    new SwatchObject('AP-06', 'swatches/AP-06.jpg', 'matAP06'),
    new SwatchObject('AP-09', 'swatches/AP-09.jpg', 'matAP09'),
    new SwatchObject('EL-01', 'swatches/EL-01.jpg', 'matEL01'),
    new SwatchObject('EL-02', 'swatches/EL-02.jpg', 'matEL02'),
    new SwatchObject('EL-03', 'swatches/EL-03.jpg', 'matEL03'),
    new SwatchObject('LFS-01', 'swatches/LFS-01.jpg', 'matLFS01'),
    new SwatchObject('LFS-02', 'swatches/LFS-02.jpg', 'matLFS02'),
    new SwatchObject('LFS-03', 'swatches/LFS-03.jpg', 'matLFS03'),
    new SwatchObject('LLH-01', 'swatches/LLH-01.jpg', 'matLLH01'),
    new SwatchObject('LSN-04', 'swatches/LSN-04.jpg', 'matLSN04'),
    new SwatchObject('LSN-08', 'swatches/LSN-08.jpg', 'matLSN08'), 
    new SwatchObject('SN-06', 'swatches/SN-06.jpg', 'matSN06'),
    new SwatchObject('SN-23', 'swatches/SN-23.jpg', 'matSN23'),
    new SwatchObject('SN-24', 'swatches/SN-24.jpg', 'matSN24'),  
    new SwatchObject('LSU-01', 'swatches/LSU-01.jpg', 'matLSU01'),
    new SwatchObject('LSU-02', 'swatches/LSU-02.jpg', 'matLSU02'), 
    new SwatchObject('PSU-01', 'swatches/PSU-01.jpg', 'matPSU01'),
    new SwatchObject('LH-01', 'swatches/LH-01.jpg', 'matLH01'),
    new SwatchObject('LH-02', 'swatches/LH-02.jpg', 'matLH02'),
    new SwatchObject('LH-04', 'swatches/LH-04.jpg', 'matLH04'),
    new SwatchObject('LH-05', 'swatches/LH-05.jpg', 'matLH05'),
    new SwatchObject('LH-06', 'swatches/LH-06.jpg', 'matLH06'),
    new SwatchObject('LH-07', 'swatches/LH-07.jpg', 'matLH07'),
    new SwatchObject('LH-08', 'swatches/LH-08.jpg', 'matLH08'),
    new SwatchObject('LH-09', 'swatches/LH-09.jpg', 'matLH09'),
    new SwatchObject('LH-10', 'swatches/LH-10.jpg', 'matLH10'),
    new SwatchObject('LH-13', 'swatches/LH-13.jpg', 'matLH13'),
    new SwatchObject('LH-16', 'swatches/LH-16.jpg', 'matLH16'),
    new SwatchObject('LH-17', 'swatches/LH-17.jpg', 'matLH17'),
    new SwatchObject('LH-21', 'swatches/LH-21.jpg', 'matLH21'),
    new SwatchObject('LH-25', 'swatches/LH-25.jpg', 'matLH25'),
    new SwatchObject('LH-35', 'swatches/LH-35.jpg', 'matLH35'),
    new SwatchObject('LH-36', 'swatches/LH-36.jpg', 'matLH36'),
    new SwatchObject('MR-01', 'swatches/MR-01.jpg', 'matMR01'),
    new SwatchObject('MR-02', 'swatches/MR-02.jpg', 'matMR02'),
    new SwatchObject('MR-03', 'swatches/MR-03.jpg', 'matMR03'),
    new SwatchObject('MS-01', 'swatches/MS-01.jpg', 'matMS01'),
    new SwatchObject('MS-02', 'swatches/MS-02.jpg', 'matMS02'),
    new SwatchObject('MS-03', 'swatches/MS-03.jpg', 'matMS03'),
    new SwatchObject('MS-05', 'swatches/MS-05.jpg', 'matMS05'),
    new SwatchObject('MS-06', 'swatches/MS-06.jpg', 'matMS06'),
    new SwatchObject('MS-08', 'swatches/MS-08.jpg', 'matMS08'),
    new SwatchObject('MS-09', 'swatches/MS-09.jpg', 'matMS09'),
    new SwatchObject('MS-10', 'swatches/MS-10.jpg', 'matMS10'),
    new SwatchObject('MS-11', 'swatches/MS-11.jpg', 'matMS11'),
    new SwatchObject('MS-12', 'swatches/MS-12.jpg', 'matMS12'),
    new SwatchObject('PT-01', 'swatches/PT-01.jpg', 'matPT01'),
    new SwatchObject('PT-02', 'swatches/PT-02.jpg', 'matPT02'),
    new SwatchObject('PT-08', 'swatches/PT-08.jpg', 'matPT08'),
    new SwatchObject('PT-09', 'swatches/PT-09.jpg', 'matPT09'),
    new SwatchObject('PT-10', 'swatches/PT-10.jpg', 'matPT10'),
    new SwatchObject('PT-11', 'swatches/PT-11.jpg', 'matPT11'),
    new SwatchObject('PT-12', 'swatches/PT-12.jpg', 'matPT12'),
    new SwatchObject('SU-01', 'swatches/SU-01.jpg', 'matSU01'),
    new SwatchObject('SU-02', 'swatches/SU-02.jpg', 'matSU02'),
    new SwatchObject('SU-04', 'swatches/SU-04.jpg', 'matSU04'),
    new SwatchObject('SU-05', 'swatches/SU-05.jpg', 'matSU05'),
    new SwatchObject('SU-07', 'swatches/SU-07.jpg', 'matSU07'),
    new SwatchObject('SU-08', 'swatches/SU-08.jpg', 'matSU08'),
    new SwatchObject('SU-09', 'swatches/SU-09.jpg', 'matSU09'),
    new SwatchObject('SU-10', 'swatches/SU-10.jpg', 'matSU10'),
    new SwatchObject('SU-13', 'swatches/SU-13.jpg', 'matSU13'),
    new SwatchObject('SU-16', 'swatches/SU-16.jpg', 'matSU16'),
    new SwatchObject('SU-17', 'swatches/SU-17.jpg', 'matSU17'),
    new SwatchObject('SU-25', 'swatches/SU-25.jpg', 'matSU25'),
    new SwatchObject('SU-35', 'swatches/SU-35.jpg', 'matSU35'),
    new SwatchObject('SU-36', 'swatches/SU-36.jpg', 'matSU36'),
];



//EMBELLISHMENTS
var em_pc = [
    new ThumbObject('none', 'images/EM/EMNO.jpg', 'none', "No Embelli", true, 'none', [0, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', 'none', "Gem", true, 'none', [0, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', 'none', "Big Bow", true, 'none', [0, 0, 0, 0, 0])  
];

var em_ph = [
    new ThumbObject('none', 'images/EM/EMNO.jpg', 'none', "No Embelli", true, 'none', [1, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', 'none', "Gem", true, 'none', [1, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', 'none', "Big Bow", true, 'none', [1, 0, 0, 0, 0])  
];

var em_po = [
    new ThumbObject('none', 'images/EM/EMNO.jpg', 'none', "No Embelli", true, 'none', [2, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', 'none', "Gem", true, 'none', [2, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', 'none', "Big Bow", true, 'none', [2, 0, 0, 0, 0])  
];

var em_ac = [
    new ThumbObject('none', 'images/EM/EMNO.jpg', 'none', "No Embelli", true, 'none', [3, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', 'none', "Gem", true, 'none', [3, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', 'none', "Big Bow", true, 'none', [3, 0, 0, 0, 0])  
];

var em_pe = [
    new ThumbObject('none', 'images/EM/EMNO.jpg', 'none', "No Embelli", true, 'none', [4, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', 'none', "Gem", true, 'none', [4, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', 'none', "Big Bow", true, 'none', [4, 0, 0, 0, 0])  
];

var em_sa = [
    new ThumbObject('none', 'images/EMSA/EMNO.jpg', 'none', "No Embelli", true, 'none', [5, 0, 0, 0, 0])
];

var em_fl = [
    new ThumbObject('none', 'images/EM/EMNO.jpg', 'none', "No Embelli", true, 'none', [6, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', 'none', "Gem", true, 'none', [6, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', 'none', "Big Bow", true, 'none', [6, 0, 0, 0, 0])  
];


//STRAPS
var st_pc = [
    new ThumbObject('none', 'images/STHI/STNO.jpg', 'none', "No strap", true, em_pc, [0, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', 'none', "Low Strap", true, em_pc, [0, 0, 0, 0, 1]),
    new ThumbObject('MJ1,MJ1LI,MJ1BK,MJ2', 'images/STHI/STMJ.jpg', 'none', "Mary Jane", true, em_pc, [0, 0, 0, 0, 2]),
    new ThumbObject('TB1,TB1LI,TB1BK,TB2', 'images/STHI/STTB.jpg', 'none', "T bar", true, em_pc, [0, 0, 0, 0, 3]),
    new ThumbObject('BI1,BI1BK,BI1LI,BI2,BI2BK,BI2LI,BI3,BI4', 'images/STHI/STBI.jpg', 'none', "Bib", true, em_pc, [0, 0, 0, 0, 4]), 
];

var st_ph = [
    new ThumbObject('none', 'images/STHI/STNO.jpg', 'none', "No strap", true, em_ph, [1, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', 'none', "Low Strap", true, em_ph, [1, 0, 0, 0, 1])
];

var st_po = [
    new ThumbObject('none', 'images/STHI/STNO.jpg', 'none', "No strap", true, em_po, [2, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', 'none', "Low Strap", true, em_po, [2, 0, 0, 0, 1])
];

var st_ac = [
    new ThumbObject('none', 'images/STHI/STNO.jpg', 'none', "No strap", true, em_ac, [3, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', 'none', "Low Strap", true, em_ac, [3, 0, 0, 0, 1]),
    new ThumbObject('MJ1,MJ1LI,MJ1BK,MJ2', 'images/STHI/STMJ.jpg', 'none', "Mary Jane", true, em_ac, [3, 0, 0, 0, 2]),
    new ThumbObject('TB1,TB1LI,TB1BK,TB2', 'images/STHI/STTB.jpg', 'none', "T bar", true, em_ac, [3, 0, 0, 0, 3]),
    new ThumbObject('BI1,BI1BK,BI1LI,BI2,BI2BK,BI2LI,BI3,BI4', 'images/STHI/STBI.jpg', 'none', "Bib", true, em_ac, [3, 0, 0, 0, 4]),
];

var st_pe = [
    new ThumbObject('none', 'images/STHI/STNO.jpg', 'none', "No strap", true, em_pe, [4, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', 'none', "Low Strap", true, em_pe, [4, 0, 0, 0, 1])
];

var st_sa = [
    new ThumbObject('none', 'images/STSA/STNO.jpg', 'none', "No strap", true, em_sa, [5, 0, 0, 0, 0]),
];

var st_fl = [
    new ThumbObject('none', 'images/STFL/STNO.jpg', 'none', "No strap", true, em_fl, [6, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STFL/STLS.jpg', 'none', "Low Strap", true, em_fl, [6, 0, 0, 0, 1]),
    new ThumbObject('MJ1,MJ1LI,MJ1BK,MJ2', 'images/STFL/STMJ.jpg', 'none', "Mary Jane", true, em_fl, [6, 0, 0, 0, 2])
]; 

//BACKS
//The obj file doesn't change - only meshes are show/hidden
var ba_pc = [
    new ThumbObject('none', 'images/BA/BACBPL.jpg', 'none', 'Plain Back', true, st_pc, [0, 0, 0, 0, 0]),
    new ThumbObject('SH1', 'images/BA/BACBSH.jpg', 'none', 'Strip Heel Counter', true, st_pc, [0, 0, 0, 1, 0]),
    new ThumbObject('PH1', 'images/BA/BACBPH.jpg', 'none', 'Pointed Heel Counter', true, st_pc, [0, 0, 0, 2, 0]),
    
];

var ba_ph = [
    new ThumbObject('none', 'images/BA/BACBPL.jpg', 'none', 'Plain Back', true, st_ph, [1, 0, 0, 0, 0]),
    new ThumbObject('SH1', 'images/BA/BACBSH.jpg', 'none', 'Strip Heel Counter', true, st_ph, [1, 0, 0, 1, 0])  
];


var ba_po = [
    new ThumbObject('LC1,LC1LI,LC1HG', 'images/BA/BAOBLC.jpg', 'none', 'Long Counter', true, st_po, [2, 0, 0, 0, 0]),
    new ThumbObject('TN1,TN1LI,TN1HG,TN1BK,TN2,TN3', 'images/BA/BAOBTN.jpg', 'none', 'High Back (Thin Strap)', true, st_po, [2, 0, 0, 1, 0]),
    new ThumbObject('TT1,TT2,TT3,TT4,TT5,TT1LI,TT2LI,TT1HG,TT1BK,TT2BK', 'images/BA/BAOBTT.jpg', 'none', 'High Back (Double Strap)', true, st_po, [2, 0, 0, 2, 0]),
    new ThumbObject('TK1,TK1LI,TK1HG,TK1BK,TK2,TK3', 'images/BA/BAOBTK.jpg', 'none', 'High Back (Thick Strap)', true, st_po, [2, 0, 0, 3, 0])
];

var ba_ac = [
    new ThumbObject('none', 'images/BA/BACBPL.jpg', 'none', 'Plain Back', true, st_ac, [3, 0, 0, 0, 0]),
    new ThumbObject('SH1', 'images/BA/BACBSH.jpg', 'none', 'Strip Heel Counter', true, st_ac, [3, 0, 0, 1, 0]),
    new ThumbObject('PH1', 'images/BA/BACBPH.jpg', 'none', 'Pointed Heel Counter', true, st_ac, [3, 0, 0, 2, 0]),   
];

var ba_pe = [
    new ThumbObject('none', 'images/BA/BACBPL.jpg', 'none', 'Plain Back', true, st_pe, [4, 0, 0, 0, 0]),
    new ThumbObject('SH1', 'images/BA/BACBSH.jpg', 'none', 'Strip Heel Counter', true, st_pe, [4, 0, 0, 1, 0]),
    new ThumbObject('PH1', 'images/BA/BACBPH.jpg', 'none', 'Pointed Heel Counter', true, st_pe, [4, 0, 0, 2, 0]),
    
];

var ba_sa = [
    new ThumbObject('LC1,LC1LI,LC1HG', 'images/BA/BAOBLC.jpg', 'none', 'Long Counter', true, st_sa, [5, 0, 0, 0, 0]),
    new ThumbObject('TN1,TN1LI,TN1HG,TN1BK,TN2,TN3', 'images/BA/BAOBTN.jpg', 'none', 'High Back (Thin Strap)', true, st_sa, [5, 0, 0, 1, 0]),
    new ThumbObject('TT1,TT2,TT3,TT4,TT5,TT1LI,TT2LI,TT1HG,TT1BK,TT2BK', 'images/BA/BAOBTT.jpg', 'none', 'High Back (Double Strap)', true, st_sa, [5, 0, 0, 2, 0]),
    new ThumbObject('TK1,TK1LI,TK1HG,TK1BK,TK2,TK3', 'images/BA/BAOBTK.jpg', 'none', 'High Back (Thick Strap)', true, st_sa, [5, 0, 0, 3, 0])
];

var ba_fl = [
    new ThumbObject('none', 'images/BA/BAFLPL.jpg', 'none', 'Plain Back', true, st_fl, [6, 0, 0, 0, 0]),
    new ThumbObject('PH1', 'images/BA/BAFLPH.jpg', 'none', 'Pointed Heel Counter', true, st_fl, [6, 0, 0, 1, 0]),
    new ThumbObject('SH1', 'images/BA/BAFLSH.jpg', 'none', 'Strip Heel Counter', true, st_fl, [6, 0, 0, 2, 0])
];


//FRONTS WITH CHILDREN
var fr_pc = [
    new ThumbObject('none', 'images/FRPC/FRPCPLA300AH.jpg', 'none', 'Plain', true, ba_pc, [0, 0, 0, 0, 0]),
    new ThumbObject('PT1', 'images/FRPC/FRPCPTO300AH.jpg', 'none', 'Pointed Toe Cap', true, ba_pc, [0, 0, 1, 0, 0]),
    new ThumbObject('TO1', 'images/FRPC/FRPCTOE300AH.jpg', 'none', 'Toe Cap', true, ba_pc, [0, 0, 2, 0, 0]),
];

var fr_ph = [
    new ThumbObject('none', 'images/FRPH/FRPHPLA300AH.jpg', 'none', 'Plain', true, ba_ph, [1, 0, 0, 0, 0]),
    new ThumbObject('PT1', 'images/FRPH/FRPHPTO300AH.jpg', 'none', 'Pointed Toe Cap', true, ba_ph, [1, 0, 1, 0, 0]),
    new ThumbObject('TO1', 'images/FRPH/FRPHTOE300AH.jpg', 'none', 'Toe Cap', true, ba_ph, [1, 0, 2, 0, 0])
];

var fr_po = [
    new ThumbObject('none', 'images/FRPO/FRPOPLA300AH.jpg', 'none', 'Plain', true, ba_po, [2, 0, 0, 0, 0])
];

var fr_ac = [
    new ThumbObject('none', 'images/FRAC/FRACPLA300AH.jpg', 'none', 'Plain', true, ba_ac, [3, 0, 0, 0, 0]),
    new ThumbObject('PT1', 'images/FRAC/FRACPTO300AH.jpg', 'none', 'Pointed Toe Cap', true, ba_ac, [0, 0, 1, 0, 0]),
    new ThumbObject('TO1', 'images/FRAC/FRACTOE300AH.jpg', 'none', 'Toe Cap', true, ba_ac, [3, 0, 2, 0, 0]),
];

var fr_pe = [
    new ThumbObject('none', 'images/FRPE/FRPEPLA300AH.jpg', 'none', 'Plain', true, ba_pe, [4, 0, 0, 0, 0]),
];

var fr_sa = [
    new ThumbObject('CO1,CO2,CO1LI,CO2LI', 'images/FRSA/FRSACOP300AH.jpg', 'none', 'Cross Over Peep', true, ba_sa, [5, 0, 0, 0, 0]),
    new ThumbObject('ST1,ST1LI', 'images/FRSA/FRSASTR300AH.jpg', 'none', 'Straight', true, ba_sa, [5, 0, 1, 0, 0]),
];

var fr_fl = [
    new ThumbObject('none', 'images/FRFL/FRFLPLA.jpg', 'none', 'Plain', true, ba_fl, [6, 0, 0, 0, 0]),
    new ThumbObject('PT1', 'images/FRFL/FRFLPTO.jpg', 'none', 'Pointed Toe Cap', true, ba_fl, [6, 0, 1, 0, 0]),
    new ThumbObject('TO1', 'images/FRFL/FRFLTOE.jpg', 'none', 'Toe Cap', true, ba_fl, [6, 0, 2, 0, 0]),
]

//HEELS
var he_pc = [
    new ThumbObject('225KI', 'images/HEPC/HEPCPLA225KI.jpg', 'obj/PC/PC225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_pc, [0, 0, 0, 0, 0]),
    new ThumbObject('300AH', 'images/HEPC/HEPCPLA300AH.jpg', 'obj/PC/PC300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_pc, [0, 1, 0, 0, 0]),
    new ThumbObject('300CO', 'images/HEPC/HEPCPLA300CO.jpg', 'obj/PC/PC300COPLAPL.obj', '3&quot; Cone Heel', true, fr_pc, [0, 2, 0, 0, 0]),
    new ThumbObject('375AH', 'images/HEPC/HEPCPLA375AH.jpg', 'obj/PC/PC375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_pc, [0, 3, 0, 0, 0]),
    new ThumbObject('375BH', 'images/HEPC/HEPCPLA375BH.jpg', 'obj/PC/PC375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_pc, [0, 4, 0, 0, 0])
];

var he_ph = [
    new ThumbObject('225KI', 'images/HEPH/HEPHPLA225KI.jpg', 'obj/PH/PH225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_ph, [1, 0, 0, 0, 0]),
    new ThumbObject('300AH', 'images/HEPH/HEPHPLA300AH.jpg', 'obj/PH/PH300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_ph, [1, 1, 0, 0, 0]),
    new ThumbObject('300CO', 'images/HEPH/HEPHPLA300CO.jpg', 'obj/PH/PH300COPLAPL.obj', '3&quot; Cone Heel', true, fr_ph, [1, 2, 0, 0, 0]),
    new ThumbObject('375AH', 'images/HEPH/HEPHPLA375AH.jpg', 'obj/PH/PH375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_ph, [1, 3, 0, 0, 0]),
    new ThumbObject('375BH', 'images/HEPH/HEPHPLA375BH.jpg', 'obj/PH/PH375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_ph, [1, 4, 0, 0, 0])
];

var he_po = [
    new ThumbObject('225KI', 'images/HEPO/HEPOPLA225KI.jpg', 'obj/PO/PO225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_po, [2, 0, 0, 0, 0]),
    new ThumbObject('300AH', 'images/HEPO/HEPOPLA300AH.jpg', 'obj/PO/PO300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_po, [2, 1, 0, 0, 0]),
    new ThumbObject('300CO', 'images/HEPO/HEPOPLA300CO.jpg', 'obj/PO/PO300COPLAPL.obj', '3&quot; Cone Heel', true, fr_po, [2, 2, 0, 0, 0]),
    new ThumbObject('375AH', 'images/HEPO/HEPOPLA375AH.jpg', 'obj/PO/PO375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_po, [2, 3, 0, 0, 0]),
    new ThumbObject('375BH', 'images/HEPO/HEPOPLA375BH.jpg', 'obj/PO/PO375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_po, [2, 4, 0, 0, 0])
];

var he_ac = [
    new ThumbObject('225KI', 'images/HEAC/HEACPLA225KI.jpg', 'obj/AC/AC225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_ac, [3, 0, 0, 0, 0]),
    new ThumbObject('300AH', 'images/HEAC/HEACPLA300AH.jpg', 'obj/AC/AC300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_ac, [3, 1, 0, 0, 0]),
    new ThumbObject('300CO', 'images/HEAC/HEACPLA300CO.jpg', 'obj/AC/AC300COPLAPL.obj', '3&quot; Cone Heel', true, fr_ac, [3, 2, 0, 0, 0]),
    new ThumbObject('350AH', 'images/HEAC/HEACPLA350AH.jpg', 'obj/AC/AC350AHPLAPL.obj', '3.5&quot; Platform Stiletto Heel', true, fr_ac, [3, 3, 0, 0, 0]),
    new ThumbObject('350BH', 'images/HEAC/HEACPLA350BH.jpg', 'obj/AC/AC350BHPLAPL.obj', '3.5&quot; Platform Block Heel', true, fr_ac, [3, 4, 0, 0, 0]),
    new ThumbObject('375AH', 'images/HEAC/HEACPLA375AH.jpg', 'obj/AC/AC375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_ac, [3, 5, 0, 0, 0]),
    new ThumbObject('375BH', 'images/HEAC/HEACPLA375BH.jpg', 'obj/AC/AC375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_ac, [3, 6, 0, 0, 0]),
    new ThumbObject('450AH', 'images/HEAC/HEACPLA450AH.jpg', 'obj/AC/AC450AHPLAPL.obj', '4.5&quot; Platform Stiletto Heel', true, fr_ac, [3, 7, 0, 0, 0]),
    new ThumbObject('450BH', 'images/HEAC/HEACPLA450BH.jpg', 'obj/AC/AC450BHPLAPL.obj', '4.5&quot; Platform Block Heel', true, fr_ac, [3, 8, 0, 0, 0])
];

var he_pe = [
    new ThumbObject('225KI', 'images/HEPE/HEPEPEE225KI.jpg', 'obj/PE/PE225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_pe, [4, 0, 0, 0, 0]),
    new ThumbObject('300AH', 'images/HEPE/HEPEPEE300AH.jpg', 'obj/PE/PE300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_pe, [4, 1, 0, 0, 0]),
    new ThumbObject('300CO', 'images/HEPE/HEPEPEE300CO.jpg', 'obj/PE/PE300COPLAPL.obj', '3&quot; Cone Heel', true, fr_pe, [4, 2, 0, 0, 0]),
    new ThumbObject('350AH', 'images/HEPE/HEPEPEE350AH.jpg', 'obj/PE/PE350AHPLAPL.obj', '3.5&quot; Platform Stiletto Heel', true, fr_pe, [4, 3, 0, 0, 0]),
    new ThumbObject('350AH', 'images/HEPE/HEPEPEE350BH.jpg', 'obj/PE/PE350BHPLAPL.obj', '3.5&quot; Platform Block Heel', true, fr_pe, [4, 4, 0, 0, 0]),
    new ThumbObject('375BH', 'images/HEPE/HEPEPEE375AH.jpg', 'obj/PE/PE375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_pe, [4, 5, 0, 0, 0]),
    new ThumbObject('375BH', 'images/HEPE/HEPEPEE375BH.jpg', 'obj/PE/PE375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_pe, [4, 6, 0, 0, 0]),
    new ThumbObject('450AH', 'images/HEPE/HEPEPEE450AH.jpg', 'obj/PE/PE450AHPLAPL.obj', '4.5&quot; Platform Stiletto Heel', true, fr_pe, [4, 7, 0, 0, 0]),
    new ThumbObject('450BH', 'images/HEPE/HEPEPEE450BH.jpg', 'obj/PE/PE450BHPLAPL.obj', '4.5&quot; Platform Block Heel', true, fr_pe, [4, 8, 0, 0, 0])
];

var he_sa = [
    new ThumbObject('225KI', 'images/HESA/HESASTR225KI.jpg', 'obj/SA/SA225KIPLACB.obj', '2.25&quot; Kitten Heel', true, fr_sa, [5, 0, 0, 0, 0]),
    new ThumbObject('300AH', 'images/HESA/HESASTR300AH.jpg', 'obj/SA/SA300AHPLACB.obj', '3&quot; Stiletto Heel', true, fr_sa, [5, 1, 0, 0, 0]),
    new ThumbObject('300CO', 'images/HESA/HESASTR300CO.jpg', 'obj/SA/SA300COPLACB.obj', '3&quot; Cone Heel', true, fr_sa, [5, 2, 0, 0, 0]),
    new ThumbObject('350AH', 'images/HESA/HESASTR350AH.jpg', 'obj/SA/SA350AHPLACB.obj', '3.5&quot; Platform Stiletto Heel', true, fr_sa, [5, 3, 0, 0, 0]),
    new ThumbObject('350BH', 'images/HESA/HESASTR350BH.jpg', 'obj/SA/SA350BHPLACB.obj', '3.5&quot; Platform Block Heel', true, fr_sa, [5, 4, 0, 0, 0]),
    new ThumbObject('375AH', 'images/HESA/HESASTR375AH.jpg', 'obj/SA/SA375AHPLACB.obj', '3.75&quot; Stiletto Heel', true, fr_sa, [5, 5, 0, 0, 0]),
    new ThumbObject('375BH', 'images/HESA/HESASTR375BH.jpg', 'obj/SA/SA375BHPLACB.obj', '3.75&quot; Block Heel', true, fr_sa, [5, 6, 0, 0, 0]),
    new ThumbObject('450AH', 'images/HESA/HESASTR450AH.jpg', 'obj/SA/SA450AHPLACB.obj', '4.5&quot; Platform Stiletto Heel', true, fr_sa, [5, 7, 0, 0, 0]),
    new ThumbObject('450BH', 'images/HESA/HESASTR450BH.jpg', 'obj/SA/SA450BHPLACB.obj', '4.5&quot; Platform Block Heel', true, fr_sa, [5, 8, 0, 0, 0])
];

var he_fl = [
    new ThumbObject('025FL', 'images/HEFL/HEFLPLA.jpg', 'obj/FL/FL025FLPLAPL.obj', '0.25&quot; Flat Heel', true, fr_fl, [6, 0, 0, 0, 0])
];

//Core Shapes
var cs = [
    new ThumbObject('PC', 'images/CS/CSPCPLA.jpg', 'obj/PC/PC300AHPLAPL.obj', 'Pointed Court', true, he_pc, [0, 1, 0, 0, 0]),
    new ThumbObject('PH', 'images/CS/CSPHPLA.jpg', 'obj/PH/PH300AHPLAPL.obj', "Pointed Half D'Orsay", true, he_ph, [1, 1, 0, 0, 0]),
    new ThumbObject('PO', 'images/CS/CSPOPLA.jpg', 'obj/PO/PO300AHPLAPL.obj', 'Pointed Court Open', true, he_po, [2, 1, 0, 0, 0]),
    new ThumbObject('AC', 'images/CS/CSACPLA.jpg', 'obj/AC/AC300AHPLAPL.obj', 'Round Toe Court', true, he_ac, [3, 1, 0, 0, 0]),
    new ThumbObject('PE', 'images/CS/CSACPEE.jpg', 'obj/PE/PE300AHPLAPL.obj', 'Peep Toe Court', true, he_pe, [4, 1, 0, 0, 0]),
    new ThumbObject('SA', 'images/CS/CSSASTR.jpg', 'obj/SA/SA300AHPLACB.obj', 'Sandals', false, he_sa, [5, 1, 0, 0, 0]),
    new ThumbObject('FL', 'images/CS/CSFLPLA.jpg', 'obj/FL/FL025FLPLAPL.obj', 'Ballet Flats', true, he_fl, [6, 0, 0, 0, 0])
];
