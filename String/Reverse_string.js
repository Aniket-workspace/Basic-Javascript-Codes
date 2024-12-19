const str = "aniket";

const ReverseString = (str) => {
  // strToArray = str.split("");
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
    // reversedStr += str.charAt(i);
  }
  console.log(reversedStr); //reversed string

  //   if (reversedStr === str) {    //palindrome
  //     console.log("palindrome");
  //   } else {
  //     console.log("not palindrome");
  //   }
};
ReverseString(str);
