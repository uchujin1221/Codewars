// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let outputArr = [];
  let zerosTtl = 0;

  //console.log (`Input Array : ${arr}`);

  for (let i = 0; i < arr.length; i++) {
    console.log(`"Input : ${arr[i]} >> ${typeof arr[i]}`);

    if (
      String(arr[i]) === "0" &&
      typeof arr[i] !== "string" &&
      arr[i] !== false &&
      arr[i] !== null
    ) {
      //console.log ("Found a 0");
      zerosTtl++;
    } else {
      outputArr.push(arr[i]);
    }
  }

  console.log(`Total Zeros : ${zerosTtl}`);
  console.log(`Output Arrray : ${outputArr.concat(Array(zerosTtl).fill(0))}`);

  return outputArr.concat(Array(zerosTtl).fill(0));
}
