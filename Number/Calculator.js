const num1 = 60;
const num2 = 12;
const operator = "/";

const Calculator = (num1, num2, operator) => {
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
};
Calculator(num1, num2, operator);
