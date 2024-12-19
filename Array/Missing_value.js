const arrayNumber = [1, 6, 7, 2, 3, 8, 9];
const missArray = [];

function missingValue(arr) {
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // OR

  //   let max = Math.max(...arr);

  let min = 1000;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // OR

  //   let min = Math.min(...arr);

  for (let i = min; i < max; i++) {
    if (arr.indexOf(i) < 0) {
      missArray.push(i);
    }
  }
  console.log(missArray);
}
missingValue(arrayNumber);
