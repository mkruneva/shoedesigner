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

// hideAllMenuDivs(menuNames);
// showHideMany(menuNames);

//JQuery 

//jQ creating arrays 

// var btns = $('#shoeMenu .btn');
// var divs = $('.thumb-container');

// for (var i = 0; i < divs.length; i++) {
// 	divs.eq(i).hide();
// }

// for (var i = 0; i < btns.length; i++) {
// 	console.log('(divs.eq(i)) is', (divs.eq(i)));
// 	(btns.eq(i)).show();
// 	(btns.eq(i)).click(function(){
// 		console.log('(divs.eq(i)) is', (divs.eq(i)));
//     });
// }


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

// //JQuery script example 
// $(document).ready(showHideCs());
// function showHideCs() {
// 	$("#thumbCsBtn").click(function(){
//     	if (($("#thumbCsDiv")[0]).style.display === 'none') {
//     		$("#thumbCsDiv").slideDown(500);
//     	} else {
//     		$("#thumbCsDiv").slideUp(500);
//     	}    
//     });
// }

var btns = $('#shoeMenu .btn');
btns.click(function(e) {$(this).parent().find('.thumb-container').hide(1000);});

