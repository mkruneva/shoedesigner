//DATA
var objPathName = 'obj/PC/PC300AHPLAPL.obj'; // Initial obj file

var materialMeshes = ['FR1', 'FR2', 'IB1', 'CO1', 'CO2', 'LC1', 'TN1', 'TK1', 'TT1'];
var materialMeshGroups = {
    mainFrontMat: ['FR1', 'FR2', 'CO1', 'CO2', 'IB1', 'ST1', 'BB2'],
    mainBackMat: ['LC1', 'TN1', 'TT1', 'TK1'],
    heelMat: ['HE1', 'PF1'],
    capsMat: ['PT1', 'TO1', 'BB1', 'SH1', 'PH1'],
    strapsMat: ['LS1', 'MJ1', 'MJ2', 'TB1', 'TB2', 'BI1', 'BI2', 'BI3', 'BI4', 'TN2', 'TK2', 'TK3', 'TT2', 'TT3', 'TT4', 'TT5'],
    defaultMat: ['FR1', 'FR2', 'IB1', 'CO1', 'CO2', 'LC1', 'TN1', 'TK1', 'TT1'],
};
var defaultMeshMaterials = {
    'SO1': 'matSO01',
    'SO2': 'matSO01',
    'LO1': 'matLO01',
    'IL1': 'matIL01',
    'HT1': 'matHT01',
    'IN1': 'matLI01',
    'LI1': 'matLI01',
    'TN1LI': 'matLI01',
    'TN2LI': 'matLI01',
    'TK1LI': 'matLI01',
    'TK2LI': 'matLI01',
    'TT1LI': 'matLI01',
    'TT2LI': 'matLI01',
    'CO1LI': 'matLI01',
    'CO2LI': 'matLI01',
    'LC1LI': 'matLI01',
    'LS1LI': 'matLI01',
    'MJ1LI': 'matLI01',
    'TB1LI': 'matLI01',
    'BI1LI': 'matLI01',
    'BI2LI': 'matLI01',
    'HG1': 'matHG01',
    'LC1HG': 'matHG01',
    'TN1HG': 'matHG01',
    'TK1HG': 'matHG01',
    'TT1HG': 'matHG01',
    'TN1BK': 'matBK01',
    'TK1BK': 'matBK01',
    'TT1BK': 'matBK01',
    'TT2BK': 'matBK01',
    'MJ1BK': 'matBK01',
    'TB1BK': 'matBK01',
    'BI1BK': 'matBK01',
    'BI2BK': 'matBK01',
    'GC1': 'matBK01',
    'GE1': 'matGE01',
    'GE2': 'matGE01',
    'GE3': 'matGE01'
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
        menuText + "</button><div class='row'><div class='col-xs-12 swatch-container'>" +
        "<div>Pick a shoe part from the 3D designer to add material</div>"
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
        if ($(this).attr("obj") != 'none') {
            $('.swatch-container').hide(); //hides material menu on object reload
            $('#canvasButtons').hide(); //hides canvas menu on object reload

            objPathName = $(this).attr("obj");
            objCont.scene.remove(objCont.obj);
            objCont.loadObject(objPathName, objCont.materials.matGrey, objCont.materials.matDarkGrey);
        } else if ($(this).attr("obj") == 'none') {
            var objAbr = $(this).attr("abr").split(',');
            var allAbr = [];
            $(this).parent().parent().find('img').each(function(i, s) {
                allAbr = allAbr.concat($(s).attr('abr').split(','));
            });
            var removeAbr = jQuery.grep(allAbr, function(e, i) {
                return !objAbr.includes(e);
            });
            object.traverse(function(child) {
                if ((child instanceof THREE.Mesh) && (objAbr.includes(child.name))) {
                    child.visible = true;
                }
                if ((child instanceof THREE.Mesh) && (removeAbr.includes(child.name))) {
                    child.visible = false;
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

    // defaultMeshMaterials
    object.traverse(function(child) {
        if (defaultMeshMaterials[child.name]) {
            var matName = defaultMeshMaterials[child.name];
            child.material = objCont.materials[matName];
        }
    });
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
}

$('#canvasButtons').hide();

$(document).ready(function() {

    //redrawing swatch and thumbs menu
    redrawMenu([0, 1, 0, 0, 0]);
    redrawSwatchMenu();

    $('.thumb-container:gt(0)').hide();
    $('.swatch-container').hide();

    var btn = $('#swatchMenu button.btn'); //anim
    btn.click(btnSlide(800, '.swatch-container'));
    btn.click(defaultMatAssign);

    //changing meshes by clicking on canvas button
    $('#canvasButtons button.btn').click(function() {
        var id = this.id;
        materialMeshes = materialMeshGroups[id];
        if (materialMeshes == undefined) {
            materialMeshes = materialMeshGroups.defaultMat;
        }
    })
});