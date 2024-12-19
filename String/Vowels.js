// check charecter is vowel or not

const char = "A";

const isVowel = (char) => {
  char = char.toLowerCase();
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    console.log(`${char} is vowel`);
  } else {
    console.log(`${char} is not vowel`);
  }
};
isVowel(char);

// count number of vowels in string
const str = "Aniket";
const vowels = ["a", "e", "i", "o", "u"];

const CountVowels = (str, vow) => {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vow.includes(char)) {
      count++;
    }
  }
  console.log(`${count} vowels prsent in string`);
};
CountVowels(str, vowels);
