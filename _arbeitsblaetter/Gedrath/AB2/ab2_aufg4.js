'use strict';
/**
 * TH Koeln - Campus Gummersbach
 * Grundlagen des Web (Medieninformatik Ba.)
 *
 * @author Finn Nils Gedrath
 * @arbeitsblatt 2 / 3
 */

// Einbinden des readline moduls
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Ausgabe des Namens
console.log("Finn Nils Gedrath");

// Bewertungs-Definition
const max_bewertung = 4;
var ratings = {
    name: "App-Bewertung",
    anzahl: 0,
    last_bw: 0,
    bewertung: new_bw => {
        let bw = (this.last_bw * this.anzahl + new_bw) / (++this.anzahl); // DEBUG: Anzahl, last_bw bleibt undefineda
        //logBewertung(this.anzahl, bw, new_bw);
        console.log(ratings);

        return bw;
    }
}

// Zufällige Ganzzahl zw. [min] und [max]
const getRandom = function(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

const logBewertung = function(bw_anzahl, bw, new_bw){
    console.log(`Abgegebene Bewertung: ${new_bw}`);
    console.log(`Aktuelle Bewertung: ${bw}`);
    console.log(`Anzahl Bewertung: ${bw_anzahl}\n\n`);
}

rl.question("Wie viele Bewertungen sollen berechnet werden?\n>> ", function(answer){
    if(!isNaN(answer) && answer > 0){
        for(let i = 0; i < answer; i++){
            ratings.bewertung(getRandom(0, max_bewertung));
        }
    }
    else{
        console.log("Ihre Eingabe wurde nicht erkannt");
    }
    rl.close();
});
