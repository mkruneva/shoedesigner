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


// Dependencies : 
// FRONTS: 
// 'PT1' clicked -> 'TO1' hidden
// 'TO1' clicked -> 'PT1' hidden

// 'ST1,ST1LI' clicked -> 'PS1,PS1L,PS2,PS3', 'CO1,CO2,CO1LI,CO2LI' hidden
// 'PS1,PS1L,PS2,PS3' clicked -> 'ST1,ST1LI', 'CO1,CO2,CO1LI,CO2LI' hidden
// 'CO1,CO2,CO1LI,CO2LI' clicked -> 'ST1,ST1LI', 'PS1,PS1L,PS2,PS3' hidden

// BACKS:
// 'PH1' clicked -> 'SH1' hidden
// 'SH1' clicked -> 'PH1' hidden

// Only one can be selected: 
// 'DO1,DO1HG'
// 'LC1,LC1LI'
// 'TN1,TN1LI,TN1HG,TN1BK,TN2,TN3'
// 'TT1,TT2,TT3,TT4,TT5,TT1LI,TT1HG,TT1BK,TT2B'
// 'TK1,TK1LI,TK1'
// 'TK1,TK1LI,TK1HG,TK1BK,TK2,TK3'