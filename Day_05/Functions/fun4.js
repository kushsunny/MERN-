// function product(...arr){

//     let sum=0; 
//     for(let i=0; i<=arr.length-1; i++){
//         sum+=arr[i];
//     }
//     console.log(sum);
// }
// product(1,2,3,4,5,6,7,8,9)


// function check(num){
//         if(num%3==0){
//             return "True"; 
//         }else{
//             return "False";
//         }
// }
// let result=check(31); 
// console.log(result)

function check(num){
for(let i=1; i<=100; i++){
    if(i%num==0){
        console.log(i,"is Divisible by =",num);
    }
}
}
check(3);











