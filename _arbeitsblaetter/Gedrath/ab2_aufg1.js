/**
 * TH Koeln - Campus Gummersbach
 * Grundlagen des Web (Medieninformatik Ba.)
 *
 * @author Finn Nils Gedrath
 * @arbeitsblatt 1
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
var bewertung_meta = ["App-Bewertung", 0, 0]; // <= name, anzahl, letze Abgegebene Bewertung

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
            bewertung_meta[2] = calcBewertung(
                bewertung_meta[1]++,
                bewertung_meta[2],
                getRandom(0, max_bewertung)
            );
        }
    }
    else{
        console.log("Ihre Eingabe wurde nicht erkannt");
    }
    rl.close();
});
