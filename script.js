// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to greet with the person's name and age
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
    }
}

// Define the Employee class that extends the Person class
class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the constructor of the Person class
        super(name, age);
        this.jobTitle = jobTitle;
    }

    // Method to greet with the person's name, age, and job title
    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
    }
}

// Example Test Cases
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); 
