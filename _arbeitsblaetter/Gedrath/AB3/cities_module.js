/**
 * Sucht das Objekt der Stadt anhand des Namens
 * @param  {Objekt-Array} dataArray     Die ursprüngliche Liste an Städten
 * @param  {String} name                Der zusuchende Namens
 * @return {Objekt}                     Das Objekt mit der Stadt
 */
exports.search = (dataArray, name) => {
    dataArray.forEach(function(item, index, array){
        if(item.stadt_name == name){
            return item
        }
    });
}
