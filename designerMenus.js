//Generate HTML function 
var figureStart = '<figure class="col-xs-3 col-sm-4 col-md-3 shoe-thumb">';
var figureEnd = '</figure>';

function thumbSingle(object) {
    var imgText = "<img src='" + object.imgSrc + "' alt='" + object.tooltip + "' obj='" + object.objSrc + "' selection='" + object.selection + "'>";
    var text = figureStart + imgText + figureEnd;
    return text;
}

function thumbMany(thumbArray, menuText) {
    var wholeText = "<div><button type='button' class='btn btn-secondary btn-lg btn-block'>" + menuText + "</button><div class='row'><div id='thumbCsDiv' class='col-xs-12 thumb-container'>"
    for (var i = 0; i < thumbArray.length; i++) {
        wholeText += thumbSingle(thumbArray[i]);
    }
    wholeText += "</div></div></div>"
    return wholeText;
}

// function redrawMenu(selection) {
// 	$('#shoeMenu').html(
//     	thumbMany(cs, 'Core Shape') + 
//     	thumbMany(cs[selection[0]].children, "Heels") 
//     	// thumbMany(cs[selection[0]].children[selection[1]].children, "Fronts") 
//     	// thumbMany(cs[selection[0]].children[3].children[2].children, "Backs")
//     );
// }

$(document).ready(function() {
    var redrawMenu = function(selection) {
    	//$('.thumb-container') //ARRAY WITH THE DISPLAY VALUES
        $('#shoeMenu').html(
            thumbMany(cs, 'Core Shape') +
            thumbMany(cs[selection[0]].children, "Heels") +
            thumbMany(cs[selection[0]].children[selection[1]].children, "Fronts") +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children, "Backs") +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children[selection[3]].children, "Straps") +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children[selection[3]].children[selection[4]].children, "Embellishments")
        );

        var thumb = $('#shoeMenu').find('img');
        thumb.click(function() {
            var selection = $(this).attr("selection");
            var selectionArray = selection.split(',').map(function(n) { return parseInt(n); });
            redrawMenu(selectionArray);
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