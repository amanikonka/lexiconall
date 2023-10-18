function sleepIn(weekday, vacation) {
    if (!weekday || vacation) {
      return true; // We sleep in
    } else {
      return false; // We don't sleep in
    }
  }
console.log(sleepIn(false, false)); // true
console.log(sleepIn(true, false));  // false
console.log(sleepIn(false, true));  // true
