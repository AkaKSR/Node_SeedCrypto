const crypt = require('./lib/crypt/seedCrypt');

exports.setKey = async function setKey(key) {
    await crypt.setKey(key);
}

exports.encrypt = function encrypt(data) {
    var enc = crypt.encrypt(data);
    return enc;
}

exports.decrypt = function decrypt(data) {
    var dec = crypt.decrypt(data);
    return dec;
}