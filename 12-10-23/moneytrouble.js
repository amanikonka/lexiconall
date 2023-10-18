function monkeyTrouble(aSmile, bSmile) {
    if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
      return true; // We are in trouble
    } else {
      return false; // We are not in trouble
    }
  }
console.log(monkeyTrouble(true, true));   // true
console.log(monkeyTrouble(false, false)); // true
console.log(monkeyTrouble(true, false));  // false
