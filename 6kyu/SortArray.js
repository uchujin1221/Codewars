// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  const odds = array
    .filter((num) => Math.abs(num) % 2 === 1)
    .sort((a, b) => a - b);

  console.log(`Input : ${array}`);
  console.log(`Sorted Odds : ${odds}`);

  let y = 0;
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i]) % 2 === 1) {
      console.log(`Found odd number : ${array[i]}`);
      array[i] = odds[y];
      y++;
    }
  }

  console.log(`Output : ${array}`);

  // Return a sorted array.
  return array;
}
