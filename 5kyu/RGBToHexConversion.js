// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  // complete this function

  let rgbArr = [r, g, b];
  let outputString = "";

  for (let i = 0; i < rgbArr.length; i++) {
    if (rgbArr[i] > 255) {
      rgbArr[i] = 255;
    } else if (rgbArr[i] < 0) {
      rgbArr[i] = 0;
    }

    //console.log(`${rgbArr[i].toString(16)}`);

    if (rgbArr[i].toString(16).length === 1) {
      if (typeof rgbArr[i].toString(16) === "String") {
        outputString = outputString + rgbArr[i].toString(16) + "0";
      } else {
        outputString = outputString + "0" + rgbArr[i].toString(16);
      }
    } else {
      outputString += rgbArr[i].toString(16);
    }
  }

  console.log(`RGB value (${rgbArr}) is : ${outputString.toUpperCase()}`);

  return outputString.toUpperCase();
}
