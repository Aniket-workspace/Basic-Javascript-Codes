const arr1 = ["2", 5, 1, 6];
const arr2 = [9, 3, 7];

// method 1
const Merge1 = (arr1, arr2) => {
  let mergedArray = arr1.concat(arr2);
  let sortedArray = mergedArray.sort((a, b) => {
    return a - b;
  });
  console.log(sortedArray);
};
Merge1(arr1, arr2);

// method 2
const Merge2 = (arr1, arr2) => {
  let mergedArray = [...arr1, ...arr2];
  let sortedArray = mergedArray.sort((a, b) => {
    return a - b;
  });
  console.log(sortedArray);
};
Merge2(arr1, arr2);
