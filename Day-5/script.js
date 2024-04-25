

function CheckNumber() {
  const number = document.getElementById("number").value;
  console.log(number, "number");
  if (!number) {
    alert("Please Enter number.");
  } else if (number % 2 === 0) {
    alert(`Number ${number} is Even.`);
  } else {
    alert(`Number ${number} is Odd.`);
  }
}