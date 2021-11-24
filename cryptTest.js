/**
 * SEED-ECB 방식 암호화 모듈 테스트
 */
const crypt = require('./lib/crypt/seedCrypt');
const pharseKey = "testKey";

async function startApp() {
    await crypt.setKey(pharseKey);

    var text = "테스트";
    var enc = crypt.encrypt(text);
    
    if (enc.flag) {
        var dec = crypt.decrypt(enc.data)
        console.log("원문 = ", text);
        console.log("암호화 = ", enc.data);
        console.log("복호화 = ", dec);
    };
}

startApp();