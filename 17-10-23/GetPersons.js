class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }
  
  function createPersonArray() {
    const people = [
      new Person('Maria', 'Petterson', 22, 'mp@gmail.com'),
      new Person('John', 'Doe', 30, 'john.doe@gmail.com'),
      new Person('Anna', 'Smith', 25, 'anna.smith@gmail.com'),
    ];
  
    return people;
  }
  
  // Example usage:
  const peopleArray = createPersonArray();
  console.log(peopleArray.map(person => person.toString()));
  