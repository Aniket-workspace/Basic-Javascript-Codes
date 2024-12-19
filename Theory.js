// Difference between "find" and "filter"

// - filter() method returns the matched values in an array from the collection.
// - find() method returns the first value that matches from the collection Once it matches the value in findings, it will not check the remaining values in the array collection

const empArr = [
  { name: "king", age: 42 },
  { name: "ali", age: 32 },
  { name: "ahmad", age: 22 },
  { name: "zain", age: 62 },
  { name: "ayesha", age: 52 },
  { name: "hafsa", age: 28 },
  { name: "sadi", age: 27 },
  { name: "rohma", age: 26 },
  { name: "masooma", age: 25 },
];

// filter items
const filterItems = empArr.filter((item) => {
  return item.age > 30;
});
console.log("Filter Items: ", filterItems);

// find items
const findItems = empArr.find((item) => {
  return item.age > 30;
});
console.log("Find Items: ", findItems);
