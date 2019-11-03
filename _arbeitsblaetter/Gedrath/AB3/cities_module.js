/**
 * Sucht das Objekt der Stadt anhand des Namens.
 * @param  {Objekt-Array} dataArray     Die ursprüngliche Liste an Städten.
 * @param  {String} name                Der zusuchende Namens.
 * @return {Objekt|false}               Das Objekt mit der Stadt.
 */
exports.search = (dataArray, name) => {
    dataArray.forEach(function(item, index, array){
        if(item.stadt_name == name){
            return item
        }
    });

    return false
}

/**
 * Sucht das Objekt der Stadt anhand des Namens und löscht dieses.
 * @param  {Objekt-Array} dataArray     Die ursprüngliche Liste an Städten.
 * @param  {String} name                Der zusuchende Namens.
 * @return {Array|false}                Das neue Array.
 */
exports.delete = (dataArray, name) => {
    dataArray.forEach(function(item, index, array){
        if(item.stadt_name == name){
            array.splice(index, 1);
            return array
        }
    });

    return false
}

/**
 * Fügt ein neues Element hinzu.
 * @param {Objekt-Array} dataArray      Die ursprüngliche Liste an Städten.
 * @param {String} stadt_name           Name der Stadt.
 * @param {Int} einwohner               Anzahl an Einwohnern
 * @param {String} bundesland           Name des Bundesland.
 */
exports.add = (dataArray, stadt_name, einwohner, bundesland) => {
    dataArray.push({
        "stadt_name":   stadt_name,
        "einwohner":    einwohner,
        "bundesland":   bundesland
    });

    return dataArray
}
