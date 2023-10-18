function caught_speeding(speed, is_birthday) {
    if (is_birthday) {
      speed -= 5; // If it's your birthday, subtract 5 from the speed.
    }
  
    if (speed <= 60) {
      return 0; // If speed is 60 or less, return 0 (no ticket).
    } else if (speed >= 61 && speed <= 80) {
      return 1; // If speed is between 61 and 80 (inclusive), return 1 (small ticket).
    } else {
      return 2; // If speed is 81 or more, return 2 (big ticket).
    }
  }
  console.log(caught_speeding(60, false)); // 0
  console.log(caught_speeding(65, false)); // 1
  console.log(caught_speeding(65, true));  // 0
  