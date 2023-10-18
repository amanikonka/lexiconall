function stringTimes(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += str;
    }
    return result;
  }
  console.log(stringTimes("Hi", 2));  // "HiHi"
  console.log(stringTimes("Hi", 3));  // "HiHiHi"
  console.log(stringTimes("Hi", 1));  // "Hi"
    