const arrayNumber = [1, 2, 30, 40, 5, 9, 5, 6, 0, 7, 8, 2, 9];

function Max(arr) {
  // method 1

  //   return arr.reduce((pre, cur) => {
  //     return pre > cur ? pre : cur;
  //   });

  //   method 2
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(`Max: ${Max(arrayNumber)}`);

function Min(arr) {
  //   method 1

  //   return arr.reduce((pre, cur) => {
  //     return pre < cur ? pre : cur;
  //   });

  //   method 2
  let min = 1000;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(`Min: ${Min(arrayNumber)}`);
