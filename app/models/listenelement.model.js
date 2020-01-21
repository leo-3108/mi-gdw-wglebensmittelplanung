const {
    checkSchema
} = require('express-validator');

/**
 * CRUD-Befehle for Listenelement
 * @throws HTTP-Errors
 */

 exports.create = (collection, wg_id, data) => {

     try{
         // Add id
         var tmp = collection.find({
             wg_id: parseInt(wg_id)
         })
         data.id = tmp.length;
         data.wg_id = parseInt(wg_id);

         // Save
         collection.save(data);
     }
     catch(e){
         throw new error.InternalServerError('db-create', 'Internal Server Error')
     }
     //log
     console.log('[Log] Adding new element',data.id,'to list from WG',data.wg_id);

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
     console.log('[Log] Read all elements of list from WG',wg_id);

     return items;
 }

exports.readone = (collection, wg_id, id) => {

    const items = collection.find({id: parseInt(id), id_liste: parseInt(wg_id)});

    if(items.length){
        // Remove intern id
        delete items[0]._id;
    }

    // Log
    console.log('[Log] Read element',id,'of list from WG',wg_id);

    return items;
}

exports.update = (collection, id, id_liste, data) => {

    const items = collection.update({id: parseInt(id), id_liste: parseInt(id_liste), data})

    // Log
    console.log('[Log] Update element',id,'of list from WG',wg_id);

    return items
}

exports.delete = (collection, id, id_liste) => {

    const items = collection.remove({id: parseInt(id), id_liste: parseInt(id_liste)});

    // Log
    console.log('[Log] Delete element',id,'of list from WG',wg_id);

    return items
}

exports.deleteall = (collection, id, id_liste) => {

    const items collection.remove({id: parseInt(id), id_liste: parseInt(id_liste)});

    // Log
    console.log('[Log] Delete all elements of list from WG',wg_id);

    return items
}
