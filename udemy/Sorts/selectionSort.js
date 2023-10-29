function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j--) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    let temp = arr[indexMin];
    arr[indexMin] = arr[i];
    arr[i] = temp;
  }
  printArray(arr);
}

function printArray(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i < arr.length - 1) {
      str += ", ";
    }
  }
  console.log(str);
}
selectionSort([14, 27, 33, 35, 10]);
