const {
    checkSchema
} = require('express-validator');

/**
 * CRUD-Befehle for Bewohner
 * @throws HTTP-Errors
 */

exports.create = (collection, data, wg_id) => {
    // Add id
    var tmp = collection.find({
        wg_id: parseInt(wg_id)
    })
    data.id = tmp.length;
    data.wg_id = parseInt(wg_id);

    // Save
    collection.save(data);

    //log
    console.log('[Log] Adding new Bewohner',data.id,'to WG',data.wg_id);

    return data.id;
}

exports.readall = (collection, wg_id) => {

    var items = collection.find({
        wg_id: parseInt(wg_id)
    });
    console.log(collection.find({
        wg_id: parseInt(wg_id)
    }))
    // Remove intern id
    for(n in items){
        delete items[n]._id
    }

    // Log
    console.log('[Log] Read all Bewohner of WG',parseInt(wg_id));

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
