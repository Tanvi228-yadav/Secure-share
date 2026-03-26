const crypto = require('crypto');

const algorithm = 'aes-256-gcm';
const key = crypto.randomBytes(32); // Key should be 32 bytes for AES-256

// Encrypt function
function encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const tag = cipher.getAuthTag();
    return { iv: iv.toString('hex'), encryptedData: encrypted, tag: tag.toString('hex') }; 
}

// Decrypt function
function decrypt(encryptedData, iv, tag) {
    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
    decipher.setAuthTag(Buffer.from(tag, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage:
// const encrypted = encrypt('Hello, World!');
// console.log(encrypted);
// const decrypted = decrypt(encrypted.encryptedData, encrypted.iv, encrypted.tag);
// console.log(decrypted);

module.exports = { encrypt, decrypt };