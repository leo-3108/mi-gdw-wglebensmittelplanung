// Aufgabe 4
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

const maxBewertung = 5;

let rating = new Object();
  rating.name = "Bewertung";
  rating.anzahl = 0;
  rating.letzteBewertung = 0;
  rating.bewertung = neueBewertung =>{
        tmp = (this.anzahl*this.letzteBewertung+neueBewertung)/(++this.anzahl);

        //ausgeben(this.anzahl, tmp, neueBewertung)             //Ausgabe funktioniert noch nicht
        console.log(rating)
        return tmp;
      }

//Funktion zu Erstellung einer Zufallszahl
const getRandom = function(min, max) {
      return Math.round(Math.random() * (max - min) + min);
}

//Ausgabe
const ausgeben = function(anzahlBewertungen, tmp, neueBewertung){

      console.log('abgegebene Bewertung:');
      console.log(neueBewertung);
      console.log('aktuelle Bewertung:');
      console.log(tmp);
      console.log('Anzahl der Bewertungen:');
      console.log(anzahlBewertungen);
      console.log('------------------');

}

//Eingabe der Anzahl der Bewertungen
rl.question('Anzahl der Bewertungen: ', function(anzahlBewertungen){
    for (let i = 0; i < anzahlBewertungen; i++){
      rating.bewertung (getRandom(0, maxBewertung));
    }

rl.close();
});
