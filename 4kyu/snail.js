"use strict";

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const array = [
  [1, 2, 3, 1],
  [4, 5, 6, 4],
  [7, 8, 9, 7],
  [7, 8, 9, 7],
];

const snail = function (array) {
  const resultArr = [];

  // const array = [
  //   [1, 2, 3, 1],
  //   [4, 5, 6, 4],
  //   [7, 8, 9, 7],
  //   [7, 8, 9, 7],
  // ];

  // Logic :
  // 1231 477 - left -> right -> bottom
  // 987 74 - right -> left -> up
  // 56 9 - left -> right -> bottom (repeat)
  // 8 - right -> left -> up (repeat)

  // 1. Print left -> right -> bottom
  const leftRightBottom = function () {
    // each element on 1st array
    array[0].map((e) => resultArr.push(+e));
    array.shift(); // remove

    // print all element at last position
    array.map((e) => resultArr.push(+e.splice(-1)));
  };

  // 2. right -> left -> up
  const rightLeftUp = function () {
    // Print each element on last array in reverse
    array[array.length - 1].reverse().map((e) => resultArr.push(+e));
    array.pop(); // remove

    // elements at first position start from bottom
    // array.toReversed().map((e) => resultArr.push(+e.splice(0, 1)));
    for (let i = array.length - 1; i >= 0; i--) {
      resultArr.push(+array[i].splice(0, 1));
    }
  };

  if (array[0].length === 0) return resultArr;

  while (array.length > 1) {
    leftRightBottom();
    rightLeftUp();
  }
  // Take last element into result
  if (array.length === 1) resultArr.push(+array);

  // console.log(resultArr);

  return resultArr;
  // enjoy
};

snail(array);
