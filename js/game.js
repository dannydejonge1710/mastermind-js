var kleurenLijst = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var guess = [];
var count = 6;
var countEr = 0;
var countRow = 1;
var countCheckRow = 1;



var w = Math.floor((Math.random() * 6));
document.getElementById('test').style.backgroundColor = kleurenLijst[w];

var x = Math.floor((Math.random() * 6));
document.getElementById('test1').style.backgroundColor = kleurenLijst[x];

var y = Math.floor((Math.random() * 6));
document.getElementById('test2').style.backgroundColor = kleurenLijst[y];	

var z = Math.floor((Math.random() * 6));
document.getElementById('test3').style.backgroundColor = kleurenLijst[z];

var randomArray = [w, x, y, z];


function addColor(frituurpan){
	

	var kleur = kleurenLijst [frituurpan];		
	document.getElementById('row' + countRow).getElementsByClassName('option' + count)[0].style.backgroundColor = kleur;

		if (frituurpan == randomArray[countEr]) {
			document.getElementById('checkRow' + countRow).getElementsByClassName('check' + countEr)[0].style.backgroundColor = ('green');
			document.getElementById('checkRow' + countRow).getElementsByClassName('check' + countEr)[0].style.display = ('none');
		} else if (frituurpan == randomArray[0, 1, 2, 3]) {
			document.getElementById('checkRow' + countRow).getElementsByClassName('check' + countEr)[0].style.backgroundColor = ('yellow');
			document.getElementById('checkRow' + countRow).getElementsByClassName('check' + countEr)[0].style.display = ('none');
		} else {
			document.getElementById('checkRow' + countRow).getElementsByClassName('check' + countEr)[0].style.backgroundColor = ('red');
			document.getElementById('checkRow' + countRow).getElementsByClassName('check' + countEr)[0].style.display = ('none');
		}

		countEr++;
		count++;	

		if (count == 10) {
			countRow++;
			count = 6;
			countEr = 0;
			document.getElementById('checkRow' + countCheckRow).getElementsByClassName('check' + 0)[0].style.display = ('block');
			document.getElementById('checkRow' + countCheckRow).getElementsByClassName('check' + 1)[0].style.display = ('block');
			document.getElementById('checkRow' + countCheckRow).getElementsByClassName('check' + 2)[0].style.display = ('block');
			document.getElementById('checkRow' + countCheckRow).getElementsByClassName('check' + 3)[0].style.display = ('block');

			countCheckRow++;
		}
		
}


