const a = 2;
const b = 5;

// swap using third variable
const UsingThirdVar = (a, b) => {
  let temp = a;
  a = b;
  b = temp;

  console.log(`a: ${a} and b: ${b}`);
};
UsingThirdVar(a, b);

// without using third variable
const WithoutThirdVar = (a, b) => {
  // my
  // a = a + b;
  // b = a - b;
  // a = a - b;

  // video
  [a, b] = [b, a];

  console.log(`a: ${a} and b: ${b}`);
};
WithoutThirdVar(a, b);
