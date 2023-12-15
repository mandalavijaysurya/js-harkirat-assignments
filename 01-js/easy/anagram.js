/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let map = new Map()
  
  for(let char of str1) {
    if(map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char,1)
  }
  for(let char of str2) {
    if(map.has(char) && map.get(char) > 0) map.set(char, map.get(char) - 1)
    else return false
  }
  for(key of map.keys()){
    if(map.get(key) > 0) return false
  }
  return true
}

console.log(isAnagram('Debit Card', 'Bad Credit'))

module.exports = isAnagram;
