import CryptoJS from 'crypto-js';

/**
 * Encrypt a file's content using AES encryption.
 * @param {string} plainText - The content to encrypt.
 * @param {string} secret - The secret key for encryption.
 * @returns {string} - The encrypted content in Base64 format.
 */
export function encryptFile(plainText, secret) {
    const encrypted = CryptoJS.AES.encrypt(plainText, secret);
    return encrypted.toString();
}

/**
 * Decrypt a file's content using AES decryption.
 * @param {string} cipherText - The encrypted content.
 * @param {string} secret - The secret key for decryption.
 * @returns {string} - The decrypted content.
 */
export function decryptFile(cipherText, secret) {
    const bytes = CryptoJS.AES.decrypt(cipherText, secret);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}