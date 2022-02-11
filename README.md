# smol-crypto-JS
 This is a quick JS library that has 2 functions for encryption and decryption respectively. The function to encrypt (crypt) takes a salt and a string as arguments to render a hash, which you can pass to the decrypt function along with the salt as arguments to get back the original string! 

## Usage
```
// encrypting
const encrypted_text = crypt("sugar", "TextToEncrypt");
console.log("Encrypted text:"+encrypted_text); //Output: Encrypted text:26170a06261d371c11000b0206

// decrypting
const decrypted_string = decrypt("sugar", "26170a06261d371c11000b0206");
console.log("Decrypted text:"+ decrypted_string); ////Output: Decrypted text:TextToEncrypt
```
P.S.- Here we're using "sugar" as salt. XD

### FAQ: What is salt in cryptography?
In cryptography, a salt is random data that is used as an additional input to a one-way function that hashes data.
Read more about salt on Wikipedia: https://en.wikipedia.org/wiki/Salt_(cryptography)