let arr=[1,2,3,4,5,6,7,8];
let sum=0; 
function addition(arr){
    for(let i=0; i<=arr.length-1; i++){
        sum+=arr[i];
    }
}
addition(arr);
console.log(sum)