//Aufgabe 5

const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let bewertung = 0
maxBewertung = 5

bewertung_berechnen()

const bewertung_berechnen = function(){

rl.question('Wieviele Bewertungen?: ', function(anzahlBewertungen) {

  const getRandom = function(min, max) {
      return Math.round(Math.random() * (max - min) + min);
  }

  for (let i = 0; i < anzahlBewertungen; i++){

    let neueBewertung = getRandom(0, maxBewertung)

    bewertung = (bewertung*i+neueBewertung)/(i+1);
    console.log('Bewertung:')
    console.log(bewertung)

  }
}

rl.close();
});
