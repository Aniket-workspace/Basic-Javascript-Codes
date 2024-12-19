const arrayNumber = [1, 6, 7, 2, 3, 8, 9, 4];

// video
// const Sum = (arr) => {
//   return arr.reduce((prv, cur) => {
//     return prv + cur;
//   });
// };

// my
const Sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(Sum(arrayNumber));
