// Aufgabe 4
const m = require('./modul.js')
var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let cities = fs.readFile('cities.json', (err, cities)=>{
  if(err){
    console.log("Fehler");
  }
  else{
    var cities = JSON.parse(cities);

    let user = fs.readFile('user.json', (err, user)=>{
      if(err){
        console.log("Fehler");
      }
      else{
        var user = JSON.parse(user);

        //Daten zusammenfügen

        for(let i = 0; i < user.user.length; i++){
          for(let o = 0; o < cities.cities.length; o++){
            if (user.user[i].wohnort==cities.cities[i].name){
              user.user[i].push(cities.cities[i].einwohneranzahl, cities.cities[i].bundesland);

            }
          }
        }
        console.log(user);



        process.exit();
      }
    });
  }
});
