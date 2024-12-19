let num = 371;
let temp = num;
let lengthOfDigit = num.toString().length;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** lengthOfDigit;
  temp = parseInt(temp / 10);
}
if (sum == num) {
  console.log(`${num} is amstrong number`);
} else {
  console.log(`${num} is not amstrong number`);
}
