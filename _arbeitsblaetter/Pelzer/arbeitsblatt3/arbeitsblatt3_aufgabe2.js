// Aufgabe 2
var fs = require('fs');

let data = fs.readFile('cities.json', (err, data)=>{
  if(err){
    console.log("Fehler");
  }
  else{
    console.log(data.toString());
  }
});
