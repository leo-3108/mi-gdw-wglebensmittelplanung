const {
    checkSchema
} = require('express-validator');

/**
 * CRUD-Befehle for Bewohner
 * @throws HTTP-Errors
 */

exports.create = (collection, data, wg_id) => { //ID klappt noch nicht
    // Add id

    var tmp = collection.find({
        wg_id: wg_id
    })
    data.id = tmp.length;
    data.wgid = parseInt(wg_id);
    // Save
    collection.save(data);

    return data.id;

}

exports.readall = (collection) => {

    const items = collection.find();

    // Remove intern id
    for (item in items) {
        delete item._id
    }

    // Log
    console.log('> Read all items from ', collection.collectionName);

    return items;
}

exports.readone = (collection, id, id_liste) => {

    // Log
    console.log('> Read item #', id, ' #', id_liste, ' from ', collection.collectionName);

    const items = collection.find({
        id: parseInt(id),
        id_liste: parseInt(id_liste)
    });

    if (items.length) {
        // Remove intern id
        delete items[0]._id;
    }

    return items;
}

exports.update = (collection, id, id_liste, data) => {
    // Log (Muss evtl. noch angepasst werden)
    console.log('> Editing item #', data.id_liste, ' from ', collection.collectionName, ' to be: ', data);

    return collection.update({
        id: parseInt(id),
        id_liste: parseInt(id_liste),
        data
    })
}

exports.delete = (collection, id, id_liste) => {
    // Log
    console.log('> Editing item #', id_liste, ' from ', collection.collectionName);

    return collection.remove({
        id: parseInt(id),
        id_liste: parseInt(id_liste)
    });
}
