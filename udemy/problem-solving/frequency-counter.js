// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

//c1: 0(n2)
// function sameSquare(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     let check = arr2.indexOf(arr1[i] ** 2);
//     if (check === -1) {
//       return false;
//     }
//     arr2.splice(check, 1);
//   }
//   return true;
// }

//c2: 0(n)

function sameSquare(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequenceCounter1 = {};
  let frequenceCounter2 = {};

  for (let value of arr1) {
    frequenceCounter1[value] = (frequenceCounter1[value] || 0) + 1;
  }
  for (let value of arr2) {
    frequenceCounter2[value] = (frequenceCounter2[value] || 0) + 1;
  }
  console.log(frequenceCounter1);
  console.log(frequenceCounter2);

  for (let key in frequenceCounter1) {
    if (!(key ** 2) !== frequenceCounter2[key]) return false;

    if (frequenceCounter1[key ** 2] !== frequenceCounter2[key]) {
      return false;
    }
  }
  return true;
}

sameSquare([1, 2, 3], [1, 9]);
