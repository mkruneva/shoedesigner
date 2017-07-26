//var objName = 'PC300AHPLAPL-simple.obj';
var objName = 'PE300SAPLAPL-simple.obj';
var objPathName = 'obj/' + objName;
 

function loadPC300AH() {
	objName = 'PC300AHPLAPL-simple.obj';
	console.log(window.marty.scene);
	objPathName = 'obj/' + objName;
}

function loadPE300SA() {
	objName = 'PE300SAPLAPL-simple.obj';
	console.log(window.marty.scene);
	console.log(window.marty.obj);
	window.marty.scene.remove(window.marty.obj);
	objPathName = 'obj/' + objName;
}

 


