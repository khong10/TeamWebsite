var fs = require('fs');
var exports = module.exports = {};

exports.initialize = function() {

    return new Promise((resolve, reject) => {
        resolve("Init Success");
        reject("unable to read data");
    });
};