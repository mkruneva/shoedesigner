var menuNames = ['thumbCs', 'thumbHe', 'thumbFr', 'thumbBc', 'thumbSt', 'thumbEm', 'thumbCl'];

function hideAllMenuDivs(namesArray) {
	for (var i = 0; i < namesArray.length; i++) {
	var divName = namesArray[i] + 'Div';
	document.getElementById(divName).style.display ='none'; 
	}
}

function showHideMany(namesArray) {
	for (var i = 0; i < namesArray.length; i++) {
	var btnName = namesArray[i] + 'Btn';
	var divName = namesArray[i] + 'Div';
	btnName = document.getElementById(btnName);
	divName = document.getElementById(divName);
	showHideSingle(btnName, divName);
	}
}

function showHideSingle(btnName, divName) {
	btnName.onclick = function () {
		console.log('btnName = ', btnName);
		if (divName.style.display === 'none') {
				divName.style.display = 'block';
		} else {
			divName.style.display = 'none';
		}
	};	   
}

hideAllMenuDivs(menuNames);
showHideMany(menuNames);

//JQ tests

$("#CS_PC300AH").hide()


// // JQuery script example 
// $(document).ready(showHide());
// function showHide() {
// 	$("#thumbCsBtn").click(function(){
//     	if (($("#thumbCsDiv")[0]).style.display === 'none') {
//     		$("#thumbCsDiv").slideDown(600);
//     	} else {
//     		$("#thumbCsDiv").slideUp(600);
//     	}    
//     });
// }
