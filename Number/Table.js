const num = 5;

const printTable = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
};
printTable(num);
