// local scope and global scope of a function 

// let pm="modi ji";   //Global variable 

// function s1(){
//     let s="sunny"; 
//     console.log(s);
// }
// s1();
// function s2(){
//     let r="rishi"; 
//     console.log(r);
// }
// s2();
// function s3(){
//     let a="aman"; 
//     console.log(pm);
// }
// s3();
// function s4(){
//     let m="amit"; 
//     console.log(m);
// }
// s4();

let count=0; 
function check(num){
    if(num%2==1&&num%num==0){
       return count++;
    }
   
}
let value=check(5);

if(value==2){
    console.log("Number",num,"is prime");
}