CryptoJS = require("crypto-js");

function hash(password) {
    var salt = CryptoJS.lib.WordArray.random(128 / 8);

    var key512Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, {
        keySize: 512 / 32,
        iterations: 8,
        hasher: CryptoJS.algo.SHA256
    });

    return salt.toString() + key512Bits.toString();
}

module.exports = { hash };