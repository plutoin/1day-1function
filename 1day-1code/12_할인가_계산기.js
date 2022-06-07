// 06.07

function discount(price, count) {
  let discount = price * 0.1
  let result = price - discount
  if (count == false) {
    return parseFloat(result.toFixed(1))
  } else {
    result = result - 1.5
    return parseFloat(result.toFixed(1))
  }
}

console.log(typeof discount(70, false));  // number
console.log(discount(70, false));  // 63
console.log(discount(10.3, true));  // 7.8