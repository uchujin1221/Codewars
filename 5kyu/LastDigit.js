// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^797 is 999, since 97=47829699^7 = 478296997=4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over 109210^{92}1092 decimal digits, is 666. Also, please take 000^000 to be 111.

// You may assume that the input will always be valid.
// Examples

// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0

// Remarks
// JavaScript, C++, R, PureScript, COBOL

// Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

var lastDigit = function (str1, str2) {
  // Resource : https://brilliant.org/wiki/finding-the-last-digit-of-a-power/

  let output = 0;

  console.log(`str1 = ${str1}, str2 = ${str2},`);

  let lastDigitStr1 = str1.substr(str1.length - 1);

  let modStr2 = 0;
  for (let i = 0; i < str2.length; i++) {
    modStr2 = (modStr2 * 10 + parseInt(str2[i])) % 4;
    if (modStr2 === 0) {
      modStr2 = 4;
    }
  }

  if (parseInt(str2) === 0) {
    console.log(`str2 is ${str2}`);
    output = 1;
  } else if (parseInt(lastDigitStr1) === 0) {
    console.log(`lastDigitStr1 is ${lastDigitStr1}`);
    output = 0;
  } else {
    console.log(`lastDigitStr1 = ${lastDigitStr1}, modStr2 = ${modStr2},`);
    output = Math.pow(parseInt(lastDigitStr1), modStr2) % 10;
  }

  console.log(`Final output = ${output}`);

  return output; // fix me
};
