function linearSearch(arr, number) {
  const index = arr.indexOf(number); // Sử dụng method indexOf để tìm vị trí của số trong mảng
  return index; // Trả về index hoặc -1 nếu không tìm thấy
}

const result = linearSearch([10, 15, 20, 25, 30], 15);

linearSearch([10, 15, 20, 25, 30], 15); // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
// linearSearch([100], 100) // 0
// linearSearch([1,2,3,4,5], 6) // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
// linearSearch([100], 200) // -1
