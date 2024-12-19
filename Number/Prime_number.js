let num = 2;

const isPrime = (n) => {
  if (n === 1) {
    console.log(`${n} is neither prime nor composite`);
  } else if (n < 1) {
    console.log(`Not possible to find`);
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        var result = `${n} is not prime number`;
        break;
      } else {
        result = `${n} is prime number`;
      }
    }
    console.log(result);
  }
};
isPrime(num);
