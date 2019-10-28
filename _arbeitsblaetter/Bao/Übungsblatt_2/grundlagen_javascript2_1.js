//Maximale Höher der möglichen Bewertung
const max = 5;
//Aktuelle Anzahl der Bewertung
var anzahl = 0;
//Die Bewertung selbst
var bewertung = 3;

var arrayname = [];
var arrayanzahl = [];
var arraybewertung = [];

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const bewerten = function(){

  rl.question('Wie viele Bewertungen sollen erstellt werden?',function(answer) {
  console.log(`Answer: ${answer}`);
  var bewertung2 = 0;
    for(let anzahl = 0; anzahl < answer; anzahl++){
      const minr = 0;
      const maxr = 5
      bewertung = Math.round(Math.random()* (maxr - minr) + minr);
      aktuell = anzahl + 1;
      bewertung2 = (bewertung2 + bewertung)/aktuell;
      arrayanzahl.push(anzahl);
      arraybewertung.push(bewertung);
      arrayname.push('Bewertung' + anzahl)

      console.log(arrayanzahl.length);

      console.log('Abgegebene Bewertung:' + bewertung, 'Anzahl:' + aktuell, 'Die aktuelle Bewertung beträgt' + bewertung2  );
    }
    rl.close();
  });
}

bewerten();
