const arr1 = [5, 7, 8, 6, 6];
const arr2 = [2, 5, 1, 6];

const insertions = [...new Set(arr1.filter((ele) => arr2.includes(ele)))];

console.log(insertions);
