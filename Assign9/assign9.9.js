// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const a = { name: "Raj" };
const b = { age: 30 };

console.log(mergeObjects(a, b)); // { name: "Raj", age: 30 }
