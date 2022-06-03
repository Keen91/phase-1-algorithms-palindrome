function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = [];
  for (i of word) {
    reversedWord.unshift(i);
    // console.log(reversedWord);
  }
  if (reversedWord.join('') === word) {
    return true
  } else {return false}
}

isPalindrome('racecar');


/* 
  Add your pseudocode here
  1- assign an empty array for reversed word to push letters in it
  2- loop in every letter of word 
  3- push the letter at the beginning of the reversed array word
  4- join the letters from the reversed array word into one string
  5- if the string of the reversed word is the same as the word return true if not false
*/

/*
  Add written explanation of your solution here
  It is already explained in the pseudocode.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
