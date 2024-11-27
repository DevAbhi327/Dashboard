import CryptoJS from 'crypto-js';

// Function to encrypt a value
const encryptValue = (value) => {
    return CryptoJS.AES.encrypt(value, 'loginToken');
};

// Function to decrypt a value
const decryptValue = (encryptedValue) => {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, 'loginToken');
    return bytes.toString(CryptoJS.enc.Utf8);
};

// Function to store an encrypted value in localStorage
export const storeEncryptedValue = (key, value) => {
    const encryptedValue = encryptValue(value);
    localStorage.setItem(key, encryptedValue);
};

// Function to get and decrypt a value from localStorage
export const getDecryptedValue = (key) => {
    const encryptedValue = localStorage.getItem(key);
    if (!encryptedValue) return null;
    return decryptValue(encryptedValue);
};
