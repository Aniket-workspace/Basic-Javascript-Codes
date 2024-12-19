const num = 9;

const findFibonacciSeries = (num) => {
  let num1 = 0;
  let num2 = 1;
  let num3;

  console.log(num1 + "\n" + num2);
  for (let i = 2; i < num; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    console.log(num3);
  }
};
findFibonacciSeries(num);
