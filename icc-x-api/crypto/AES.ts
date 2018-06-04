export const AES: Object = {
    /********* AES Config **********/
    ivLength: 16,
    aesAlgorithmEncrypt: {
        name: 'AES-CBC'
    },
    aesKeyGenParams: {
        name: 'AES-CBC',
        length: 256
    },
    aesLocalStoreIdPrefix: 'org.taktik.icure.aes.',

    encrypt: function (cryptoKey, plainData) {
        return new Promise(function (resolve, reject) {
            var aesAlgorithmEncrypt = { name: this.aesAlgorithmEncrypt.name, iv: this.generateIV(this.ivLength) };
            window.crypto.subtle.encrypt(aesAlgorithmEncrypt, cryptoKey, plainData).then(cipherData => resolve(this.utils.appendBuffer(aesAlgorithmEncrypt.iv, cipherData)), err => reject('AES encryption failed: ', err));
        }.bind(this));
    },

    /**
*
* @param cryptoKey (CryptoKey)
* @param encryptedData (ArrayBuffer)
* @returns {Promise} will be ArrayBuffer
*/
    decrypt: function (cryptoKey, encryptedData) {
        if (!cryptoKey) {
            return Promise.resolve(null);
        }
        var encryptedDataUnit8 = new Uint8Array(encryptedData);
        var aesAlgorithmEncrypt = { name: this.aesAlgorithmEncrypt.name, iv: encryptedDataUnit8.subarray(0, this.ivLength)

            /*
* IF THIS BIT OF CODE PRODUCES A DOMEXCEPTION CODE 0 ERROR, IT MIGHT BE RELATED TO THIS:
*
* NOTOK:
* if (!hcparty.hcPartyKeys && !hcparty.hcPartyKeys[hcpartyId] && hcparty.hcPartyKeys[hcpartyId].length !== 2) {
*   throw 'No hcPartyKey for this Healthcare party(' + hcpartyId + ').';
* }
* var delegateHcPartyKey = hcparty.hcPartyKeys[hcpartyId][1];
*
* SHOULD BE:
* var delegatorId = patient.delegations[hcpartyId][0].owner;
* if (!hcparty.hcPartyKeys && !hcparty.hcPartyKeys[delegatorId] && hcparty.hcPartyKeys[delegatorId].length !== 2) {
*   throw 'No hcPartyKey for this Healthcare party(' + delegatorId + ').';
* }
* var delegateHcPartyKey = hcparty.hcPartyKeys[delegatorId][1];
*/
        };return window.crypto.subtle.decrypt(aesAlgorithmEncrypt, cryptoKey, encryptedDataUnit8.subarray(this.ivLength, encryptedDataUnit8.length));
    },

    // generate a 1024-bit RSA key pair for encryption
    /**
*
* @param toHex boolean, if true, it returns hex String
* @returns {Promise} either Hex string or CryptoKey
*/
    generateCryptoKey: function (toHex) {
        if (toHex === undefined || !toHex) {
            var extractable = true;
            var keyUsages = ['decrypt', 'encrypt'];
            return window.crypto.subtle.generateKey(this.aesKeyGenParams, extractable, keyUsages);
        } else {
            return new Promise(function (resolve) {
                var extractable = true;
                var keyUsages = ['decrypt', 'encrypt'];
                window.crypto.subtle.generateKey(this.aesKeyGenParams, extractable, keyUsages).then(function (k) {
                    return this.exportKey(k, 'raw');
                }, function (err) {
                    console.log('Error in generateKey: ' + err);
                }).then(function (rawK) {
                    resolve(this.utils.ua2hex(rawK));
                }, function (err) {
                    new Error(err);
                });
            });
        }
    },

    generateIV: function (ivByteLenght) {
        return window.crypto.getRandomValues(new Uint8Array(ivByteLenght));
    },

    /**
* This function return a promise which will be the key Format will be either 'raw' or 'jwk'.
* JWK: Json Web key (ref. http://tools.ietf.org/html/draft-ietf-jose-json-web-key-11)
*
* @param cryptoKey CryptoKey
* @param format will be 'raw' or 'jwk'
* @returns {Promise} will the AES Key
*/
    exportKey: function (cryptoKey, format) {
        return window.crypto.subtle.exportKey(format, cryptoKey);
    },

    /**
* the ability to import a key that have already been created elsewhere, for use within the web
* application that is invoking the import function, for use within the importing web application's
* origin. This necessiates an interoperable key format, such as JSON Web Key [JWK] which may be
* represented as octets.
*
* https://chromium.googlesource.com/chromium/blink.git/+/6b902997e3ca0384c8fa6fe56f79ecd7589d3ca6/LayoutTests/crypto/resources/common.js
*
* @param format 'raw' or 'jwk'
* @param aesKey
* @returns {*}
*/
    importKey: function (format, aesKey) {
        //TODO test
        var extractable = true;
        var keyUsages = ['decrypt', 'encrypt'];
        return window.crypto.subtle.importKey(format, aesKey, this.aesKeyGenParams, extractable, keyUsages);
    },

    /**
*
* @param id
* @param key should be JWK
*/
    storeKeyPair: function (id, key) {
        if (typeof Storage === "undefined") {
            console.log('Your browser does not support HTML5 Browser Local Storage !');
            throw 'Your browser does not support HTML5 Browser Local Storage !';
        }

        //TODO encryption
        localStorage.setItem(this.aesLocalStoreIdPrefix + id, key);
    },

    loadKeyPairNotImported: function (id) {
        if (typeof Storage === "undefined") {
            console.log('Your browser does not support HTML5 Browser Local Storage !');
            throw 'Your browser does not support HTML5 Browser Local Storage !';
        }

        //TODO decryption
        return localStorage.getItem(this.aesLocalStoreIdPrefix + id);
    }
}