var kleurenLijst = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var guess = [];
var count = 0;
var countEr = 0;
var countRow = 0;
var countCheckRow = 1;
var gecontroleerd;
var checked= [];
var winArray = [];



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

	var checkrow = document.createElement("div");

	checkrow.setAttribute("id", "myCheckRow" + c);

	document.getElementById('rightBoard').appendChild(checkrow);


	for(var d=0; d<4;d++) {

		var checkbolletje = document.createElement("div");

		checkbolletje.setAttribute("class", "myCheckBolletje" + d);
	
		document.getElementById('myCheckRow' + c).appendChild(checkbolletje);
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
	count++;

	guess.push(kleur);
	console.log(guess);

	if (count == 4) {
		count = 0;
		countRow++;

		gecontroleerd = checkFunction();
		geefFeedback(gecontroleerd);

		countEr++;

		guess=[];
	}	
}



function checkFunction(){

	randomarraycopy = copyRandomArray();

	checked = [];

	for (var i = 0; i < 4; i++){

		if (guess[i] == kleurenLijst[randomarraycopy[i]]) {

			//als het precies op de goede plek staat pushed hij een 2 in de checked array

			checked.push(2);

			//de kleur die op de goede plek stond wordt dan ook uit de randomarraycopy gehaald door er -1 van te maken kan het dus nooit meer gelijk zijn aan iets
			//de kleur die op de goede plek stond wordt dan ook uit de guess array gehaald door er "bullshit" van te maken kan het dus nooit meer gelijk zijn aan iets


			guess[i] = "bullshit";
			randomarraycopy[i] = -1;

			//hoe ziet die random array er dan uit stel hij zou op de tweede plek een groene vinde
			//guess =  5  bulllshit  2  bullshit
			//randomarraycopy = 5 -1 2 -1
			// checked = 2 , 2
		}
	}

	for (var j = 0; j < 4; j++){

		if(checked[j] != 2){

			for (var i = 0; i<4; i++){

				if (guess[i] == kleurenLijst[randomarraycopy[j]]){

				checked.push(1);

				guess[i] = "bullshit";
				randomarraycopy[j] = -1;	
				}
			}
		}
	}
return checked;
}



function copyRandomArray()
{
	var randomarraycopy = [];

	for(z=0;z<randomArray.length; z++)
	{
		randomarraycopy[z] = randomArray[z];
	}
	return randomarraycopy;
}



function geefFeedback(gecontroleerdeArray){

	for(f=0; f < guess.length; f++){

		if (gecontroleerdeArray[f] == 2) {
			document.getElementById('myCheckRow'+countEr).getElementsByClassName('myCheckBolletje' + f )[0].style.backgroundColor = "red";
		}
		if (gecontroleerdeArray[f] == 1) {
			document.getElementById('myCheckRow'+countEr).getElementsByClassName('myCheckBolletje' + f)[0].style.backgroundColor = "black";
		}
	}


	winFunctie(gecontroleerdeArray);
	gecontroleerd = [];

	console.log(gecontroleerd);


}

function winFunctie(gecontroleerdwin){

	console.log(gecontroleerdwin);
	winArray = [];

	for (var win = 0; win < 4; win++) {
		
		if (gecontroleerdwin[win] == 2) {
			winArray.push(2);
		}

		if (winArray.length == 4) {
			alert('YOU WIN!!!');
			reloading();
		}
	}
}

function reloading(){
  location.reload();
}