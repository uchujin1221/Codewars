// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
// Strings
// Fundamentals

function alphabetPosition(text) {
  let textNew = [];

  // 96 is magic number
  for (let i = 0; i < text.length; i++) {
    if (
      text[i].toLowerCase().charCodeAt() >= 97 &&
      text[i].toLowerCase().charCodeAt() <= 122
    ) {
      //console.log(`>> ${text[i].toLowerCase()} : ${text[i].toLowerCase().charCodeAt()}` );
      textNew.push(text[i].toLowerCase().charCodeAt() - 96);
    }
  }

  console.log(`Output : ${textNew.toString().replaceAll(",", " ")}`);

  return textNew.toString().replaceAll(",", " ");
}
