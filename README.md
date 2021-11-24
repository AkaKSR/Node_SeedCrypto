<h1>Node_SeedCrypto - SEED-ECB Encrypt/Decrypt Module</h1>
SEED-ECB Encrypt/Decrypt Module with Node.js

[Install]

```bash
npm install --save node_seedcrypto
```



[Node]

```Javascript
const crypto = require('node-seedcrypto');

crypto.setKey("pharseKey");

var text = "Here your encrypt data";
var enc = crypto.encrypt(text); // { flag: Boolean, data: String }

if (enc.flag) {
    var dec = crypto.decrypt(enc.data); // { flag: Boolean, data: String }
    console.log("Original Data = ", text);
    console.log("Encrypt Data = ", enc.data);
    console.log("Decrypt Data = ", dec.data);
}
```



[Function]

```bash
setKey(pharseKey): Set PharseKey Value(Max: 16 word);
encrypt(text): Encrypt Text Data
decrypt(text): Decrypt Text Data
```

