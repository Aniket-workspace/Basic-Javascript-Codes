const str = "aniket gawai";

const firstLetterCapital = (str) => {
  let newStr = str.split(" ");
  let newArr = newStr.map((val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  });
  return newArr.join(" ");
};
console.log(firstLetterCapital(str));
