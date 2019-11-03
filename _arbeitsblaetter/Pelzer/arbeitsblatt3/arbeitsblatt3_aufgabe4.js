// Aufgabe 4
const m = require('./modul.js')
var fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

let cities = fs.readFile('cities.json', (err, data)=>{
  if(err){
    console.log("Fehler");
  }
  else{
    var dataArray = JSON.parse(data);
    let name = fs.readFile('cities.json', (err, data)=>{
      if(err){
        console.log("Fehler");
      }
      else{
        var name = JSON.parse(data);
