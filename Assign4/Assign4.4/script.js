// javascript code goes here
const text = document.getElementById("text-container");

// 1. Change text color on button click
document.getElementById("colorchange").addEventListener("click", () => {
  const color = document.getElementById("colorbox").value;
  text.style.color = color;
});

// 2. Change font size using slider
document.getElementById("fontsize").addEventListener("input", (e) => {
  text.style.fontSize = e.target.value + "px";
});

// 3. Toggle Italic
document.getElementById("italic").addEventListener("click", () => {
  text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
});

// 4. Toggle Underline
document.getElementById("underline").addEventListener("click", () => {
  text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
});

// 5. Toggle Bold
document.getElementById("bold").addEventListener("click", () => {
  text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

// 6. Change font-family from dropdown
document.getElementById("list").addEven
