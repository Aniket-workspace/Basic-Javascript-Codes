const arrayNumber = [1, 6, 7, 2, 3, 8, 9];

const even = arrayNumber.filter((item) => {
  return item % 2 === 0;
});

const odd = arrayNumber.filter((item) => {
  return item % 2 !== 0;
});

console.log("Even Numbers: " + even);
console.log("Odd Numbers: " + odd);
