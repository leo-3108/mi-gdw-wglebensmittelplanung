// Aufgabe 2
var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let data = fs.readFile('cities.json', (err, data)=>{
  if(err){
    console.log("Fehler");
  }
  else{
    var dataArray = JSON.parse(data);


    //suchen
    function search(dataArray, begriff){

        var nichtgefunden = 0;

        for(let i = 0; i < 10; i++){
        if (begriff==dataArray.cities[i].name){
          return true;
        }
        else{
          nichtgefunden++;
        }
      }
      return false;
    }

    //löschen
    function loeschen(dataArray, begriff){
      if(search(dataArray, begriff)==true)

      for(let i = 0; i < 10; i++){
      if (begriff==dataArray.cities[i].name){
        delete dataArray.cities[i];
        console.log("deleted")
      }
    }
  }



rl.question('Suchbegriff: ',function suchen(suchbegriff){
    if(search(dataArray, suchbegriff)==true){
      console.log("Name gefunden");
    }
    else{
      console.log("Name nicht gefunden");
    }

    loeschen(dataArray, suchbegriff)


          });

  }
});
