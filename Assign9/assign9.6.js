// Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
const person = {
  name: "Shrikant",
  age: 22,
  occupation: "Developer"
};

function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}. I am ${p.age} years old and I work as a ${p.occupation}.`);
}

greetPerson(person);
// Output: Hello, my name is Rahul. I am 22 years old and I work as a Developer.
