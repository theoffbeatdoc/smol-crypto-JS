//this code based on a stackoverflow answer: https://stackoverflow.com/a/66938952

const crypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  
    return text
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
  };
  
  const decrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
  };

// encrypting
const encrypted_text = crypt("sugar", "TextToEncrypt"); 
console.log("Encrypted text:"+encrypted_text); //Output: Encrypted text:26170a06261d371c11000b0206

// decrypting
const decrypted_string = decrypt("sugar", "26170a06261d371c11000b0206");
console.log("Decrypted text:"+ decrypted_string); ////Output: Decrypted text:TextToEncrypt