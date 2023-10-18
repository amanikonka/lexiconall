class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    set diameter(newDiameter) {
      this.radius = newDiameter / 2;
    }
  
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Example usage:
  let c = new Circle(2);
  console.log(`Radius: ${c.radius}`);
  console.log(`Diameter: ${c.diameter}`);
  console.log(`Area: ${c.area()}`);
  