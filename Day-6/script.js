var animals = "Elephant";

switch (animals) {
  case "Tiger":
    console.log("The animals is watermelon.");
    break;
  case "Dog":
    console.log("The animals is Dog.");
    break;
  case "Lion":
    console.log("The animals is Lion.");
    break;
    case "Elephant":
     console.log("The animals is Elephant.");
    break
  default:
    console.log("animals not exist.");
}

var first = 10;
var second = 20;
var third = 30;

console.log(first>second);
console.log(first>third);
console.log(second>third);

console.log(30>20 && 20>10 && 13>10); //&& oprator all value true then  return true any one false return false
console.log(10>20 || 45>10 || 3>11);  



function CheckNumber() {
    const number = document.getElementById("number").value;

    if (!number ) {
      alert("Please Enter your Age.");
    } else if (number >= 18) {
      alert(`your age perfect you allows driving licence `);
    } else {
      alert(`your age not allows to driving licence`);
    }
  }