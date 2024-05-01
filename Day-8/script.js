// for(let num = 1; num<=10; num++){
//     console.log(num);
// }

// for (var i = 45; i > 10; i--){
//     console.log(i);
// }

// Q. Print reversae number from given array, use for loop .


// var array = [1, 2, 4, 45, 5, 6, 7];

// for(var i = 0; i < array.length; i++){
// console.log(i);
// }

// for (var i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }


// Q . find addition of numbers from array who are odd

// var array = [1, 2, 4, 10, 6, 86, 7, 4, 92];
// array[0]
// var count = 0; 
// for (var i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 1) {
//     count += array[i];
//      console.log(`The number ${array[i]} is odd`);
//   }
//   i++
// }

// console.log(count, "count");

// Q. Given an array find name of student whose lenght is more than 5.

var findName = ["furkan", "dhoni", "virat", "varekar"];

for (var i = 0; i < findName.length; i++) {
  if (findName[i].length > 5) {
    console.log(findName[i]);
  }
}