/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;
  
  const str1Cased = str1.toLowerCase()
  const str2Cased = str2.toLowerCase()

 

  for(let i=0;i<str1Cased.length;i++){
    if(!str2Cased.includes(str1Cased[i])) return false;
  }

  return true;

}

module.exports = isAnagram;
