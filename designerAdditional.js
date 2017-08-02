// //Initial values for OBJ path constructing functions
// var csAbr, heAbr, frAbr, baArb;
// csAbr = 'PC';
// heAbr = '300AH';
// frAbr = 'PLA';
// baArb = 'PL';

// //Inital value for thumbnail parh constructing functions
// var step = 'CS';

// //function for creating obj name after steps cs, he
// function objPathFun(coreShapeAbr, heelAbr, frontArb, backAbr) {
//     if (coreShapeAbr === 'SA') {
//         backAbr = 'CB';
//     }
//     if ((frAbr == 'PAN') || (frAbr == 'PPT') || (frAbr == 'PTC')) {
//         frontArb = 'PAN';
//     }
//     var objName = coreShapeAbr + heelAbr + frontArb + backAbr + '.obj';
//     var objPath = coreShapeAbr + '/' + objName;
//     return (objPath);
// }
// var newObjPath = objPathFun(csAbr, heAbr, frAbr, baArb);
// console.log('newObjPath = ', newObjPath);

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
    new ThumbObject('PLA', 'images/FRPO/FRPOPLA300AH.jpg', 'null', 'Plain', true, ba_cb, [2, 0, 0])
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
    new ThumbObject('STR', 'images/FRSA/FRSASTR300AH.jpg', 'null', 'Toe Cap', true, ba_cb, [5, 0, 0]),
    new ThumbObject('PSA', 'images/FRSA/FRSAPSA300AH.jpg', 'null', 'Toe Cap', true, ba_cb, [5, 0, 1]),
    new ThumbObject('COP', 'images/FRSA/FRSACOP300AH.jpg', 'null', 'Plain', true, ba_cb, [5, 0, 2]),
    new ThumbObject('GLA', 'images/FRSA/FRSAGLA300AH.jpg', 'null', 'Pointed Toe Cap', true, ba_cb, [5, 0, 3])
];

var fr_fl = [
    new ThumbObject('PLA', 'images/FRFL/FRFLPLA.jpg', 'null', 'Plain', true, ba_fl, [6, 0, 0]),
    new ThumbObject('PTO', 'images/FRFL/FRFLPTO.jpg', 'null', 'Pointed Toe Cap', true, ba_fl, [6, 0, 1]),
    new ThumbObject('TOE', 'images/FRFL/FRFLTOE.jpg', 'null', 'Toe Cap', true, ba_fl, [6, 0, 2]),
    new ThumbObject('PAN', 'images/FRFL/FRFLPAN.jpg', 'null', 'Panneled', true, ba_fl, [6, 0, 3]),
    new ThumbObject('PPT', 'images/FRFL/FRFLPPT.jpg', 'null', 'Panneled Pointed Toe Cap', true, ba_fl, [6, 0, 4]),
    new ThumbObject('PTC', 'images/FRFL/FRFLPTC.jpg', 'null', 'Panneled Toe Cap', true, ba_fl, [6, 0, 5])
]