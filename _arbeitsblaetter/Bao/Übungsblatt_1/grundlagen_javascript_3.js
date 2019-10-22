//Aufgabe 3
console.log('(Aufgabe 3)')

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welche Bewertung geben Sie?',function(answer) {
//console.log(`Answer: ${answer}`); optional: Hier geben wird die eingegebene answer ausgegeben
  if(answer > max){
  console.log('Eingabe zu hoch.');
} else {
  console.log('Die neue Bewertung beträgt: ' + answer);
}
  rl.close();
});
