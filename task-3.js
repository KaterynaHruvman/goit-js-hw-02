function findLongestWord(string = "") {
  const Oneword = string.split(" ");
  let longestWord = Oneword[0];
  for (let i = 0; i < Oneword.length; i += 1) {
    if (longestWord.length <= Oneword[i].length) {
      longestWord = Oneword[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
