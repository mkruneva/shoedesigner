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