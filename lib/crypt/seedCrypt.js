const crypt = require('./lib/seed');
const CryptoJS = crypt.CryptoJS;
const string_to_utf8_hex_string = crypt.string_to_utf8_hex_string;
var keyText = null; // 암/복호화 키값

module.exports = {
    encrypt(data) {
        if (keyText == null) {
            console.error("암호화 키값이 설정되지 않았습니다.");
            return {
                flag: false
            };
        }

        var plainValue = CryptoJS.enc.Utf8.parse(data);
        var keyHex = string_to_utf8_hex_string(keyText);
        var key = CryptoJS.enc.Hex.parse(keyHex);
        var encrypted = CryptoJS.SEED.encrypt(plainValue, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.ZeroPadding
        });

        return {
            flag: true,
            data: encrypted.toString()
        };
    },
    decrypt(encrypted) {
        if (keyText == null) {
            console.error("암호화 키값이 설정되지 않았습니다.");
            return {
                flag: false
            };
        }

        var keyHex = string_to_utf8_hex_string(keyText);
        var key = CryptoJS.enc.Hex.parse(keyHex);
        var decrypted = CryptoJS.SEED.decrypt(encrypted, key, {
            mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding
        });
        var result = CryptoJS.enc.Utf8.stringify(decrypted).replace(/\0/g, '');

        return {
            flag: true,
            data: result.toString()
        };
    },
    setKey(key) {
        if (key.length < 16) {
            keyText = padding(key);
        } else if (key.length > 16) {
            throw new Error("암호화 키는 최대 16자리까지만 가능합니다.");
        } else {
            keyText = key;
        }
    }
}

function padding(key) {
    var result = key;
    for (var i = result.length; i < 16; i++) {
        result += "0";
    }

    return result;
}