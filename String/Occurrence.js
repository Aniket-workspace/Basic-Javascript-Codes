const str = "Aniket Gawai";
const find = "I";

const findOccurrence = (str, find) => {
  const newStr = str.toLowerCase();
  const newFind = find.toLowerCase();

  let count = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] == newFind) {
      count++;
    }
  }

  console.log(`in ${str} occurrence of ${find} = ${count}`);
};
findOccurrence(str, find);
