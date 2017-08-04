//Generate HTML function 
var figureStart = '<figure class="col-xs-3 col-sm-4 col-md-3 shoe-thumb">';
var figureEnd = '</figure>';

function thumbSingle(object) {
    var imgText = "<img src='" + object.imgSrc + "' abr = '" + object.abr + "'' alt='" + object.tooltip + "' obj='" + object.objSrc + "' selection='" + object.selection + "'>";
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

// Initial obj file
var objPathName = 'obj/PC/PC300AHPLAPL.obj';

$(document).ready(function() {
    var redrawMenu = function(selection) {

        var displ = $('.thumb-container').map((i, e) => e.style.display).toArray(); //display style to be redrawn each time

        $('#shoeMenu').html(
            thumbMany(cs, 'Core Shape') +
            thumbMany(cs[selection[0]].children, "Heels") +
            thumbMany(cs[selection[0]].children[selection[1]].children, "Fronts") +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children, "Backs") +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children[selection[3]].children, "Straps") +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children[selection[3]].children[selection[4]].children, "Embellishments")
        );

        $('.thumb-container').each((i, e) => e.style.display = displ[i]); //display style to be redrawn each time

        var thumb = $('#shoeMenu').find('img');
        thumb.click(function() {
            var selection = $(this).attr("selection");
            var selectionArray = selection.split(',').map(function(n) { return parseInt(n); });
            redrawMenu(selectionArray);

            if ($(this).attr("obj") != window.marty.obj.name) {
                if ($(this).attr("obj") !== 'null') {
                    objPathName = $(this).attr("obj");
                    window.marty.scene.remove(window.marty.obj);
                    window.marty.loadObject(objPathName);
                } else {
                    objAbr = $(this).attr("abr").split(',');
                    console.log('objAbr is ', objAbr);
                    var object = window.marty.obj;

                    object.traverse(function(child) {
                        if (child instanceof THREE.Mesh) {
                            for (var i = 0; i < objAbr.length; i++) {
                                if (child.name == objAbr[i]) {
                                    child.visible ^= true;
                                }
                            }
                            // the previously added mesh should be removed before loading new one
                            child.castShadow = true;
                        }
                    });
                }

            }

        });

        //jQ anim menu
        var btns = $('#shoeMenu .btn');
        btns.click(function() {
            var div = $(this).parent().find('.thumb-container');
            if ((div[0]).style.display === 'none') {
                div.slideDown(400);
            } else {
                div.slideUp(400);
            }
        });
    }

    redrawMenu([0, 0, 0, 0, 0]);
    $('.thumb-container:gt(0)').hide();

});