var kleurenLijst = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var count = 6;


var xvar = Math.floor((Math.random() * 6) + 0);
document.getElementById('test').style.backgroundColor = kleurenLijst[xvar];

var xvar1 = Math.floor((Math.random() * 6) + 0);
document.getElementById('test1').style.backgroundColor = kleurenLijst[xvar1];

var xvar2 = Math.floor((Math.random() * 6) + 0);
document.getElementById('test2').style.backgroundColor = kleurenLijst[xvar2];	

var xvar3 = Math.floor((Math.random() * 6) + 0);
document.getElementById('test3').style.backgroundColor = kleurenLijst[xvar3];

function addColor(frituurpan){

	var kleur = kleurenLijst [frituurpan];
	document.getElementById('option' + count).style.backgroundColor = kleur;

	if (count) {
		if (frituurpan == xvar) {
			alert('good');
		} else if (frituurpan == xvar1) {
			alert('almost good');
		} else if (frituurpan == xvar2) {
			alert('almost good');
		} else if (frituurpan == xvar3) {
			alert('almost good');
		} else {
			alert('false');
		}
	}

	count ++;

}

