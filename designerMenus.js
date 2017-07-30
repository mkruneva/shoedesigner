// //JS only

// var menuNames = ['thumbCs', 'thumbHe', 'thumbFr', 'thumbBc', 'thumbSt', 'thumbEm', 'thumbCl'];

// function hideAllMenuDivs(namesArray) {
// 	for (var i = 0; i < namesArray.length; i++) {
// 	var divName = namesArray[i] + 'Div';
// 	document.getElementById(divName).style.display ='none'; 
// 	}
// }

// function showHideMany(namesArray) {
// 	for (var i = 0; i < namesArray.length; i++) {
// 	var btnNameString = namesArray[i] + 'Btn';
// 	var divNameString = namesArray[i] + 'Div';
// 	btnName = document.getElementById(btnNameString);
// 	divName = document.getElementById(divNameString);
// 	showHideSingle(btnName, divName);
// 	}
// }

// function showHideSingle(btnName, divName) {
// 	btnName.onclick = function () {
// 		console.log('btnName = ', btnName);
// 		if (divName.style.display === 'none') {
// 				divName.style.display = 'block';
// 		} else {
// 			divName.style.display = 'none';
// 		}
// 	};	   
// }

//hideAllMenuDivs(menuNames);
// showHideMany(menuNames);

//JQuery 


//jQ creating arrays 

var btns = $('#shoeMenu .btn');
var divs = $('.thumb-container');

for (var i = 0; i < divs.length; i++) {
	divs.eq(i).hide();
}

// for (var i = 0; i < btns.length; i++) {
// 	console.log('(divs.eq(i)) is', (divs.eq(i)));
// 	(btns.eq(i)).show();
// 	(btns.eq(i)).click(function(){
// 		console.log('(divs.eq(i)) is', (divs.eq(i)));
//     });
// }


$(document).ready(showHide(thumbCsBtn));
function showHide(nameOfButton) {
	var idButton = nameOfButton.id;
	console.log(idButton);
	console.log(typeof(idButton));
	console.log($("#idButton"));
	console.log($("#thumbCsBtn"));

	$("#thumbCsBtn").click(function(){
    	if (($("#thumbCsDiv")[0]).style.display === 'none') {
    		$("#thumbCsDiv").slideDown(600);
    	} else {
    		$("#thumbCsDiv").slideUp(600);
    	}    
    });
}

//JQuery script example 
$(document).ready(showHideCs());
function showHideCs() {
	$("#thumbCsBtn").click(function(){
    	if (($("#thumbCsDiv")[0]).style.display === 'none') {
    		$("#thumbCsDiv").slideDown(500);
    	} else {
    		$("#thumbCsDiv").slideUp(500);
    	}    
    });
}

$(document).ready(showHideHe());
function showHideHe() {
	$("#thumbHeBtn").click(function(){
    	if (($("#thumbHeDiv")[0]).style.display === 'none') {
    		$("#thumbHeDiv").slideDown(500);
    	} else {
    		$("#thumbHeDiv").slideUp(500);
    	}    
    });
}

$(document).ready(showHideFr());
function showHideFr() {
	$("#thumbFrBtn").click(function(){
    	if (($("#thumbFrDiv")[0]).style.display === 'none') {
    		$("#thumbFrDiv").slideDown(500);
    	} else {
    		$("#thumbFrDiv").slideUp(500);
    	}    
    });
}

$(document).ready(showHideBc());
function showHideBc() {
	$("#thumbBcBtn").click(function(){
    	if (($("#thumbBcDiv")[0]).style.display === 'none') {
    		$("#thumbBcDiv").slideDown(500);
    	} else {
    		$("#thumbBcDiv").slideUp(500);
    	}    
    });
}

$(document).ready(showHideSt());
function showHideSt() {
	$("#thumbStBtn").click(function(){
    	if (($("#thumbStDiv")[0]).style.display === 'none') {
    		$("#thumbStDiv").slideDown(500);
    	} else {
    		$("#thumbStDiv").slideUp(500);
    	}    
    });
}

$(document).ready(showHideEm());
function showHideEm() {
	$("#thumbEmBtn").click(function(){
    	if (($("#thumbEmDiv")[0]).style.display === 'none') {
    		$("#thumbEmDiv").slideDown(500);
    	} else {
    		$("#thumbEmDiv").slideUp(500);
    	}    
    });
}

$(document).ready(showHideCl());
function showHideCl() {
	$("#thumbClBtn").click(function(){
    	if (($("#thumbClDiv")[0]).style.display === 'none') {
    		$("#thumbClDiv").slideDown(500);
    	} else {
    		$("#thumbClDiv").slideUp(500);
    	}    
    });
}
