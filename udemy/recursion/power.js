//https://leetcode.com/problems/powx-n/

var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return x * myPow(x, n - 1);
};
