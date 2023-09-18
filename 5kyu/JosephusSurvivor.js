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
