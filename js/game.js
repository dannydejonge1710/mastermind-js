var kleurenLijst = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var guess = [];
var count = 0;
var countEr = 0;
var countRow = 0;
var countCheckRow = 1;



for(var a=0; a<12;a++) {

	var row = document.createElement("div");

	row.setAttribute("id", "myRow" + a);

	document.getElementById('mainBoard').appendChild(row);


	for(var b=0; b<4;b++) {

		var bolletje = document.createElement("div");

		bolletje.setAttribute("class", "myBolletje" + b);
	
		document.getElementById('myRow' + a).appendChild(bolletje);
	}
}



for(var c=0; c<12;c++) {

	var row = document.createElement("div");

	row.setAttribute("id", "myCheckRow" + c);

	document.getElementById('rightBoard').appendChild(row);


	for(var d=0; d<4;d++) {

		var bolletje = document.createElement("div");

		bolletje.setAttribute("class", "myCheckBolletje" + d);
	
		document.getElementById('myCheckRow' + c).appendChild(bolletje);
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

	guess.push(frituurpan);
	console.log(guess);

	var kleur = kleurenLijst [frituurpan];		
	document.getElementById('myRow' + countRow).getElementsByClassName('myBolletje' + count)[0].style.backgroundColor = kleur;

	count++;

	if (guess.length == randomArray.length) {

		for (var tel = 0; tel < 4; tel++){

			if (guess[tel] == randomArray[tel]) {
				document.getElementById('myCheckRow' + countRow).getElementsByClassName('myCheckBolletje' + countEr)[0].style.backgroundColor = ('red');
				countEr++;	
			}
		} 
	}		
}
