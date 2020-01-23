/**
 * Bewohner Modell
 */

const error = require('rest-api-errors')

exports.create = (collection, data, wg_id) => {

    // Add id
    let tmp = collection.find({
        wg_id: parseInt(wg_id)
    })
    data.id = tmp.length
    data.wg_id = parseInt(wg_id)

    // Add visability
    data.vis = true

    // Save
    collection.save(data)

    // Log
    console.log('[Log] Add new Bewohner', data.id, 'to WG', data.wg_id)

    return data.id
}

exports.readall = (collection, wg_id) => {

    let items = collection.find({
        wg_id: parseInt(wg_id),
        vis: true
    })

    for (n in items) {
        // Remove intern id
        delete items[n]._id

        // Remove visability
        delete items[n].vis
    }

    // Log
    console.log('[Log] Read all Bewohner of WG', wg_id)

    return items
}

exports.readone = (collection, wg_id, bewohner_id) => {

    let items = collection.find({
        wg_id: parseInt(wg_id),
        id: parseInt(bewohner_id),
        vis: true
    })

    if (items.length) {
        // Remove intern id
        delete items[0]._id

        // Remove visability
        delete items[0].vis
    }

    // Log
    console.log('[Log] Read Bewohner', parseInt(bewohner_id), 'of WG', parseInt(wg_id))

    return items
}

exports.update = (collection, wg_id, bewohner_id, data) => {

    let tmp = collection.findOne({
        id: parseInt(bewohner_id),
        wg_id: parseInt(wg_id),
        vis: true
    })

    // throw errors
    if (!tmp) {
        throw new error.NotFound(
            null,
            'Es konnten kein Bewohner mit der ID #' + bewohner_id + ' in der WG mit der ID #' + wg_id + ' gefunden werden.'
        )
    }

    let items = collection.update({
        _id: tmp._id
    }, data)

    // Log
    console.log('[Log] Update Bewohner', parseInt(bewohner_id), 'of WG', parseInt(wg_id))

    return items
}

exports.deleteall = (collection, wg_id) => {

    let tmp = collection.find({
        wg_id: parseInt(wg_id),
        vis: true
    })

    for (item of tmp) {
        collection.update({
            _id: item._id
        }, {
            vis: false
        })
    }

    // Log
    console.log('[Log] Delete all Bewohner of WG', parseInt(wg_id))

    return true
}

exports.delete = (collection, wg_id, bewohner_id) => {

    let tmp = collection.findOne({
        id: parseInt(bewohner_id),
        wg_id: parseInt(wg_id),
        vis: true
    })

    let items = collection.update({
        _id: tmp._id
    }, {
        vis: false
    })


    // Log
    console.log('[Log] Delete Bewohner', parseInt(bewohner_id), 'of WG', parseInt(wg_id))

    return true
}
