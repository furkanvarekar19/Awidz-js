let playerDetails = {
    name : "rohit",
    age : 35,
    location : "mumbai",
    CurrentlyPlaying : true,
    franchinse : [
        "Deccan chargers",
        "mumbai indians",
        ["2008", "2012" , "2024"],
    ],
    highScores : {inT20 :121, inOdi : 264,inTest :212},
};
// console.log(playerDetails);

// console.log(playerDetails.highScores);
// console.log(playerDetails.franchinse);
// console.log(playerDetails.location);
// console.log(playerDetails.highScores.inOdi);
// console.log(playerDetails["name"]);
// console.log(playerDetails["age"]);
// console.log(playerDetails["franchinse"].length);


// const subArray = playerDetails.franchinse[2];
// console.log(subArray[2]);

// for(var i = 0; i<subArray.length; i++){
//     if(subArray[i]== "2012"){
//         console.log(i);
//     }
// }

const keys = Object.keys(playerDetails);
console.log(keys);
const values = Object.values(playerDetails) 
    console.log(values);

    for(let key in playerDetails){
        console.log(key,playerDetails[key]);
    }




