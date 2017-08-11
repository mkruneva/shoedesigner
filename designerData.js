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
    new SwatchObject('LSN-02', 'swatches/LSN-02.jpg', 'matLSN02'),
    new SwatchObject('LSN-03', 'swatches/LSN-03.jpg', 'matLSN03'),
    new SwatchObject('LSN-04', 'swatches/LSN-04.jpg', 'matLSN04'),
    new SwatchObject('LSN-08', 'swatches/LSN-08.jpg', 'matLSN08'),   
    new SwatchObject('LSU-01', 'swatches/LSU-01.jpg', 'matLSU01'),
    new SwatchObject('LSU-02', 'swatches/LSU-02.jpg', 'matLSU02'), 
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
];



//EMBELLISHMENTS
var em_pc = [
    new ThumbObject(null, 'images/EM/EMNO.jpg', null, "No Embelli", true, null, [0, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', null, "Gem", true, null, [0, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', null, "Big Bow", true, null, [0, 0, 0, 0, 0])  
];

var em_ph = [
    new ThumbObject(null, 'images/EM/EMNO.jpg', null, "No Embelli", true, null, [1, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', null, "Gem", true, null, [1, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', null, "Big Bow", true, null, [1, 0, 0, 0, 0])  
];

var em_po = [
    new ThumbObject(null, 'images/EM/EMNO.jpg', null, "No Embelli", true, null, [2, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', null, "Gem", true, null, [2, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', null, "Big Bow", true, null, [2, 0, 0, 0, 0])  
];

var em_ac = [
    new ThumbObject(null, 'images/EM/EMNO.jpg', null, "No Embelli", true, null, [3, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', null, "Gem", true, null, [3, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', null, "Big Bow", true, null, [3, 0, 0, 0, 0])  
];

var em_pe = [
    new ThumbObject(null, 'images/EM/EMNO.jpg', null, "No Embelli", true, null, [4, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', null, "Gem", true, null, [4, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', null, "Big Bow", true, null, [4, 0, 0, 0, 0])  
];

var em_sa = [
    new ThumbObject(null, 'images/EMSA/EMNO.jpg', null, "No Embelli", true, null, [5, 0, 0, 0, 0])
];

var em_fl = [
    new ThumbObject(null, 'images/EM/EMNO.jpg', null, "No Embelli", true, null, [6, 0, 0, 0, 0]),
    new ThumbObject('GE1,GE2,GE3,GC1', 'images/EM/EMGE.jpg', null, "Gem", true, null, [6, 0, 0, 0, 0]),
    new ThumbObject('BB1,BB2', 'images/EM/EMBB.jpg', null, "Big Bow", true, null, [6, 0, 0, 0, 0])  
];


//STRAPS
var st_pc = [
    new ThumbObject(null, 'images/STHI/STNO.jpg', null, "No strap", true, em_pc, [0, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', null, "Low Strap", true, em_pc, [0, 0, 0, 0, 1]),
    new ThumbObject('MJ1,MJ1LI,MJ1BK,MJ2', 'images/STHI/STMJ.jpg', null, "Mary Jane", true, em_pc, [0, 0, 0, 0, 2]),
    new ThumbObject('TB1,TB1LI,TB1BK,TB2', 'images/STHI/STTB.jpg', null, "T bar", true, em_pc, [0, 0, 0, 0, 3]),
    new ThumbObject('BI1,BI1BK,BI1LI,BI2,BI2BK,BI2LI,BI3,BI4', 'images/STHI/STBI.jpg', null, "Bib", true, em_pc, [0, 0, 0, 0, 4]), 
    new ThumbObject('TN1,TN1LI,TN1BK,TN2', 'images/STHI/STTN.jpg', null, "Ankle Strap Thin", true,em_pc, [0, 0, 0, 0, 5]),
    new ThumbObject('TK1,TK1LI,TK1BK,TK2', 'images/STHI/STTK.jpg', null, "Ankle Strap Thick", true, em_pc, [0, 0, 0, 0, 6]),
];

var st_ph = [
    new ThumbObject(null, 'images/STHI/STNO.jpg', null, "No strap", true, em_ph, [1, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', null, "Low Strap", true, em_ph, [1, 0, 0, 0, 1])
];

var st_po = [
    new ThumbObject(null, 'images/STHI/STNO.jpg', null, "No strap", true, em_po, [2, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', null, "Low Strap", true, em_po, [2, 0, 0, 0, 1])
];

var st_ac = [
    new ThumbObject(null, 'images/STHI/STNO.jpg', null, "No strap", true, em_ac, [3, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', null, "Low Strap", true, em_ac, [3, 0, 0, 0, 1]),
    new ThumbObject('MJ1,MJ1LI,MJ1BK,MJ2', 'images/STHI/STMJ.jpg', null, "Mary Jane", true, em_ac, [3, 0, 0, 0, 2]),
    new ThumbObject('TB1,TB1BK,TB1BK,TB2', 'images/STHI/STTB.jpg', null, "T bar", true, em_ac, [3, 0, 0, 0, 3]),
    new ThumbObject('BI1,BI1BK,BI1LI,BI2,BI2BK,BI2LI,BI3,BI4', 'images/STHI/STBI.jpg', null, "Bib", true, em_ac, [3, 0, 0, 0, 4]),
    new ThumbObject('TN1,TN1LI,TN1BK,TN2', 'images/STHI/STTN.jpg', null, "Ankle Strap Thin", true, em_ac, [3, 0, 0, 0, 5]),
    new ThumbObject('TK1,TK1LI,TK1BK,TK2', 'images/STHI/STTK.jpg', null, "Ankle Strap Thick", true, em_ac, [3, 0, 0, 0, 6]),
];

var st_pe = [
    new ThumbObject(null, 'images/STHI/STNO.jpg', null, "No strap", true, em_pe, [4, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STHI/STLS.jpg', null, "Low Strap", true, em_pe, [4, 0, 0, 0, 1])
];

var st_sa = [
    new ThumbObject(null, 'images/STSA/STNO.jpg', null, "No strap", true, em_sa, [5, 0, 0, 0, 0]),
];

var st_fl = [
    new ThumbObject(null, 'images/STFL/STNO.jpg', null, "No strap", true, em_fl, [6, 0, 0, 0, 0]),
    new ThumbObject('LS1,LS1LI', 'images/STFL/STLS.jpg', null, "Low Strap", true, em_fl, [6, 0, 0, 0, 1]),
    new ThumbObject('MJ1,MJ1LI,MJ1BK,MJ2', 'images/STFL/STMJ.jpg', null, "Mary Jane", true, em_fl, [6, 0, 0, 0, 2])
]; 

//BACKS
//The obj file doesn't change - only meshes are show/hidden
var ba_pc = [
    new ThumbObject(null, 'images/BA/BACBPL.jpg', null, 'Plain Back', true, st_pc, [0, 0, 0, 0, 0]),
    new ThumbObject('SH1', 'images/BA/BACBSH.jpg', null, 'Strip Heel Counter', true, st_pc, [0, 0, 0, 1, 0]),
    new ThumbObject('PH1', 'images/BA/BACBPH.jpg', null, 'Pointed Heel Counter', true, st_pc, [0, 0, 0, 2, 0]),
    
];

var ba_ph = [
    new ThumbObject(null, 'images/BA/BACBPL.jpg', null, 'Plain Back', true, st_ph, [1, 0, 0, 0, 0]),
    new ThumbObject('SH1', 'images/BA/BACBSH.jpg', null, 'Strip Heel Counter', true, st_ph, [1, 0, 0, 1, 0])  
];


var ba_po = [
    new ThumbObject('LC1,LC1LI,LC1HG', 'images/BA/BAOBLC.jpg', null, 'Long Counter', true, st_po, [2, 0, 0, 0, 0]),
    new ThumbObject('DO1,DO1HG', 'images/BA/BAOBDO.jpg', null, "D'Orsay Counter", true, st_po, [2, 0, 0, 1, 0]),
    new ThumbObject('TN1,TN1LI,TN1HG,TN1BK,TN2,TN3', 'images/BA/BAOBTN.jpg', null, 'High Back (Thin Strap)', true, st_po, [2, 0, 0, 2, 0]),
    new ThumbObject('TT1,TT2,TT3,TT4,TT5,TT1LI,TT1HG,TT1BK,TT2BK', 'images/BA/BAOBTT.jpg', null, 'High Back (Double Strap)', true, st_po, [2, 0, 0, 3, 0]),
    new ThumbObject('TK1,TK1LI,TK1HG,TK1BK,TK2,TK3', 'images/BA/BAOBTK.jpg', null, 'High Back (Thick Strap)', true, st_po, [2, 0, 0, 4, 0])
];

var ba_ac = [
    new ThumbObject(null, 'images/BA/BACBPL.jpg', null, 'Plain Back', true, st_ac, [3, 0, 0, 0, 0]),
    new ThumbObject('SH1', 'images/BA/BACBSH.jpg', null, 'Strip Heel Counter', true, st_ac, [3, 0, 0, 1, 0]),
    new ThumbObject('PH1', 'images/BA/BACBPH.jpg', null, 'Pointed Heel Counter', true, st_ac, [3, 0, 0, 2, 0]),
    
];

var ba_pe = [
    new ThumbObject(null, 'images/BA/BACBPL.jpg', null, 'Plain Back', true, st_pe, [4, 0, 0, 0, 0]),
    new ThumbObject('SH1', 'images/BA/BACBSH.jpg', null, 'Strip Heel Counter', true, st_pe, [4, 0, 0, 1, 0]),
    new ThumbObject('PH1', 'images/BA/BACBPH.jpg', null, 'Pointed Heel Counter', true, st_pe, [4, 0, 0, 2, 0]),
    
];

var ba_sa = [
    new ThumbObject('LC1,LC1LI,LC1HG', 'images/BA/BAOBLC.jpg', null, 'Long Counter', true, st_sa, [5, 0, 0, 0, 0]),
    new ThumbObject('TN1,TN1LI,TN1HG,TN1BK,TN2,TN3', 'images/BA/BAOBTN.jpg', null, 'High Back (Thin Strap)', true, st_sa, [5, 0, 0, 1, 0]),
    new ThumbObject('TT1,TT2,TT3,TT4,TT5,TT1LI,TT1HG,TT1BK,TT2BK', 'images/BA/BAOBTT.jpg', null, 'High Back (Double Strap)', true, st_sa, [5, 0, 0, 2, 0]),
    new ThumbObject('TK1,TK1LI,TK1HG,TK1BK,TK2,TK3', 'images/BA/BAOBTK.jpg', null, 'High Back (Thick Strap)', true, st_sa, [5, 0, 0, 3, 0])
];

var ba_fl = [
    new ThumbObject(null, 'images/BA/BAFLPL.jpg', null, 'Plain Back', true, st_fl, [, 0, 0, 0, 0]),
    new ThumbObject('PH1', 'images/BA/BAFLPH.jpg', null, 'Pointed Heel Counter', true, st_fl, [, 0, 0, 1, 0]),
    new ThumbObject('SH1', 'images/BA/BAFLSH.jpg', null, 'Strip Heel Counter', true, st_fl, [, 0, 0, 2, 0])
];


//FRONTS WITH CHILDREN
var fr_pc = [
    new ThumbObject(null, 'images/FRPC/FRPCPLA300AH.jpg', null, 'Plain', true, ba_pc, [0, 0, 0, 0, 0]),
    new ThumbObject('PT1', 'images/FRPC/FRPCPTO300AH.jpg', null, 'Pointed Toe Cap', true, ba_pc, [0, 0, 1, 0, 0]),
    new ThumbObject('TO1', 'images/FRPC/FRPCTOE300AH.jpg', null, 'Toe Cap', true, ba_pc, [0, 0, 2, 0, 0]),
    // new ThumbObject(null, 'images/FRPC/FRPCPAN300AH.jpg', null, 'Panneled', true, ba_pc, [0, 0, 3, 0, 0]),
    // new ThumbObject('PT1', 'images/FRPC/FRPCPPT300AH.jpg', null, 'Panneled Pointed Toe Cap', true, ba_pc, [0, 0, 4, 0, 0]),
    // new ThumbObject('TO1', 'images/FRPC/FRPCPTC300AH.jpg', null, 'Panneled Toe Cap', true, ba_pc, [0, 0, 5, 0, 0])
];

var fr_ph = [
    new ThumbObject(null, 'images/FRPH/FRPHPLA300AH.jpg', null, 'Plain', true, ba_ph, [1, 0, 0, 0, 0]),
    new ThumbObject('PT1', 'images/FRPH/FRPHPTO300AH.jpg', null, 'Pointed Toe Cap', true, ba_ph, [1, 0, 1, 0, 0]),
    new ThumbObject('TO1', 'images/FRPH/FRPHTOE300AH.jpg', null, 'Toe Cap', true, ba_ph, [1, 0, 2, 0, 0])
];

var fr_po = [
    new ThumbObject(null, 'images/FRPO/FRPOPLA300AH.jpg', null, 'Plain', true, ba_po, [2, 0, 0, 0, 0])
];

var fr_ac = [
    new ThumbObject(null, 'images/FRAC/FRACPLA300AH.jpg', null, 'Plain', true, ba_ac, [3, 0, 0, 0, 0]),
    new ThumbObject('PT1', 'images/FRAC/FRACPTO300AH.jpg', null, 'Pointed Toe Cap', true, ba_ac, [0, 0, 1, 0, 0]),
    new ThumbObject('TO1', 'images/FRAC/FRACTOE300AH.jpg', null, 'Toe Cap', true, ba_ac, [3, 0, 2, 0, 0]),
    // new ThumbObject(null, 'images/FRAC/FRACPAN300AH.jpg', null, 'Panneled', true, ba_ac, [3, 0, 3, 0, 0]),
    // new ThumbObject('PT1', 'images/FRAC/FRACPPT300AH.jpg', null, 'Panneled Pointed Toe Cap', true, ba_ac, [0, 0, 4, 0, 0]),
    // new ThumbObject('TO1', 'images/FRAC/FRACPTC300AH.jpg', null, 'Panneled Toe Cap', true, ba_ac, [3, 0, 5, 0, 0])
];

var fr_pe = [
    new ThumbObject(null, 'images/FRPE/FRPEPLA300AH.jpg', null, 'Plain', true, ba_pe, [4, 0, 0, 0, 0]),
    // new ThumbObject(null, 'images/FRPE/FRPEPAN300AH.jpg', null, 'Panneled', true, ba_pe, [4, 0, 1, 0, 0])
];

var fr_sa = [
    new ThumbObject('CO1,CO2,CO1LI,CO2LI', 'images/FRSA/FRSACOP300AH.jpg', null, 'Cross Over Peep', true, ba_sa, [5, 0, 0, 0, 0]),
    new ThumbObject('ST1,ST1LI', 'images/FRSA/FRSASTR300AH.jpg', null, 'Straight', true, ba_sa, [5, 0, 1, 0, 0]),
    // new ThumbObject('PS1,PS1L,PS2,PS3', 'images/FRSA/FRSAPSA300AH.jpg', null, 'Panelled Sandal', true, ba_sa, [5, 0, 1, 0, 0]),
    
    // new ThumbObject('GLA', 'images/FRSA/FRSAGLA300AH.jpg', null, 'Gl', true, ba_sa, [5, 0, 3, 0, 0])
];

var fr_fl = [
    new ThumbObject(null, 'images/FRFL/FRFLPLA.jpg', null, 'Plain', true, ba_fl, [6, 0, 0, 0, 0]),
    new ThumbObject('PT1', 'images/FRFL/FRFLPTO.jpg', null, 'Pointed Toe Cap', true, ba_fl, [6, 0, 1, 0, 0]),
    new ThumbObject('TO1', 'images/FRFL/FRFLTOE.jpg', null, 'Toe Cap', true, ba_fl, [6, 0, 2, 0, 0]),
    // new ThumbObject(null, 'images/FRFL/FRFLPAN.jpg', null, 'Panneled', true, ba_fl, [6, 0, 3, 0, 0]),
    // new ThumbObject('PT1', 'images/FRFL/FRFLPPT.jpg', null, 'Panneled Pointed Toe Cap', true, ba_fl, [6, 0, 4, 0, 0]),
    // new ThumbObject('TO1', 'images/FRFL/FRFLPTC.jpg', null, 'Panneled Toe Cap', true, ba_fl, [6, 0, 5, 0, 0])
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
    new ThumbObject('PC', 'images/CS/CSPCPLA.jpg', 'obj/PC/PC300AHPLAPL.obj', 'Pointed Court', true, he_pc, [0, 0, 0, 0, 0]),
    new ThumbObject('PH', 'images/CS/CSPHPLA.jpg', 'obj/PH/PH300AHPLAPL.obj', "Pointed Half D'Orsay", true, he_ph, [1, 0, 0, 0, 0]),
    new ThumbObject('PO', 'images/CS/CSPOPLA.jpg', 'obj/PO/PO300AHPLAPL.obj', 'Pointed Court Open', true, he_po, [2, 0, 0, 0, 0]),
    new ThumbObject('AC', 'images/CS/CSACPLA.jpg', 'obj/AC/AC300AHPLAPL.obj', 'Round Toe Court', true, he_ac, [3, 0, 0, 0, 0]),
    new ThumbObject('PE', 'images/CS/CSACPEE.jpg', 'obj/PE/PE300AHPLAPL.obj', 'Peep Toe Court', true, he_pe, [4, 0, 0, 0, 0]),
    new ThumbObject('SA', 'images/CS/CSSASTR.jpg', 'obj/SA/SA300AHPLACB.obj', 'Sandals', false, he_sa, [5, 0, 0, 0, 0]),
    new ThumbObject('FL', 'images/CS/CSFLPLA.jpg', 'obj/FL/FL025FLPLAPL.obj', 'Ballet Flats', true, he_fl, [6, 0, 0, 0, 0])
];
