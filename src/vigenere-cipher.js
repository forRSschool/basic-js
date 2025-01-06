const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Invalid arguments');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let cipherText = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (alphabet.includes(char)) {
        const messageCharIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length]);
        const encryptedCharIndex = (messageCharIndex + keyCharIndex) % 26;
        cipherText += alphabet[encryptedCharIndex];
        keyIndex++;
      } else {
        cipherText += char;
      }
    }

    return this.isDirect ? cipherText : cipherText.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Invalid arguments');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryptedText = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (alphabet.includes(char)) {
        const messageCharIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length]);
        const decryptedCharIndex = (messageCharIndex - keyCharIndex + 26) % 26;
        decryptedText += alphabet[decryptedCharIndex];
        keyIndex++;
      } else {
        decryptedText += char;
      }
    }

    return this.isDirect ? decryptedText : decryptedText.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
