// This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

// Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

// Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

// You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

// Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0 to n-1; k will always be >=1.

// For example, with an array=[1,2,3,4,5,6,7] and k=3, the function should act this way.

// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
// [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
// [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
// [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
// [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
// [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
// [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]

// So our final result is:

// [3,6,2,7,5,1,4]

// For more info, browse the Josephus Permutation page on wikipedia; related kata: Josephus Survivor.

// Also, live game demo by OmniZoetrope.

function josephus(items, k) {
  //your code here

  // No further process needed
  if (items.length === 0) return [];
  else if (items.length === 1) return items;

  const executionArr = [];
  const outputArr = [];

  for (let i = 0; i < items.length; i++) executionArr.push(items[i]);

  console.log(`Input = ${items} : ${k}`);
  console.log(`executionArr initial = ${executionArr}`);

  let done = false;

  let knifePos = 0;
  let knife = executionArr[knifePos];

  let deadPos = 0;
  let dead = executionArr[deadPos];

  // Find first person to die
  if (items.length >= k) deadPos = knifePos + k - 1;
  else deadPos = knifePos + k - 1 - executionArr.length;

  // Validate position for the dead
  if (typeof executionArr[deadPos] !== "undefined")
    dead = executionArr[deadPos];
  else {
    while (typeof executionArr[deadPos] === "undefined") {
      deadPos = deadPos - executionArr.length;
      console.log(`deadPos fix = ${deadPos} : ${executionArr[deadPos]}`);
    }
    dead = executionArr[deadPos];
  }

  while (!done) {
    console.log(`current knife = ${knife}, knife position = ${knifePos}`);
    console.log(`current to die = ${dead}, dead position = ${deadPos}`);

    // locate next kinfe man which is next to current person to die
    if (typeof executionArr[deadPos + 1] !== "undefined") {
      knifePos = deadPos; // take care the next knife position AFTER the dead being delete, no need to - 1
      knife = executionArr[knifePos + 1]; // The actual knife in current array before dead being delete, need to + 1
    } else {
      knifePos = 0;
      knife = executionArr[knifePos];
    }

    console.log(`next knife = ${knife}, next knife position = ${knifePos}`);

    // Keep dead person record
    outputArr.push(dead);
    // Kill person
    executionArr.splice(deadPos, 1);

    console.log(`current executionArr = ${executionArr}`);

    // Find next person to die based on current kinfe position
    if (items.length >= k) deadPos = knifePos + k - 1;
    else deadPos = knifePos + k - 1 - executionArr.length;

    // Validate position for the dead
    if (typeof executionArr[deadPos] !== "undefined")
      dead = executionArr[deadPos];
    else {
      while (typeof executionArr[deadPos] === "undefined") {
        deadPos = deadPos - executionArr.length;
        console.log(`deadPos fix = ${deadPos} : ${executionArr[deadPos]}`);
      }
      dead = executionArr[deadPos];
    }

    console.log(`next to die = ${dead}, dead position = ${deadPos}`);

    // No more to kill, exit loop
    if (executionArr.length === 1) {
      outputArr.push(dead);
      done = true;
    }
  }

  console.log(outputArr);
  return outputArr;
}
