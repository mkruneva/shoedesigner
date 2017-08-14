//DATA
var objPathName = 'obj/PC/PC300AHPLAPL.obj'; // Initial obj file

var materialMeshes = ['FR1', 'FR2', 'IB1', 'CO1', 'CO2', 'LC1', 'TN1', 'TN2', 'TN3'];
var materialMeshGroups = {
    mainFrontMat: ['FR1', 'FR2', 'CO1', 'CO2', 'IB1', 'ST1', 'BB2'],
    mainBackMat: ['LC1', 'TN1', 'TN2', 'TN3', 'TT1', 'TT2', 'TT3', 'TT4', 'TT5', 'TK1', 'TK2', 'TK3'],
    heelMat: ['HE1', 'PF1'],
    frontMat: ['PT1', 'TO1', 'BB1'],
    backMat: ['SH1', 'PH1'],
    strapsMat: ['LS1', 'MJ1', 'MJ2', 'TB1', 'TB2', 'BI1', 'BI2', 'BI3', 'BI4', 'TN1', 'TN2', 'TK1', 'TK2'],
    defaultMat: ['FR1', 'FR2', 'IB1', 'CO1', 'CO2', 'LC1', 'TN1', 'TN2', 'TN3'],
};
var defaultMatMeshGroups = {
    matSO01: ["SO1"], //sole
    matLO01: ["LO1"], //logo
    matIL01: ["IL1"], //insoleLogo
    matHT01: ["HT1"], //heelTip
    matLI01: ["IN1", "LI1", "TN1LI", "TN2LI", "TK1LI", "TK2LI", "CO1LI",
        "CO2LI", "LC1LI", "ST1LI", "LS1LI", "MJ1LI", "TB1LI", "BI1LI", "BI2LI"
    ], // lining
    matHG01: ["HG1", "LC1HG"], //    heelGrip
    matBK01: ["TN1BK", "TK1BK", "TT1BK", "TT2BK", "MJ1BK", "TB1BK", "BI1BK", "BI2BK", "GC1"], //   buckles
    matGE01: ["GE1", "GE2", "GE3"], // gemDiamonds
};

//Generate HTML function 
var figureStart = '<figure class="col-xs-3 col-sm-4 col-md-3 shoe-thumb">';
var figureEnd = '</figure>';

function thumbSingle(object, selected) {
    var selectedClass = '';
    if (selected) {
        selectedClass = 'selected';
    }
    var imgText = "<img src='" + object.imgSrc + "' abr = '" + object.abr + "'' alt='" + object.tooltip +
        "' obj='" + object.objSrc + "' selection='" + object.selection + "' class='" + selectedClass + "'>";
    var text = figureStart + imgText + figureEnd;
    return text;
}

function thumbMany(thumbArray, menuText, selectedIndex) {
    var wholeText = "<div><button type='button' class='btn btn-secondary btn-lg btn-block'>" +
        menuText + "</button><div class='row'><div id='thumbCsDiv' class='col-xs-12 thumb-container'>"
    for (var i = 0; i < thumbArray.length; i++) {
        wholeText += thumbSingle(thumbArray[i], i === selectedIndex);
    }
    wholeText += "</div></div></div>"
    return wholeText;
}

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
    var wholeText = "<div><button type='button' class='btn btn-secondary btn-lg btn-block'>" +
        menuText + "</button><div class='row'><div class='col-xs-12 swatch-container'>"
    for (var i = 0; i < swatchArray.length; i++) {
        wholeText += swatchSingle(swatchArray[i]);
    }
    wholeText += "</div></div></div>"
    return wholeText;
}

var btnSlide = function(duration, divClass) {
    return function() {
        var div = $(this).parent().find(divClass);
        if ((div[0]).style.display === 'none') {
            div.slideDown(duration);
        } else {
            div.slideUp(duration);
        }
    }
}

var onThumbClick = function() {
    var selection = $(this).attr("selection");
    var selectionArray = selection.split(',').map(function(n) { return parseInt(n); });
    redrawMenu(selectionArray);

    var objCont = window.objectContainer;
    var object = objCont.obj;

    if ($(this).attr("obj") != objCont.obj.name) {
        if ($(this).attr("obj") !== 'null') {
            $('.swatch-container').hide(); //hides material menu on object reload

            objPathName = $(this).attr("obj");
            objCont.scene.remove(objCont.obj);
            objCont.loadObject(objPathName, objCont.materials.matGrey, objCont.materials.matDarkGrey);
        } else {
            // materialMeshes.includes(child.name))
            objAbr = $(this).attr("abr").split(',');
            object.traverse(function(child) {
                if ((child instanceof THREE.Mesh) && (objAbr.includes(child.name))) {
                    child.visible ^= true;
                }
                child.castShadow = child.visible;
            });
        }
    }
}

var redrawMenu = function(sel) {

    var displ = $('.thumb-container').map((i, e) => e.style.display).toArray(); //display style to be redrawn each time

    $('#shoeMenu').html(
        thumbMany(cs, 'Core Shape', sel[0]) +
        thumbMany(cs[sel[0]].children, "Heels", sel[1]) +
        thumbMany(cs[sel[0]].children[sel[1]].children, "Fronts", sel[2]) +
        thumbMany(cs[sel[0]].children[sel[1]].children[sel[2]].children, "Backs", sel[3]) +
        thumbMany(cs[sel[0]].children[sel[1]].children[sel[2]].children[sel[3]].children, "Straps", sel[4]) +
        thumbMany(cs[sel[0]].children[sel[1]].children[sel[2]].children[sel[3]].children[sel[4]].children, "Embellishments")
    );

    $('.thumb-container').each((i, e) => e.style.display = displ[i]); //display style to be redrawn each time

    var thumb = $('#shoeMenu').find('img'); // ? can this be outside of the function ?
    thumb.click(onThumbClick);

    var btns = $('#shoeMenu .btn'); //anim
    btns.click(btnSlide(400, '.thumb-container'));
}

var defaultMatAssign = function() {
    $('#canvasButtons').show(); //display the Canvas menus

    var objCont = window.objectContainer;
    var object = objCont.obj;

    var materialsArray = Object.keys(defaultMatMeshGroups);
    var meshesArray = Object.values(defaultMatMeshGroups);
    console.log('meshesArray is', meshesArray);

    for (var i = 0; i < meshesArray.length; i++) { //materials not assigned in order 
        object.traverse(function(child) {
            if (meshesArray[i].includes(child.name)) {
                var matName = materialsArray[i];
                child.material = objCont.materials[matName];
                console.log('Mesh ', child.name, ' has material ', matName);
                console.log('Mesh ', child.name, ' real material is', child.material.name);
            }
        });
    }
}

var redrawSwatchMenu = function() {
    $('#swatchMenu').append(
        swatchMany(swatches, 'Materials'))

    var swatch = $('#swatchMenu').find('img'); // ? can this be outside of the function ?
    swatch.click(function() {
        var objCont = window.objectContainer;
        var object = objCont.obj;
        objMat = $(this).attr("matName");
        object.traverse(function(child) {
            if ((child instanceof THREE.Mesh) && (materialMeshes.includes(child.name))) {
                child.material = objCont.materials[objMat];
            }
        });
    });

    var btn = $('#swatchMenu button.btn'); //anim
    btn.click(btnSlide(800, '.swatch-container'));
    //btn.click(defaultMatAssign); // ? defaultMatAssign function inside or not . now in doc ready
}

$('#canvasButtons').hide();

$(document).ready(function() {
    //redrawing swatch and thumbs menu
    redrawMenu([0, 0, 0, 0, 0]);
    redrawSwatchMenu();

    $('.thumb-container:gt(0)').hide();
    $('.swatch-container').hide();

    //changing meshes by clicking on canvas button
    $('#canvasButtons button.btn').click(function() {
        var id = this.id;
        materialMeshes = materialMeshGroups[id];
        if (materialMeshes == undefined) {
            materialMeshes = materialMeshGroups.defaultMat;
        }
    })

    $('#swatchMenu button.btn').click(defaultMatAssign); // defaultMatAssign in the main doc ready 

});