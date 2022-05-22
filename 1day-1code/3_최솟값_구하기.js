// 05.19

function min(array) {
  let output = array[0];
  for (const item of array) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}

const testArray = [30, 45, 234, 5, 56];
console.log(`${testArray}중에서 최솟값은 = ${min(testArray)}`);