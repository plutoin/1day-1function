// 05.24
// 방법 1
const level = 5;

for (let i =1; i <= level; i++) {
  let tree = "";
  for (let k = 1; k <= level - i; k++) {
    tree = tree + " ";
  }
  for (let j = 1; j <= i*2-1; j++) {
    tree = tree + "*";
  }
  console.log(tree);
}

// 방법 2
const row = 5;

for (let i = 1; i <= row; i++) {
  console.log(" ".repeat(row - i) + "*".repeat(i * 2 - 1));
}