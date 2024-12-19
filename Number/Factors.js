const num = 11;

const FindFactor = (num) => {
  if (num < 1) {
    console.log(`Factors of ${num} is not possible...!`);
  } else {
    console.log(`Factors of ${num}: `);
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        console.log(i);
      }
    }
  }
};
FindFactor(num);
