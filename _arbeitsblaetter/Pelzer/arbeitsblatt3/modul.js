exports.search = function(dataArray, begriff){
    for(let i = 0; i < dataArray.cities.length; i++){
    if (begriff==dataArray.cities[i].name){
      return true;
    }
  }
  return false;
}

exports.loeschen = function(dataArray, name){
  if(this.search(dataArray, name)==true)

  for(let i = 0; i < dataArray.cities.length; i++){
  if (name==dataArray.cities[i].name){
    delete dataArray.cities[i];
    console.log("deleted")
    }
  }
}

//hinzufuegen
//exports.hinzufuegen = function.(dataArray, name, einwohneranzahl, bundesland){
//  dataArray.push(name, einwohneranzahl, bundesland);
//}
