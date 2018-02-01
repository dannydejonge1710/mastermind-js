var kleurenLijst = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var guess = [];
var count = 0;
var countEr = 0;
var countRow = 0;
var countCheckRow = 1;



for(var x=0; x<12;x++) {

	var row = document.createElement("div");

	row.setAttribute("id", "myRow" + x);

	document.getElementById('mainBoard').appendChild(row);


	for(var i=0; i<4;i++) {

		var bolletje = document.createElement("div");

		bolletje.setAttribute("class", "myBolletje" + i);
	
		document.getElementById('myRow' + x).appendChild(bolletje);
	}
}


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
	document.getElementById('myRow' + countRow).getElementsByClassName('myBolletje' + count)[0].style.backgroundColor = kleur;

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

		if (count == 4) {
			countRow++;
			count = 0;
			countEr = 0;
			document.getElementById('checkRow' + countCheckRow).getElementsByClassName('check' + 0)[0].style.display = ('block');
			document.getElementById('checkRow' + countCheckRow).getElementsByClassName('check' + 1)[0].style.display = ('block');
			document.getElementById('checkRow' + countCheckRow).getElementsByClassName('check' + 2)[0].style.display = ('block');
			document.getElementById('checkRow' + countCheckRow).getElementsByClassName('check' + 3)[0].style.display = ('block');

			countCheckRow++;
		}
		
}
