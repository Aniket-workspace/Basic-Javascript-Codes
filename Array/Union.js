const arr1 = [2, 5, 1, 6];
const arr2 = [5, 7, 8, 6, 6];

const union = [...new Set([...arr1, ...arr2])];
console.log(union);
