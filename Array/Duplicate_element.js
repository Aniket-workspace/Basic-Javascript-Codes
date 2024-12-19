function Duplicate() {
  const arrayNumber = [1, 2, 3, 4, 5, 9, 5, 6, 7, 8, 2, 9];
  const duplicate = arrayNumber.filter(
    (ele, index, arr) => arr.indexOf(ele) !== index
  );
  console.log(duplicate);
}
Duplicate();
