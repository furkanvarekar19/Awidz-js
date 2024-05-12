// var number = 4;
// while(number<=24){
//     console.log(number);
//     number += 3;
// }


// var number = 10;
// while(number>0){
//     console.log(number);
//     number --;
// }


// Binary search

var number = [1,2,3,4,5,6,7,8,9,10]
var target = 2;
function BinarySearch(array,target){
    const midddleIndex = Math.floor(array.length / 2);
    console.log(midddleIndex);
    if(target == array[midddleIndex]){
        console.log(midddleIndex);

    }
}

BinarySearch(number,target);