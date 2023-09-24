// The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key).

// The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

// From Wikipedia:

//     The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.

//     . . .

//     In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.

// Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- this is not the case here.

// The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

// Visual representation:

// "my secret code i want to secure"  // message
// "passwordpasswordpasswordpasswor"  // key

// Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.
// Example

// var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// var key = 'password';

// // creates a cipher helper with each letter substituted
// // by the corresponding character in the key
// var c = new VigenèreCipher(key, alphabet);

// c.encode('codewars'); // returns 'rovwsoiv'
// c.decode('laxxhsj');  // returns 'waffles'

// Any character not in the alphabet must be left as is. For example (following from above):

// c.encode('CODEWARS'); // returns 'CODEWARS'

function VigenèreCipher(key, abc) {
  console.log(`abc = ${abc}, key = ${key}`);

  const abcArr = [];
  const keyArr = [];
  const table = [];

  let keyCount = 0;
  for (let i = 0; i < abc.length; i++) {
    // build array to store ascii values of abc
    abcArr.push(Number(abc[i].charCodeAt(0)));

    // make sure key contains same number of characters as in abc
    if (keyCount >= key.length) keyCount = 0;
    keyArr.push(key[keyCount]);
    keyCount++;
  }

  //   console.log(abcArr, keyArr);

  // build Vigenere Cipher table
  // rotate ascii characters in abcArr array !
  let startChr = 0;
  for (let row = 0; row < abc.length; row++) {
    table[row] = [];
    let chr = startChr;
    for (let column = 0; column < abc.length; column++) {
      if (chr >= abc.length) chr = 0; // rotation !
      table[row][column] = String.fromCharCode(abcArr[chr]);
      chr++;
    }
    startChr++;
  }

  //   console.log(table);

  this.encode = function (str) {
    console.log(`Encode String : ${str}`);
    let output = "";
    for (let i = 0; i < str.length; i++) {
      //   console.log(`key position ${keyArr[i]}`);
      //   console.log(`table row ${table[abc.indexOf(keyArr[i])]}`);
      //   console.log(
      //     `character is : ${table[abc.indexOf(keyArr[i])][abc.indexOf(str[i])]}`
      //   );
      if (table[abc.indexOf(keyArr[i])][abc.indexOf(str[i])])
        output += table[abc.indexOf(keyArr[i])][abc.indexOf(str[i])];
      else output += str[i];
    }
    return output;
  };

  this.decode = function (str) {
    console.log(`Decode String : ${str}`);
    let output = "";
    for (let i = 0; i < str.length; i++) {
      //   console.log(`key position ${keyArr[i]}`);
      //   console.log(`table row ${table[abc.indexOf(keyArr[i])]}`);
      //   console.log(
      //     `character is : ${
      //       table[abc.indexOf(keyArr[i])][
      //         table[abc.indexOf(keyArr[i])].indexOf(str[i])
      //       ]
      //     }`
      //   );
      //   console.log(
      //     `index is : ${table[abc.indexOf(keyArr[i])].indexOf(str[i])}`
      //   );
      //   console.log(
      //     `abc character  is : ${
      //       abc[table[abc.indexOf(keyArr[i])].indexOf(str[i])]
      //     }`
      //   );
      if (abc[table[abc.indexOf(keyArr[i])].indexOf(str[i])])
        output += abc[table[abc.indexOf(keyArr[i])].indexOf(str[i])];
      else output += str[i];
    }
    return output;
  };
}
