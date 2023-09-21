// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// n=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

function josephusSurvivor(n, k) {
  //your code here

  // No further process needed
  if (n === 1) return 1;

  const executionArr = [];
  for (let i = 0; i < n; i++) executionArr.push(i + 1);

  console.log(
    `n = ${n}, k = ${k}, executionArr.length = ${executionArr.length}`
  );
  // console.log(`executionArr initial = ${executionArr}`);

  let done = false;

  let knifePos = 0;
  let knife = executionArr[knifePos];

  let deadPos = 0;
  let dead = executionArr[deadPos];

  // Find first person to die
  if (n >= k) deadPos = knifePos + k - 1;
  else deadPos = knifePos + k - 1 - executionArr.length;

  // Validate position for the dead
  if (typeof executionArr[deadPos] !== "undefined")
    dead = executionArr[deadPos];
  else {
    while (typeof executionArr[deadPos] === "undefined") {
      deadPos = deadPos - executionArr.length;
      // console.log(`deadPos fix = ${deadPos} : ${executionArr[deadPos]}`);
    }
    dead = executionArr[deadPos];
  }

  while (!done) {
    // console.log(`current knife = ${knife}, knife position = ${knifePos}`);
    // console.log(`current to die = ${dead}, dead position = ${deadPos}`);

    // locate next kinfe man which is next to current person to die
    if (typeof executionArr[deadPos + 1] !== "undefined") {
      knifePos = deadPos; // take care the next knife position AFTER the dead being delete, no need to - 1
      knife = executionArr[knifePos + 1]; // The actual knife in current array before dead being delete, need to + 1
    } else {
      knifePos = 0;
      knife = executionArr[knifePos];
    }

    // console.log(`next knife = ${knife}, next knife position = ${knifePos}`);

    // Kill person
    executionArr.splice(deadPos, 1);

    // console.log(`current executionArr = ${executionArr}`);

    // Find next person to die based on current kinfe position
    if (n >= k) deadPos = knifePos + k - 1;
    else deadPos = knifePos + k - 1 - executionArr.length;

    // Validate position for the dead
    if (typeof executionArr[deadPos] !== "undefined")
      dead = executionArr[deadPos];
    else {
      while (typeof executionArr[deadPos] === "undefined") {
        deadPos = deadPos - executionArr.length;
        // console.log(`deadPos fix = ${deadPos} : ${executionArr[deadPos]}`);
      }
      dead = executionArr[deadPos];
    }

    // console.log(`next to die = ${dead}, dead position = ${deadPos}`);

    // No more to kill, exit loop
    if (executionArr.length === 1) {
      done = true;
    }
  }

  console.log(executionArr);
  return executionArr[0];
}
