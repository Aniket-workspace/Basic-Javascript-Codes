const arr1 = [2, 5, 1, 6];
const arr2 = [5, 2, 6, 6];

const isArrayEqual = (arr1, arr2) => {
  if (arr1.length == arr2.length) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    // chat gpt
    // const isEqual = arr1.every((val, index) => val === arr2[index]);

    // my
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        var isEqual = true;
      } else {
        isEqual = false;
        break;
      }
    }

    if (isEqual) {
      console.log("Arrays are equal");
    } else {
      console.log("Arrays are not equal");
    }
  } else {
    console.log("Arrays are not equal");
  }
};
isArrayEqual(arr1, arr2);
