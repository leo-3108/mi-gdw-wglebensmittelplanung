const { checkSchema } = require('express-validator');

exports.create = (collection, data, wg_id) => {
    // Add id

    var tmp = collection.find({wg_id: wg_id})
    data.id = tmp.length;
    data.wgid = parseInt(wg_id);
    // Save
    collection.save(data);

    return data.id;

}
