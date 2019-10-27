//Aufgabe 5
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let bewertung = 0;
const maxBewertung = 5;

//Eingabe der Anzahl der Bewertungen
rl.question('Anzahl der Bewertungen: ', function(anzahlBewertungen){
  //Funktion zu Erstellung einer Zufallszahl
  const getRandom = function(min, max) {
      return Math.round(Math.random() * (max - min) + min);
}

//Berechnung der Bewertung ist eine Funktion
const berechneBewertung = function(anzahlBewertungen){
  if(anzahlBewertungen>0){
    for (let i = 0; i < anzahlBewertungen; i++){

      //Berechnung der neuen Bewertung
      let neueBewertung = getRandom(0, maxBewertung);
      bewertung = (bewertung*i+neueBewertung)/(i+1);

      //Ausgabe
      console.log('abgegebene Bewertung:');
      console.log(neueBewertung);
      console.log('aktuelle Bewertung:');
      console.log(bewertung);
      console.log('Anzahl der Bewertungen:');
      console.log(i+1);
      console.log('------------------');
      }
    }
    else{
      console.log('Fehler')
    }
}

//Funktion wird ausgeführt
berechneBewertung(anzahlBewertungen);

rl.close();
});
