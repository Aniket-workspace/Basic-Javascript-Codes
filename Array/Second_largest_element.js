const arrayNumber = [1, 2, 30, 40, 5, 90, 5, 6, 0, 7, 8, 2, 9];

function SecondMax(arr) {
  function maxEle(arr) {
    let max = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  let index = arr.indexOf(maxEle(arr));

  arr.splice(index, 1);

  console.log(`Second Max: ${maxEle(arr)}`);
}
SecondMax(arrayNumber);

// video method ------------------------------------------------------

// function SecondMax(arr) {
//   let firstMax = Math.max(...arr);
//   let index = arr.indexOf(firstMax);

//   arr.splice(index, 1);
//   let secondMax = Math.max(...arr);

//   console.log(`Second Max: ${secondMax}`);
// }
// SecondMax(arrayNumber);
