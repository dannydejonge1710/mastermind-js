var kleurenLijst = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var count = 6;



function addColor(frituurpan){

	var kleur = kleurenLijst [frituurpan];
	document.getElementById('option' + count).style.backgroundColor = kleur;
	count ++;

}

function addComb(){

}