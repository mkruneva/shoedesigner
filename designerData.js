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

//STRAPS
var st_hi = [
    new ThumbObject('NO', 'images/STHI/STNO.jpg', 'null', "No strap", true),
    new ThumbObject('BI', 'images/STHI/STBI.jpg', 'null', "Bib", true),
    new ThumbObject('LS', 'images/STHI/STLS.jpg', 'null', "Low Strap", true),
    new ThumbObject('MJ', 'images/STHI/STMJ.jpg', 'null', "Mary Jane", true),
    new ThumbObject('TB', 'images/STHI/STTB.jpg', 'null', "T bar", true),
    new ThumbObject('TK', 'images/STHI/STTK.jpg', 'null', "Ankle Strap Thick", true),
    new ThumbObject('TN', 'images/STHI/STTN.jpg', 'null', "Ankle Strap Thin", true)
];
// available for PC, AC core shape only 

var st_fl = [
    new ThumbObject('NO', 'images/STFL/STNO.jpg', 'null', "No strap", true),
    new ThumbObject('LS', 'images/STFL/STLS.jpg', 'null', "Low Strap", true),
    new ThumbObject('MJ', 'images/STFL/STMJ.jpg', 'null', "Mary Jane", true)
];

var st_ls = [
    new ThumbObject('NO', 'images/STHI/STNO.jpg', 'null', "No strap", true),
    new ThumbObject('LS', 'images/STHI/STLS.jpg', 'null', "Low Strap", true)
];
// available for PH, PO PE core shape only 

var st_sa = [
    new ThumbObject('NO', 'images/STSA/STNO.jpg', 'null', "No strap", true),
];
// available fo SA only

//BACKS
//The obj file doesn't change - only meshes are show/hidden
var ba_cb = [
    new ThumbObject('PL', 'images/BA/BACBPL.jpg', 'null', 'Plain Back', true),
    new ThumbObject('SH', 'images/BA/BACBSH.jpg', 'null', 'Strip Heel Counter', true),
    new ThumbObject('PH', 'images/BA/BACBPH.jpg', 'null', 'Pointed Heel Counter', true),
    
];
//CB backs for PC, PH, PE, AC core shape

var ba_fl = [
    new ThumbObject('PL', 'images/BA/BAFLPL.jpg', 'null', 'Plain Back', true),
    new ThumbObject('PH', 'images/BA/BAFLPH.jpg', 'null', 'Pointed Heel Counter', true),
    new ThumbObject('SH', 'images/BA/BAFLSH.jpg', 'null', 'Strip Heel Counter', true)
];
//FL backs for FL core shape

var ba_ob = [
    new ThumbObject('DO', 'images/BA/BAOBDO.jpg', 'null', "D'Orsay Counter", true),
    new ThumbObject('LC', 'images/BA/BAOBLC.jpg', 'null', 'Long Counter', true),
    new ThumbObject('TN', 'images/BA/BAOBTN.jpg', 'null', 'High Back (Thin Strap)', true),
    new ThumbObject('TT', 'images/BA/BAOBTT.jpg', 'null', 'High Back (Double Strap)', true),
    new ThumbObject('TK', 'images/BA/BAOBTK.jpg', 'null', 'High Back (Thick Strap)', true)
];
// OB backs available for SA and PO core shape


//FRONTS WITH CHILDREN
var fr_pc = [
    new ThumbObject('PLA', 'images/FRPC/FRPCPLA300AH.jpg', 'null', 'Plain', true, ba_cb, [0, 0, 0]),
    new ThumbObject('PTO', 'images/FRPC/FRPCPTO300AH.jpg', 'null', 'Pointed Toe Cap', true, ba_cb, [0, 0, 1]),
    new ThumbObject('TOE', 'images/FRPC/FRPCTOE300AH.jpg', 'null', 'Toe Cap', true, ba_cb, [0, 0, 2]),
    new ThumbObject('PAN', 'images/FRPC/FRPCPAN300AH.jpg', 'null', 'Panneled', true, ba_cb, [0, 0, 3]),
    new ThumbObject('PPT', 'images/FRPC/FRPCPPT300AH.jpg', 'null', 'Panneled Pointed Toe Cap', true, ba_cb, [0, 0, 4]),
    new ThumbObject('PTC', 'images/FRPC/FRPCPTC300AH.jpg', 'null', 'Panneled Toe Cap', true, ba_cb, [0, 0, 5])
];

var fr_ph = [
    new ThumbObject('PLA', 'images/FRPH/FRPHPLA300AH.jpg', 'null', 'Plain', true, ba_cb, [1, 0, 0]),
    new ThumbObject('PTO', 'images/FRPH/FRPHPTO300AH.jpg', 'null', 'Pointed Toe Cap', true, ba_cb, [1, 0, 1]),
    new ThumbObject('TOE', 'images/FRPH/FRPHTOE300AH.jpg', 'null', 'Toe Cap', true, ba_cb, [1, 0, 2])
];

var fr_po = [
    new ThumbObject('PLA', 'images/FRPO/FRPOPLA300AH.jpg', 'null', 'Plain', true, ba_ob, [2, 0, 0])
];

var fr_ac = [
    new ThumbObject('PLA', 'images/FRAC/FRACPLA300AH.jpg', 'null', 'Plain', true, ba_cb, [3, 0, 0]),
    new ThumbObject('PTO', 'images/FRAC/FRACPTO300AH.jpg', 'null', 'Pointed Toe Cap', true, ba_cb, [0, 0, 1]),
    new ThumbObject('TOE', 'images/FRAC/FRACTOE300AH.jpg', 'null', 'Toe Cap', true, ba_cb, [3, 0, 2]),
    new ThumbObject('PAN', 'images/FRAC/FRACPAN300AH.jpg', 'null', 'Panneled', true, ba_cb, [3, 0, 3]),
    new ThumbObject('PPT', 'images/FRAC/FRACPPT300AH.jpg', 'null', 'Panneled Pointed Toe Cap', true, ba_cb, [0, 0, 4]),
    new ThumbObject('PTC', 'images/FRAC/FRACPTC300AH.jpg', 'null', 'Panneled Toe Cap', true, ba_cb, [3, 0, 5])
];

var fr_pe = [
    new ThumbObject('PLA', 'images/FRPE/FRPEPLA300AH.jpg', 'null', 'Plain', true, ba_cb, [4, 0, 0]),
    new ThumbObject('PAN', 'images/FRPE/FRPEPAN300AH.jpg', 'null', 'Panneled', true, ba_cb, [4, 0, 1])
];

var fr_sa = [
    new ThumbObject('STR', 'images/FRSA/FRSASTR300AH.jpg', 'null', 'Toe Cap', true, ba_ob, [5, 0, 0]),
    new ThumbObject('PSA', 'images/FRSA/FRSAPSA300AH.jpg', 'null', 'Toe Cap', true, ba_ob, [5, 0, 1]),
    new ThumbObject('COP', 'images/FRSA/FRSACOP300AH.jpg', 'null', 'Plain', true, ba_ob, [5, 0, 2]),
    new ThumbObject('GLA', 'images/FRSA/FRSAGLA300AH.jpg', 'null', 'Pointed Toe Cap', true, ba_ob, [5, 0, 3])
];

var fr_fl = [
    new ThumbObject('PLA', 'images/FRFL/FRFLPLA.jpg', 'null', 'Plain', true, ba_fl, [6, 0, 0]),
    new ThumbObject('PTO', 'images/FRFL/FRFLPTO.jpg', 'null', 'Pointed Toe Cap', true, ba_fl, [6, 0, 1]),
    new ThumbObject('TOE', 'images/FRFL/FRFLTOE.jpg', 'null', 'Toe Cap', true, ba_fl, [6, 0, 2]),
    new ThumbObject('PAN', 'images/FRFL/FRFLPAN.jpg', 'null', 'Panneled', true, ba_fl, [6, 0, 3]),
    new ThumbObject('PPT', 'images/FRFL/FRFLPPT.jpg', 'null', 'Panneled Pointed Toe Cap', true, ba_fl, [6, 0, 4]),
    new ThumbObject('PTC', 'images/FRFL/FRFLPTC.jpg', 'null', 'Panneled Toe Cap', true, ba_fl, [6, 0, 5])
]


//HEELS
var he_pc = [
    new ThumbObject('225KI', 'images/HEPC/HEPCPLA225KI.jpg', 'obj/PC/PC225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_pc, [0, 0, 0]),
    new ThumbObject('300AH', 'images/HEPC/HEPCPLA300AH.jpg', 'obj/PC/PC300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_pc, [0, 1, 0]),
    new ThumbObject('300CO', 'images/HEPC/HEPCPLA300CO.jpg', 'obj/PC/PC300COPLAPL.obj', '3&quot; Cone Heel', true, fr_pc, [0, 2, 0]),
    new ThumbObject('375AH', 'images/HEPC/HEPCPLA375AH.jpg', 'obj/PC/PC375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_pc, [0, 3, 0]),
    new ThumbObject('375BH', 'images/HEPC/HEPCPLA375BH.jpg', 'obj/PC/PC375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_pc, [0, 4, 0])
];

var he_ph = [
    new ThumbObject('225KI', 'images/HEPH/HEPHPLA225KI.jpg', 'obj/PH/PH225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_ph, [1, 0, 0]),
    new ThumbObject('300AH', 'images/HEPH/HEPHPLA300AH.jpg', 'obj/PH/PH300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_ph, [1, 1, 0]),
    new ThumbObject('300CO', 'images/HEPH/HEPHPLA300CO.jpg', 'obj/PH/PH300COPLAPL.obj', '3&quot; Cone Heel', true, fr_ph, [1, 2, 0]),
    new ThumbObject('375AH', 'images/HEPH/HEPHPLA375AH.jpg', 'obj/PH/PH375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_ph, [1, 3, 0]),
    new ThumbObject('375BH', 'images/HEPH/HEPHPLA375BH.jpg', 'obj/PH/PH375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_ph, [1, 4, 0])
];

var he_po = [
    new ThumbObject('225KI', 'images/HEPO/HEPOPLA225KI.jpg', 'obj/PO/PO225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_po, [2, 0, 0]),
    new ThumbObject('300AH', 'images/HEPO/HEPOPLA300AH.jpg', 'obj/PO/PO300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_po, [2, 1, 0]),
    new ThumbObject('300CO', 'images/HEPO/HEPOPLA300CO.jpg', 'obj/PO/PO300COPLAPL.obj', '3&quot; Cone Heel', true, fr_po, [2, 2, 0]),
    new ThumbObject('375AH', 'images/HEPO/HEPOPLA375AH.jpg', 'obj/PO/PO375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_po, [2, 3, 0]),
    new ThumbObject('375BH', 'images/HEPO/HEPOPLA375BH.jpg', 'obj/PO/PO375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_po, [2, 4, 0])
];

var he_ac = [
    new ThumbObject('225KI', 'images/HEAC/HEACPLA225KI.jpg', 'obj/AC/AC225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_ac, [3, 0, 0]),
    new ThumbObject('300AH', 'images/HEAC/HEACPLA300AH.jpg', 'obj/AC/AC300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_ac, [3, 1, 0]),
    new ThumbObject('300CO', 'images/HEAC/HEACPLA300CO.jpg', 'obj/AC/AC300COPLAPL.obj', '3&quot; Cone Heel', true, fr_ac, [3, 2, 0]),
    new ThumbObject('350AH', 'images/HEAC/HEACPLA350AH.jpg', 'obj/AC/AC350AHPLAPL.obj', '3.5&quot; Platform Stiletto Heel', true, fr_ac, [3, 3, 0]),
    new ThumbObject('350BH', 'images/HEAC/HEACPLA350BH.jpg', 'obj/AC/AC350BHPLAPL.obj', '3.5&quot; Platform Block Heel', true, fr_ac, [3, 4, 0]),
    new ThumbObject('375AH', 'images/HEAC/HEACPLA375AH.jpg', 'obj/AC/AC375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_ac, [3, 5, 0]),
    new ThumbObject('375BH', 'images/HEAC/HEACPLA375BH.jpg', 'obj/AC/AC375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_ac, [3, 6, 0]),
    new ThumbObject('450AH', 'images/HEAC/HEACPLA450AH.jpg', 'obj/AC/AC450AHPLAPL.obj', '4.5&quot; Platform Stiletto Heel', true, fr_ac, [3, 7, 0]),
    new ThumbObject('450BH', 'images/HEAC/HEACPLA450BH.jpg', 'obj/AC/AC450BHPLAPL.obj', '4.5&quot; Platform Block Heel', true, fr_ac, [3, 8, 0])
];

var he_pe = [
    new ThumbObject('225KI', 'images/HEPE/HEPEPEE225KI.jpg', 'obj/PE/PE225KIPLAPL.obj', '2.25&quot; Kitten Heel', true, fr_pe, [4, 0, 0]),
    new ThumbObject('300AH', 'images/HEPE/HEPEPEE300AH.jpg', 'obj/PE/PE300AHPLAPL.obj', '3&quot; Stiletto Heel', true, fr_pe, [4, 1, 0]),
    new ThumbObject('300CO', 'images/HEPE/HEPEPEE300CO.jpg', 'obj/PE/PE300COPLAPL.obj', '3&quot; Cone Heel', true, fr_pe, [4, 2, 0]),
    new ThumbObject('350AH', 'images/HEPE/HEPEPEE350AH.jpg', 'obj/PE/PE350AHPLAPL.obj', '3.5&quot; Platform Stiletto Heel', true, fr_pe, [4, 3, 0]),
    new ThumbObject('350AH', 'images/HEPE/HEPEPEE350BH.jpg', 'obj/PE/PE350BHPLAPL.obj', '3.5&quot; Platform Block Heel', true, fr_pe, [4, 4, 0]),
    new ThumbObject('375BH', 'images/HEPE/HEPEPEE375AH.jpg', 'obj/PE/PE375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true, fr_pe, [4, 5, 0]),
    new ThumbObject('375BH', 'images/HEPE/HEPEPEE375BH.jpg', 'obj/PE/PE375BHPLAPL.obj', '3.75&quot; Block Heel', true, fr_pe, [4, 6, 0]),
    new ThumbObject('450AH', 'images/HEPE/HEPEPEE450AH.jpg', 'obj/PE/PE450AHPLAPL.obj', '4.5&quot; Platform Stiletto Heel', true, fr_pe, [4, 7, 0]),
    new ThumbObject('450BH', 'images/HEPE/HEPEPEE450BH.jpg', 'obj/PE/PE450BHPLAPL.obj', '4.5&quot; Platform Block Heel', true, fr_pe, [4, 8, 0])
];

var he_sa = [
    new ThumbObject('225KI', 'images/HESA/HESASTR225KI.jpg', 'obj/SA/SA225KIPLACB.obj', '2.25&quot; Kitten Heel', true, fr_sa, [5, 0, 0]),
    new ThumbObject('300AH', 'images/HESA/HESASTR300AH.jpg', 'obj/SA/SA300AHPLACB.obj', '3&quot; Stiletto Heel', true, fr_sa, [5, 1, 0]),
    new ThumbObject('300CO', 'images/HESA/HESASTR300CO.jpg', 'obj/SA/SA300COPLACB.obj', '3&quot; Cone Heel', true, fr_sa, [5, 2, 0]),
    new ThumbObject('350AH', 'images/HESA/HESASTR350AH.jpg', 'obj/SA/SA350AHPLACB.obj', '3.5&quot; Platform Stiletto Heel', true, fr_sa, [5, 3, 0]),
    new ThumbObject('350BH', 'images/HESA/HESASTR350BH.jpg', 'obj/SA/SA350BHPLACB.obj', '3.5&quot; Platform Block Heel', true, fr_sa, [5, 4, 0]),
    new ThumbObject('375AH', 'images/HESA/HESASTR375AH.jpg', 'obj/SA/SA375AHPLACB.obj', '3.75&quot; Stiletto Heel', true, fr_sa, [5, 5, 0]),
    new ThumbObject('375BH', 'images/HESA/HESASTR375BH.jpg', 'obj/SA/SA375BHPLACB.obj', '3.75&quot; Block Heel', true, fr_sa, [5, 6, 0]),
    new ThumbObject('450AH', 'images/HESA/HESASTR450AH.jpg', 'obj/SA/SA450AHPLACB.obj', '4.5&quot; Platform Stiletto Heel', true, fr_sa, [5, 7, 0]),
    new ThumbObject('450BH', 'images/HESA/HESASTR450BH.jpg', 'obj/SA/SA450BHPLACB.obj', '4.5&quot; Platform Block Heel', true, fr_sa, [5, 8, 0])
];

var he_fl = [
    new ThumbObject('025FL', 'images/HEFL/HEFLPLA.jpg', 'obj/FL/FL025FLPLAPL.obj', '0.25&quot; Flat Heel', true, fr_fl, [6, 0, 0])
];

//Core Shapes
var cs = [
    new ThumbObject('PC', 'images/CS/CSPCPLA.jpg', 'obj/PC/PC300AHPLAPL.obj', 'Pointed Court', true, he_pc, [0, 0, 0]),
    new ThumbObject('PH', 'images/CS/CSPHPLA.jpg', 'obj/PC/PH300AHPLAPL.obj', "Pointed Half D'Orsay", true, he_ph, [1, 0, 0]),
    new ThumbObject('PO', 'images/CS/CSPOPLA.jpg', 'obj/PC/PO300AHPLACB.obj', 'Pointed Court Open', true, he_po, [2, 0, 0]),
    new ThumbObject('AC', 'images/CS/CSACPLA.jpg', 'obj/PC/AC300AHPLAPL.obj', 'Round Toe Court', true, he_ac, [3, 0, 0]),
    new ThumbObject('PE', 'images/CS/CSACPEE.jpg', 'obj/PC/PE300SAPLAPL.obj', 'Peep Toe Court', true, he_pe, [4, 0, 0]),
    new ThumbObject('SA', 'images/CS/CSSASTR.jpg', 'obj/PC/SA300SAPLAOB.obj', 'Sandals', false, he_sa, [5, 0, 0]),
    new ThumbObject('FL', 'images/CS/CSFLPLA.jpg', 'obj/PC/FL025FLPLAPL.obj', 'Ballet Flats', true, he_fl, [6, 0, 0])
];



var em = [
    new ThumbObject('BB', 'images/STEM/EMBB.jpg', 'null', "Big Bow", true),
    new ThumbObject('GE', 'images/STEM/EMGE.jpg', 'null', "Gem", true)
];
//not available for SA Core shape