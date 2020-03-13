const isEven  = function (num) {
  return num % 2 === 0;
}
const nextYear = isEven(30);
const thisYear = isEven(29);

console.log(nextYear);
console.log(thisYear);

console.log(isEven(25));
console.log(isEven(30));