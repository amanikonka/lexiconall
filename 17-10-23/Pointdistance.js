class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(point1, point2) {
      const dx = point1.x - point2.x;
      const dy = point1.y - point2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }
  
  // Example usage:
  let p1 = new Point(5, 5);
  let p2 = new Point(9, 8);
  console.log(Point.distance(p1, p2));
  