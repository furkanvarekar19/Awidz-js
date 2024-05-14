var numbers = [1,2,3,4,5,6,7,8,9,10];
var target = 10;

function binarySearch(array,target){
 var left = 0; //0 5 8 9
var right = array.length -1; //9

while (left<=right) {  // 0<=9 true || 5<=9 true || 8<=9 true || 9<=9 true
    var midIndex = Math.floor((left + right)/2);  // 4 7 8 9
    console.log(midIndex,"midIndex",array[midIndex]); //4,5 ||7,8||8,9||9,10
    if(array[midIndex] === target){ //5==10 false || 8==10 false || 9==10 false
        return midIndex
    }
    else if(array[midIndex]<target){  // 4+1=5<10 true|| // 7+1=8<10 true ||// 8+1=9<10 true
        console.log(array[midIndex],target, "element is lesser than target");
        left = midIndex + 1;
    }
    else if(array[midIndex]>target){
        console.log(array[midIndex],target, "element is greater than target");
        right = midIndex - 1;
    }  
}
}
let result = binarySearch(numbers,target);
console.log(result);
