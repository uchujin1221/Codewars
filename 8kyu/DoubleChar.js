// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  // Your code here
  let strNew = "";
  for (let i = 0; i < str.length; i++) {
    strNew += str[i] + str[i];
    // console.log(str[i], strNew);
  }
  return strNew;
}
