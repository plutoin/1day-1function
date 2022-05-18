// a부터 b까지의 합을 구하는 함수
function sumAll(a, b) {
  let output = 0;
  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(`1부터 100까지의 합은 ${sumAll(1, 100)}입니다.`);
console.log(`1부터 500까지의 합은 ${sumAll(1, 500)}입니다.`);

// a부터 b까지의 곱을 구하는 함수
function multiplyAll (a, b) {
  let output = 1;
  for (let i = a; i <= b; i++) {
    output *= i;
  }
  return output
}

console.log(`1부터 3까지의 곱은 ${multiplyAll(1, 3)}입니다.`);
console.log(`1부터 5까지의 곱은 ${multiplyAll(1, 5)}입니다.`);