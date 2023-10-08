// // Binary Search Exercise
// // Write a function called binarySearch which accepts
// // a sorted array and a value and returns the index at which the value exists.
// // Otherwise, return -1.

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  // let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      console.log(mid);
      return mid;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
}

// // binarySearch([1, 2, 3, 4, 5], 2); // 1
// // binarySearch([1, 2, 3, 4, 5], 3); // 2
// // binarySearch([1, 2, 3, 4, 5], 5); // 4
// // binarySearch([1, 2, 3, 4, 5], 6); // -1
// // binarySearch(
// //   [
// //     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
// //     99,
// //   ],
// //   10
// // ); // 2
