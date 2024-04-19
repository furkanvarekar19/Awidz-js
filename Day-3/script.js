var num = 50;
{
  console.log(num);
}

{
  var num1 = 20;
}
console.log(num1);

let num2 = 55;
{
  {
    num2 = 25;
    console.log(num2);
  }
}

// testing hositing
num3 = 40;
{
  console.log(num3);
}
var num3

//testing block scope

const myName = "furkan";
{
  {
    console.log(myName);
  }
}
console.log(myName);


{
  let myName1 = "furkan";
  {
    let myName1 = "furkan";
  }
}

console.log(myName1);