var menuNames = ['thumbCs', 'thumbHe', 'thumbFr', 'thumbBc', 'thumbSt', 'thumbEm', 'thumbCl'];

function hideAllMenuDivs(namesArray) {
	for (var i = 0; i < namesArray.length; i++) {
	var divName = namesArray[i] + 'Div';
	document.getElementById(divName).style.display ='none'; 
	}
}

function showHideMany(namesArray) {
	for (var i = 0; i < namesArray.length; i++) {
	var btnNameString = namesArray[i] + 'Btn';
	var divNameString = namesArray[i] + 'Div';
	btnName = document.getElementById(btnNameString);
	divName = document.getElementById(divNameString);
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

// $(document).ready(showHide(thumbCsBtn));
// function showHide(nameOfButton) {
// 	var idButton = nameOfButton.id;
// 	console.log(idButton);
// 	console.log(typeof(idButton));
// 	console.log($("#idButton"));
// 	console.log($("#thumbCsBtn"));

// 	$("#thumbCsBtn").click(function(){
//     	if (($("#thumbCsDiv")[0]).style.display === 'none') {
//     		$("#thumbCsDiv").slideDown(600);
//     	} else {
//     		$("#thumbCsDiv").slideUp(600);
//     	}    
//     });
// }

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
