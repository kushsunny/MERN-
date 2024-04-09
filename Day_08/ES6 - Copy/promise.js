// modle version of javaScript // 

let age=2;
const info=new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("You can vote"); 
    }else{
        reject("Your can't vote");
    }
});
info.then(result=>console.log(result)).catch(error=>console.log(error));

// console.log(info)

// asynic a wait always used in a functio  this is oldest method or promise 

const resultinfo=async ()=>{
    try{
        let result=await info; 
    console.log(result);
    }catch(error){
        console.log(error);
    }
}
resultinfo();