exports.search = function(dataArray, begriff){
    for(let i = 0; i < dataArray.cities.length; i++){
    if (begriff==dataArray.cities[i].stadtname){
      return true;
    }
  }
  return false;
}

exports.loeschen = function(dataArray, name){
  if(this.search(dataArray, name)==true)

  for(let i = 0; i < dataArray.cities.length; i++){
  if (name==dataArray.cities[i].stadtname){
    delete dataArray.cities[i];
    console.log("deleted")
    }
  }
}

exports.hinzufuegen = function(dataArray, name, einwohneranzahl, bundesland){
  dataArray.cities.push({name, einwohneranzahl, bundesland});
}
