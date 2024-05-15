// console.log("Before settimeout");

// setTimeout(() => {
//   console.log("Inside setTimeout handler.");
// }, 5000);

// console.log("After settimeout");

// setInterval(() => {
//   console.log("Inside set interval.");
// }, 5000);


// Event Loop
console.log("Before");

setTimeout(() => {
  console.log("setTimeout");
}, 5000);

console.log("After");