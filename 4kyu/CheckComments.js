// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function checkComments(input, markers) {
  //   console.log(`input: ${input}, markers: ${markers}`);
  const inputSplit = input.split("\n");
  const output = [];

  for (const k of inputSplit) {
    // console.log(`k: ${k}`);
    let kk = k;
    for (const m of markers) {
      //   console.log(`m: ${m}`);
      if (k.indexOf(m) >= 0) {
        // console.log(`markers: ${m} found in ${k} at position ${k.indexOf(m)}`);
        // console.log(`cut string is now : ${k.slice(0, k.indexOf(m)).trim()}`);
        kk = k.slice(0, k.indexOf(m)).trim();
        break;
      }
    }
    output.push(kk);
  }
  //   console.log(output.join("\n"));
  return output.join("\n");
}
