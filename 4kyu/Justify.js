// Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

// Here are the rules:

//     Use spaces to fill in the gaps between words.
//     Each line should contain as many words as possible.
//     Use '\n' to separate lines.
//     Gap between words can't differ by more than one space.
//     Lines should end with a word not a space.
//     '\n' is not included in the length of a line.
//     Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
//     Last line should not be justified, use only one space between words.
//     Last line should not contain '\n'
//     Strings with one word do not need gaps ('somelongword\n').

// Example with width=30:

// Lorem  ipsum  dolor  sit amet,
// consectetur  adipiscing  elit.
// Vestibulum    sagittis   dolor
// mauris,  at  elementum  ligula
// tempor  eget.  In quis rhoncus
// nunc,  at  aliquet orci. Fusce
// at   dolor   sit   amet  felis
// suscipit   tristique.   Nam  a
// imperdiet   tellus.  Nulla  eu
// vestibulum    urna.    Vivamus
// tincidunt  suscipit  enim, nec
// ultrices   nisi  volutpat  ac.
// Maecenas   sit   amet  lacinia
// arcu,  non dictum justo. Donec
// sed  quam  vel  risus faucibus
// euismod.  Suspendisse  rhoncus
// rhoncus  felis  at  fermentum.
// Donec lorem magna, ultricies a
// nunc    sit    amet,   blandit
// fringilla  nunc. In vestibulum
// velit    ac    felis   rhoncus
// pellentesque. Mauris at tellus
// enim.  Aliquam eleifend tempus
// dapibus. Pellentesque commodo,
// nisi    sit   amet   hendrerit
// fringilla,   ante  odio  porta
// lacus,   ut   elementum  justo
// nulla et dolor.

// Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

// Have fun :)

function justify(text, width) {
  // Your code goes here

  console.log(`text : ${text}, width : ${width}`);

  // output array
  const output = [];

  // split original text into array
  const process = text.split(" ");

  // Array to store single line event
  const charArr = []; // single line characters
  const spaces = []; // single line spaces
  let buf = ""; // buffer to store the characters and spaces before pushing to output
  let bufCount = 0; // count number of characters in a single line being processed

  // Process the main array
  for (let i = 0; i < process.length; i++) {
    // add char if single line buffer count < width
    if (bufCount < width) {
      bufCount += process[i].length;
      charArr.push(process[i]);
      console.log(`added character [${process[i]}] into charArr`);
    }

    // preview and perform reset if needed
    if (i + 1 < process.length && process[i + 1].length + bufCount >= width) {
      console.log(`bufCount : ${bufCount}`);
      console.log(`non-adjust spaces : ${spaces}`);
      let x = 0;
      // Allocate remaining spaces equally
      for (let j = bufCount; j < width; j++) {
        spaces[x] += 1;
        if (x + 1 < spaces.length) {
          x++;
        } else {
          x = 0;
        }
      }
      console.log(`adjusted spaces : ${spaces}`);
      console.log(`characters to process : ${charArr}`);

      // compose single line and then push to output array
      buf = "";
      const strFill = " "; // constant string
      for (let k = 0; k < charArr.length; k++) {
        buf += charArr[k] + strFill.repeat(spaces[k]);
      }
      buf += "\n";

      console.log(`buf ready to push to output : ${buf}`);
      output.push(buf);

      // reset values
      bufCount = 0;
      spaces.splice(0);
      charArr.splice(0);
    } else {
      // only add space between words
      bufCount++;
      spaces.push(1);
    }
  }

  // Process final charArr element
  console.log(`Final charArr element : ${charArr}, length : ${charArr.length}`);

  buf = "";
  for (let i = 0; i < charArr.length; i++) {
    buf += charArr[i] + " ";
  }
  // get rid of last space
  output.push(buf.trim());
  console.log(`Finaly line to push to output Array: ${buf}`);
  console.log(output.join(""));

  return output.join("");
}
