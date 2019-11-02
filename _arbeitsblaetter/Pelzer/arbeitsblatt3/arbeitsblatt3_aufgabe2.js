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

function auswaehlen(){
rl.question('1: suchen, 2: löschen, 3: hinzufügen 4: beenden -->',function suchen(befehl){
  if(befehl==1){
    rl.question('Suchbegriff: ',function suchen(suchbegriff){
        if(m.search(dataArray, suchbegriff)==true){
          console.log("Name gefunden");
        }
        else{
          console.log("Name nicht gefunden");
        }
            auswaehlen();
    });
  }
  if(befehl==2){
    rl.question('Suchbegriff: ',function suchen(begriff){
        m.loeschen(dataArray, begriff)
            auswaehlen();
    });
  }
  if(befehl==4){
    console.log(dataArray);
  }
  });
}

auswaehlen();
console.log("test")
  }
});
