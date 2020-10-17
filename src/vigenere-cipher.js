const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(isTrue) {
        if (isTrue === undefined || isTrue === true) {
            this.isTrue = true;
        } else {
            this.isTrue = false;
        }
    }

    encrypt(message, key) {
        const messageArray = message.toUpperCase().split('');
        const arrayKey = key.toUpperCase().split('');
        let j = 0;
        let digitCode = 0;
        for (let i = 0; i < messageArray.length; i++) {
            if (messageArray[i].charCodeAt(0) > 64 && messageArray[i].charCodeAt(0) < 91) {
              digitCode = messageArray[i].charCodeAt(0) + arrayKey[j].charCodeAt(0) - 65;
              if (digitCode > 90) digitCode -= 26;
              messageArray[i] = String.fromCharCode(digitCode);
              if (j < arrayKey.length-1) {
                j++;
              } else j = 0;
            } else continue;
        }
        return this.isTrue ? messageArray.join('') : messageArray.reverse().join('');
    }

    decrypt(message, key) {
        const messageArray = message.split('');
        const arrayKey = key.toUpperCase().split('');
        let j = 0;
        let digitCode;
        for (let i = 0; i < messageArray.length; i++) {
            if (messageArray[i].charCodeAt(0) < 65 || messageArray[i].charCodeAt(0) > 90) {
                continue;
            }
            digitCode = messageArray[i].charCodeAt(0) - arrayKey[j].charCodeAt(0) + 65;
            if (digitCode < 65) digitCode += 26;
            messageArray[i] = String.fromCharCode(digitCode);
            if (j < arrayKey.length-1) {
              j++;
            } else j = 0;
      }
        return this.isTrue ? messageArray.join('') : messageArray.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
