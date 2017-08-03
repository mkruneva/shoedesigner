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

$(document).ready(function() {
    var redrawMenu = function(selection) {
    	//var displ = $('.thumb-container').map((i, e) => e.style.display).toArray(); //display style to be redrawn each time
    	

        $('#shoeMenu').html(
            thumbMany(cs, 'Core Shape') +
            thumbMany(cs[selection[0]].children, "Heels") +
            thumbMany(cs[selection[0]].children[selection[1]].children, "Fronts") +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children, "Backs") +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children[selection[3]].children, "Straps") +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children[selection[3]].children[selection[4]].children, "Embellishments")
        );

        //$('.thumb-container').each((i, e) => e.style.display = displ[i]);  //display style to be redrawn each time

        //var thumbArray = $('.thumb-container');   // diplay only selected div 
        //var thumbArray = thumbArray.toArray(); 

        var thumb = $('#shoeMenu').find('img');
        thumb.click(function() {
            var selection = $(this).attr("selection");
            var selectionArray = selection.split(',').map(function(n) { return parseInt(n); });
            redrawMenu(selectionArray);

            var div = $(this).parents().find('.thumb-container');
            console.log('div is ' + div);
            console.log('thumbArray is ' + thumbArray);
            //console.log(thumbArray.indexOf(div));
            
       
        });

        //jQ anim menu
        var btns = $('#shoeMenu .btn');
        btns.click(function() {
            var div = $(this).parent().find('.thumb-container');
            if ((div[0]).style.display === 'none') {
                div.slideDown(500);
            } else {
                div.slideUp(500);
            }
        });
    }

    redrawMenu([0, 0, 0, 0, 0]);
    $('.thumb-container:gt(0)').hide();

});