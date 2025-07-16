//Write your code here
function createDiv(width, height, text) {
const container = document.getElementById("container");

  const newDiv = document.createElement("div");
  newDiv.style.width = width + "px";
  newDiv.style.height = height + "px";
  newDiv.textContent = text;

  container.appendChild(newDiv);
    
}
createDiv(200, 100, "Hello World");
createDiv(200, 100, "Hello");
createDiv(200, 100, "Hello shrikant");



// Do not change this code
Window.createDiv = createDiv;