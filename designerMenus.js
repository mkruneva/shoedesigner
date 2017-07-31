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

//jQ

var btns = $('#shoeMenu .btn');
$('.thumb-container:gt(0)').hide();

btns.click(function() {
	var div = $(this).parent().find('.thumb-container');
	if ((div[0]).style.display === 'none') {
		div.slideDown(500);
	} else {
		div.slideUp(500);
	}
});

