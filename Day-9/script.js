// count = 0;
// array = [1,2,3,4,5,6];
// target = 5;
// console.log(array);
// for(var i = 0; i<array.length; i++){
//  console.log(array[i]);
// }

// count = 0;
// array = [1,2,3,4,5,6];
// target = 5;
// console.log(array);
// for(var i = 0; i<array.length; i++){
//    for(var j = i+1; j<array.length; j++){
//    console.log("Inner loop.");
//    }
// }

// count = 0;
// array = [1,2,3,4,5,6];
// target = 5;
// console.log(array);
// for(var i = 0; i<array.length; i++){
//    for(var j = i+1; j<array.length; j++){
// //    console.log("Inner loop.");
//      count++
//    }
// }
// console.log("count", count);


// count=0;
// array=[1,2,3,4,5,6];
// target=5;
// console.log(array);

// for(var i=0; i<array.length; i++) {

//    for(var j=i+1;j<array.length; j++) {
//    console.log(array[i],"+", array[j], "=", array[i] + array[j]);
//    }

// }

// Q Given an array, find two numbers whose addition is target.

var array = [1, 2, 3, 4, 5, 6 ];
var target = 5;
console.log(array);
var count = 0;
for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) { 
    console.log(array[i], "+", array[j], "=", array[i] + array[j]);

  }
}