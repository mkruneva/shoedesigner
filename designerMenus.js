//jQ anim menu
var btns = $('#shoeMenu .btn');
$('.thumb-container:gt(0)').hide();

btns.click(function() {
    var div = $(this).parent().find('.thumb-container');
    if ((div[0]).style.display === 'none') {
        div.slideDown(500);
    } else {
        div.slideUp(500);
    }
});




//Initial values for OBJ path constructing functions
var csAbr, heAbr, frAbr, baArb;
csAbr = 'PC';
heAbr = '300AH';
frAbr = 'PLA';
baArb = 'PL';

//Inital value for thumbnail parh constructing functions
var step = 'CS';

//function for creating obj name after steps cs, he
function objPathFun(coreShapeAbr, heelAbr, frontArb, backAbr) {
    if (coreShapeAbr === 'SA') {
        backAbr = 'CB';
    }
    if ((frAbr == 'PAN') || (frAbr == 'PPT') || (frAbr == 'PTC')) {
        frontArb = 'PAN';
    }
    var objName = coreShapeAbr + heelAbr + frontArb + backAbr + '.obj';
    var objPath = coreShapeAbr + '/' + objName;
    return (objPath);
}
// var newObjPath = objPathFun(csAbr, heAbr, frAbr, baArb);
// console.log('newObjPath = ', newObjPath);



// //Thmbnails Path
// function thumbPathFunCs(menuStep, coreShapeAbr, heelAbr, frontArb, backAbr) {
// 	var thumbName = menuStep + coreShapeAbr + frontArb + '.jpg';
// 	var thumbPath = 'images/' + coreShapeAbr + '/' + thumbName;
// 	return thumbPath;
// }

// function thumbPathFunHe(menuStep, coreShapeAbr, heelAbr, frontArb, backAbr) {
// 	var thumbName = menuStep + coreShapeAbr + frontArb + heelAbr + '.jpg';
// 	var thumbPath = 'images/' + menuStep + coreShapeAbr + '/' + thumbName;
// 	return thumbPath;
// }

// function thumbPathFunFr(menuStep, coreShapeAbr, heelAbr, frontArb, backAbr) {
// 	var thumbName = menuStep + coreShapeAbr + frontArb + '300AH' + '.jpg';
// 	var thumbPath = 'images/' + menuStep + coreShapeAbr + '/' + thumbName;
// 	return thumbPath;
// }

// function thumbPathFunBa(menuStep, coreShapeAbr, heelAbr, frontArb, backAbr) {
// 	var backType;
// 	if ((coreShapeAbr === 'PC')||(coreShapeAbr === 'PH')||(coreShapeAbr === 'PE')||(coreShapeAbr === 'AC')) {
// 		backType = 'CB';
// 	} else if ((coreShapeAbr === 'SA')||(coreShapeAbr === 'PO')) {
// 		backType = 'OB';
// 	} else if (coreShapeAbr === 'FL') {
// 		backType = 'FL';
// 	}
// 	var thumbName = menuStep + backType + backAbr + '.jpg';
// 	var thumbPath = 'images/' + menuStep + '/' + thumbName;
// 	return thumbPath;
// }
// var newPathBa = thumbPathFunBa('BA', 'SA', heAbr, frAbr, baArb);
// console.log('newPathBa = ', newPathBa);




//Menu objects and arrays
function ThumbObject(abr, imgSrc, objSrc, tooltip, enabled, children) {
    this.abr = abr;
    this.imgSrc = imgSrc;
    this.objSrc = objSrc;
    this.tooltip = tooltip;
    this.enabled = enabled;
    this.children = children;
}

//HEELS
var he_pc = [
    new ThumbObject('225KI', 'images/HEPC/HEPCPLA225KI.jpg', 'obj/PC/PC225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
    new ThumbObject('300AH', 'images/HEPC/HEPCPLA300AH.jpg', 'obj/PC/PC300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
    new ThumbObject('300CO', 'images/HEPC/HEPCPLA300CO.jpg', 'obj/PC/PC300COPLAPL.obj', '3&quot; Cone Heel', true),
    new ThumbObject('375AH', 'images/HEPC/HEPCPLA375AH.jpg', 'obj/PC/PC375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
    new ThumbObject('375BH', 'images/HEPC/HEPCPLA375BH.jpg', 'obj/PC/PC375BHPLAPL.obj', '3.75&quot; Block Heel', true)
];

var he_ph = [
    new ThumbObject('225KI', 'images/HEPH/HEPHPLA225KI.jpg', 'obj/PH/PH225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
    new ThumbObject('300AH', 'images/HEPH/HEPHPLA300AH.jpg', 'obj/PH/PH300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
    new ThumbObject('300CO', 'images/HEPH/HEPHPLA300CO.jpg', 'obj/PH/PH300COPLAPL.obj', '3&quot; Cone Heel', true),
    new ThumbObject('375AH', 'images/HEPH/HEPHPLA375AH.jpg', 'obj/PH/PH375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
    new ThumbObject('375BH', 'images/HEPH/HEPHPLA375BH.jpg', 'obj/PH/PH375BHPLAPL.obj', '3.75&quot; Block Heel', true)
];

var he_po = [
    new ThumbObject('225KI', 'images/HEPO/HEPOPLA225KI.jpg', 'obj/PO/PO225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
    new ThumbObject('300AH', 'images/HEPO/HEPOPLA300AH.jpg', 'obj/PO/PO300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
    new ThumbObject('300CO', 'images/HEPO/HEPOPLA300CO.jpg', 'obj/PO/PO300COPLAPL.obj', '3&quot; Cone Heel', true),
    new ThumbObject('375AH', 'images/HEPO/HEPOPLA375AH.jpg', 'obj/PO/PO375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
    new ThumbObject('375BH', 'images/HEPO/HEPOPLA375BH.jpg', 'obj/PO/PO375BHPLAPL.obj', '3.75&quot; Block Heel', true)
];

var he_ac = [
    new ThumbObject('225KI', 'images/HEAC/HEACPLA225KI.jpg', 'obj/AC/AC225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
    new ThumbObject('300AH', 'images/HEAC/HEACPLA300AH.jpg', 'obj/AC/AC300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
    new ThumbObject('300CO', 'images/HEAC/HEACPLA300CO.jpg', 'obj/AC/AC300COPLAPL.obj', '3&quot; Cone Heel', true),
    new ThumbObject('350AH', 'images/HEAC/HEACPLA350AH.jpg', 'obj/AC/AC350AHPLAPL.obj', '3.5&quot; Platform Stiletto Heel', true),
    new ThumbObject('350BH', 'images/HEAC/HEACPLA350BH.jpg', 'obj/AC/AC350BHPLAPL.obj', '3.5&quot; Platform Block Heel', true),
    new ThumbObject('375AH', 'images/HEAC/HEACPLA375AH.jpg', 'obj/AC/AC375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
    new ThumbObject('375BH', 'images/HEAC/HEACPLA375BH.jpg', 'obj/AC/AC375BHPLAPL.obj', '3.75&quot; Block Heel', true),
    new ThumbObject('450AH', 'images/HEAC/HEACPLA450AH.jpg', 'obj/AC/AC450AHPLAPL.obj', '4.5&quot; Platform Stiletto Heel', true),
    new ThumbObject('450BH', 'images/HEAC/HEACPLA450BH.jpg', 'obj/AC/AC450BHPLAPL.obj', '4.5&quot; Platform Block Heel', true)
];

var he_pe = [
    new ThumbObject('225KI', 'images/HEAC/HEACPEE225KI.jpg', 'obj/PE/PE225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
    new ThumbObject('300AH', 'images/HEAC/HEACPEE300AH.jpg', 'obj/PE/PE300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
    new ThumbObject('300CO', 'images/HEAC/HEACPEE300CO.jpg', 'obj/PE/PE300COPLAPL.obj', '3&quot; Cone Heel', true),
    new ThumbObject('350AH', 'images/HEAC/HEACPEE350AH.jpg', 'obj/PE/PE350AHPLAPL.obj', '3.5&quot; Platform Stiletto Heel', true),
    new ThumbObject('350AH', 'images/HEAC/HEACPEE350BH.jpg', 'obj/PE/PE350BHPLAPL.obj', '3.5&quot; Platform Block Heel', true),
    new ThumbObject('375BH', 'images/HEAC/HEACPEE375AH.jpg', 'obj/PE/PE375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
    new ThumbObject('375BH', 'images/HEAC/HEACPEE375BH.jpg', 'obj/PE/PE375BHPLAPL.obj', '3.75&quot; Block Heel', true),
    new ThumbObject('450AH', 'images/HEAC/HEACPEE450AH.jpg', 'obj/PE/PE450AHPLAPL.obj', '4.5&quot; Platform Stiletto Heel', true),
    new ThumbObject('450BH', 'images/HEAC/HEACPEE450BH.jpg', 'obj/PE/PE450BHPLAPL.obj', '4.5&quot; Platform Block Heel', true)
];

var he_sa = [
    new ThumbObject('225KI', 'images/HESA/HESASTR225KI.jpg', 'obj/SA/SA225KIPLACB.obj', '2.25&quot; Kitten Heel', true),
    new ThumbObject('300AH', 'images/HESA/HESASTR300AH.jpg', 'obj/SA/SA300AHPLACB.obj', '3&quot; Stiletto Heel', true),
    new ThumbObject('300CO', 'images/HESA/HESASTR300CO.jpg', 'obj/SA/SA300COPLACB.obj', '3&quot; Cone Heel', true),
    new ThumbObject('350AH', 'images/HESA/HESASTR350AH.jpg', 'obj/SA/SA350AHPLACB.obj', '3.5&quot; Platform Stiletto Heel', true),
    new ThumbObject('350BH', 'images/HESA/HESASTR350BH.jpg', 'obj/SA/SA350BHPLACB.obj', '3.5&quot; Platform Block Heel', true),
    new ThumbObject('375AH', 'images/HESA/HESASTR375AH.jpg', 'obj/SA/SA375AHPLACB.obj', '3.75&quot; Stiletto Heel', true),
    new ThumbObject('375BH', 'images/HESA/HESASTR375BH.jpg', 'obj/SA/SA375BHPLACB.obj', '3.75&quot; Block Heel', true),
    new ThumbObject('450AH', 'images/HESA/HESASTR450AH.jpg', 'obj/SA/SA450AHPLACB.obj', '4.5&quot; Platform Stiletto Heel', true),
    new ThumbObject('450BH', 'images/HESA/HESASTR450BH.jpg', 'obj/SA/SA450BHPLACB.obj', '4.5&quot; Platform Block Heel', true)
];

var he_fl = [
    new ThumbObject('025FL', 'images/HEFL/HEFLPLA.jpg', 'obj/FL/FL025FLPLAPL.obj', '0.25&quot; Flat Heel', true)
];

//Core Shapes
var cs = [
    new ThumbObject('PC', 'images/CS/CSPCPLA.jpg', 'obj/PC/PC300AHPLAPL.obj', 'Pointed Court', true, he_pc),
    new ThumbObject('PH', 'images/CS/CSPHPLA.jpg', 'obj/PC/PH300AHPLAPL.obj', "Pointed Half D'Orsay", true, he_ph),
    new ThumbObject('PO', 'images/CS/CSPOPLA.jpg', 'obj/PC/PO300AHPLACB.obj', 'Pointed Court Open', true, he_po),
    new ThumbObject('AC', 'images/CS/CSACPLA.jpg', 'obj/PC/AC300AHPLAPL.obj', 'Round Toe Court', true, he_ac),
    new ThumbObject('PE', 'images/CS/CSACPEE.jpg', 'obj/PC/PE300SAPLAPL.obj', 'Peep Toe Court', true, he_pe),
    new ThumbObject('SA', 'images/CS/CSSASTR.jpg', 'obj/PC/SA300SAPLAOB.obj', 'Sandals', false, he_sa),
    new ThumbObject('FL', 'images/CS/CSFLPLA.jpg', 'obj/PC/FL025FLPLAPL.obj', 'Ballet Flats', true, he_fl)
];


//FRONTS
var fr_pc = [
    new ThumbObject('PLA', 'images/FRPC/FRPCPLA300AH.jpg', 'null', 'Plain', true),
    new ThumbObject('PTO', 'images/FRPC/FRPCPTO300AH.jpg', 'null', 'Pointed Toe Cap', true),
    new ThumbObject('TOE', 'images/FRPC/FRPCTOE300AH.jpg', 'null', 'Toe Cap', true),
    new ThumbObject('PAN', 'images/FRPC/FRPCPAN300AH.jpg', 'null', 'Panneled', true),
    new ThumbObject('PPT', 'images/FRPC/FRPCPPT300AH.jpg', 'null', 'Panneled Pointed Toe Cap', true),
    new ThumbObject('PTC', 'images/FRPC/FRPCPTC300AH.jpg', 'null', 'Panneled Toe Cap', true)
];

var fr_ac = [
    new ThumbObject('PLA', 'images/FRAC/FRACPLA300AH.jpg', 'null', 'Plain', true),
    new ThumbObject('PTO', 'images/FRAC/FRACPTO300AH.jpg', 'null', 'Pointed Toe Cap', true),
    new ThumbObject('TOE', 'images/FRAC/FRACTOE300AH.jpg', 'null', 'Toe Cap', true),
    new ThumbObject('PAN', 'images/FRAC/FRACPAN300AH.jpg', 'null', 'Panneled', true),
    new ThumbObject('PPT', 'images/FRAC/FRACPPT300AH.jpg', 'null', 'Panneled Pointed Toe Cap', true),
    new ThumbObject('PTC', 'images/FRAC/FRACPTC300AH.jpg', 'null', 'Panneled Toe Cap', true)
];

var fr_sa = [
    new ThumbObject('STR', 'images/FRSA/FRSASTR300AH.jpg', 'null', 'Toe Cap', true),
    new ThumbObject('PSA', 'images/FRSA/FRSAPSA300AH.jpg', 'null', 'Toe Cap', true),
    new ThumbObject('COP', 'images/FRSA/FRSACOP300AH.jpg', 'null', 'Plain', true),
    new ThumbObject('GLA', 'images/FRSA/FRSAGLA300AH.jpg', 'null', 'Pointed Toe Cap', true)
];

// FL - the same as PC and AC
//.PH - only PLA
// PO - only PLA Plain

//BACKS
//The obj file doesn't change - only meshes are show/hidden
var ba_cb = [
    new ThumbObject('PL', 'images/BA/BACBPL.jpg', 'null', 'Plain Back', true),
    new ThumbObject('PH', 'images/BA/BACBPH.jpg', 'null', 'Pointed Heel Counter', true),
    new ThumbObject('SH', 'images/BA/BACBSH.jpg', 'null', 'Strip Heel Counter', true)
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
    new ThumbObject('TK', 'images/BA/BAOBTK.jpg', 'null', 'High Back (Thick Strap)', true),
    new ThumbObject('TN', 'images/BA/BAOBTN.jpg', 'null', 'High Back (Thin Strap)', true),
    new ThumbObject('TT', 'images/BA/BAOBTT.jpg', 'null', 'High Back (Double Strap)', true)
];
// OB backs available for SA and PO core shape

//STRAPS
var st = [
    new ThumbObject('BI', 'images/STEM/STBI.jpg', 'null', "Bib", true),
    new ThumbObject('LS', 'images/STEM/STLS.jpg', 'null', "Low Strap", true),
    new ThumbObject('MJ', 'images/STEM/STMJ.jpg', 'null', "Mary Jane", true),
    new ThumbObject('TB', 'images/STEM/STTB.jpg', 'null', "T bar", true),
    new ThumbObject('TK', 'images/STEM/STTK.jpg', 'null', "Ankle Strap Thick", true),
    new ThumbObject('TN', 'images/STEM/STTN.jpg', 'null', "Ankle Strap Thin", true)
];
// available for PC, PH, PO, AC core shape only 

var em = [
    new ThumbObject('BB', 'images/STEM/EMBB.jpg', 'null', "Big Bow", true),
    new ThumbObject('GE', 'images/STEM/EMGE.jpg', 'null', "Gem", true)
];
//not available for SA Core shape



//Generate HTML function 
var figureStart = '<figure class="col-xs-3 col-sm-4 col-md-3 shoe-thumb">';
var figureEnd = '</figure>';

function thumbSingle(object) {
    var imgText = "<img src='" + object.imgSrc + "' alt='" + object.tooltip + "'>";
    var text = figureStart + imgText + figureEnd;
    return text;
}

function thumbMany(thumbArray, menuText) {
    var wholeText = "<div><button type='button' class='btn btn-secondary btn-lg btn-block'>" + menuText + "</button><div class='row'><div id='thumbCsDiv' class='col-xs-12 thumb-container'>"
    for (var i = 0; i < thumbArray.length; i++) {
        wholeText += thumbSingle(thumbArray[i]);
    }
    wholeText += "</div></div></div>"
    console.log(wholeText);
    return wholeText;
}



thumbMany(he_ac);

$(document).ready(function() {
    // body...
});