/**
 * TH Koeln - Campus Gummersbach
 * Grundlagen des Web (Medieninformatik Ba.)
 *
 * @author Finn Nils Gedrath
 * @arbeitsblatt 2 / 2
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
    last_bwt: 0
}

// Zufällige Ganzzahl zw. [min] und [max]
const getRandom = function(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

// Berechnet die Bewertung
const calcBewertung = function(bw_anzahl, bw, new_bw){
    bw = (bw * bw_anzahl + new_bw) / (++bw_anzahl);
    logBewertung(bw_anzahl, bw, new_bw);

    return bw;
}

const logBewertung = function(bw_anzahl, bw, new_bw){
    console.log(`Abgegebene Bewertung: ${new_bw}`);
    console.log(`Aktuelle Bewertung: ${bw}`);
    console.log(`Anzahl Bewertung: ${bw_anzahl}\n\n`);
}

rl.question("Wie viele Bewertungen sollen berechnet werden?\n>> ", function(answer){
    if(!isNaN(answer) && answer > 0){
        for(let i = 0; i < answer; i++){
            ratings.last_bwt = calcBewertung(
                ratings.anzahl++,
                ratings.last_bwt,
                getRandom(0, max_bewertung)
            );
        }
    }
    else{
        console.log("Ihre Eingabe wurde nicht erkannt");
    }
    rl.close();
});


/**
 *  Wie könnte man nun mehrere Bewertungen mit unterschiedlichen Namen abspeichern?
 *
 * * Es können verschiedene Objekte mit verschiedenen Namen erstellt werden.
 * * Diese können wiederum in einem Array referenziert werden.
 */
