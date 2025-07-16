
// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log(getObjectKeys({ name: "Amit", age: 25, city: "Delhi" }));
// ["name", "age", "city"]
