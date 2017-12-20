var kleurenLijst = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var count = 6;
var countEr = 0;



var w = Math.floor((Math.random() * 6) + 0);
document.getElementById('test').style.backgroundColor = kleurenLijst[w];

var x = Math.floor((Math.random() * 6) + 0);
document.getElementById('test1').style.backgroundColor = kleurenLijst[x];

var y = Math.floor((Math.random() * 6) + 0);
document.getElementById('test2').style.backgroundColor = kleurenLijst[y];	

var z = Math.floor((Math.random() * 6) + 0);
document.getElementById('test3').style.backgroundColor = kleurenLijst[z];

var randomArray = [w, x, y, z];



function addColor(frituurpan){

	var kleur = kleurenLijst [frituurpan];		
	document.getElementById('row1').getElementsByClassName('option' + count)[0].style.backgroundColor = kleur;

	if (frituurpan == randomArray[countEr]) {
		document.getElementById('check' + countEr).style.backgroundColor = ('red');
	} else if (frituurpan == randomArray[0, 1, 2, 3]) {
		document.getElementById('check' + countEr).style.backgroundColor = ('black');
	} else {
		document.getElementById('check' + countEr).style.backgroundColor = ('white');
	}

	countEr++;
	count++;
}




