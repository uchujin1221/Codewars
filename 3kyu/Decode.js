// General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy but they are all encrypted. Those messages are crucial to getting the jump on the enemy and winning the war. Luckily intelligence also captured an encoding device as well. However even the smartest programmers weren't able to crack it though. So the general is asking you , his most odd but brilliant programmer.

// You can call the encoder like this.

// console.log (device.encode ('What the hell')) ;

// Our cryptoanalysts kept poking at it and found some interesting patterns.

// console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
// console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ;
// console.log (device.encode ('!@#$%^&*()_+-')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz') ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode (a) ;
// }).join ('')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode ('_'+a)[1] ;
// }).join ('')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode ('__'+a)[2] ;
// }).join ('')) ;

// We think if you keep on this trail you should be able to crack the code! You are expected to fill in the

// device.decode

// function. Good luck ! General Patron is counting on you!

// ---

// Test to understand the logic and find out the pattern.

// console.log (device.encode ('What is this ?')) ;
// console.log (device.encode ('What the hell')) ;
// console.log (device.encode ('!@#$%^&*()_+-')) ;
// console.log (device.encode (' '.repeat(66))) ;
// console.log (device.encode (','.repeat(66))) ;
// console.log (device.encode ('.'.repeat(66))) ;
// console.log ('---');
// console.log ('abcdefghijklmnopqrstuvwxyz');
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode (a) ;
// }).join (''));
// console.log (device.encode ('a'.repeat(66)));
// console.log (device.encode ('b'.repeat(66)));
// console.log ('---');
// console.log ('abcdefghijklmnopqrstuvwxyz'.toUpperCase());
// console.log ('abcdefghijklmnopqrstuvwxyz'.toUpperCase().split ('').map (function (a) {
//   return device.encode (a) ;
// }).join ('')) ;
// console.log (device.encode ('a'.toUpperCase().repeat(66)));
// console.log (device.encode ('b'.toUpperCase().repeat(66)));
// console.log ('---');
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   console.log (a, device.encode (a), device.encode ('-'.repeat(65)+a)[65]);
// }).join ('')) ;

device.decode = function (w) {
  // The following is the key to encode and encode the messages based on analysis
  const key =
    "bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa";

  // console.log(w);
  // console.log(key);
  // console.log("---");

  // The following is a longer version use for debugging and I leave it for reference
  // const outputDebug = w.split("").map((value, i) => {
  //   let keyChar = "";
  //   if (key.indexOf(value) !== -1) {
  //     keyChar =
  //       key.indexOf(value) - i - 1 < 0
  //         ? key.split("").slice(key.indexOf(value) - i - 1)[0]
  //         : key[key.indexOf(value) - i - 1];
  //   } else {
  //     keyChar = value;
  //   }
  //   console.log(`-- ${keyChar} --`);
  //   console.log(`Charcter at position [${i + 1}] is [${value}]`);
  //   console.log(
  //     `Key position is [${key.indexOf(value) + 1}], [${
  //       i + 1
  //     }] character back from [${value}] in key is [${keyChar}]`
  //   );
  //   return keyChar;
  // });

  const output = w
    .split("")
    .map((value, i) =>
      key.indexOf(value) === -1
        ? value
        : key.indexOf(value) - i - 1 < 0
        ? key.split("").slice(key.indexOf(value) - i - 1)[0]
        : key[key.indexOf(value) - i - 1]
    );

  // console.log (output.join(''), typeof output);
  return output.join("");
};
