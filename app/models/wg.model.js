const {
    checkSchema
} = require('express-validator')

/**
 * CRUD-Befehle for WG
 * @throws HTTP-Errors
 */

exports.create = (collection, data) => {

    try{
        // Add id
        data.id = collection.count()

        // Save
        collection.save(data)
    }
    catch(e){
        throw new error.InternalServerError('db-create', 'Internal Server Error')
    }
    //log
    console.log('[Log] Add new WG',data.id)

    return data.id
}

exports.readall = (collection) => {

    const items = collection.find()

    // Remove intern id
    for (n in items) {
        delete items[n]._id
    }

    // Log
    console.log('[Log] Read all WGs')

    return items
}

exports.readone = (collection, wg_id) => {

    const items = collection.find({
        id: parseInt(wg_id)
    })

    if (items.length) {
        // Remove intern id
        delete items[0]._id
    }

    // Log
    console.log('[Log] Read WG',wg_id)

    return items
}

exports.update = (collection, wg_id, data) => {

    const items = collection.update(
        {
            id: parseInt(wg_id)
        },
        data
    )

    // Log
    console.log('[Log] Update WG',wg_id)

    return items
}

exports.delete = (collection, wg_id) => {

    const items = collection.remove({id: parseInt(wg_id)})

    // Log
    console.log('[Log] Delete WG',wg_id)

    return items
}
