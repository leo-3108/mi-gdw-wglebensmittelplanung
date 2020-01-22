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
    console.log('[Log] Add new Bewohner',data.id,'to WG',data.wg_id);

    return data.id;
}

exports.readall = (collection, wg_id) => {

    var items = collection.find({
        wg_id: parseInt(wg_id)
    });
    // Remove intern id
    for(n in items){
        delete items[n]._id
    }

    // Log
    console.log('[Log] Read all Bewohner of WG',wg_id);

    return items;
}

exports.readone = (collection, wg_id, mitbewohner_id) => {

    const items = collection.find({
        wg_id: parseInt(wg_id),
        id: parseInt(mitbewohner_id)
    });

    if (items.length) {
        // Remove intern id
        delete items[0]._id;
    }

    // Log
    console.log('[Log] Read Bewohner',parseInt(mitbewohner_id),'of WG',parseInt(wg_id));

    return items;
}

exports.update = (collection, wg_id, mitbewohner_id, data) => {

    const items = collection.update({
        wg_id: parseInt(wg_id),
        id: parseInt(mitbewohner_id),
        data
    })

    // Log
    console.log('[Log] Update Bewohner',parseInt(mitbewohner_id),'of WG',parseInt(wg_id));

    return items;
}

exports.deleteall = (collection, wg_id) => {

    const items = collection.remove({
        wg_id: parseInt(wg_id)
    });

    // Log
    console.log('[Log] Delete all Bewohner of WG',parseInt(wg_id));

    return items;
}

exports.delete = (collection, wg_id, mitbewohner_id) => {

    const tmp = collection.findOne({
        id: parseInt(mitbewohner_id),
        wg_id: parseInt(wg_id)
      })

      const items = collection.remove({
        _id: tmp._id
      });


    // Log
    console.log('[Log] Delete Bewohner',parseInt(mitbewohner_id),'of WG',parseInt(wg_id));

    return items;
}
