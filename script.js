// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Define the Employee class that extends Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the parent class constructor
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Example Test Cases

// Create an instance of Person
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old.

// Create an instance of Employee
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
describe('Person and Employee Classes', () => {
    it('should correctly greet as a person', () => {
        const person = new Person("Alice", 25);
        cy.spy(console, 'log');
        person.greet();
        expect(console.log).to.be.calledWith('Hello, my name is Alice, I am 25 years old.');
    });

    it('should correctly greet as an employee', () => {
        const employee = new Employee("Bob", 30, "Manager");
        cy.spy(console, 'log');
        employee.jobGreet();
        expect(console.log).to.be.calledWith('Hello, my name is Bob, I am 30 years old, and my job title is Manager.');
    });
});

