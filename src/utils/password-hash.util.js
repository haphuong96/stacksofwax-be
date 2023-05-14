CryptoJS = require("crypto-js");

/**
 * 
 * @param {String} password 
 * @param {String} verifySalt 
 * @returns 
 */
function hash(password, verifySalt) {

    const salt = verifySalt ? CryptoJS.enc.Hex.parse(verifySalt) : CryptoJS.lib.WordArray.random(128 / 8);

    var key512Bits = CryptoJS.PBKDF2(password, salt, {
        keySize: 512 / 32,
        iterations: 8,
        hasher: CryptoJS.algo.SHA256
    });

    return salt.toString() + key512Bits.toString();
}

module.exports = { hash };