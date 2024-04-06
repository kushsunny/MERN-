function addition(a,b,c,d){
    console.log(a+b+c+d); 
}
addition(1,2,3,4);

function multi(a,b,c,d){
    console.log(a*b*c*d);
}
multi(1,2,3,4);


function ram(x,y){
    console.log(x+y);
}
ram(10,10);


//       ----------  Returning Function Statement  --------

function anm(x,y){
    return x+y;
}
let sum=anm(20,20); 
console.log(sum)


function value(x,y){
    return x+y; 
}
let result=value(5,5);
console.log(result);
for(let i=1; i<=result; i++){
    console.log(i,"x Times Print Hellow Result");
}

function ram(a,b){
    return a+b; 
}
let ans1=ram(10,3);  
console.log(ans1);

function shyam(x){
    return x*5;
}
let ans2=shyam(ans1);  
console.log(ans2)

function raju(y){
    return y/10;
}
let ans3=raju(ans2);
console.log(ans3)

function baburao(z){
    return z-20; 
}
let ans4=baburao(ans3);

console.log(ans4)