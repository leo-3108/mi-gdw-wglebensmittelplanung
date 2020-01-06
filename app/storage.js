const fs = require('fs');

const folder = 'storage';

/**
 * Helper Functions
 */
const getJSON = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (error, data) => {
            if(error) reject(error);
            resolve(JSON.parse(data));
        });
    });
}

const getData = (datamodel) => {
    return await getJSON('./' + folder + '/' + datamodel + '.json');
}

/**
 * Export functions
 */
exports.get = (datamodel) => {
    let data = getData(datamodel)
}

exports.post = (datamodel) => {
    let data = getData(datamodel)
}

exports.put = (datamodel) => {
    let data = getData(datamodel)
}

exports.delete = (datamodel) => {
    let data = getData(datamodel)
}
