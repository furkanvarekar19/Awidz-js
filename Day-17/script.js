// Promise
// function getData() {
//     // console.log("Inside function")
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const result = true; 
//         if (result) {
//           resolve("Data successfully recevied.");
//         } else {
//           reject("Failed.");
//         }
//       }, 4000);
//     });
//   }
  
//   getData()
//     .then((response) => {
//       console.log(response, "response");
//     })
//     .catch((error) => {
//       console.error(error, "error");
//     });

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = true;
            if(result){
          resolve("Data successfully recevied.");
             
            }else{
                reject("Failed");
            }

        },3000)
    })

}

getData()
.then((response) =>{
  console.log(response, "response");

})
.catch((error) =>{
    console.log(error, "error");

})