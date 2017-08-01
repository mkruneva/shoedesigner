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

//Menu objects and arrays
function ThumbObject(abr, img, obj, tooltip, on) {
	this.abreviation = abr;
	this.imgSrc = img;
	this.objSrc = obj;
	this.toolTipText = tooltip;
	this.enabled = on;
}

//Initial values for OBJ path constructing functions
var csAbr, heAbr, frAbr, bcAbr;
csAbr = 'PC'; 
heAbr = '300AH';
frAbr = 'PLA';
bcAbr = 'PL';

//function for creating obj name after steps cs, he
function heObjPath(coreShapeAbr, heelAbr, frontArb, backAbr) {
	if (coreShapeAbr === 'SA') {
		backAbr = 'CB';
	}
	if ((frAbr=='PAN')||(frAbr=='PPT')||(frAbr=='PTC')) {
		frontArb = 'PAN';
	}
	var objName = coreShapeAbr + heelAbr + frontArb + backAbr + '.obj';
	var objPath = coreShapeAbr + '/' + objName;
	return(objPath);
}

var newObjPath = heObjPath(csAbr, heAbr, frAbr, bcAbr);
console.log(newObjPath);


//Core Shapes
var cs = [
	new ThumbObject('PC', 'images/CS/CSPCPLA.jpg', 'obj/PC/PC300AHPLAPL.obj', 'Pointed Toe', true),
	new ThumbObject('PH', 'images/CS/CSPHPLA.jpg', 'obj/PC/PH300AHPLAPL.obj', "Pointed Half D'Orsay", true),
 	new ThumbObject('PO', 'images/CS/CSPOPLA.jpg', 'obj/PC/PO300AHPLACB.obj', 'Pointed Open', true),
	new ThumbObject('AC', 'images/CS/CSACPLA.jpg', 'obj/PC/AC300AHPLAPL.obj', 'Rounded Toe', true),
	new ThumbObject('PE', 'images/CS/CSACPEE.jpg', 'obj/PC/PE300SAPLAPL.obj', 'Peep Toe', true),
	new ThumbObject('SA', 'images/CS/CSSASTR.jpg', 'obj/PC/SA300SAPLAOB.obj', 'Sandals', false),
	new ThumbObject('FL', 'images/CS/CSFLPLA.jpg', 'obj/PC/FL025FLPLAPL.obj', 'Ballet Flats', true)
 ];

//HEELS


var he_pc = [
	new ThumbObject('225KI', 'images/HEPCPLA/HEPCPLA225KI.jpg', 'obj/PC/PC225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
	new ThumbObject('300AH', 'images/HEPCPLA/HEPCPLA300AH.jpg', 'obj/PC/PC300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
	new ThumbObject('300CO', 'images/HEPCPLA/HEPCPLA300CO.jpg', 'obj/PC/PC300COPLAPL.obj', '3&quot; Cone Heel', true),
	new ThumbObject('375AH', 'images/HEPCPLA/HEPCPLA375AH.jpg', 'obj/PC/PC375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
	new ThumbObject('375BH', 'images/HEPCPLA/HEPCPLA375BH.jpg', 'obj/PC/PC375BHPLAPL.obj', '3.75&quot; Block Heel', true)
];

var he_ph = [
	new ThumbObject('225KI', 'images/HEPHPLA/HEPHPLA225KI.jpg', 'obj/PH/PH225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
	new ThumbObject('300AH', 'images/HEPHPLA/HEPHPLA300AH.jpg', 'obj/PH/PH300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
	new ThumbObject('300CO', 'images/HEPHPLA/HEPHPLA300CO.jpg', 'obj/PH/PH300COPLAPL.obj', '3&quot; Cone Heel', true),
	new ThumbObject('375AH', 'images/HEPHPLA/HEPHPLA375AH.jpg', 'obj/PH/PH375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
	new ThumbObject('375BH', 'images/HEPHPLA/HEPHPLA375BH.jpg', 'obj/PH/PH375BHPLAPL.obj', '3.75&quot; Block Heel', true)
];

var he_po = [
	new ThumbObject('225KI', 'images/HEPOPLA/HEPOPLA225KI.jpg', 'obj/PO/PO225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
	new ThumbObject('300AH', 'images/HEPOPLA/HEPOPLA300AH.jpg', 'obj/PO/PO300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
	new ThumbObject('300CO', 'images/HEPOPLA/HEPOPLA300CO.jpg', 'obj/PO/PO300COPLAPL.obj', '3&quot; Cone Heel', true),
	new ThumbObject('375AH', 'images/HEPOPLA/HEPOPLA375AH.jpg', 'obj/PO/PO375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
	new ThumbObject('375BH', 'images/HEPOPLA/HEPOPLA375BH.jpg', 'obj/PO/PO375BHPLAPL.obj', '3.75&quot; Block Heel', true)
];

var he_ac = [
	new ThumbObject('225KI', 'images/HEACPLA/HEACPLA225KI.jpg', 'obj/AC/AC225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
	new ThumbObject('300AH', 'images/HEACPLA/HEACPLA300AH.jpg', 'obj/AC/AC300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
	new ThumbObject('300CO', 'images/HEACPLA/HEACPLA300CO.jpg', 'obj/AC/AC300COPLAPL.obj', '3&quot; Cone Heel', true),
	new ThumbObject('350AH', 'images/HEACPLA/HEACPLA350AH.jpg', 'obj/AC/AC350AHPLAPL.obj', '3.5&quot; Platform Stiletto Heel', true),
	new ThumbObject('350BH', 'images/HEACPLA/HEACPLA350BH.jpg', 'obj/AC/AC350BHPLAPL.obj', '3.5&quot; Platform Block Heel', true),
	new ThumbObject('375AH', 'images/HEACPLA/HEACPLA375AH.jpg', 'obj/AC/AC375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
	new ThumbObject('375BH', 'images/HEACPLA/HEACPLA375BH.jpg', 'obj/AC/AC375BHPLAPL.obj', '3.75&quot; Block Heel', true),
	new ThumbObject('450AH', 'images/HEACPLA/HEACPLA450AH.jpg', 'obj/AC/AC450AHPLAPL.obj', '4.5&quot; Platform Stiletto Heel', true),
	new ThumbObject('450BH', 'images/HEACPLA/HEACPLA450BH.jpg', 'obj/AC/AC450BHPLAPL.obj', '4.5&quot; Platform Block Heel', true)
];

var he_pe = [
	new ThumbObject('225KI', 'images/HEACPEE/HEACPEE225KI.jpg', 'obj/PE/PE225KIPLAPL.obj', '2.25&quot; Kitten Heel', true),
	new ThumbObject('300AH', 'images/HEACPEE/HEACPEE300AH.jpg', 'obj/PE/PE300AHPLAPL.obj', '3&quot; Stiletto Heel', true),
	new ThumbObject('300CO', 'images/HEACPEE/HEACPEE300CO.jpg', 'obj/PE/PE300COPLAPL.obj', '3&quot; Cone Heel', true),
	new ThumbObject('350AH', 'images/HEACPEE/HEACPEE350AH.jpg', 'obj/PE/PE350AHPLAPL.obj', '3.5&quot; Platform Stiletto Heel', true),
	new ThumbObject('350AH', 'images/HEACPEE/HEACPEE350BH.jpg', 'obj/PE/PE350BHPLAPL.obj', '3.5&quot; Platform Block Heel', true),
	new ThumbObject('375BH', 'images/HEACPEE/HEACPEE375AH.jpg', 'obj/PE/PE375AHPLAPL.obj', '3.75&quot; Stiletto Heel', true),
	new ThumbObject('375BH', 'images/HEACPEE/HEACPEE375BH.jpg', 'obj/PE/PE375BHPLAPL.obj', '3.75&quot; Block Heel', true),
	new ThumbObject('450AH', 'images/HEACPEE/HEACPEE450AH.jpg', 'obj/PE/PE450AHPLAPL.obj', '4.5&quot; Platform Stiletto Heel', true),
	new ThumbObject('450BH', 'images/HEACPEE/HEACPEE450BH.jpg', 'obj/PE/PE450BHPLAPL.obj', '4.5&quot; Platform Block Heel', true)
];

var he_sa = [
	new ThumbObject('225KI', 'images/HESASTR/HESASTR225KI.jpg', 'obj/SA/SA225KIPLACB.obj', '2.25&quot; Kitten Heel', true),
	new ThumbObject('300AH', 'images/HESASTR/HESASTR300AH.jpg', 'obj/SA/SA300AHPLACB.obj', '3&quot; Stiletto Heel', true),
	new ThumbObject('300CO', 'images/HESASTR/HESASTR300CO.jpg', 'obj/SA/SA300COPLACB.obj', '3&quot; Cone Heel', true),
	new ThumbObject('350AH', 'images/HESASTR/HESASTR350AH.jpg', 'obj/SA/SA350AHPLACB.obj', '3.5&quot; Platform Stiletto Heel', true),
	new ThumbObject('350BH', 'images/HESASTR/HESASTR350BH.jpg', 'obj/SA/SA350BHPLACB.obj', '3.5&quot; Platform Block Heel', true),
	new ThumbObject('375AH', 'images/HESASTR/HESASTR375AH.jpg', 'obj/SA/SA375AHPLACB.obj', '3.75&quot; Stiletto Heel', true),
	new ThumbObject('375BH', 'images/HESASTR/HESASTR375BH.jpg', 'obj/SA/SA375BHPLACB.obj', '3.75&quot; Block Heel', true),
	new ThumbObject('450AH', 'images/HESASTR/HESASTR450AH.jpg', 'obj/SA/SA450AHPLACB.obj', '4.5&quot; Platform Stiletto Heel', true),
	new ThumbObject('450BH', 'images/HESASTR/HESASTR450BH.jpg', 'obj/SA/SA450BHPLACB.obj', '4.5&quot; Platform Block Heel', true)
];

var he_fl = [
	new ThumbObject('025FL', 'images/HEFLPLA/HEFLPLA.jpg', 'obj/FL/FL025FLPLAPL.obj', '0.25&quot; Flat Heel', true)
];

var he = [he_pc, he_ph, he_po, he_ac, he_pe, he_sa, he_fl];


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


















