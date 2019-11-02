exports.search = function(dataArray, begriff){

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
exports.loeschen = function(dataArray, name){
  if(this.search(dataArray, name)==true)

  for(let i = 0; i < 10; i++){
  if (name==dataArray.cities[i].name){
    delete dataArray.cities[i];
    console.log("deleted")
    }
  }
}

//hinzufuegen
function hinzufuegen(dataArray, name, einwohneranzahl, bundesland){
  dataArray.push(name, einwohneranzahl, bundesland);
}
