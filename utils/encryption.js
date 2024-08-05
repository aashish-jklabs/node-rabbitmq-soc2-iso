const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const publicKey = fs.readFileSync(path.resolve(__dirname, 'public_key.pem'), 'utf8');
const privateKey = fs.readFileSync(path.resolve(__dirname, 'private_key.pem'), 'utf8');

const encryptMessage = (message) => {
    const buffer = Buffer.from(message, 'utf8');
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    logger.info('Message encrypted');
    return encrypted.toString('base64');
}

const decryptMessage = (encryptedMessage) => {
    const buffer = Buffer.from(encryptedMessage, 'base64');
    const decrypted = crypto.privateDecrypt(privateKey, buffer);
    logger.info('Message decrypted');
    return decrypted.toString('utf8');
}

module.exports = {
    encryptMessage,
    decryptMessage
}