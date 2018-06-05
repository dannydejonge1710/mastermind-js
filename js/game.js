var kleurenLijst = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var guess = [];
var count = 0;
var countEr = 0;
var countRow = 0;
var countCheckRow = 1;
var gecontroleerd;
var checked= [];

//Boord genereren

for(var a=0; a<12;a++) {

	// div voor row bolletje wordt aangemaakt.
	var row = document.createElement("div");
	
	// krijgt een id myRow

	row.setAttribute("id", "myRow" + a);

	// de divs worden in de div mainboard gezet.

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

console.log('1 Alle bolletjes zijn geladen');

// Krijgt een parameter binnen met een nummer en wordt frituurpan genoemd

function addColor(frituurpan){ 

	console.log('2 Er is een kleur doorgegeven en via de onclick functie is de functie addColor opgeroepen.');

// Haalt uit de array met kleuren het nummer wat is doorgegeven in de parameter en stopt het in de Var kleur 

	var kleur = kleurenLijst [frituurpan];	

	console.log('3 Toen je op de kleur geklikt hebt, is er een parameter meegegeven met een nummer, en dit nummer haalt die uit de array kleurenlijst met alle kleuren, vervolgens wordt deze kleur in de variabele kleur gestopt.')

//	Krijgt het element bij id en dan vervolgens bij class en veranderd dit in de kleur

	document.getElementById('myRow' + countRow).getElementsByClassName('myBolletje' + count)[0].style.backgroundColor = kleur;


	console.log('4 Het bolletje veranderd naar de gekozen kleur.');
// Als dit gebeurt is gaat de count 1 omhoog en gaat die naar de volgende myBolletje

	count++;

	console.log('5 De count is opgehoogd zodat hij automatisch naar het volgende lege bolletje gaat');

// De kleur wordt in de lege guess array gepushed

	guess.push(kleur);

	console.log(guess);

	console.log('6 de gekozen kleur is in de lege guess array gepushed');

	

// Als de count 4 heeft bereikt voert hij de if statement uit

	if (count == 4) {

	console.log('7 nu het 4e bolletje bereikt is voert hij de ifstatement uit. DE IFSTATEMENT VOERT DEZE DINGEN UIT');


// De count wordt weer op nul gezet zodat die weer bij het begin begint in de volgende row

		count = 0;

	console.log('8 de count is weer naar 0 geplaatst zodat hij weer bij het eerste bolletje begint.');
// De row wordt opgehoogd en dan gaat hij naar de volgende row 

		countRow++;

	console.log('9 de countrow is 1 opgehoogd zodat hij naar de volgende row gaat.');
	
// de globale Var gecontroleerd krijgt een value met de checkFunction erin

	console.log('10 De checkfunctie wordt aangeroepen en wat deze returned wordt opgeslagen in de variabele gecontroleerd');

	gecontroleerd = checkFunction();

// Hij voert dan de checkfuntion uit en geeft de checked array mee aan de geefFeedback functie
	console.log('25 de code is weer terug in de addColor functie');
	console.log('26 Nu de checkfuntie is uitgevoerd en de checked array in de gecontroleerd variabele staat, geeft de code de gecontroleerd variabele mee aan de geeffeedback functie.');

	geefFeedback(gecontroleerd);

// Hierna hoogt die de counter die de row van de check bolletjes ophoofd
	console.log('31 de code is weer terug in de addColor functie');

	countEr++;

	console.log('32 de counter wordt opgehoogd zodat de checkbolletjes naar de volgende row gaan.');

// de guess array wordt vervolgens weer leeggemaakt.

	 

	guess=[];

	console.log('guess waar de aangeklikt kleuren in waren gepushed word weer geleegd');

	}

}

//Random kleurencode genereren

var w = Math.floor((Math.random() * 6));
document.getElementById('test').style.backgroundColor = kleurenLijst[w];

var x = Math.floor((Math.random() * 6));
document.getElementById('test1').style.backgroundColor = kleurenLijst[x];

var y = Math.floor((Math.random() * 6));
document.getElementById('test2').style.backgroundColor = kleurenLijst[y];	

var z = Math.floor((Math.random() * 6));
document.getElementById('test3').style.backgroundColor = kleurenLijst[z];

var randomArray = [w, x, y, z];





//Check functie

function checkFunction(){

// de globale Var answercopy krijgt een value van copyAnswer function en hij gaat naar de functie 
// dus als de checkfuntie wordt uitgevoerd gaat hij direct naar copyAnswer
	console.log('11 de code is nu in de checkfunctie.')
	console.log('12 als hij in de checkfuntie is gekomen roept hij als eerst de copyAnswer functie op en wat deze functie returned wordt in functie answercopy gestopt');

	answercopy = copyAnswer();

	console.log('16 de array is opgeslagen in de answercopy array');

// de array checked is hier leeg en staat ook globaal

	console.log('17 op dit moment is de checked array leeg.');

	checked = [];

	for (var i = 0; i < 4; i++){

// De answer copy heeft het antwoord en de tel hoogt het op om voor elke plek het antwoord te hebben.
// Als dit gelijk is aan de guess (op die plek). en in de guess zit kleur gepushed 

	console.log('18 de if statement gaat nu voor elk bolletje appart kijken of de aangeklikte kleur gelijk is aan de kleur van het random antwoord.')

		if (guess[i] == kleurenLijst[answercopy[i]]) {

			// als hij de twee in checked pushed betekend dit dat het goed is
			console.log('19 de aangeklikte kleur staat op de goede plek, er word nu een 2 gepushed in de checked array');
			checked.push(2);
			answercopy[i] = -1;
		}
	}

	console.log('20 er komt nu een if statement die kijkt of er 2 tjes in de array staan. Als hij op een plek geen tweetje vind voert hij de volgende if statement uit.')

	for (var j = 0; j < 4; j++){

		if(checked[j] !=2){

			console.log('21 er is hier geen 2 aangetoond. Nu gaat die in de volgende if statement checken of hij er helemaal niet inzit of dat hij er wel inzit maar op een andere plek.')
			console.log('22 bij de volgende ifstatement kijkt hij weer of er van de overgebleven kleuren 1 inzit de overeen komt. aangezien de gene die op de goede plek staan al gecontroleerd zijn kan de if statement de overgebelven bolletjes controleren en vervolgens bij de egne die overeenkomen een 1 meegeven ')
			for (var i = 0; i<4; i++){

				if (guess[i] == kleurenLijst[answercopy[j]])

				console.log('23 de gene die in deze if statement overeenkomen worden naar de checked array gepushed.')

				checked.push(1);
				answercopy[j] = -1;
				break;
			}
		}
	}

console.log('24 de checked array wordt gereturned en word in de variabele gecontroleerd gestopt.');
return checked;
}

function copyAnswer()
{

	// var answercopy wordt een lege array

	console.log('13 de code is nu in de copyanswer functie.')

	var answercopy = [];

	//ranDom array heeft een lengte van 4 dus hij hoofd de tel3 4 keer op van 0 naar 3 en zo worden alle waardes in de answercopy gezet
	console.log('14 de lengte van de random array is 4 hij zet nu de dingen in de random array in de lege answercopy array.');
	for(z=0;z<randomArray.length; z++)
	{
		answercopy[z] = randomArray[z];
	}
	//vervolgens geeft hij answercopy terug. Hier staat nu het random antwoord in.

	console.log('15 Hij gaat weer terug naar de checkfuntie en geeft answercopy mee ');
	return answercopy;
}



function geefFeedback(gecontroleerdeArray){
	console.log('27 De code is nu in de geefFeedback functie');
	console.log("28 gecontroleerde array=" + gecontroleerdeArray);
	for(f=0; f < guess.length; f++){
		if (gecontroleerdeArray[f] == 2) {
			document.getElementById('myCheckRow'+countEr).getElementsByClassName('myCheckBolletje' + f )[0].style.backgroundColor = "red";
			console.log('29.1 de if statement ziet een 2 in de array en maakt het bolletje rood');
		}
		if (gecontroleerdeArray[f] == 1) {
			document.getElementById('myCheckRow'+countEr).getElementsByClassName('myCheckBolletje' + f)[0].style.backgroundColor = "black";
			console.log('29.2 de if statement ziet een 1 in de array en maakt het bolletje zwart');
		}
	}
	gecontroleerd = [];

	console.log('30 de gecontroleerd array met de 1tjes en 2tjes zijn weer geleegd.');

}