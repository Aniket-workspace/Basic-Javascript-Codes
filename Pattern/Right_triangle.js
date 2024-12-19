// function printRightTriangle(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// // Call the function to print the pattern
// printRightTriangle(5);

// const num = 5;

// const rightTriangle = (num) => {
//   let num1 = 1;
//   for (let i = 1; i <= num; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += num1;
//     }
//     console.log(row);
//     num1 += 2;
//   }
// };
// rightTriangle(num);

const num = 5;

const rightTriangle = (num) => {
  let num1 = 1;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num1;
    }
    console.log(row);
    num1++;
  }
};
rightTriangle(num);
