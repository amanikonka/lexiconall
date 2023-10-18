function luckySum(a, b, c) {
    if (a === 13) {
      return 0; // If 'a' is 13, return 0, and no other values will be added.
    } else if (b === 13) {
      return a; // If 'b' is 13, return 'a' because 'b' and 'c' don't count.
    } else if (c === 13) {
      return a + b; // If 'c' is 13, return 'a' + 'b' because 'c' doesn't count.
    } else {
      return a + b + c; // If no value is 13, return the sum of all three values.
    }
  }
  console.log(luckySum(1, 2, 3));   // 6
  console.log(luckySum(1, 2, 13));  // 3
  console.log(luckySum(1, 13, 3));  // 1
    