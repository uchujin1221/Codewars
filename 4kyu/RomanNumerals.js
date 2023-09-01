// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
// Examples

// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
// 1000 -> "M"
//  400 -> "CD"
//   90 -> "XC"
//   40 -> "XL"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      -> 400
// "XC"      -> 90
// "XL"      -> 40
// "I"       -> 1

// Help
// Symbol 	Value
// I 	1
// IV 	4
// V 	5
// X 	10
// L 	50
// C 	100
// D 	500
// M 	1000

const romanArr = [
  "I",
  "IV",
  "V",
  "IX",
  "X",
  "XL",
  "L",
  "XC",
  "C",
  "CD",
  "D",
  "CM",
  "M",
];
const romanNumArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

class RomanNumerals {
  static toRoman(num) {
    let outputStr = "";
    let tempNum = num;

    console.log(`Input Num = ${tempNum}`);
    //console.log (`Num = ${romanNumArr}`);

    while (true) {
      let hasCalc = 0;
      for (let i = 0; i < romanNumArr.length; i++) {
        if (romanNumArr[i] > tempNum) {
          tempNum = tempNum - romanNumArr[i - 1];
          outputStr += romanArr[romanNumArr.indexOf(romanNumArr[i - 1])];
          //console.log (`>> ${romanNumArr[i-1]}, ${tempNum}`);
          hasCalc = 1;
          break;
        }
      }
      if (hasCalc === 0) {
        tempNum -= 1000;
        outputStr += "M";
      }

      //console.log(`${tempNum}`);

      if (tempNum === 0) {
        break; //break while loop
      }
    }

    console.log(`Final output = ${outputStr}`);

    return outputStr;
  }

  static fromRoman(str) {
    let outputNum = 0;

    console.log(`Input String = ${str}`);

    for (let i = 0; i < str.length; i++) {
      let tempNum = 0;
      console.log(
        `${str[i]} : ${romanArr.indexOf(str[i])} : ${
          romanNumArr[romanArr.indexOf(str[i])]
        } `
      );

      if (romanNumArr[romanArr.indexOf(str[i] + str[i + 1])] > 0) {
        // found double
        //console.log (romanNumArr[romanArr.indexOf(tempStr)]);
        tempNum = romanNumArr[romanArr.indexOf(str[i] + str[i + 1])];
        i++;
      } else {
        // found single
        //console.log (romanNumArr[romanArr.indexOf(str[i])]);
        tempNum = romanNumArr[romanArr.indexOf(str[i])];
      }

      outputNum += tempNum;
      //console.log (outputNum);
    }

    console.log(`Final number = ${outputNum}`);

    return outputNum;
  }
}
