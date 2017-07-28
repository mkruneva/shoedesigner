var menuNames = ['thumbCs', 'thumbHe', 'thumbFr', 'thumbBc', 'thumbSt', 'thumbEm', 'thumbCl'];

function hideAllMenuDivs(namesArray) {
	for (var i = 0; i < namesArray.length; i++) {
	var divName = namesArray[i] + 'Div';
	document.getElementById(divName).style.display ='none'; 
	}
}

hideAllMenuDivs(menuNames);

// JQuery script example 
$(document).ready(showHide());

function showHide() {
	$("#thumbCsBtn").click(function(){
    	if (($("#thumbCsDiv")[0]).style.display === 'none') {
    		$("#thumbCsDiv").slideDown(600);
    	} else {
    		$("#thumbCsDiv").slideUp(600);
    	}    
    });
}
