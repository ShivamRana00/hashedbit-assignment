// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
function modifyArray(arr) {
    arr.push("new"); // add new element
    arr.pop();       // remove last element
    return arr;      // return modified array
}

const result = modifyArray(["apple", "banana"]);
console.log(result); // ["apple", "banana"]
