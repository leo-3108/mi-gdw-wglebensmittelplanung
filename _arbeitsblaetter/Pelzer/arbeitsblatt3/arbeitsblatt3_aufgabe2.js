// Aufgabe 2
const m = require('./modul.js')
var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let data = fs.readFile('cities.json', (err, data)=>{
  if(err){
    console.log("Fehler");
  }
  else{
    var dataArray = JSON.parse(data);

rl.question('Suchbegriff: ',function suchen(suchbegriff){
    if(m.search(dataArray, suchbegriff)==true){
      console.log("Name gefunden");
    }
    else{
      console.log("Name nicht gefunden");
    }

    m.loeschen(dataArray, suchbegriff)


          });

  }
});
