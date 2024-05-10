// map update a array create new array
var array1 = [1,2,3,4,5];
var output = array1.map((elem)=> elem*2);
console.log(array1);
console.log(output);

// forech 
const array2 = ['a', 'b', 'c'];
array2.forEach((element) => console.log(element));

//include

const array3 = [1,2,3,4]
console.log(array3.includes(5));

//index of return  index

 let array4 = [1,2,3,4,5,6]
 console.log(array4.indexOf(4));

//reduce use addition of all array element

  let array5 = [1,3,4,8,12,20,30]
  let inital = 0;
  let sum = array5.reduce((accumtion,currentvalue)=>accumtion + currentvalue);
  console.log(sum);

//find the number greater than 10 using find()

let array6 = [1,3,7,19,23]
let result = array6.find((element)=> element>10)
console.log(result);

//concat two aaray 

var aray7 = [1,2,3]
var aray8 = [4,5,6]
var newaray = aray7.concat(aray8)
console.log(newaray);

//filter 

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = words.filter((word) => word.length > 6);

console.log(result1);

// shift()

const array8 = [1, 2, 3];

const firstElement = array8.shift();

console.log(array8);
console.log(firstElement);

