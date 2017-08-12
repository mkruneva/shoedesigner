//Hiding the Canvas Material Buttons
$('#canvasButtons').hide();

//Generate HTML function 
var figureStart = '<figure class="col-xs-3 col-sm-4 col-md-3 shoe-thumb">';
var figureEnd = '</figure>';

function thumbSingle(object, selected) {
    var selectedClass = '';
    if (selected) {
        selectedClass = 'selected';
    }
    var imgText = "<img src='" + object.imgSrc + "' abr = '" + object.abr + "'' alt='" + object.tooltip + "' obj='" + object.objSrc + "' selection='" + object.selection + "' class='" + selectedClass + "'>";
    var text = figureStart + imgText + figureEnd;
    return text;
}

function thumbMany(thumbArray, menuText, selectedIndex) {
    var wholeText = "<div><button type='button' class='btn btn-secondary btn-lg btn-block'>" + menuText + "</button><div class='row'><div id='thumbCsDiv' class='col-xs-12 thumb-container'>"
    for (var i = 0; i < thumbArray.length; i++) {
        wholeText += thumbSingle(thumbArray[i], i === selectedIndex);
    }
    wholeText += "</div></div></div>"
    return wholeText;
}

// Initial obj file
var objPathName = 'obj/PC/PC300AHPLAPL.obj';



//Generate HTML function 
var figureSwatchStart = '<figure class="col-xs-2 col-sm-3 col-md-2 shoe-thumb">';
var figureSwatchEnd = '</figure>';

function swatchSingle(object, selected) {
    var selectedClass = '';
    if (selected) {
        selectedClass = 'selected';
    }
    var imgText = "<img src='" + object.imgSrc + "' abr = '" + object.abr + "'' matName='" + object.matName + "'>";
    var text = figureSwatchStart + imgText + figureSwatchEnd;
    return text;
}

function swatchMany(swatchArray, menuText) {
    var wholeText = "<div><button type='button' class='btn btn-secondary btn-lg btn-block'>" + menuText + "</button><div class='row'><div class='col-xs-12 swatch-container'>"
    for (var i = 0; i < swatchArray.length; i++) {
        wholeText += swatchSingle(swatchArray[i]);
    }
    wholeText += "</div></div></div>"
    return wholeText;
}

$(document).ready(function() {
    var redrawMenu = function(selection) {

        var displ = $('.thumb-container').map((i, e) => e.style.display).toArray(); //display style to be redrawn each time

        $('#shoeMenu').html(
            thumbMany(cs, 'Core Shape', selection[0]) +
            thumbMany(cs[selection[0]].children, "Heels", selection[1]) +
            thumbMany(cs[selection[0]].children[selection[1]].children, "Fronts", selection[2]) +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children, "Backs", selection[3]) +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children[selection[3]].children, "Straps", selection[4]) +
            thumbMany(cs[selection[0]].children[selection[1]].children[selection[2]].children[selection[3]].children[selection[4]].children, "Embellishments")
        );

        $('.thumb-container').each((i, e) => e.style.display = displ[i]); //display style to be redrawn each time

        var thumb = $('#shoeMenu').find('img');
        thumb.click(function() {
            var selection = $(this).attr("selection");
            var selectionArray = selection.split(',').map(function(n) { return parseInt(n); });
            redrawMenu(selectionArray);

            var objCont = window.objectContainer; // defined 3 times as var

            if ($(this).attr("obj") != objCont.obj.name) {
                if ($(this).attr("obj") !== 'null') {
                    objPathName = $(this).attr("obj");
                    objCont.scene.remove(objCont.obj);
                    objCont.loadObject(objPathName, objCont.materials.matGrey, objCont.materials.matDarkGrey);
                } else {
                    objAbr = $(this).attr("abr").split(',');
                    var object = objCont.obj; // defined 3 times as var

                    object.traverse(function(child) {
                        if (child instanceof THREE.Mesh) {
                            for (var i = 0; i < objAbr.length; i++) {
                                if (child.name == objAbr[i]) {
                                    child.visible ^= true;
                                }
                            }
                            // the previously added mesh should be removed before loading new one
                        }
                        child.castShadow = child.visible;
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

/// Mesh hange on click 

var materialMeshes = ['FR1', 'FR2', 'IB1', 'CO1', 'CO2', 'LC1', 'TN1', 'TN2', 'TN3'];

$(document).ready(function() {
    $('#canvasButtons button.btn').click(function() {
        var id = this.id;
        switch (id) {
            case "mainFrontMat":
                materialMeshes = ['FR1', 'FR2', 'CO1', 'CO2', 'IB1', 'ST1', 'BB2'];
                break;
            case "mainBackMat":
                materialMeshes = ['LC1', 'TN1', 'TN2', 'TN3', 'TT1', 'TT2', 'TT3', 'TT4', 'TT5', 'TK1', 'TK2', 'TK3'];
                break;
            case "heelMat":
                materialMeshes = ['HE1', 'PF1'];
                break;
            case "frontMat":
                materialMeshes = ['PT1', 'TO1', 'BB1'];
                break;
            case "backMat":
                materialMeshes = ['SH1', 'PH1'];
                break;
            case "strapsMat":
                materialMeshes = ['LS1', 'MJ1', 'MJ2', 'TB1', 'TB2', 'BI1', 'BI2', 'BI3', 'BI4', 'TN1', 'TN2', 'TK1', 'TK2'];
                break;
            default:
                materialMeshes = ['FR1', 'FR2', 'IB1', 'CO1', 'CO2', 'LC1', 'TN1', 'TN2', 'TN3'];
        }
    });
});



//Material add on click 

$(document).ready(function() {
    var redrawSwatchMenu = function() {
        $('#swatchMenu').append(
            swatchMany(swatches, 'Materials'))

        var swatch = $('#swatchMenu').find('img');
        swatch.click(function() {
            var objCont = window.objectContainer; // defined 3 times as var
            var object = objCont.obj; // defined 3 times as var
            objMat = $(this).attr("matName");
            object.traverse(function(child) {
                if (child instanceof THREE.Mesh) {
                    for (var i = 0; i < materialMeshes.length; i++) {
                        if (child.name == materialMeshes[i]) {
                            child.material = objCont.materials[objMat];
                        }
                    }
                }
            });
        });

    }

    redrawSwatchMenu();
    $('.swatch-container').hide();

    //jQ anim menu
    var btn = $('#swatchMenu button.btn');
    btn.click(function() {
        var objCont = window.objectContainer; // defined 3 times as var
        var object = objCont.obj; // defined 3 times as var

        object.traverse(function(child) { //assign initial materials 
            if (child instanceof THREE.Mesh) {
                var meshName = child.name;
                switch (meshName) {
                    case "SO1":
                        child.material = objCont.materials.matSU04;
                        break;
                    case "LO1":
                        child.material = objCont.materials.matMR02;
                        break;
                    case "HT1":
                        child.material = objCont.materials.matLH01;
                        break;
                    case "IN1":
                    case "LI1":
                    case "TN1LI":
                    case "TN2LI":
                    case "TK1LI":
                    case "TK2LI":
                    case "CO1LI":
                    case "CO2LI":
                    case "LC1LI":
                    case "ST1LI":
                    case "LS1LI": 
                    case "MJ1LI":
                    case "TB1LI":
                    case "BI1LI":
                    case "BI2LI":
                        child.material = objCont.materials.matLH21;
                        break;
                    case "HG1":
                    case "LC1HG":
                        child.material = objCont.materials.matSU25;
                        break;
                    case "IL1":
                        child.material = objCont.materials.matMR03;
                        break;
                    case "TN1BK":
                    case "TK1BK":
                    case "TT1BK":
                    case "TT2BK":
                    case "MJ1BK":
                    case "TB1BK":
                    case "BI1BK":
                    case "BI2BK":
                        child.material = objCont.materials.matMR01;
                        break;

                }
            }
        });

        $('#canvasButtons').show(); //display the Canvas menus
        var div = $(this).parents().find('.swatch-container');
        if ((div[0]).style.display === 'none') {
            div.slideDown(600);
        } else {
            div.slideUp(600);
        }
    });

});