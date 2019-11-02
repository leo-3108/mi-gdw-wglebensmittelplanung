// Aufgabe 2
var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let data = fs.readFile('cities.json', (err, data)=>{
  if(err){
    console.log("Fehler");
  }
  else{
    console.log(data.toString());
    var dataArray = JSON.parse(data)

    function search(dataArray){
      rl.question('Suchbegriff: ',function search(suchbegriff){
        for(let i = 0; i < 10; i++){
        if (suchbegriff==dataArray.cities[i].name){
          console.log("Gefunden");
          break;
        }
        else{
          console.log("...")
        }
      }
      });
    }

    search(dataArray);

  }
});
