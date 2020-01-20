/**
 * Modul zum Speichern der Daten
 */
const db = require('diskdb');

exports.init = () => {
    db.connect('./app/storage', [
        'wg',
        'bewohner',
        'ekmoeglichkeiten',
        'listenelement'
    ]);

    //this.reset(db);

    return db
}

exports.reset = (db) => {
    /*if (!db.wg.find().length){
        // Test
        this.insert({
            Name: "String",
            Adresse: {
                Strasse: "String",
                Hausnummer: "String",
                PLZ: "String",
                Stadt: "String",
                Land: "String"
            },
            Telefonnummer: "Int"
        }, db.wg)
    }*/
}

/**
 * CRUD-Befehle
 * @throws HTTP-Errors
 */

exports.create = (collection, data) => {
    // Add id
    data.id = collection.count();

    // Save
    collection.save(data);

    // Log
    console.log('> Adding new item #', data.id,' from ', collection.collectionName, ' with: ', data);

    return data.id;
}


exports.readone = (collection, id) => {
    const items = collection.find({id: parseInt(id)});

    if(items.length){
        // Remove intern id
        delete items[0]._id;

        return items;
    }
    else{
        return { message: "404 Error" }
    }


}

// Für den Fall, dass 2 IDs als Suchkriterium vorhanden sind
exports.readone2 = (collection, id, id_liste) => {
    const items = collection.find({id: parseInt(id), id_liste: parseInt(id_liste)});

    if(items.length){
        // Remove intern id
        delete items[0]._id;

        return items;
    }
    else{
        return { message: "404 Error" }
    }

    // Log
    console.log('> Read item #', id,' # from ', collection.collectionName);
}

exports.readall = (collection) => {

    const items = collection.find();

    // Remove intern id
    for(item in items){
        delete item._id
    }

    // Log
    console.log('> Read all items from ', collection.collectionName);

    return items;
}

exports.update = (collection, id, data) => {
    // Log
    console.log('> Editing item #', data.id,' from ', collection.collectionName, ' to be: ', data);

    return collection.update({id: parseInt(id), data})
}

exports.update2 = (collection, id, id_liste, data) => {
    // Log (Muss evtl. noch angepasst werden)
    console.log('> Editing item #', data.id_liste,' from ', collection.collectionName, ' to be: ', data);

    return collection.update({id: parseInt(id), id_liste: parseInt(id_liste), data})
}

exports.delete = (collection, id) => {
    // Log
    console.log('> Editing item #', data.id,' from ', collection.collectionName);

    return db.movies.remove({id: parseInt(id)});
}

exports.delete2 = (collection, id, id_liste) => {
    // Log
    console.log('> Editing item #', data.id_liste,' from ', collection.collectionName);

    return db.movies.remove({id: parseInt(id), id_liste: parseInt(id_liste)});
}
