let num = 5;

const Factorial = (n) => {
  let factorial = 1;
  if (n < 0) {
    console.log(`Fictorial is not possible of ${n}`);
  } else {
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    console.log(`Fictorial of ${n} is ${factorial}`);
  }
};
Factorial(num);
