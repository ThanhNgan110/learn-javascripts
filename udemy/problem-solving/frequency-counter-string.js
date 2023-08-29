//  Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const key of string1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }
  for (const key of string2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

// validAnagram("aaz", "zza"); // false
validAnagram("", ""); // true
